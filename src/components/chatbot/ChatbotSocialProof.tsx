import { Quote } from "lucide-react";

export function ChatbotSocialProof() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Trusted by Ecommerce Brands Focused on Growth
          </h2>
          
          <div className="bg-card p-8 md:p-12 rounded-xl border border-border/50">
            <Quote className="w-12 h-12 text-primary mb-6" />
            <p className="text-xl md:text-2xl text-foreground mb-6 italic">
              "Our AI chatbot helped us respond faster, improve customer experience, and convert more conversations into sales."
            </p>
            <div className="border-t border-border pt-6">
              <p className="font-semibold text-foreground">Ecommerce Brand</p>
              <p className="text-sm text-muted-foreground">Founder & CEO</p>
            </div>
          </div>
          
          <p className="text-center text-muted-foreground mt-8">
            Add your testimonials, results, case studies, or client logos here.
          </p>
        </div>
      </div>
    </section>
  );
}