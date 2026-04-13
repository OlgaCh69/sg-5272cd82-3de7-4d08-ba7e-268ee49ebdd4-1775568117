import { CheckCircle2 } from "lucide-react";

export function AbandonedCartUseCases() {
  const useCases = [
    "Recover incomplete checkouts",
    "Re-engage high-intent shoppers",
    "Answer pre-purchase questions automatically",
    "Trigger follow-ups at the right time",
    "Reduce drop-off during the buying journey",
    "Improve return on existing traffic",
    "Support a smoother path to purchase",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            What Abandoned Cart Automation Can Help You Do
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10">
            Our system is designed to support ecommerce brands at the point where conversion is most vulnerable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border/50">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}