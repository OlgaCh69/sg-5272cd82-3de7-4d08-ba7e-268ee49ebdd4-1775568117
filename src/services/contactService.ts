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
    const { data: result, error } = await supabase
      .from("contacts")
      .insert({
        name: data.name,
        email: data.email,
        company: data.company || null,
        plan: data.plan || null,
        message: data.message,
      })
      .select()
      .single();

    if (error) {
      console.error("Contact submission error:", error);
      throw new Error("Failed to submit contact form. Please try again.");
    }

    return result;
  },
};