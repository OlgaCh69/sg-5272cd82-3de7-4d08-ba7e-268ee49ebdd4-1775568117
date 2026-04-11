import { ShoppingCart, Sparkles, Headphones, CheckCircle2, MessageCircle, TrendingUp, Heart, RefreshCw } from "lucide-react";

export function WhatsAppUseCases() {
  const useCases = [
    {
      icon: ShoppingCart,
      title: "Abandoned cart recovery",
    },
    {
      icon: Sparkles,
      title: "Product recommendation flows",
    },
    {
      icon: Headphones,
      title: "FAQ and customer support automation",
    },
    {
      icon: CheckCircle2,
      title: "Order confirmation and status updates",
    },
    {
      icon: MessageCircle,
      title: "Lead capture and qualification",
    },
    {
      icon: TrendingUp,
      title: "Upsell and cross-sell messaging",
    },
    {
      icon: Heart,
      title: "Post-purchase follow-up",
    },
    {
      icon: RefreshCw,
      title: "Re-engagement campaigns for past customers",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              What You Can Automate on WhatsApp
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our system is built around the workflows ecommerce brands use most.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 rounded-xl bg-muted/30 border border-border/50 hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <useCase.icon className="h-5 w-5 text-green-600 dark:text-green-500" />
                </div>
                
                <p className="text-sm font-semibold text-foreground">{useCase.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}