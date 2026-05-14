import { Clock, DollarSign, TrendingUp, Users, Zap, Target, MessageCircle } from "lucide-react";

export function SupportBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Instant Response Time",
      description: "AI responds to every support question in under 1 minute—day or night, peak or off-hours."
    },
    {
      icon: DollarSign,
      title: "50-70% Cost Reduction",
      description: "Automate repetitive tickets and free your team for complex issues. Cut support costs dramatically while improving quality."
    },
    {
      icon: TrendingUp,
      title: "70-85% Autonomous Resolution",
      description: "Most common questions—order status, returns, product info—get resolved without human intervention."
    },
    {
      icon: Users,
      title: "Unlimited Capacity",
      description: "Handle 10, 100, or 1,000 simultaneous conversations without adding support staff."
    },
    {
      icon: Zap,
      title: "24/7 Coverage",
      description: "Never miss a support request. AI works around the clock across all timezones."
    },
    {
      icon: Target,
      title: "Proactive Support",
      description: "AI identifies potential issues before they escalate and reaches out with solutions preemptively."
    },
    {
      icon: MessageCircle,
      title: "Multi-Channel Consistency",
      description: "Same AI across email, chat, WhatsApp, Instagram. Consistent answers every time."
    }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              Better Support, <span className="text-[#c9a961] font-normal">Lower Costs</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Transform customer support from expense to competitive advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-[#c9a961]/30 transition-colors">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}