import { ShoppingCart, MessageSquare, Package, Gift } from "lucide-react";

export function ChatbotUseCases() {
  const useCases = [
    { icon: ShoppingCart, title: "Cart Recovery", description: "Automated follow-ups within minutes of abandonment" },
    { icon: MessageSquare, title: "Product Questions", description: "Instant answers to sizing, shipping, availability" },
    { icon: Package, title: "Order Tracking", description: "Proactive updates and WISMO reduction" },
    { icon: Gift, title: "Post-Purchase", description: "Reviews, upsells, and repeat purchase campaigns" }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white text-center mb-16">
            Everything <span className="text-[#c9a961] font-normal">Automated</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <useCase.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-serif font-light text-white mb-4">{useCase.title}</h3>
                <p className="text-white/70 font-light leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}