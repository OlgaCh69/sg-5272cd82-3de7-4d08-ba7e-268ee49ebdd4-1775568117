import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function BeautyClinicPricing() {
  const plans = [
    {
      name: "Starter",
      setup: "€1,400",
      monthly: "€400",
      description: "Essential automation for small salons",
      features: [
        "Instagram OR WhatsApp automation",
        "Basic booking system",
        "Missed call SMS"
      ],
      badge: null
    },
    {
      name: "Growth",
      setup: "€2,400",
      monthly: "€700",
      description: "Complete automation suite for growth",
      features: [
        "Instagram + WhatsApp",
        "Advanced booking system",
        "Smart follow-ups",
        "CRM integration"
      ],
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      setup: "€5,000",
      monthly: "€1,500",
      description: "Full-scale automation for multiple locations",
      features: [
        "Full automation suite",
        "Multi-location support",
        "Custom workflows",
        "Dedicated support"
      ],
      badge: null
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">
            Choose Your Automation Plan
          </h2>
          <p className="text-lg text-gray-600">
            Transparent pricing. No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-2 ${plan.badge ? 'border-[#d4af37] shadow-2xl scale-105' : 'border-gray-200'} bg-white`}>
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#d4af37] text-[#1a1a1a] px-4 py-1 font-semibold">{plan.badge}</Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-[#1a1a1a] mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                
                <div className="mt-6">
                  <div className="text-sm text-gray-600 mb-1">Setup</div>
                  <div className="text-3xl font-bold text-[#1a1a1a]">{plan.setup}</div>
                  <div className="text-sm text-gray-600 mt-4 mb-1">Monthly</div>
                  <div className="text-4xl font-bold text-[#d4af37]">{plan.monthly}</div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#d4af37] shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.badge ? 'bg-[#d4af37] hover:bg-[#b8961f]' : 'bg-[#1a1a1a] hover:bg-[#2a2a2a]'} text-white`}
                  asChild
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}