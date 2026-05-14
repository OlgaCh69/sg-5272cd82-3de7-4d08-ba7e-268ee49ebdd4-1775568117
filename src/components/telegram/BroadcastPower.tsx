import { Send, Target, TrendingUp, Users, Zap, BarChart } from "lucide-react";

export function BroadcastPower() {
  const features = [
    {
      icon: Send,
      title: "Unlimited Reach",
      description: "Telegram channels have no subscriber limits. Scale from 100 to 100,000+ subscribers with zero platform restrictions."
    },
    {
      icon: Target,
      title: "Smart Segmentation",
      description: "Send different messages to different audience segments. New customers get welcome flows, VIPs get exclusive offers."
    },
    {
      icon: TrendingUp,
      title: "Rich Media Messages",
      description: "Images, videos, product carousels, polls—Telegram supports engaging content formats that drive clicks."
    },
    {
      icon: Users,
      title: "Interactive Bots",
      description: "Subscribers can browse products, check order status, and complete purchases directly through the bot interface."
    },
    {
      icon: Zap,
      title: "Instant Engagement",
      description: "Messages arrive immediately. No email delays, no social feed algorithms. Your audience sees your message now."
    },
    {
      icon: BarChart,
      title: "Real-Time Analytics",
      description: "Track opens, clicks, conversions, and revenue for every broadcast. Know exactly what's working."
    }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              Broadcast at Scale, <span className="text-[#c9a961] font-normal">Engage Individually</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Reach thousands with one message, or have personal conversations—Telegram does both.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-[#c9a961]/30 transition-colors">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
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