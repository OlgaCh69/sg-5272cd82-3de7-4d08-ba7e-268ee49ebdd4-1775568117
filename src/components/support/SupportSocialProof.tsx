import { Quote } from "lucide-react";

export function SupportSocialProof() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Trusted by Ecommerce Brands Improving Support Performance
          </h2>
          
          <div className="bg-background p-8 rounded-lg shadow-sm">
            <Quote className="w-8 h-8 text-primary mx-auto mb-4" />
            <p className="text-lg italic text-muted-foreground">
              "We reduced response time and improved customer satisfaction without increasing our support team."
            </p>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Add testimonials, case studies, or brand logos here.
          </p>
        </div>
      </div>
    </section>
  );
}