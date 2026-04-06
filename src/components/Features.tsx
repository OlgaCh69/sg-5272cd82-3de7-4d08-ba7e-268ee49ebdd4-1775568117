import { ShoppingBag, Search, Package, Zap, Sparkles, Rocket } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: ShoppingBag,
      title: "Smart Shopping",
      description: "Beautiful product catalogs right inside chat.",
    },
    {
      icon: Search,
      title: "Instant Search",
      description: "Users find products fast with powerful search.",
    },
    {
      icon: Package,
      title: "Order Tracking",
      description: "Customers check orders without leaving chat.",
    },
    {
      icon: Zap,
      title: "Automations",
      description: "Send deals, updates, and promotions automatically.",
    },
    {
      icon: Sparkles,
      title: "AI Assistant",
      description: "Answer questions and recommend products.",
    },
    {
      icon: Rocket,
      title: "Lightning Fast",
      description: "Built for speed and smooth performance.",
    },
  ];

  return (
    <section className="py-24 px-4" id="features">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-4">
            Powerful Features to <span className="text-gradient">Drive Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to automate and scale your business
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 shadow-card border border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}