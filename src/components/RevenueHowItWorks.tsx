import { MessageSquare, Zap, Target, ShoppingCart, TrendingUp } from "lucide-react";

export function RevenueHowItWorks() {
  const steps = [
    { icon: MessageSquare, title: "Customer reaches out", description: "(website, IG, WhatsApp)" },
    { icon: Zap, title: "AI responds instantly", description: "Under 2 seconds" },
    { icon: Target, title: "AI qualifies and guides", description: "The conversation" },
    { icon: ShoppingCart, title: "AI books or sells", description: "Automatically" },
    { icon: TrendingUp, title: "You close more deals", description: "With less effort" }
  ];

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
            How It Works
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-[#00ff87]/50 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00ff87] to-[#60efff] flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-[#0a0a0a]" />
                  </div>
                  <p className="text-sm font-bold text-[#00ff87] mb-2">Step {index + 1}</p>
                  <p className="text-white font-semibold mb-1">{step.title}</p>
                  <p className="text-xs text-gray-400">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#00ff87] to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}