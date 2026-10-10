import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const {
      property_type,
      rooms,
      number_of_properties,
      country,
      selected_challenges,
      top_priorities,
      impact,
      urgency,
      current_pms,
      existing_tools,
      integration_challenges,
      current_ai,
      full_name,
      position,
      hotel_group,
      email,
      contact_country,
      phone,
      comments,
      marketing_consent,
    } = body;

    console.log("Received hotel assessment notification:", { hotel_group, email });

    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set");
    }

    // Format challenges list
    const challengesList = selected_challenges?.length > 0
      ? selected_challenges.map((c: string) => `• ${c}`).join('<br>')
      : 'None specified';

    // Format priorities list
    const prioritiesList = top_priorities?.length > 0
      ? top_priorities.map((p: string, i: number) => `${i + 1}. ${p}`).join('<br>')
      : 'None specified';

    // Format impact areas
    const impactList = impact?.length > 0
      ? impact.map((i: string) => `• ${i}`).join('<br>')
      : 'None specified';

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
        subject: `New Hotel Assessment Lead — ${hotel_group}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; background: #f9f9f9; padding: 20px;">
            <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              
              <h1 style="color: #00B67A; margin: 0 0 10px 0; font-size: 24px; border-bottom: 3px solid #00B67A; padding-bottom: 15px;">
                New Hotel Assessment Lead
              </h1>
              <p style="color: #666; font-size: 14px; margin: 0 0 30px 0;">
                Submitted: ${new Date().toLocaleString('en-US', { 
                  timeZone: 'UTC', 
                  dateStyle: 'long', 
                  timeStyle: 'short' 
                })} UTC
              </p>

              <!-- Contact Information -->
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h2 style="color: #333; font-size: 18px; margin: 0 0 15px 0; border-bottom: 2px solid #ddd; padding-bottom: 8px;">
                  Contact Information
                </h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold; width: 150px;">Name:</td>
                    <td style="padding: 8px 0; color: #333;">${full_name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold;">Position:</td>
                    <td style="padding: 8px 0; color: #333;">${position}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold;">Hotel/Group:</td>
                    <td style="padding: 8px 0; color: #333; font-weight: bold; font-size: 16px;">${hotel_group}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold;">Email:</td>
                    <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #00B67A; text-decoration: none;">${email}</a></td>
                  </tr>
                  ${phone ? `
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold;">Phone:</td>
                    <td style="padding: 8px 0; color: #333;">${phone}</td>
                  </tr>
                  ` : ''}
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold;">Country:</td>
                    <td style="padding: 8px 0; color: #333;">${contact_country}</td>
                  </tr>
                </table>
              </div>

              <!-- Property Details -->
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h2 style="color: #333; font-size: 18px; margin: 0 0 15px 0; border-bottom: 2px solid #ddd; padding-bottom: 8px;">
                  Property Details
                </h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold; width: 150px;">Property Type:</td>
                    <td style="padding: 8px 0; color: #333;">${property_type}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold;">Number of Rooms:</td>
                    <td style="padding: 8px 0; color: #333;">${rooms}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold;">Properties:</td>
                    <td style="padding: 8px 0; color: #333;">${number_of_properties}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold;">Location:</td>
                    <td style="padding: 8px 0; color: #333;">${country}</td>
                  </tr>
                </table>
              </div>

              <!-- Operational Challenges -->
              <div style="background: #fff8f0; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #ff9500;">
                <h2 style="color: #333; font-size: 18px; margin: 0 0 15px 0; border-bottom: 2px solid #ffe0b3; padding-bottom: 8px;">
                  Operational Challenges (${selected_challenges?.length || 0} areas)
                </h2>
                <div style="color: #555; line-height: 1.8; font-size: 14px;">
                  ${challengesList}
                </div>
              </div>

              <!-- Top 3 Priorities -->
              <div style="background: #fff0f0; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #e53935;">
                <h2 style="color: #333; font-size: 18px; margin: 0 0 15px 0; border-bottom: 2px solid #ffcdd2; padding-bottom: 8px;">
                  Top 3 Priorities
                </h2>
                <div style="color: #555; line-height: 1.8; font-size: 14px; margin-bottom: 15px;">
                  ${prioritiesList}
                </div>
                <table style="width: 100%; margin-top: 15px;">
                  <tr>
                    <td style="padding: 5px 0; color: #666; font-weight: bold; width: 120px;">Impact Areas:</td>
                    <td style="padding: 5px 0; color: #555;">
                      <div style="line-height: 1.6;">${impactList}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0; color: #666; font-weight: bold;">Urgency:</td>
                    <td style="padding: 5px 0; color: #555;">${urgency || 'Not specified'}</td>
                  </tr>
                </table>
              </div>

              <!-- Current Technology -->
              ${current_pms || existing_tools || integration_challenges || current_ai ? `
              <div style="background: #f0f7ff; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #2196F3;">
                <h2 style="color: #333; font-size: 18px; margin: 0 0 15px 0; border-bottom: 2px solid #bbdefb; padding-bottom: 8px;">
                  Current Technology Stack
                </h2>
                <table style="width: 100%;">
                  ${current_pms ? `
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold; width: 180px; vertical-align: top;">PMS:</td>
                    <td style="padding: 8px 0; color: #555;">${current_pms}</td>
                  </tr>
                  ` : ''}
                  ${existing_tools ? `
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold; vertical-align: top;">Other Tools:</td>
                    <td style="padding: 8px 0; color: #555; white-space: pre-wrap;">${existing_tools}</td>
                  </tr>
                  ` : ''}
                  ${integration_challenges ? `
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold; vertical-align: top;">Integration Challenges:</td>
                    <td style="padding: 8px 0; color: #555; white-space: pre-wrap;">${integration_challenges}</td>
                  </tr>
                  ` : ''}
                  ${current_ai ? `
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold; vertical-align: top;">Current AI Usage:</td>
                    <td style="padding: 8px 0; color: #555;">${current_ai}</td>
                  </tr>
                  ` : ''}
                </table>
              </div>
              ` : ''}

              <!-- Additional Comments -->
              ${comments ? `
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h2 style="color: #333; font-size: 18px; margin: 0 0 15px 0; border-bottom: 2px solid #ddd; padding-bottom: 8px;">
                  Additional Comments
                </h2>
                <p style="color: #555; line-height: 1.6; white-space: pre-wrap; margin: 0;">${comments}</p>
              </div>
              ` : ''}

              <!-- Marketing Consent -->
              <div style="background: #f9f9f9; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
                <p style="margin: 0; color: #666; font-size: 13px;">
                  <strong>Marketing Consent:</strong> ${marketing_consent ? '✅ Yes, opted in for updates' : '❌ No'}
                </p>
              </div>

              <!-- Footer -->
              <div style="border-top: 2px solid #e0e0e0; padding-top: 20px; margin-top: 30px;">
                <p style="color: #666; font-size: 13px; margin: 0 0 10px 0;">
                  <strong>Next Steps:</strong>
                </p>
                <ul style="color: #666; font-size: 13px; margin: 0; padding-left: 20px;">
                  <li>Review the assessment details above</li>
                  <li>Prepare customized recommendations for ${hotel_group}</li>
                  <li>Contact ${full_name} within 2 business days via email or phone</li>
                </ul>
                <p style="color: #999; font-size: 12px; margin: 20px 0 0 0; font-style: italic;">
                  Reply to this email to respond directly to ${full_name} at ${email}
                </p>
              </div>

            </div>
          </div>
        `,
        reply_to: email,
      }),
    });

    if (!emailResponse.ok) {
      const error = await emailResponse.text();
      throw new Error(`Resend API error: ${error}`);
    }

    const emailData = await emailResponse.json();

    return new Response(
      JSON.stringify({ success: true, emailId: emailData.id }),
      { 
        status: 200, 
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        } 
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        } 
      }
    );
  }
});