import { ShoppingCart, Clock, MessageCircle, TrendingUp } from "lucide-react";

export function AbandonedCartFocus() {
  const points = [
    {
      icon: MessageCircle,
      text: "Reach customers where they actually respond",
    },
    {
      icon: Clock,
      text: "Send follow-up messages at the right time",
    },
    {
      icon: TrendingUp,
      text: "Reduce drop-off before purchase",
    },
    {
      icon: ShoppingCart,
      text: "Turn missed checkout into recovered revenue",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-sm font-medium text-green-700 dark:text-green-400 mb-4">
              <ShoppingCart className="h-4 w-4" />
              Abandoned Cart Recovery
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Recover Abandoned Carts Automatically on WhatsApp
            </h2>
          </div>

          {/* Main Copy */}
          <div className="prose prose-lg max-w-none text-center mb-12 space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              A large percentage of ecommerce revenue is lost at checkout.
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Customers leave because they get distracted, hesitate, or still have unanswered questions. WhatsApp automation helps you re-engage those customers quickly with timely, personalized follow-up.
            </p>
            
            <p className="text-xl text-foreground font-semibold">
              Instead of losing high-intent buyers, you create a second chance to convert them.
            </p>
          </div>

          {/* Supporting Points Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-6 rounded-xl bg-background border border-border/50 hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <point.icon className="h-6 w-6 text-green-600 dark:text-green-500" />
                </div>
                <p className="text-lg text-foreground font-medium">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}