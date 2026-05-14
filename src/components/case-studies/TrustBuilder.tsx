import { Target } from "lucide-react";

export function TrustBuilder() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-[#c9a961]/10 rounded-lg flex items-center justify-center">
              <Target className="h-8 w-8 text-[#c9a961]" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white">
            Built for <span className="text-[#c9a961] font-normal">Ecommerce Growth</span>
          </h2>
          
          <p className="text-xl text-white/70 font-light leading-relaxed">
            Our focus is not just on automation as a feature, but on building systems that improve how ecommerce businesses operate.
          </p>
          
          <p className="text-xl text-white/70 font-light leading-relaxed">
            From conversion to support to retention, every implementation is designed around measurable impact.
          </p>
        </div>
      </div>
    </section>
  );
}