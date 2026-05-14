import { MessageSquare, AlertCircle, HelpCircle, DollarSign, Truck, Clock, Shield } from "lucide-react";

export function BuyingObjections() {
  const objections = [
    { icon: DollarSign, label: "Price concerns" },
    { icon: Truck, label: "Shipping questions" },
    { icon: HelpCircle, label: "Product uncertainty" },
    { icon: Clock, label: "Need more time" },
    { icon: Shield, label: "Trust & returns" },
    { icon: AlertCircle, label: "Stock availability" }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-6 h-6 text-[#c9a961]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a]">
              Recover Sales by Solving the <span className="text-[#c9a961] font-normal">Last Objection</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-gray-600 font-light mb-8">
            <p>
              Many abandoned carts are not lost because the customer isn't interested.
            </p>
            
            <p>
              They're lost because one final objection is never addressed.
            </p>
            
            <p className="text-[#1a1a1a] font-medium">
              That objection could be:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {objections.map((objection, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#c9a961]/30 transition-colors">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-10 h-10 bg-[#c9a961]/10 rounded-lg flex items-center justify-center">
                    <objection.icon className="w-5 h-5 text-[#c9a961]" />
                  </div>
                  <p className="text-[#1a1a1a] font-medium">{objection.label}</p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-[#1a1a1a] font-medium">
            Our abandoned cart recovery systems help bring those customers back into a conversation where the sale can still happen.
          </p>
        </div>
      </div>
    </section>
  );
}