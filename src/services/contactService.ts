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
    console.log("=== CONTACT FORM SUBMISSION END ===");
    
    return result;
  },
};