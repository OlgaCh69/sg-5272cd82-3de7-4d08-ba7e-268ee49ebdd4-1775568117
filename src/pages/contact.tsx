import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";

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
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">support@onetechautomation.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-muted-foreground">Within 24 hours</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Best For</h3>
                <p className="text-muted-foreground">Ecommerce brands €500k+ revenue</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}