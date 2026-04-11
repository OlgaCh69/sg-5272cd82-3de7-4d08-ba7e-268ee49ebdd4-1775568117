import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MessageCircle, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | OneTech Automation"
        description="Get in touch with OneTech Automation. Book a demo and discover how AI chatbot automation can transform your ecommerce business."
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Let's Talk About Growing Your Business
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Book a strategy demo and discover how automation can turn conversations into revenue for your ecommerce brand.
              </p>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>

            {/* Additional Info */}
            <div className="max-w-3xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-muted/30 p-6 rounded-lg border border-border/50">
                  <Mail className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Get in touch via email
                  </p>
                  <a 
                    href="mailto:support@onetechautomation.com" 
                    className="text-sm text-primary hover:underline"
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
        </section>
      </main>
    </>
  );
}