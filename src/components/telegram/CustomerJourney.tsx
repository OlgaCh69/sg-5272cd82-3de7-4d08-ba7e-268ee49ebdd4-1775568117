import { UserPlus, Bell, ShoppingCart, Package, Star, Repeat } from "lucide-react";

export function CustomerJourney() {
  const stages = [
    {
      icon: UserPlus,
      title: "Subscribe",
      description: "Customer joins your Telegram channel or bot. Automated welcome message introduces your brand and offers."
    },
    {
      icon: Bell,
      title: "Engage",
      description: "Broadcasts about new products, sales, and content. AI bot answers questions in private chats."
    },
    {
      icon: ShoppingCart,
      title: "Convert",
      description: "Direct purchase links in messages. One-click checkout without leaving Telegram."
    },
    {
      icon: Package,
      title: "Fulfill",
      description: "Automated shipping and delivery updates. Proactive communication reduces support inquiries."
    },
    {
      icon: Star,
      title: "Delight",
      description: "Post-purchase check-ins, review requests, and loyalty rewards build long-term relationships."
    },
    {
      icon: Repeat,
      title: "Retain",
      description: "Targeted re-engagement campaigns, exclusive offers, and personalized recommendations drive repeat purchases."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              The Complete <span className="text-[#c9a961] font-normal">Telegram Sales Journey</span>
            </h2>
            <p className="text-xl text-white/70 font-light">
              From first subscription to lifetime value—fully automated.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {stages.map((stage, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <stage.icon className="w-6 h-6 text-[#c9a961]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#c9a961] font-medium mb-1">Stage {index + 1}</div>
                    <h3 className="text-2xl font-serif font-light text-white">
                      {stage.title}
                    </h3>
                  </div>
                </div>
                <p className="text-white/70 font-light leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}