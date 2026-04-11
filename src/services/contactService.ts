import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

type ContactInsert = Database["public"]["Tables"]["contacts"]["Insert"];

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  platform?: string;
  plan?: string;
  message: string;
}

export const contactService = {
  async submitContact(data: ContactFormData) {
    console.log("=== CONTACT FORM SUBMISSION START ===");
    console.log("Form data:", data);

    try {
      // 1. Save to database
      const { data: savedContact, error: dbError } = await supabase
        .from("contacts")
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company || null,
          platform: data.platform || null,
          plan: data.plan || null,
          message: data.message,
        })
        .select()
        .single();

      console.log("Supabase response:", { data: savedContact, error: dbError });

      if (dbError) {
        console.error("❌ Contact submission error:", dbError);
        console.error("Error details:", {
          message: dbError.message,
          code: dbError.code,
          details: dbError.details,
          hint: dbError.hint,
        });
        throw new Error(`Failed to submit contact form: ${dbError.message}`);
      }

      console.log("✅ Contact submitted successfully:", savedContact);

      // Step 2: Send email notification via Edge Function
      try {
        console.log("Calling Edge Function to send email notification...");
        const { data: emailData, error: emailError } = await supabase.functions.invoke(
          "send-contact-notification",
          {
            body: {
              name: data.name,
              email: data.email,
              phone: data.phone,
              company: data.company,
              platform: data.platform,
              plan: data.plan,
              message: data.message,
              created_at: savedContact.created_at,
            },
          }
        );

        if (emailError) {
          console.error("⚠️ Email notification error:", emailError);
          // Don't throw - contact is saved, email is just a bonus
        } else {
          console.log("✅ Email notification sent:", emailData);
        }
      } catch (emailErr) {
        console.error("⚠️ Failed to send email notification:", emailErr);
        // Don't throw - contact is saved, that's what matters
      }

      console.log("=== CONTACT FORM SUBMISSION END ===");
      return savedContact;
    } catch (err) {
      console.error("⚠️ Failed to submit contact form:", err);
      throw err;
    }
  },
};