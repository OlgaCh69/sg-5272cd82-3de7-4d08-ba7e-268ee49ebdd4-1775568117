import { CheckCircle2, ShoppingCart, MessageCircle, TrendingUp, Target, Clock, Repeat, Zap } from "lucide-react";

export function AbandonedCartUseCases() {
  const useCases = [
    { icon: ShoppingCart, title: "Recover incomplete checkouts", description: "Automatically follow up with customers who start but don't complete purchase" },
    { icon: Target, title: "Re-engage high-intent shoppers", description: "Reach customers who showed strong buying signals before abandoning" },
    { icon: MessageCircle, title: "Answer pre-purchase questions", description: "AI addresses sizing, shipping, and product concerns automatically" },
    { icon: Clock, title: "Perfect timing triggers", description: "Follow-up sequences activated at optimal intervals for maximum recovery" },
    { icon: TrendingUp, title: "Improve return on traffic", description: "Get more revenue from visitors you already paid to acquire" },
    { icon: Repeat, title: "Multi-touch campaigns", description: "3-5 automated touchpoints over 7 days if first message doesn't convert" },
    { icon: Zap, title: "Objection handling", description: "Conversational AI addresses price, shipping, and trust concerns in real-time" }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] text-center mb-8">
            What Cart Recovery <span className="text-[#c9a961] font-normal">Automation Does</span>
          </h2>
          
          <p className="text-xl text-gray-600 font-light mb-12 text-center">
            Our system is designed to support ecommerce brands at the point where conversion is most vulnerable.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#c9a961]/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#c9a961]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-5 h-5 text-[#c9a961]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-light text-[#1a1a1a] mb-2">{useCase.title}</h3>
                    <p className="text-gray-600 font-light text-sm leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}