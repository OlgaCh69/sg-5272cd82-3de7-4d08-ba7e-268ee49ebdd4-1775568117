import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "€699",
      description: "Perfect for small businesses.",
      features: [
        "Product Catalog",
        "Basic Bot Flow",
        "FAQ & Support",
        "1 Platform",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Growth",
      price: "€1,490",
      description: "Best for growing brands.",
      features: [
        "Everything in Starter",
        "Cart & Orders",
        "Multi-Platform Support",
        "Automations",
      ],
      cta: "Choose Growth",
      popular: true,
    },
    {
      name: "Pro",
      price: "€2,490",
      description: "For businesses that want more.",
      features: [
        "Everything in Growth",
        "AI Assistant",
        "Payment Integration",
        "Advanced Analytics",
      ],
      cta: "Choose Pro",
      popular: false,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored for your needs.",
      features: [
        "Custom Integrations",
        "Advanced Features",
        "Multi-Language Support",
        "Priority Support",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ];

  return (
    <section className="py-24 px-4" id="pricing">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-4">
            Choose the Perfect Plan
          </h2>
          <p className="text-lg text-muted-foreground">Simple pricing. Big impact.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-8 shadow-card relative border ${
                plan.popular 
                  ? "border-primary/50 shadow-glow" 
                  : "border-border/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-glow">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-heading font-bold text-2xl mb-3">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full font-semibold ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}