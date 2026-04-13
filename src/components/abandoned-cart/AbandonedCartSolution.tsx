import { CheckCircle2 } from "lucide-react";

export function AbandonedCartSolution() {
  const benefits = [
    "Automatically follow up with cart abandoners",
    "Re-engage shoppers at the right moment",
    "Answer last-minute buying questions",
    "Reduce checkout drop-off",
    "Recover revenue without increasing acquisition costs",
    "Build a more consistent conversion process",
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Turn Abandoned Carts Into Recovered Revenue
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground mb-10">
            <p>
              OneTech Automation helps ecommerce brands recover abandoned carts through intelligent automation across channels like WhatsApp, Instagram, and AI-driven messaging flows.
            </p>
            
            <p>
              Instead of losing customers after checkout drop-off, your business can follow up automatically, re-engage interested shoppers, and guide them back to purchase.
            </p>
            
            <p>
              This creates a more efficient system that turns missed opportunities into measurable revenue.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}