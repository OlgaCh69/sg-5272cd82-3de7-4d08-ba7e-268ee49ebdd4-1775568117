import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "Custom",
      description: "Perfect for ecommerce brands starting with automation",
      features: [
        "WhatsApp or Instagram automation",
        "Basic chatbot setup",
        "Up to 1,000 conversations/month",
        "Email support",
        "Setup & onboarding"
      ],
      cta: "Book Your Strategy Demo",
      popular: false
    },
    {
      name: "Growth",
      price: "Custom",
      description: "For growing brands scaling customer interactions",
      features: [
        "Multi-channel automation (WhatsApp + Instagram)",
        "Advanced AI chatbot",
        "Up to 5,000 conversations/month",
        "Priority support",
        "Custom workflows",
        "Analytics dashboard"
      ],
      cta: "Book Your Strategy Demo",
      popular: true
    },
    {
      name: "Pro",
      price: "Custom",
      description: "For established brands with high volume",
      features: [
        "All platforms (WhatsApp, Instagram, Telegram)",
        "Premium AI capabilities",
        "Up to 15,000 conversations/month",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced analytics",
        "A/B testing"
      ],
      cta: "Book Your Strategy Demo",
      popular: false
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale operations requiring full customization",
      features: [
        "Unlimited conversations",
        "Full platform access",
        "White-label options",
        "Custom development",
        "SLA guarantees",
        "Dedicated team",
        "Strategic consulting"
      ],
      cta: "Book Your Strategy Demo",
      popular: false
    }
  ];

  return (
    <section className="py-24 sm:py-32 px-4" id="pricing">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
            Choose the Perfect Plan
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">Simple pricing. Big impact.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`bg-card/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border relative ${
                tier.popular 
                  ? "border-primary/50" 
                  : "border-border/50"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-heading font-bold text-xl sm:text-2xl mb-4">{tier.name}</h3>
                <div className="mb-3">
                  <span className="text-3xl sm:text-4xl font-bold text-primary">{tier.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {tier.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href={`#contact?plan=${tier.name}`} className="w-full block">
                <Button
                  className="w-full font-semibold bg-primary text-primary-foreground hover:bg-primary/90 h-11"
                >
                  {tier.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}