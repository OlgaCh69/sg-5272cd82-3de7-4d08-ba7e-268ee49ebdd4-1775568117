import { ShoppingCart, Clock, Target, TrendingUp, Zap, MessageCircle } from "lucide-react";

export function AbandonedCartFocus() {
  const features = [
    {
      icon: Clock,
      title: "Instant Follow-Up",
      description: "WhatsApp message sent within 5-15 minutes of cart abandonment—while purchase intent is still high."
    },
    {
      icon: Target,
      title: "Personalized Recovery",
      description: "Include product images, answer common objections, and offer time-sensitive incentives based on cart value."
    },
    {
      icon: Zap,
      title: "Multi-Touch Campaigns",
      description: "Automated follow-up sequences if the first message doesn't convert. 3-5 touchpoints over 7 days."
    },
    {
      icon: TrendingUp,
      title: "15-30% Recovery Rate",
      description: "Industry-leading conversion on abandoned carts—significantly higher than email alone."
    },
    {
      icon: MessageCircle,
      title: "Two-Way Conversations",
      description: "Customers can ask questions, negotiate, or request modifications. AI handles it all conversationally."
    },
    {
      icon: ShoppingCart,
      title: "One-Click Checkout",
      description: "Direct checkout links in WhatsApp. Customers complete purchase without returning to your site."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              Abandoned Cart Recovery That <span className="text-[#c9a961] font-normal">Actually Works</span>
            </h2>
            <p className="text-xl text-white/70 font-light">
              Most stores recover €50,000-€300,000 annually from carts they would have otherwise lost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:border-[#c9a961]/30 transition-colors">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-serif font-light text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}