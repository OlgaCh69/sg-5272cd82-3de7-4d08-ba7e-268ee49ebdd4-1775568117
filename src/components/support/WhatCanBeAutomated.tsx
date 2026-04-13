import { CheckCircle2 } from "lucide-react";

export function WhatCanBeAutomated() {
  const useCases = [
    "Order tracking and delivery updates",
    "Shipping and return policy questions",
    "Product availability and details",
    "Payment and checkout questions",
    "Refund and exchange requests",
    "FAQ responses",
    "Pre-sale support questions",
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            What You Can Automate in Customer Support
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Most ecommerce support conversations follow predictable patterns.
          </p>
          
          <p className="text-lg text-muted-foreground">
            These can be automated without losing quality.
          </p>

          <div className="grid gap-3 pt-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}