import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | OneTech Automation"
        description="OneTech Automation Privacy Policy - Learn how we collect, use, and protect your personal data."
        url="https://onetechautomation.com/privacy-policy"
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-foreground/70">
                Last Updated: 26.01.2026
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
              <div className="bg-muted/30 p-6 rounded-lg border border-border mb-8">
                <p className="text-foreground/80 mb-0">
                  <strong>OneTech Automation</strong> ("we", "our", or "us") operates the website{" "}
                  <Link href="/" className="text-primary hover:underline">
                    https://onetechautomation.com
                  </Link>{" "}
                  and provides AI-powered chatbot and automation services for ecommerce businesses.
                </p>
                <p className="text-foreground/80 mt-4 mb-0">
                  We are committed to protecting your privacy and handling your personal data in a transparent and secure manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                <p className="text-foreground/80 mb-4">We collect the following types of information:</p>
                
                <h3 className="text-2xl font-semibold text-foreground mb-3">a. Personal Information</h3>
                <p className="text-foreground/80 mb-3">When you register, contact us, or use our services, we may collect:</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Business name</li>
                  <li>Billing and payment details</li>
                  <li>Account login credentials</li>
                  <li>Any other information you voluntarily provide</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mb-3">b. Technical & Usage Data</h3>
                <p className="text-foreground/80 mb-3">We may automatically collect:</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent</li>
                  <li>Referral URLs</li>
                  <li>Cookies and tracking data</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mb-3">c. Customer Data (Processed on Your Behalf)</h3>
                <p className="text-foreground/80">
                  As part of our services (chatbots, messaging automation), we may process data of your customers. In this case, you are the data controller and we act as a data processor.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                <p className="text-foreground/80 mb-3">We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Process transactions and manage billing</li>
                  <li>Communicate with you (support, updates, notifications)</li>
                  <li>Improve and personalize user experience</li>
                  <li>Analyze performance and usage trends</li>
                  <li>Prevent fraud and ensure platform security</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">3. Cookies and Tracking Technologies</h2>
                <p className="text-foreground/80 mb-3">We use cookies and similar technologies to:</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                  <li>Enhance website functionality</li>
                  <li>Analyze traffic and user behavior</li>
                  <li>Improve marketing and user experience</li>
                </ul>
                <p className="text-foreground/80">
                  You can control cookies through your browser settings. Disabling cookies may affect certain features of our website.
                </p>
              </div>

              {/* Section 4 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">4. Sharing of Information</h2>
                <p className="text-foreground/80 mb-3">
                  We do <strong>not sell your personal data</strong>. We may share information with trusted third parties, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                  <li>Payment processors (e.g., Stripe)</li>
                  <li>Cloud hosting and infrastructure providers</li>
                  <li>Analytics services (e.g., Google Analytics)</li>
                  <li>Messaging platforms (e.g., WhatsApp, Instagram, Telegram APIs)</li>
                  <li>Customer support tools</li>
                  <li>Legal authorities when required</li>
                </ul>
                <p className="text-foreground/80">
                  These parties only access data necessary to perform their services.
                </p>
              </div>

              {/* Section 5 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">5. Data Retention</h2>
                <p className="text-foreground/80 mb-3">We retain your personal data only as long as necessary to:</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                  <li>Provide our services</li>
                  <li>Fulfill contractual obligations</li>
                  <li>Resolve disputes</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
                <p className="text-foreground/80">
                  When no longer required, data is securely deleted or anonymized.
                </p>
              </div>

              {/* Section 6 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">6. Data Security</h2>
                <p className="text-foreground/80 mb-3">
                  We implement appropriate technical and organizational measures to protect your data, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                  <li>Encryption</li>
                  <li>Secure servers</li>
                  <li>Access controls</li>
                </ul>
                <p className="text-foreground/80">
                  However, no method of transmission over the internet is completely secure.
                </p>
              </div>

              {/* Section 7 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">7. Your Rights (GDPR & International Users)</h2>
                <p className="text-foreground/80 mb-3">Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Restrict or object to processing</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="text-foreground/80">
                  To exercise your rights, contact us at the email below.
                </p>
              </div>

              {/* Section 8 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">8. International Data Transfers</h2>
                <p className="text-foreground/80">
                  Your information may be transferred to and processed in countries outside your jurisdiction. We ensure appropriate safeguards are in place to protect your data in compliance with applicable laws (such as GDPR).
                </p>
              </div>

              {/* Section 9 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">9. Third-Party Services</h2>
                <p className="text-foreground/80 mb-3">Our services integrate with third-party platforms such as:</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                  <li>Payment providers (Stripe)</li>
                  <li>Messaging platforms (WhatsApp, Instagram, Telegram)</li>
                  <li>Analytics tools</li>
                </ul>
                <p className="text-foreground/80">
                  We are not responsible for the privacy practices of these third parties. Please review their policies separately.
                </p>
              </div>

              {/* Section 10 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">10. Children's Privacy</h2>
                <p className="text-foreground/80">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal data from children. If such data is identified, we will delete it promptly.
                </p>
              </div>

              {/* Section 11 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">11. Changes to This Privacy Policy</h2>
                <p className="text-foreground/80">
                  We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date. Continued use of our services constitutes acceptance of the updated policy.
                </p>
              </div>

              {/* Section 12 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">12. Contact Information</h2>
                <p className="text-foreground/80 mb-3">
                  If you have any questions about this Privacy Policy or your data, please contact us:
                </p>
                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                  <p className="text-foreground/80 mb-2"><strong>OneTech Automation</strong></p>
                  <p className="text-foreground/80 mb-2">
                    Website:{" "}
                    <Link href="/" className="text-primary hover:underline">
                      https://onetechautomation.com
                    </Link>
                  </p>
                  <p className="text-foreground/80">
                    Email:{" "}
                    <a href="mailto:support@onetechautomation.com" className="text-primary hover:underline">
                      support@onetechautomation.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Section 13 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">13. Compliance Statement</h2>
                <p className="text-foreground/80">
                  This Privacy Policy is designed to align with general data protection regulations, including GDPR principles, and is suitable for SaaS platforms and payment processor requirements such as Stripe.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}