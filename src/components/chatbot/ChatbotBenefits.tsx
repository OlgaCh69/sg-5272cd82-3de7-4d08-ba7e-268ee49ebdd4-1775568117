import { Clock, MessageCircle, TrendingUp, DollarSign, Target, Zap, Users } from "lucide-react";

export function ChatbotBenefits() {
  const benefits = [
    { icon: Clock, title: "Instant Response Time", description: "AI responds in under 30 seconds, 24/7. Never miss a sale opportunity again." },
    { icon: MessageCircle, title: "Multi-Channel Support", description: "One AI across WhatsApp, Instagram, website chat, Telegram, and email." },
    { icon: TrendingUp, title: "Higher Conversion Rates", description: "20-40% lift from instant answers to product questions and buying objections." },
    { icon: DollarSign, title: "15-30% Cart Recovery", description: "Automated abandoned cart follow-ups recover revenue you'd otherwise lose." },
    { icon: Target, title: "Personalized Conversations", description: "Tailored responses based on browsing history, cart contents, and past purchases." },
    { icon: Zap, title: "Seamless Handoff", description: "Complex questions route to your team automatically. You only handle what AI can't." },
    { icon: Users, title: "Scales Infinitely", description: "Handle 10, 100, or 1,000 simultaneous conversations without adding staff." }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] text-center mb-16">
            Turn Conversations Into <span className="text-[#c9a961] font-normal">Predictable Revenue</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-[#c9a961]/30 transition-colors">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">{benefit.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}