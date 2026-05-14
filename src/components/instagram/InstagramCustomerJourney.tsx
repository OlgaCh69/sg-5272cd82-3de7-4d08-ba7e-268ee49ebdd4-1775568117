import { Eye, MessageCircle, ShoppingCart, Heart, Repeat, Star } from "lucide-react";

export function InstagramCustomerJourney() {
  const stages = [
    {
      icon: Eye,
      title: "Discovery",
      description: "Follower sees your product post or story. AI auto-responds to comments with personalized DM invitations."
    },
    {
      icon: MessageCircle,
      title: "Engagement",
      description: "User opens DM. AI answers questions about sizing, materials, shipping, and availability instantly."
    },
    {
      icon: ShoppingCart,
      title: "Conversion",
      description: "AI sends direct checkout link. User completes purchase without leaving Instagram."
    },
    {
      icon: Heart,
      title: "Fulfillment",
      description: "Proactive shipping updates and delivery notifications keep customers informed automatically."
    },
    {
      icon: Star,
      title: "Feedback",
      description: "Post-purchase follow-up requests reviews and ratings, building social proof."
    },
    {
      icon: Repeat,
      title: "Retention",
      description: "Automated campaigns for cross-sells, new arrivals, and re-engagement drive repeat purchases."
    }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              The Complete <span className="text-[#c9a961] font-normal">Instagram Sales Journey</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              From first comment to repeat purchase—fully automated.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {stages.map((stage, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <stage.icon className="w-6 h-6 text-[#c9a961]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#c9a961] font-medium mb-1">Stage {index + 1}</div>
                    <h3 className="text-2xl font-serif font-light text-[#1a1a1a]">
                      {stage.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 font-light leading-relaxed">
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