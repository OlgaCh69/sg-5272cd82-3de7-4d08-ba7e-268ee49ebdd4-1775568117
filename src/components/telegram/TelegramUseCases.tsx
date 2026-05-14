import { Send, ShoppingCart, Package, Gift, TrendingUp, Users, Bell } from "lucide-react";

export function TelegramUseCases() {
  const useCases = [
    {
      icon: Send,
      title: "Product Launches",
      description: "Broadcast new arrivals to your entire subscriber base. 95%+ open rates mean every launch reaches your audience."
    },
    {
      icon: ShoppingCart,
      title: "Flash Sales & Promos",
      description: "Time-sensitive offers with direct checkout links. Drive urgency and conversions with one-click purchasing."
    },
    {
      icon: Package,
      title: "Order & Shipping Updates",
      description: "Proactive notifications about order status, tracking, and delivery—reducing WISMO tickets automatically."
    },
    {
      icon: Gift,
      title: "Loyalty & VIP Programs",
      description: "Exclusive offers for subscribers. Early access to sales, special discounts, insider content."
    },
    {
      icon: TrendingUp,
      title: "Cart Recovery",
      description: "Automated follow-ups for abandoned carts sent via Telegram. Higher open and conversion rates than email."
    },
    {
      icon: Users,
      title: "Customer Support Bot",
      description: "AI answers FAQs, tracks orders, handles returns—24/7 without manual work. Scales infinitely."
    },
    {
      icon: Bell,
      title: "Restock Alerts",
      description: "Notify subscribers instantly when popular products come back in stock. Capture demand at peak intent."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              Every Touchpoint <span className="text-[#c9a961] font-normal">Automated</span>
            </h2>
            <p className="text-xl text-white/70 font-light">
              From first message to repeat purchase—Telegram becomes your direct sales channel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:border-[#c9a961]/30 transition-colors">
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