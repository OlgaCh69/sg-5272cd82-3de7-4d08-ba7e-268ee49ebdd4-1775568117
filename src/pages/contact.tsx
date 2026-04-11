import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us | OneTech Automation"
        description="Get in touch with OneTech Automation. Book a demo or learn how we can help automate your ecommerce customer conversations."
      />
      <Header />
      <main>
        <section className="py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Let's Build Your Automation System
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Ready to turn customer conversations into predictable revenue? Get in touch and let's discuss how automation can support your ecommerce growth.
                </p>
              </div>

              {/* Two Column Layout: Form + Contact Info */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Form - Takes 2 columns */}
                <div className="lg:col-span-2">
                  <ContactForm />
                </div>

                {/* Contact Info Sidebar - Takes 1 column */}
                <div className="space-y-6">
                  <div className="bg-card p-8 rounded-xl border border-border/50">
                    <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
                    
                    {/* Email */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Mail className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold">Email</h4>
                      </div>
                      <a 
                        href="mailto:support@onetechautomation.com" 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        support@onetechautomation.com
                      </a>
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <MessageCircle className="w-5 h-5 text-green-600" />
                        <h4 className="font-semibold">WhatsApp</h4>
                      </div>
                      <a 
                        href="https://wa.me/35795180206" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
                      >
                        +357 95 180 206
                      </a>
                    </div>
                  </div>

                  {/* Response Time Card */}
                  <div className="bg-muted/50 p-6 rounded-xl border border-border/50">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Response Time:</strong><br />
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}