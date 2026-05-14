import { TrendingUp, ShoppingCart, Users } from "lucide-react";

export function AbandonedCartWhoItsFor() {
  const segments = [
    {
      icon: TrendingUp,
      title: "Growing Ecommerce Stores",
      description: "€500k-€5M+ revenue. You're generating consistent checkout activity and know you're losing revenue during the buying journey."
    },
    {
      icon: ShoppingCart,
      title: "High Cart Abandonment",
      description: "If your abandonment rate is above 60%, you have a major recovery opportunity. Most stores can recapture €50k-€300k+ annually."
    },
    {
      icon: Users,
      title: "Performance-Focused Brands",
      description: "You optimize for metrics and ROI. Cart recovery is one of the highest-leverage moves to improve conversion without increasing traffic."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              Built for Brands That <span className="text-[#c9a961] font-normal">Want More Revenue</span>
            </h2>
            <p className="text-xl text-white/70 font-light">
              Cart recovery delivers ROI when you already have checkout volume and traffic.
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