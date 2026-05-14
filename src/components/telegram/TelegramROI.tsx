import { TrendingUp, DollarSign, Users, Zap } from "lucide-react";

export function TelegramROI() {
  const metrics = [
    {
      icon: TrendingUp,
      metric: "95%+",
      label: "Message open rates",
      description: "Telegram messages get read. No spam filters, no algorithm throttling—direct access to your audience."
    },
    {
      icon: DollarSign,
      metric: "€80k-€400k",
      label: "Annual direct revenue",
      description: "From broadcasts, bot sales, and automated campaigns. Telegram becomes a predictable revenue channel."
    },
    {
      icon: Users,
      metric: "3-5x",
      label: "Engagement vs email",
      description: "Higher click-through rates, faster response times, and better conversion rates than email marketing."
    },
    {
      icon: Zap,
      metric: "Nearly Free",
      label: "Cost per message",
      description: "No per-message fees like SMS. Build unlimited audience reach with minimal ongoing costs."
    }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              Expected <span className="text-[#c9a961] font-normal">Business Impact</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {metrics.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <p className="text-4xl font-serif font-light text-[#1a1a1a] mb-2">{item.metric}</p>
                <p className="text-lg text-[#c9a961] font-medium mb-4">{item.label}</p>
                <p className="text-gray-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}