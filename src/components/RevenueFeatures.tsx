import { Brain, Zap, Globe, Database, Target, TrendingUp } from "lucide-react";

export function RevenueFeatures() {
  const features = [
    { icon: Target, text: "Built to convert, not just respond" },
    { icon: Brain, text: "Understands intent, not just keywords" },
    { icon: Globe, text: "Works across all channels" },
    { icon: Database, text: "Remembers users (AI memory)" },
    { icon: Zap, text: "Learns from your business (website scraping)" },
    { icon: TrendingUp, text: "Optimized for sales, not support" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">
            This Isn't Just AI.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] to-[#60efff]">
              It's a Revenue Engine.
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#00ff87]/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00ff87] to-[#60efff] flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#0a0a0a]" />
                </div>
                <p className="text-lg text-white font-semibold">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}