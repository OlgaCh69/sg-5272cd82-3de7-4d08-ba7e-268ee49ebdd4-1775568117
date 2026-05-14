import { TrendingUp, Clock, MessageCircle, Target, Zap, DollarSign, Users } from "lucide-react";

export function AbandonedCartBenefits() {
  const benefits = [
    { icon: TrendingUp, title: "15-30% Recovery Rate", description: "Significantly higher than email-only campaigns. Multi-channel reach captures more customers." },
    { icon: Clock, title: "Instant Follow-Up", description: "Messages sent within 5-15 minutes while purchase intent is still high. No manual delays." },
    { icon: MessageCircle, title: "Two-Way Conversations", description: "Customers can ask questions, negotiate, or request changes. AI handles objections conversationally." },
    { icon: Target, title: "Personalized Messaging", description: "Include product images, cart contents, and tailored incentives based on cart value and customer history." },
    { icon: Zap, title: "Multi-Touch Campaigns", description: "Automated follow-up sequences if first message doesn't convert. 3-5 touchpoints over 7 days." },
    { icon: DollarSign, title: "€50k-€300k Annual Impact", description: "Most ecommerce stores recover this range annually from carts they would have otherwise lost." },
    { icon: Users, title: "Works Across Channels", description: "WhatsApp, Instagram, Telegram, and email—all coordinated from one system." }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white text-center mb-16">
            Turn Lost Carts Into <span className="text-[#c9a961] font-normal">Predictable Revenue</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:border-[#c9a961]/30 transition-colors">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-serif font-light text-white mb-4">{benefit.title}</h3>
                <p className="text-white/70 font-light leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}