import { CheckCircle2 } from "lucide-react";

export function AbandonedCartWhoItsFor() {
  const ideal = [
    "Growing ecommerce stores",
    "Brands with regular checkout volume",
    "Stores looking to improve conversion rates",
    "Teams that want a more efficient recovery process",
    "Ecommerce businesses focused on performance and ROI",
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Built for Ecommerce Brands That Want to Recover More Sales
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10">
            This is designed for ecommerce businesses that are already generating traffic but know they are losing revenue during checkout.
          </p>
          
          <div className="space-y-4">
            <p className="text-lg font-semibold text-foreground mb-4">Ideal For:</p>
            {ideal.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border/50">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}