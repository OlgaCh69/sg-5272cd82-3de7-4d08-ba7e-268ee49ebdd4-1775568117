import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function RealEstatePricing() {
  const plans = [
    {
      name: "Boutique",
      setup: "€950",
      monthly: "€299",
      description: "Perfect for independent agents and small teams",
      features: [
        "1 AI Agent",
        "Website Scraping",
        "Lead Qualification",
        "Email Support"
      ],
      badge: null
    },
    {
      name: "Growth",
      setup: "€2,500",
      monthly: "€750",
      description: "Ideal for growing agencies ready to scale",
      features: [
        "3 AI Agents",
        "All Boutique Features",
        "Missed Call AI",
        "CRM Integration",
        "Priority Support"
      ],
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      setup: "€5,000+",
      monthly: "€1,500+",
      description: "For established agencies handling high volume",
      features: [
        "Unlimited Agents",
        "All Growth Features",
        "Custom Integrations",
        "Dedicated Account Manager",
        "White-Label Option"
      ],
      badge: null
    }
  ];

  return (
    <section className="py-20 bg-[#f0f4f8]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a2332]">
            Choose Your Automation Plan
          </h2>
          <p className="text-lg text-gray-600">
            Transparent pricing. No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${
                plan.popular 
                  ? "border-[#00ff87] bg-gradient-to-br from-white/10 to-white/5" 
                  : "bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10"
              } hover:border-[#00ff87]/50 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#00ff87] to-[#60efff] rounded-full text-xs font-bold text-[#0a0a0a]">
                  Most Popular
                </div>
              )}
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">{plan.name}</h3>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00ff87] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#00ff87] to-[#60efff] hover:from-[#00dd75] hover:to-[#50dfef] text-[#0a0a0a]"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  } font-semibold`}
                  asChild
                >
                  <Link href="/contact">Get Started <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}