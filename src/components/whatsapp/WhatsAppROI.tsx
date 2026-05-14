import { TrendingUp, DollarSign, Clock, Users } from "lucide-react";

export function WhatsAppROI() {
  const metrics = [
    {
      icon: DollarSign,
      metric: "€50k-€300k",
      label: "Annual cart recovery revenue",
      description: "Most stores recover 15-30% of abandoned carts via WhatsApp—significantly higher than email alone."
    },
    {
      icon: Clock,
      metric: "50-70%",
      label: "Support cost reduction",
      description: "AI handles 70-85% of inquiries autonomously. Eliminate manual repetitive work without sacrificing quality."
    },
    {
      icon: TrendingUp,
      metric: "20-40%",
      label: "Conversion rate increase",
      description: "Instant responses to product questions and buying objections drive more customers to checkout."
    },
    {
      icon: Users,
      metric: "3-6x",
      label: "ROI in Year 1",
      description: "Between recovered revenue, cost savings, and conversion lift, WhatsApp automation pays for itself many times over."
    }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              Expected <span className="text-[#c9a961] font-normal">Financial Impact</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Real numbers from ecommerce stores using WhatsApp automation.
            </p>
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