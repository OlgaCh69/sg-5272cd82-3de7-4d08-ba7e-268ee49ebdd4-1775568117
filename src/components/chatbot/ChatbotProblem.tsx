import { AlertCircle, Clock, TrendingDown } from "lucide-react";

export function ChatbotProblem() {
  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] text-center mb-16">
            Manual Support Is <span className="text-[#c9a961] font-normal">Costing You Sales</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">Slow Responses</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Customers wait hours for answers. By the time you respond, they've already purchased from a competitor.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingDown className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">Lost Opportunities</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                70% of carts abandoned, product questions unanswered, buying objections never addressed.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <AlertCircle className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">Doesn't Scale</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Your team is overwhelmed. Hiring more support staff is expensive, slow, and still can't cover 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}