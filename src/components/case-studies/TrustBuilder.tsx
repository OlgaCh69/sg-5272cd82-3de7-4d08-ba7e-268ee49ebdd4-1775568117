import { Target } from "lucide-react";

export function TrustBuilder() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="flex justify-center">
            <Target className="h-12 w-12 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold">
            Built for Ecommerce Growth
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our focus is not just on automation as a feature, but on building systems that improve how ecommerce businesses operate.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            From conversion to support to retention, every implementation is designed around measurable impact.
          </p>
        </div>
      </div>
    </section>
  );
}