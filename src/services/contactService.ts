import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

type ContactInsert = Database["public"]["Tables"]["contacts"]["Insert"];

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  plan?: string;
  message: string;
}

export const contactService = {
  async submitContact(data: ContactFormData) {
    console.log("=== CONTACT FORM SUBMISSION START ===");
    console.log("Form data:", data);

    const insertData = {
      name: data.name,
      email: data.email,
      company: data.company || null,
      plan: data.plan || null,
      message: data.message,
    };

    console.log("Supabase insert data:", insertData);

    // Step 1: Save to database
    const { data: result, error } = await supabase
      .from("contacts")
      .insert(insertData)
      .select()
      .single();

    console.log("Supabase response:", { data: result, error });

    if (error) {
      console.error("❌ Contact submission error:", error);
      console.error("Error details:", {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
      });
      throw new Error(`Failed to submit contact form: ${error.message}`);
    }

    console.log("✅ Contact submitted successfully:", result);

    // Step 2: Send email notification via Edge Function
    try {
      console.log("Calling Edge Function to send email notification...");
      const { data: emailResult, error: emailError } = await supabase.functions.invoke(
        "send-contact-notification",
        {
          body: {
            name: data.name,
            email: data.email,
            company: data.company || null,
            plan: data.plan || null,
            message: data.message,
            created_at: result.created_at,
          },
        }
      );

      if (emailError) {
        console.error("⚠️ Email notification error:", emailError);
        // Don't throw - contact is saved, email is just a bonus
      } else {
        console.log("✅ Email notification sent:", emailResult);
      }
    } catch (emailErr) {
      console.error("⚠️ Failed to send email notification:", emailErr);
      // Don't throw - contact is saved, that's what matters
    }

    console.log("=== CONTACT FORM SUBMISSION END ===");
    
    return result;
  },
};