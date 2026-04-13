import { HelpCircle } from "lucide-react";

export function WhyCartsAbandoned() {
  const reasons = [
    "Unanswered product questions",
    "Uncertainty about shipping or delivery",
    "Distractions before completing checkout",
    "Need for reassurance before buying",
    "Complicated or delayed checkout experience",
    "No follow-up after leaving the site",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <HelpCircle className="w-12 h-12 text-primary flex-shrink-0 mt-1" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Shoppers Abandon Their Carts
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground mb-8">
            <p>
              Customers rarely leave checkout for just one reason.
            </p>
            
            <p>
              In many cases, they are still interested but have not reached the final decision.
            </p>
            
            <p className="text-foreground font-semibold">
              Common Reasons:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-card p-4 rounded-lg border border-border/50">
                <p className="text-foreground">{reason}</p>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-foreground font-semibold">
            When there is no recovery system in place, that revenue is simply lost.
          </p>
        </div>
      </div>
    </section>
  );
}