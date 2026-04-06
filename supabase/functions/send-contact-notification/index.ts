import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

serve(async (req) => {
  try {
    const { name, email, company, plan, message, created_at } = await req.json();

    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    // Email template with contact details
    const emailBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%); color: #00FF9D; padding: 30px; text-align: center; border-radius: 12px 12px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #555; margin-bottom: 5px; }
            .value { background: white; padding: 12px; border-radius: 8px; border: 1px solid #e0e0e0; }
            .badge { display: inline-block; background: #00FF9D; color: #0a0a0a; padding: 6px 12px; border-radius: 6px; font-weight: bold; font-size: 14px; }
            .footer { background: #f0f0f0; padding: 20px; text-align: center; border-radius: 0 0 12px 12px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🚀 New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; color: #ccc;">O.N.E.Tech - Contact Notification</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #00FF9D; text-decoration: none;">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">🏢 Company</div>
                <div class="value">${company || "Not provided"}</div>
              </div>
              
              <div class="field">
                <div class="label">📦 Interested Plan</div>
                <div class="value"><span class="badge">${plan}</span></div>
              </div>
              
              <div class="field">
                <div class="label">💬 Message</div>
                <div class="value">${message}</div>
              </div>
              
              <div class="field">
                <div class="label">📅 Submitted At</div>
                <div class="value">${new Date(created_at).toLocaleString()}</div>
              </div>
            </div>
            <div class="footer">
              <p>This is an automated notification from your O.N.E.Tech contact form.</p>
              <p>Reply directly to the customer at <a href="mailto:${email}" style="color: #00FF9D;">${email}</a></p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email via Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "O.N.E.Tech Notifications <onboarding@resend.dev>", // Change this after domain verification
        to: ["hello@onetechautomation.com"], // Your notification email
        subject: `New Contact Form: ${name} - ${plan} Plan`,
        html: emailBody,
        reply_to: email, // User can reply directly to the customer
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Resend API error: ${error}`);
    }

    const data = await response.json();

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