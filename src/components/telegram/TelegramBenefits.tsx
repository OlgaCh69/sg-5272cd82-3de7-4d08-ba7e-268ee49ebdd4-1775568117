import { TrendingUp, MessageCircle, Users, Target, Zap, DollarSign, Clock } from "lucide-react";

export function TelegramBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "95%+ Open Rates",
      description: "Telegram messages get read. No email filters, no social algorithm throttling. Your audience sees every message."
    },
    {
      icon: MessageCircle,
      title: "Two-Way Conversations",
      description: "AI handles customer questions, product inquiries, and support requests in private chats—automatically, 24/7."
    },
    {
      icon: Users,
      title: "Unlimited Audience",
      description: "Unlike WhatsApp Business (capped at 256 contacts), Telegram channels and groups scale infinitely. Reach thousands, millions."
    },
    {
      icon: Target,
      title: "Personalized Broadcasts",
      description: "Segment subscribers based on behavior and send targeted offers. AI tailors messages to individual preferences."
    },
    {
      icon: Zap,
      title: "Instant Checkouts",
      description: "Direct purchase links in messages. Customers buy without leaving Telegram. Frictionless conversion."
    },
    {
      icon: DollarSign,
      title: "Lower CAC",
      description: "Telegram marketing is nearly free compared to paid ads. Build a direct audience channel you own and control."
    },
    {
      icon: Clock,
      title: "Always-On Engagement",
      description: "Automated campaigns for launches, flash sales, cart recovery, and re-engagement run around the clock."
    }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              Direct Access, <span className="text-[#c9a961] font-normal">Infinite Scale</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Build a revenue channel you own—no algorithm changes, no ad costs, no platform risk.
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