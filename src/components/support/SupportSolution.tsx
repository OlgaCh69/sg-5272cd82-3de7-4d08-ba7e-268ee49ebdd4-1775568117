import { CheckCircle2 } from "lucide-react";

export function SupportSolution() {
  const benefits = [
    "Instantly respond to common customer questions",
    "Automate order tracking and updates",
    "Handle FAQs without manual effort",
    "Reduce response times across channels",
    "Improve support consistency",
    "Free up your team's time",
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Automate Support Without Compromising Experience
          </h2>
          
          <p className="text-lg text-muted-foreground">
            OneTech Automation helps ecommerce brands automate the parts of customer support that slow them down.
          </p>
          
          <p className="text-lg text-muted-foreground">
            Instead of manually answering every message, your system can respond instantly, handle repetitive questions, and support customers at scale.
          </p>
          
          <p className="text-lg text-muted-foreground">
            This allows your team to focus on higher-value interactions while automation handles the rest.
          </p>

          <div className="grid gap-3 pt-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}