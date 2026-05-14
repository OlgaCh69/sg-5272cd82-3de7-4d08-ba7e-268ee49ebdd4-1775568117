import { TrendingUp, Users, ShoppingCart } from "lucide-react";

export function SupportWhoItsFor() {
  const segments = [
    {
      icon: TrendingUp,
      title: "High-Growth Ecommerce",
      description: "Scaling fast and support volume is growing faster. You need automation to keep up without linear cost increase."
    },
    {
      icon: Users,
      title: "Customer-First Brands",
      description: "You compete on service quality. AI support maintains your high standards while reducing response times."
    },
    {
      icon: ShoppingCart,
      title: "Multi-Channel Retailers",
      description: "Customers reach out via email, chat, Instagram, WhatsApp. You need consistent support across every channel."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              Built for <span className="text-[#c9a961] font-normal">Growth-Focused Ecommerce</span>
            </h2>
            <p className="text-xl text-white/70 font-light">
              AI support automation delivers ROI when quality and speed matter.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {segments.map((segment, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:border-[#c9a961]/30 transition-colors">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <segment.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-serif font-light text-white mb-4">
                  {segment.title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  {segment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}