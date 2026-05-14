import { ShoppingCart, Clock, Target, TrendingUp } from "lucide-react";

export function AbandonedCart() {
  const features = [
    { icon: Clock, title: "Instant Follow-Up", description: "AI reaches out within minutes while purchase intent is still high." },
    { icon: Target, title: "Personalized Recovery", description: "Include product details, answer objections, offer time-sensitive incentives." },
    { icon: TrendingUp, title: "15-30% Recovery Rate", description: "Significantly higher than email-only cart recovery campaigns." },
    { icon: ShoppingCart, title: "Direct Revenue Impact", description: "Most stores recover €50k-€300k annually from abandoned carts." }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] text-center mb-16">
            Recover Lost Revenue <span className="text-[#c9a961] font-normal">Automatically</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-[#c9a961]/30 transition-colors">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">{feature.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}