import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MessageCircle, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us | OneTech Automation"
        description="Get in touch with OneTech Automation. Book a strategy demo to see how AI chatbot automation can transform your ecommerce business."
      />
      <Header />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Get In Touch
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Get in touch with us to discuss your project and start automating your business today.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <ContactForm />
                </div>

                <div className="space-y-6">
                  <div className="bg-muted/30 p-6 rounded-lg border border-border/50">
                    <Mail className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Get in touch via email
                    </p>
                    <a 
                      href="mailto:support@onetechautomation.com" 
                      className="text-sm text-primary hover:underline break-all"
                    >
                      support@onetechautomation.com
                    </a>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg border border-border/50">
                    <MessageCircle className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-semibold mb-2">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Message us directly
                    </p>
                    <a 
                      href="https://wa.me/35795180206" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-600 hover:underline"
                    >
                      +357 95 180 206
                    </a>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg border border-border/50">
                    <Clock className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Response Time</h3>
                    <p className="text-sm text-muted-foreground">
                      We typically respond within 24 hours
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