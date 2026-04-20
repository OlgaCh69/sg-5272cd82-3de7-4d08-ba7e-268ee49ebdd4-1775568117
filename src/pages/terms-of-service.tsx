import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service | OneTech Automation"
        description="OneTech Automation Terms of Service - Read our terms and conditions for using our AI chatbot and automation platform."
        url="https://onetechautomation.com/terms-of-service"
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Terms of Service
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
                  These Terms of Service ("Terms") govern your access to and use of the services provided by{" "}
                  <strong>OneTech Automation</strong> ("Company", "we", "our", or "us"), operating the website{" "}
                  <Link href="/" className="text-primary hover:underline">
                    https://onetechautomation.com
                  </Link>{" "}
                  and related AI-powered chatbot and automation services for ecommerce businesses.
                </p>
                <p className="text-foreground/80 mt-4 mb-0">
                  By accessing or using our services, you agree to be bound by these Terms. If you do not agree, you may not use our services.
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-foreground/80 mb-4">
                  By creating an account, accessing our platform, or using any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our{" "}
                  <Link href="/privacy-policy" className="text-primary hover:underline font-semibold">
                    Privacy Policy
                  </Link>.
                </p>
                <p className="text-foreground/80">
                  If you are using our services on behalf of a business or organization, you represent that you have the authority to bind that entity to these Terms.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">2. Service Description</h2>
                <p className="text-foreground/80 mb-3">
                  OneTech Automation provides AI-powered chatbot and automation software designed for ecommerce businesses, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                  <li>Messaging automation across WhatsApp, Instagram, and Telegram</li>
                  <li>AI chatbots for customer engagement and sales</li>
                  <li>Customer support automation</li>
                  <li>Abandoned cart recovery systems</li>
                  <li>Sales funnel automation</li>
                  <li>Multi-channel communication management</li>
                </ul>
                <p className="text-foreground/80">
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time with or without notice.
                </p>
              </div>

              {/* Section 3 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">3. User Accounts and Responsibilities</h2>
                
                <h3 className="text-2xl font-semibold text-foreground mb-3">a. Account Creation</h3>
                <p className="text-foreground/80 mb-3">To use our services, you must:</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                  <li>Provide accurate and complete information during registration</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Be at least 18 years old or the legal age of majority in your jurisdiction</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mb-3">b. Account Security</h3>
                <p className="text-foreground/80 mb-6">
                  You are responsible for all activities that occur under your account. You must notify us immediately of any unauthorized access or security breach.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-3">c. Account Restrictions</h3>
                <p className="text-foreground/80 mb-3">You may not:</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li>Share your account credentials with others</li>
                  <li>Create multiple accounts to circumvent restrictions</li>
                  <li>Use automated means to create accounts</li>
                  <li>Transfer your account to another party without our consent</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">4. Subscription and Billing</h2>
                
                <h3 className="text-2xl font-semibold text-foreground mb-3">a. Subscription Plans</h3>
                <p className="text-foreground/80 mb-6">
                  We offer various subscription plans with different features and pricing. Plan details, features, and pricing are available on our website and may be updated from time to time.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-3">b. Billing Cycle</h3>
                <p className="text-foreground/80 mb-6">
                  Subscriptions are billed on a recurring basis (monthly or annually) depending on your selected plan. Billing begins on the date you subscribe and continues until canceled.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-3">c. Payment Methods</h3>
                <p className="text-foreground/80 mb-6">
                  We accept payment via credit card, debit card, and other methods processed through our payment provider, Stripe. You authorize us to charge your selected payment method for all fees incurred.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-3">d. Automatic Renewal</h3>
                <p className="text-foreground/80 mb-6">
                  Subscriptions automatically renew at the end of each billing period unless canceled before the renewal date. You will be charged the then-current subscription fee.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-3">e. Price Changes</h3>
                <p className="text-foreground/80">
                  We reserve the right to modify subscription pricing with at least 30 days' advance notice. Continued use of the service after a price change constitutes acceptance of the new pricing.
                </p>
              </div>

              {/* Section 5 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">5. Refunds and Cancellations</h2>
                
                <h3 className="text-2xl font-semibold text-foreground mb-3">a. Cancellation</h3>
                <p className="text-foreground/80 mb-6">
                  You may cancel your subscription at any time through your account settings or by contacting support. Cancellation takes effect at the end of your current billing period. You will retain access to paid features until that date.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-3">b. Refund Policy</h3>
                <p className="text-foreground/80 mb-6">
                  All fees are non-refundable except where required by law. We do not provide refunds or credits for partial months of service, upgrades, downgrades, or unused services.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-3">c. Failed Payments</h3>
                <p className="text-foreground/80">
                  If a payment fails, we may suspend your access to the service until payment is successfully processed. Repeated payment failures may result in account termination.
                </p>
              </div>

              {/* Section 6 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">6. Acceptable Use Policy</h2>
                <p className="text-foreground/80 mb-3">You agree not to use our services to:</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                  <li>Violate any laws, regulations, or third-party rights</li>
                  <li>Send spam, unsolicited messages, or engage in harassment</li>
                  <li>Distribute malware, viruses, or harmful code</li>
                  <li>Engage in fraudulent activities or misrepresentation</li>
                  <li>Circumvent platform security measures or access controls</li>
                  <li>Scrape, harvest, or collect data without authorization</li>
                  <li>Interfere with or disrupt our services or servers</li>
                  <li>Impersonate others or misrepresent your affiliation</li>
                  <li>Use our services for illegal, unethical, or harmful purposes</li>
                </ul>
                <p className="text-foreground/80">
                  Violation of this policy may result in immediate suspension or termination of your account without refund.
                </p>
              </div>

              {/* Section 7 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">7. Intellectual Property Rights</h2>
                
                <h3 className="text-2xl font-semibold text-foreground mb-3">a. Our Ownership</h3>
                <p className="text-foreground/80 mb-6">
                  All content, software, code, designs, trademarks, logos, and materials provided through our services are owned by OneTech Automation or our licensors. You may not copy, modify, distribute, sell, or reverse-engineer any part of our platform without explicit written permission.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-3">b. Your Content</h3>
                <p className="text-foreground/80 mb-6">
                  You retain ownership of any content, data, or information you upload or create using our services. By using our platform, you grant us a limited license to use, process, and display your content solely to provide and improve our services.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-3">c. Restrictions</h3>
                <p className="text-foreground/80 mb-3">You may not:</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li>Resell, redistribute, or sublicense our software</li>
                  <li>Remove or alter proprietary notices or labels</li>
                  <li>Create derivative works based on our platform</li>
                  <li>Use our branding without prior written consent</li>
                </ul>
              </div>

              {/* Section 8 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">8. Service Limitations and Disclaimers</h2>
                
                <h3 className="text-2xl font-semibold text-foreground mb-3">a. No Guarantee of Results</h3>
                <p className="text-foreground/80 mb-6">
                  While we provide tools to automate customer communication and sales processes, we do not guarantee specific results, revenue increases, or conversions. Results depend on multiple factors outside our control.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-3">b. Service Availability</h3>
                <p className="text-foreground/80 mb-6">
                  Our services are provided "as is" and "as available." We strive for high uptime but do not guarantee uninterrupted or error-free operation. Scheduled maintenance, technical issues, or third-party service disruptions may affect availability.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-3">c. No Warranties</h3>
                <p className="text-foreground/80">
                  To the maximum extent permitted by law, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.
                </p>
              </div>

              {/* Section 9 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">9. Third-Party Services and Integrations</h2>
                <p className="text-foreground/80 mb-3">Our platform integrates with third-party services, including:</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                  <li>WhatsApp Business API (Meta)</li>
                  <li>Instagram Messaging API (Meta)</li>
                  <li>Telegram Bot API</li>
                  <li>Stripe (payment processing)</li>
                  <li>Other third-party tools and APIs</li>
                </ul>
                <p className="text-foreground/80 mb-4">
                  We are not responsible for the availability, functionality, or policies of these third-party services. You must comply with their respective terms of service.
                </p>
                <p className="text-foreground/80">
                  Changes or disruptions to third-party services may affect our platform's functionality. We are not liable for any issues arising from third-party service failures.
                </p>
              </div>

              {/* Section 10 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">10. Data and Privacy</h2>
                <p className="text-foreground/80 mb-4">
                  Our collection, use, and protection of your personal data is governed by our{" "}
                  <Link href="/privacy-policy" className="text-primary hover:underline font-semibold">
                    Privacy Policy
                  </Link>, which is incorporated into these Terms by reference.
                </p>
                <p className="text-foreground/80 mb-4">
                  As a data processor, we handle customer data you provide in accordance with applicable data protection laws, including GDPR where applicable.
                </p>
                <p className="text-foreground/80">
                  You are responsible for ensuring compliance with privacy laws when collecting and using customer data through our platform.
                </p>
              </div>

              {/* Section 11 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">11. Termination and Suspension</h2>
                
                <h3 className="text-2xl font-semibold text-foreground mb-3">a. Termination by You</h3>
                <p className="text-foreground/80 mb-6">
                  You may terminate your account at any time by canceling your subscription or contacting support. Termination takes effect at the end of your current billing period.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-3">b. Termination by Us</h3>
                <p className="text-foreground/80 mb-6">
                  We reserve the right to suspend or terminate your account immediately if you violate these Terms, engage in prohibited activities, or fail to make payments.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-3">c. Effect of Termination</h3>
                <p className="text-foreground/80">
                  Upon termination, you will lose access to your account and all associated data. We are not obligated to retain or provide access to your data after termination. You are responsible for exporting your data before canceling.
                </p>
              </div>

              {/* Section 12 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">12. Limitation of Liability</h2>
                <p className="text-foreground/80 mb-4">
                  To the maximum extent permitted by law, OneTech Automation, its affiliates, officers, employees, and agents shall not be liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                  <li>Indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, revenue, data, or business opportunities</li>
                  <li>Service interruptions, errors, or downtime</li>
                  <li>Third-party service failures or integrations</li>
                  <li>Unauthorized access to or use of your account</li>
                  <li>Any damages exceeding the amount you paid us in the 12 months prior to the claim</li>
                </ul>
                <p className="text-foreground/80">
                  Some jurisdictions do not allow certain limitations of liability. In such cases, our liability is limited to the fullest extent permitted by law.
                </p>
              </div>

              {/* Section 13 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">13. Indemnification</h2>
                <p className="text-foreground/80">
                  You agree to indemnify, defend, and hold harmless OneTech Automation and its affiliates from any claims, liabilities, damages, losses, or expenses (including legal fees) arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-4">
                  <li>Your use of our services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any laws or third-party rights</li>
                  <li>Content you upload or transmit through our platform</li>
                  <li>Your interactions with other users or customers</li>
                </ul>
              </div>

              {/* Section 14 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">14. Dispute Resolution and Governing Law</h2>
                
                <h3 className="text-2xl font-semibold text-foreground mb-3">a. Governing Law</h3>
                <p className="text-foreground/80 mb-6">
                  These Terms are governed by and construed in accordance with the laws of the jurisdiction in which OneTech Automation operates, without regard to conflict of law principles.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-3">b. Dispute Resolution</h3>
                <p className="text-foreground/80 mb-6">
                  In the event of a dispute, you agree to first attempt to resolve it informally by contacting us. If informal resolution is unsuccessful, disputes will be resolved through binding arbitration or in the courts of our jurisdiction, as applicable.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-3">c. Class Action Waiver</h3>
                <p className="text-foreground/80">
                  You agree to resolve disputes individually and waive the right to participate in class actions or class arbitrations.
                </p>
              </div>

              {/* Section 15 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">15. Changes to These Terms</h2>
                <p className="text-foreground/80 mb-4">
                  We may update these Terms from time to time to reflect changes in our services, legal requirements, or business practices. Updated Terms will be posted on this page with a revised "Last Updated" date.
                </p>
                <p className="text-foreground/80">
                  Continued use of our services after changes are posted constitutes acceptance of the updated Terms. We encourage you to review these Terms periodically.
                </p>
              </div>

              {/* Section 16 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">16. Miscellaneous</h2>
                
                <h3 className="text-2xl font-semibold text-foreground mb-3">a. Entire Agreement</h3>
                <p className="text-foreground/80 mb-6">
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and OneTech Automation regarding the use of our services.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-3">b. Severability</h3>
                <p className="text-foreground/80 mb-6">
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-3">c. Waiver</h3>
                <p className="text-foreground/80 mb-6">
                  Our failure to enforce any right or provision of these Terms does not constitute a waiver of that right or provision.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-3">d. Assignment</h3>
                <p className="text-foreground/80">
                  You may not assign or transfer these Terms without our written consent. We may assign or transfer these Terms at our discretion.
                </p>
              </div>

              {/* Section 17 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">17. Contact Information</h2>
                <p className="text-foreground/80 mb-3">
                  If you have any questions about these Terms of Service, please contact us:
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

              {/* Acknowledgment */}
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="text-foreground/90 font-semibold mb-2">
                  Acknowledgment
                </p>
                <p className="text-foreground/80 mb-0">
                  By using OneTech Automation's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}