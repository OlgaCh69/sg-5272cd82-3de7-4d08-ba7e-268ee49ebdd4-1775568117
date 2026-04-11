import { ShoppingCart } from "lucide-react";

export function AbandonedCart() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <ShoppingCart className="w-12 h-12 text-primary flex-shrink-0 mt-1" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Recover Lost Revenue Before It Disappears
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              A large percentage of ecommerce revenue is lost when shoppers leave before completing checkout.
            </p>
            
            <p>
              Often, those customers still intend to buy. They just need a reminder, an answer, or a final push.
            </p>
            
            <p>
              AI chatbots help you follow up automatically, re-engage interested visitors, and recover sales that would otherwise be lost.
            </p>
            
            <p className="text-foreground font-semibold">
              This turns automation into a direct revenue driver, not just a convenience feature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}