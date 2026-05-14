import { Target, Zap, Users, MessageCircle } from "lucide-react";

export function TelegramDifferentiation() {
  const differentiators = [
    {
      icon: Target,
      title: "Ecommerce-First Design",
      description: "Built for product sales, not just notifications. Every automation optimizes for conversions and revenue."
    },
    {
      icon: Zap,
      title: "Broadcast + Bot Hybrid",
      description: "Combine mass communication with individual conversations. Scale engagement without losing personalization."
    },
    {
      icon: Users,
      title: "Unlimited Scale",
      description: "No subscriber caps, no message limits. Grow your Telegram audience without platform restrictions."
    },
    {
      icon: MessageCircle,
      title: "Conversational AI",
      description: "Natural language understanding, not keyword matching. AI handles complex questions and multi-turn conversations."
    }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              Why O.N.E.Tech for <span className="text-[#c9a961] font-normal">Telegram?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((diff, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-[#c9a961]/30 transition-colors">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <diff.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">
                  {diff.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}