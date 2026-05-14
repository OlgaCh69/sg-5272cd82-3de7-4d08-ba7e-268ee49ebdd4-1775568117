import { TrendingUp, ShoppingCart, Users } from "lucide-react";

export function ChatbotWhoItsFor() {
  const segments = [
    { icon: TrendingUp, title: "High-Growth Ecommerce", description: "€500k-€10M+ annual revenue. Scaling fast and need automation to keep up." },
    { icon: ShoppingCart, title: "Direct-to-Consumer Brands", description: "Strong product-market fit but customer conversations are bottlenecking growth." },
    { icon: Users, title: "Established Online Stores", description: "Steady support volume and ready to scale smarter without linear cost growth." }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white text-center mb-16">
            Built for <span className="text-[#c9a961] font-normal">Serious Ecommerce</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {segments.map((segment, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:border-[#c9a961]/30 transition-colors">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <segment.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-serif font-light text-white mb-4">{segment.title}</h3>
                <p className="text-white/70 font-light leading-relaxed">{segment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}