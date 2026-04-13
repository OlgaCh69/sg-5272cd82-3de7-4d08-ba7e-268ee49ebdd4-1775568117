import { CheckCircle2 } from "lucide-react";

export function SupportDifferentiation() {
  const points = [
    "Built for ecommerce-specific support needs",
    "Focus on both efficiency and customer experience",
    "Designed around real customer interactions",
    "Multi-channel automation approach",
    "Premium system for growth-focused brands",
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Ecommerce Brands Choose OneTech Automation
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Many support tools exist. Most are built for generic use.
          </p>
          
          <p className="text-lg text-muted-foreground">
            We build automation systems specifically for ecommerce workflows and customer behavior.
          </p>

          <div className="grid gap-3 pt-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}