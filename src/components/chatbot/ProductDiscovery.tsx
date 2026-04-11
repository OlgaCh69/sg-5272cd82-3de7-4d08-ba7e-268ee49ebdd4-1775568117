import { Search } from "lucide-react";

export function ProductDiscovery() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <Search className="w-12 h-12 text-primary flex-shrink-0 mt-1" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Help Shoppers Find the Right Product Faster
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Many customers are interested, but not yet ready to buy.
            </p>
            
            <p>
              They need help choosing between products, understanding options, or finding the right fit.
            </p>
            
            <p>
              An AI chatbot can guide them through that process instantly.
            </p>
            
            <p className="text-foreground font-semibold">
              Instead of losing those visitors, you create a path that moves them toward a purchase with less friction and more confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}