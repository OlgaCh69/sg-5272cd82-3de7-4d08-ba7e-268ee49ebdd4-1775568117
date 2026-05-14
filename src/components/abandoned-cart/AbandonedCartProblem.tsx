import { AlertCircle, TrendingDown, Clock, DollarSign } from "lucide-react";

export function AbandonedCartProblem() {
  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              The <span className="text-[#c9a961] font-normal">€50k-€300k Problem</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Every abandoned cart represents revenue walking away. Without recovery automation, you're bleeding profit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">Massive Revenue Loss</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                For a €1M store, 70% cart abandonment means €700k in potential revenue left behind. Recovering 15-30% equals €105k-€210k recaptured annually.
              </p>
              <p className="text-sm text-[#c9a961] font-medium">€50k-€300k+ annual opportunity</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">Email Isn't Enough</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Email recovery campaigns have 15-20% open rates and take hours to send. By then, purchase intent is gone and customers bought elsewhere.
              </p>
              <p className="text-sm text-[#c9a961] font-medium">5-10% email recovery rate</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingDown className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">Timing Is Everything</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                The longer you wait after abandonment, the lower recovery rates drop. Instant follow-up is critical—manual processes can't compete.
              </p>
              <p className="text-sm text-[#c9a961] font-medium">Intent decays within minutes</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <AlertCircle className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">No Objection Handling</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Customers abandon for specific reasons: price concerns, shipping questions, uncertainty. Generic follow-ups don't address these objections.
              </p>
              <p className="text-sm text-[#c9a961] font-medium">One-size-fits-all fails</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}