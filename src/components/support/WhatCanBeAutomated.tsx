import { Package, CreditCard, MapPin, RotateCw } from "lucide-react";

export function WhatCanBeAutomated() {
  const categories = [
    {
      icon: Package,
      title: "Order Status & Tracking",
      description: "\"Where is my order?\" queries resolved instantly with real-time tracking info pulled from your system."
    },
    {
      icon: CreditCard,
      title: "Refunds & Returns",
      description: "AI walks customers through return policies, generates labels, and processes straightforward refunds autonomously."
    },
    {
      icon: MapPin,
      title: "Shipping & Delivery",
      description: "Questions about delivery times, shipping costs, international options—answered accurately in seconds."
    },
    {
      icon: RotateCw,
      title: "Product Information",
      description: "Sizing, materials, care instructions, compatibility—AI knows your catalog and answers product questions instantly."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              What Gets <span className="text-[#c9a961] font-normal">Automated?</span>
            </h2>
            <p className="text-xl text-white/70 font-light">
              70-85% of your support tickets can be resolved autonomously by AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:border-[#c9a961]/30 transition-colors">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <category.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-serif font-light text-white mb-4">
                  {category.title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}