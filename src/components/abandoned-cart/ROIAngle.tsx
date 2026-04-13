import { TrendingUp } from "lucide-react";

export function ROIAngle() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <TrendingUp className="w-12 h-12 text-primary flex-shrink-0 mt-1" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Recover Revenue Without Increasing Ad Spend
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Most ecommerce brands focus heavily on acquiring more traffic.
            </p>
            
            <p>
              But recovering abandoned carts is often a more efficient growth move.
            </p>
            
            <p className="text-foreground font-semibold">
              Why?
            </p>
            
            <p>
              Because these shoppers already visited your store, explored your offer, and started checkout.
            </p>
            
            <p>
              Instead of spending more to replace lost buyers, you create a system that helps convert the ones you already had.
            </p>
            
            <p className="text-primary font-semibold text-xl">
              That means more revenue from the same traffic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}