import { Clock, MessageCircle, TrendingUp, DollarSign, Users, Target, Zap } from "lucide-react";

export function InstagramBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Instant Response Time",
      description: "AI responds to every Instagram DM in under 30 seconds. Never leave a follower waiting—even at 3 AM or during viral moments."
    },
    {
      icon: MessageCircle,
      title: "Unlimited Conversations",
      description: "Handle 10, 100, or 1,000 simultaneous DM conversations without adding support staff. Scale infinitely with no capacity limits."
    },
    {
      icon: TrendingUp,
      title: "20-35% Conversion Lift",
      description: "Instant responses to product inquiries and buying signals drive significantly more followers to checkout."
    },
    {
      icon: DollarSign,
      title: "60-75% Cost Reduction",
      description: "Automate repetitive DM responses at a fraction of the cost of hiring support teams. Free your staff for high-value work."
    },
    {
      icon: Users,
      title: "Personalized at Scale",
      description: "Each conversation is tailored to the follower's interests, engagement history, and browsing behavior."
    },
    {
      icon: Target,
      title: "Comment Automation",
      description: "Auto-respond to product posts and stories, turning public engagement into private sales conversations."
    },
    {
      icon: Zap,
      title: "Native Integration",
      description: "Connects directly to Instagram Business API and your ecommerce platform. Seamless data sync, no manual work."
    }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              Turn Instagram Into a <span className="text-[#c9a961] font-normal">Revenue Machine</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Transform your DM inbox from a support burden into your most profitable sales channel.
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