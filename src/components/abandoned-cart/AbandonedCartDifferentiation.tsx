import { CheckCircle2 } from "lucide-react";

export function AbandonedCartDifferentiation() {
  const points = [
    "Built specifically for ecommerce brands",
    "Focused on revenue recovery, not generic automation",
    "Structured around high-intent customer journeys",
    "Designed for multi-channel follow-up",
    "Premium system for brands serious about growth",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Why Ecommerce Brands Choose OneTech Automation
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10">
            Most abandoned cart tools stop at simple reminders.<br />
            <span className="text-foreground font-semibold">We build recovery systems around real customer behavior, buyer hesitation, and revenue opportunities.</span>
          </p>
          
          <div className="space-y-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border/50">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}