"use client";

import { Check } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "AI Lead Capture",
    price: "997",
    period: "one-time setup",
    description: "Smart AI assistant that captures and qualifies leads 24/7 across your website, WhatsApp, and Instagram.",
    features: [
      "AI-powered lead capture form",
      "WhatsApp & Instagram integration",
      "Real-time lead qualification",
      "CRM integration",
      "Multilingual support",
      "Analytics dashboard"
    ],
    cta: "Request Executive Briefing",
    href: "/contact",
    popular: false
  },
  {
    name: "AI Sales Assistant",
    price: "1,997",
    period: "one-time setup",
    description: "Full conversational AI that answers questions, recommends products, and guides customers to purchase.",
    features: [
      "Everything in Lead Capture",
      "Product recommendation engine",
      "Cart abandonment recovery",
      "Order tracking integration",
      "Custom conversation flows",
      "Priority support"
    ],
    cta: "Request Executive Briefing",
    href: "/contact",
    popular: true
  },
  {
    name: "Complete Revenue System",
    price: "3,997",
    period: "one-time setup",
    description: "Enterprise-grade AI infrastructure that handles everything from first message to repeat purchase.",
    features: [
      "Everything in Sales Assistant",
      "Multi-channel automation (WhatsApp, Instagram, Telegram)",
      "Customer support automation",
      "Post-purchase follow-up",
      "Review collection system",
      "Dedicated account manager"
    ],
    cta: "Request Executive Briefing",
    href: "/contact",
    popular: false
  },
  {
    name: "Custom Enterprise",
    price: "Custom",
    period: "tailored solution",
    description: "Custom AI infrastructure designed for your specific operational requirements and scale.",
    features: [
      "Custom AI infrastructure design",
      "Unlimited integrations",
      "White-label options",
      "Advanced analytics",
      "Dedicated engineering team",
      "SLA guarantee"
    ],
    cta: "Request Executive Briefing",
    href: "/contact",
    popular: false
  }
];

export function Pricing() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <span className="text-sm font-medium text-primary">INVESTMENT</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            One-time setup fee. No monthly subscriptions. You own the infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl border transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary/50 bg-gradient-to-br from-primary/10 to-muted/30 shadow-2xl shadow-primary/20 scale-105' 
                  : 'border-border/30 bg-gradient-to-br from-muted/5 to-background hover:border-primary/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{plan.description}</p>
                </div>

                <div className="space-y-1">
                  <div className="text-4xl font-bold text-foreground">
                    {plan.price === "Custom" ? plan.price : `$${plan.price}`}
                  </div>
                  <div className="text-sm text-muted-foreground">{plan.period}</div>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`block w-full py-3 px-6 rounded-xl text-center font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30'
                      : 'bg-muted/30 text-foreground hover:bg-primary/10 border border-border/30 hover:border-primary/30'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}