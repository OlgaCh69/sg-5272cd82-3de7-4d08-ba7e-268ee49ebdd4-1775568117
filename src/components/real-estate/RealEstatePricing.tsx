import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function RealEstatePricing() {
  const plans = [
    {
      name: "Boutique",
      badge: null,
      features: [
        "1 AI Agent",
        "Website Scraping",
        "Lead Qualification",
        "Email Support"
      ]
    },
    {
      name: "Growth",
      badge: "Most Popular",
      features: [
        "3 AI Agents",
        "All Boutique Features",
        "Missed Call AI",
        "CRM Integration",
        "Priority Support"
      ]
    },
    {
      name: "Enterprise Elite",
      badge: null,
      features: [
        "Unlimited Agents",
        "All Growth Features",
        "Multi language AI Assistant",
        "Website scraping",
        "Custom Integrations",
        "Dedicated Account Manager",
        "White-Label Option"
      ]
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#c9a961] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-[#c9a961] mb-4 font-medium">Investment</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white mb-6">
              Choose Your <span className="italic text-[#c9a961]">Automation Plan</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              Tailored solutions for boutique agencies to enterprise operations
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative ${
                  plan.badge 
                    ? "border-[#c9a961] bg-gradient-to-br from-white/10 to-white/5" 
                    : "bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10"
                } hover:border-[#c9a961]/50 transition-all duration-500 overflow-hidden group`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[#c9a961] to-[#b89851] rounded-full text-sm font-medium text-white shadow-lg">
                    {plan.badge}
                  </div>
                )}
                <CardContent className="p-10">
                  <h3 className="text-3xl font-serif font-light text-white mb-8 text-center">{plan.name}</h3>
                  
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#c9a961] flex-shrink-0 mt-1" />
                        <span className="text-white/80 font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      plan.badge
                        ? "bg-gradient-to-r from-[#c9a961] to-[#b89851] hover:from-[#b89851] hover:to-[#a88741] text-white"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                    } font-medium py-6`}
                    asChild
                  >
                    <Link href="/contact">Get Started <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Note */}
          <p className="text-center text-white/50 text-sm font-light mt-12">
            All plans include 24/7 support and ongoing optimization
          </p>
        </div>
      </div>
    </section>
  );
}