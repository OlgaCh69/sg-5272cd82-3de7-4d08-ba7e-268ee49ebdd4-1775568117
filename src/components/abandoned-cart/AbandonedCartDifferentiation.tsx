import { Target, Zap, MessageCircle } from "lucide-react";

export function AbandonedCartDifferentiation() {
  const differentiators = [
    {
      icon: Target,
      title: "Revenue-First Approach",
      description: "We optimize for recovery rate and revenue captured—not just message delivery. Every flow is built around conversion."
    },
    {
      icon: Zap,
      title: "Multi-Channel Reach",
      description: "WhatsApp, Instagram, Telegram, and email—all coordinated. Different customers prefer different channels."
    },
    {
      icon: MessageCircle,
      title: "Conversational AI",
      description: "No rigid templates. Our AI handles natural objections, questions, and negotiations that move customers toward purchase."
    }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              Why O.N.E.Tech for <span className="text-[#c9a961] font-normal">Cart Recovery?</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Most tools stop at simple reminders. We build recovery systems around real customer behavior and buying psychology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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