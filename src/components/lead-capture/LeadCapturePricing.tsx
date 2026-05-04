import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function LeadCapturePricing() {
  const plans = [
    {
      name: "Starter",
      setup: "€1,500",
      monthly: "€550",
      description: "Perfect for single-channel lead capture",
      features: [
        "Website AI Assistant",
        "Website scraping",
        "Basic lead capture",
        "Email notifications",
        "Monthly optimization"
      ],
      badge: null
    },
    {
      name: "Growth",
      setup: "€2,500",
      monthly: "€850",
      description: "Multi-channel automation for growing businesses",
      features: [
        "Website + WhatsApp + Instagram",
        "AI memory",
        "Smart qualification flows",
        "CRM integration",
        "Booking integration",
        "Priority support"
      ],
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      setup: "€5,000+",
      monthly: "€1,500+",
      description: "Advanced automation for high-volume operations",
      features: [
        "Full omnichannel AI assistant",
        "Advanced website scraping",
        "Custom integrations",
        "Multi-agent workflows",
        "Advanced analytics",
        "Dedicated account manager"
      ],
      badge: null
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a2332]">
            AI Lead Capture Assistant Plans
          </h2>
          <p className="text-lg text-gray-600">
            Choose the right plan for your lead capture needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-2 ${plan.badge ? 'border-[#0ea5e9] shadow-xl scale-105' : 'border-gray-200'} bg-white`}>
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#0ea5e9] text-white px-4 py-1">{plan.badge}</Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-[#1a2332] mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                
                <div className="mt-6">
                  <div className="text-sm text-gray-600 mb-1">Setup</div>
                  <div className="text-3xl font-bold text-[#1a2332]">{plan.setup}</div>
                  <div className="text-sm text-gray-600 mt-4 mb-1">Monthly</div>
                  <div className="text-4xl font-bold text-[#0ea5e9]">{plan.monthly}</div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#0ea5e9] shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.badge ? 'bg-[#0ea5e9] hover:bg-[#0ea5e9]/90' : 'bg-[#1a2332] hover:bg-[#1a2332]/90'} text-white`}
                  asChild
                >
                  <Link href="/contact">Book Demo</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}