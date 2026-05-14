import { TrendingUp, Clock, MessageCircle, DollarSign, Users, Zap, Target } from "lucide-react";

export function WhatsAppBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "15-30% Cart Recovery",
      description: "Automated messages reach customers within minutes of abandonment. Personalized follow-ups that feel human, convert like clockwork."
    },
    {
      icon: Clock,
      title: "Instant Response Time",
      description: "Never miss a sales opportunity. AI responds to every WhatsApp message in under 1 minute, 24/7—even at 3 AM."
    },
    {
      icon: MessageCircle,
      title: "Unlimited Conversations",
      description: "Handle 10, 100, or 1,000 simultaneous WhatsApp conversations without adding support staff. Scale infinitely."
    },
    {
      icon: DollarSign,
      title: "50-70% Cost Reduction",
      description: "Replace repetitive manual work with AI. Free your team for high-value tasks while cutting support costs dramatically."
    },
    {
      icon: Users,
      title: "Personalized at Scale",
      description: "Each conversation is tailored to the customer's browsing history, cart contents, and previous interactions."
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Connects directly to Shopify, WooCommerce, or your ecommerce platform. No manual data entry or duplicate systems."
    },
    {
      icon: Target,
      title: "Higher LTV",
      description: "Automated post-purchase follow-ups, cross-sells, and re-engagement campaigns drive repeat purchases."
    }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              Predictable <span className="text-[#c9a961] font-normal">Revenue Growth</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Transform WhatsApp from a support channel into your most profitable revenue driver.
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