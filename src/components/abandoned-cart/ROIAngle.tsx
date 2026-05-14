import { TrendingUp } from "lucide-react";

export function ROIAngle() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-[#c9a961]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white">
              Recover Revenue <span className="text-[#c9a961] font-normal">Without Increasing Ad Spend</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-white/70 font-light">
            <p>
              Most ecommerce brands focus heavily on acquiring more traffic.
            </p>
            
            <p>
              But recovering abandoned carts is often a more efficient growth move.
            </p>
            
            <p className="text-white font-medium">
              Why?
            </p>
            
            <p>
              Because these shoppers already visited your store, explored your offer, and started checkout.
            </p>
            
            <p>
              Instead of spending more to replace lost buyers, you create a system that helps convert the ones you already had.
            </p>
            
            <p className="text-[#c9a961] font-medium text-xl">
              That means more revenue from the same traffic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}