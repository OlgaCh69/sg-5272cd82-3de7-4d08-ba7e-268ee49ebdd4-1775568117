import { MessageSquare, Clock, ShoppingBag, TrendingUp, CheckCircle, Zap } from "lucide-react";

export function ProductQuestions() {
  const features = [
    {
      icon: Clock,
      title: "Instant Answers",
      description: "Customer asks about sizing, materials, or shipping—AI responds in under 60 seconds with accurate product information."
    },
    {
      icon: CheckCircle,
      title: "No Question Unanswered",
      description: "24/7 availability means no lost sales from unanswered questions during off-hours or high-volume periods."
    },
    {
      icon: ShoppingBag,
      title: "Purchase-Ready Responses",
      description: "AI doesn't just answer—it moves customers toward checkout with product recommendations and direct purchase links."
    },
    {
      icon: TrendingUp,
      title: "Conversion Boost",
      description: "Stores see 20-40% higher conversion rates when product questions are answered immediately versus manually."
    },
    {
      icon: Zap,
      title: "Smart Escalation",
      description: "Complex questions route to your team automatically. You only handle what AI can't—typically 15-30% of inquiries."
    },
    {
      icon: MessageSquare,
      title: "Contextual Understanding",
      description: "AI references the customer's browsing history and cart to provide personalized, relevant answers."
    }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              Product Questions Answered <span className="text-[#c9a961] font-normal">Instantly</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              No more waiting hours for responses. AI handles sizing, shipping, materials, availability—automatically.
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