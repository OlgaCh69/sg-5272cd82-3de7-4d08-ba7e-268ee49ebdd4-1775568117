import { Search, Wrench, Rocket } from "lucide-react";

export function AbandonedCartHowItWorks() {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Identify Checkout Drop-Off Points",
      description: "We map where and why your customers leave before purchase.",
    },
    {
      icon: Wrench,
      number: "02",
      title: "Build Recovery Flows",
      description: "We create automation sequences that re-engage shoppers with the right message at the right time.",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Launch and Optimize",
      description: "Once live, your abandoned cart automation works continuously while data helps improve performance over time.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How Our Abandoned Cart Recovery System Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We design recovery flows around the customer journey, not generic reminders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-colors h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                    <step.icon className="w-10 h-10 text-primary mt-1" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}