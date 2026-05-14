import { TrendingUp, Globe, Users, ShoppingBag } from "lucide-react";

export function TelegramWhoItsFor() {
  const segments = [
    {
      icon: TrendingUp,
      title: "International Ecommerce",
      description: "Telegram is massive in emerging markets (Russia, Middle East, Latin America). If you sell internationally, this is critical infrastructure."
    },
    {
      icon: Globe,
      title: "Digital Products & SaaS",
      description: "Tech-savvy audiences already use Telegram. Instant delivery of digital goods, license keys, and subscriptions."
    },
    {
      icon: Users,
      title: "Community-Driven Brands",
      description: "Build engaged communities around your products. Groups, channels, and bots create belonging and loyalty."
    },
    {
      icon: ShoppingBag,
      title: "High-Repeat Products",
      description: "Consumables, subscriptions, seasonal items—Telegram's direct access drives repeat purchases effortlessly."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              Built for <span className="text-[#c9a961] font-normal">Global Growth</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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