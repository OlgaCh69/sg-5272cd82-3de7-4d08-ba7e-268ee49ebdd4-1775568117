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
      popular: false
    },
    {
      name: "Growth",
      setup: "€2,500",
      monthly: "€750",
      description: "Most popular for growing agencies",
      features: [
        "3 AI Agents",
        "All Boutique Features",
        "Missed Call AI",
        "CRM Integration",
        "Priority Support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      setup: "€5,000",
      monthly: "€1,500",
      description: "Complete automation for high-volume agencies",
      features: [
        "Unlimited Agents",
        "All Growth Features",
        "Custom Integrations",
        "Dedicated Account Manager",
        "White-Label Option"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Choose Your <span className="text-blue-600">Automation Plan</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transparent pricing designed for real estate agencies at every stage.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-2 border-blue-600 shadow-xl scale-105" : "border-2 border-slate-200"}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-slate-900 mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-6">
                  <div className="text-sm text-slate-600 mb-2">Setup</div>
                  <div className="text-2xl font-bold text-slate-900">{plan.setup}</div>
                  <div className="text-sm text-slate-500 mt-4">Then</div>
                  <div className="text-5xl font-bold text-blue-600 mt-2">{plan.monthly}</div>
                  <div className="text-slate-600 mt-1">/month</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button 
                    className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-900 hover:bg-slate-800"}`}
                    size="lg"
                  >
                    Book a Demo
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}