import { ShoppingCart, MessageSquare, Gift, TrendingUp } from "lucide-react";

export function InstagramUseCases() {
  const useCases = [
    {
      icon: MessageSquare,
      title: "Product Discovery",
      description: "Help followers find the right products through conversational AI. Answer questions, suggest alternatives, overcome objections."
    },
    {
      icon: ShoppingCart,
      title: "Checkout Assistance",
      description: "Guide users from browsing to purchase with personalized product links and one-click checkout in DMs."
    },
    {
      icon: Gift,
      title: "Post-Purchase Engagement",
      description: "Request reviews, offer loyalty rewards, and drive repeat purchases through automated DM campaigns."
    },
    {
      icon: TrendingUp,
      title: "Launch & Promo Campaigns",
      description: "Broadcast new product launches, exclusive offers, and flash sales to engaged followers via DMs."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              Every Stage of the <span className="text-[#c9a961] font-normal">Customer Journey</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <useCase.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-serif font-light text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}