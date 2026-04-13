import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pricing Built for Growth
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible pricing that scales with your ecommerce business. Every tier includes full automation capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative rounded-lg border-2 ${
                tier.popular 
                  ? "border-primary bg-background shadow-lg scale-105" 
                  : "border-border bg-background"
              } p-8 hover:shadow-xl transition-all duration-300`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>
                <div className="text-4xl font-bold mb-2">{tier.price}</div>
                <p className="text-sm text-muted-foreground">Tailored to your needs</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.popular ? "default" : "outline"}
                className="w-full"
                asChild
              >
                <Link href="/contact">{tier.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include dedicated onboarding, analytics, and ongoing optimization support.
          </p>
        </div>
      </div>
    </section>
  );
}