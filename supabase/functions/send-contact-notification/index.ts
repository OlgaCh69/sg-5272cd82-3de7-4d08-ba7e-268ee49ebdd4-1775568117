import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

serve(async (req) => {
  try {
    const { name, email, company, plan, message, created_at } = await req.json();

    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    // Send email via Resend
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: ["support@onetechautomation.com"],
        subject: `New Contact Form: ${name}${plan ? ` - ${plan}` : ""}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              ${company ? `<p style="margin: 10px 0;"><strong>Company:</strong> ${company}</p>` : ""}
              ${plan ? `<p style="margin: 10px 0;"><strong>Plan:</strong> ${plan}</p>` : ""}
              <p style="margin: 10px 0;"><strong>Message:</strong></p>
              <p style="background: white; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message}</p>
              <p style="margin: 10px 0; font-size: 12px; color: #666;"><strong>Submitted:</strong> ${new Date(created_at).toLocaleString()}</p>
            </div>
            
            <p style="color: #666; font-size: 12px;">Reply to this email to respond directly to ${email}</p>
          </div>
        `,
        reply_to: email,
      }),
    });

    if (!emailResponse.ok) {
      const error = await emailResponse.text();
      throw new Error(`Resend API error: ${error}`);
    }

    const data = await emailResponse.json();

    return new Response(
      JSON.stringify({ success: true, email_id: data.id }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});