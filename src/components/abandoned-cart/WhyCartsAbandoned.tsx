import { CreditCard, Truck, HelpCircle, DollarSign, Clock } from "lucide-react";

export function WhyCartsAbandoned() {
  const reasons = [
    { icon: DollarSign, title: "Price Concerns", description: "55% abandon due to unexpected costs (shipping, taxes). Automated messages can offer discounts or free shipping." },
    { icon: CreditCard, title: "Complex Checkout", description: "28% abandon when checkout requires account creation or too many steps. Direct payment links solve this." },
    { icon: Truck, title: "Shipping Questions", description: "23% want faster delivery or more info. AI answers shipping questions instantly to keep them engaged." },
    { icon: HelpCircle, title: "Product Uncertainty", description: "21% aren't sure the product is right. Conversational follow-ups address doubts and provide reassurance." },
    { icon: Clock, title: "Not Ready Yet", description: "45% are browsing and need a gentle push. Multi-touch campaigns nurture them toward purchase." }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] text-center mb-16">
            Why Customers <span className="text-[#c9a961] font-normal">Abandon Carts</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-[#c9a961]/30 transition-colors">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <reason.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">{reason.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}