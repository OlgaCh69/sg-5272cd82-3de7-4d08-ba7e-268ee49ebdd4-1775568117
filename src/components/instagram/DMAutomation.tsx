import { MessageCircle, ShoppingBag, Package, Users, Clock } from "lucide-react";

export function DMAutomation() {
  const features = [
    {
      icon: MessageCircle,
      title: "Product Questions",
      description: "Instant answers to sizing, materials, availability, and shipping—24/7 without manual work."
    },
    {
      icon: ShoppingBag,
      title: "Direct Checkout Links",
      description: "AI sends personalized product links and one-click checkout URLs directly in DMs."
    },
    {
      icon: Package,
      title: "Order Status Updates",
      description: "Proactive notifications about shipping, delivery, and order updates via Instagram DMs."
    },
    {
      icon: Users,
      title: "Personalized Recommendations",
      description: "AI suggests products based on browsing history, previous purchases, and stated preferences."
    },
    {
      icon: Clock,
      title: "Follow-Up Campaigns",
      description: "Automated sequences for cart abandonment, post-purchase engagement, and re-activation."
    }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              DM Automation That <span className="text-[#c9a961] font-normal">Sells 24/7</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Handle every DM like your best sales rep—instantly, personally, profitably.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-[#c9a961]/30 transition-colors">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}