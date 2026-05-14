import { Target, Zap, MessageCircle, TrendingUp } from "lucide-react";

export function WhatsAppDifferentiation() {
  const differentiators = [
    {
      icon: Target,
      title: "Built for Revenue, Not Just Support",
      description: "We optimize for conversions and cart recovery—not just ticket deflection. Your WhatsApp automation is a profit center."
    },
    {
      icon: Zap,
      title: "Ecommerce-First AI",
      description: "Our AI is trained specifically on ecommerce conversations. It understands product questions, objections, and buying signals."
    },
    {
      icon: MessageCircle,
      title: "Conversational, Not Robotic",
      description: "No rigid scripts or keyword matching. Our AI handles natural back-and-forth conversations that feel human."
    },
    {
      icon: TrendingUp,
      title: "ROI-Focused Implementation",
      description: "We start with your highest-impact use cases (abandoned carts, product questions) to deliver measurable results fast."
    }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              Why O.N.E.Tech for <span className="text-[#c9a961] font-normal">WhatsApp Automation?</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Purpose-built for ecommerce growth, not generic chatbot templates.
            </p>
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