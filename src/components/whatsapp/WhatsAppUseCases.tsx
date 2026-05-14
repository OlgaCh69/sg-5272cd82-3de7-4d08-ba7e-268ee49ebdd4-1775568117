import { ShoppingCart, MessageSquare, Package, TrendingUp, Gift, Users } from "lucide-react";

export function WhatsAppUseCases() {
  const useCases = [
    {
      icon: ShoppingCart,
      title: "Abandoned Cart Recovery",
      description: "Automatically follow up with customers who abandon their carts via WhatsApp within minutes. Include product images, answer objections, and offer time-sensitive incentives."
    },
    {
      icon: MessageSquare,
      title: "Product Questions & Support",
      description: "Answer sizing questions, shipping inquiries, and product details instantly—24/7. No customer waits for responses."
    },
    {
      icon: Package,
      title: "Order Updates",
      description: "Send proactive shipping notifications, delivery updates, and post-purchase check-ins to reduce WISMO (Where Is My Order) tickets."
    },
    {
      icon: TrendingUp,
      title: "Upsells & Cross-Sells",
      description: "Recommend complementary products based on cart contents or purchase history. Increase AOV automatically."
    },
    {
      icon: Gift,
      title: "Post-Purchase Engagement",
      description: "Request reviews, offer loyalty rewards, and drive repeat purchases with automated WhatsApp campaigns."
    },
    {
      icon: Users,
      title: "VIP Customer Outreach",
      description: "Segment high-value customers for personalized offers, early access to sales, or exclusive product launches."
    }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              Everything Your Ecommerce Store <span className="text-[#c9a961] font-normal">Needs Automated</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              From cart recovery to VIP engagement—all running automatically on WhatsApp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-[#c9a961]/30 transition-colors">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <useCase.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
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