import { TrendingUp, Package, Users, Target, Zap } from "lucide-react";

export function WhoItsFor() {
  const idealFor = [
    {
      icon: TrendingUp,
      text: "Fast-growing online stores",
    },
    {
      icon: Package,
      text: "Multi-product ecommerce brands",
    },
    {
      icon: Users,
      text: "Teams with high message volume",
    },
    {
      icon: Target,
      text: "Brands focused on conversion rate improvement",
    },
    {
      icon: Zap,
      text: "Businesses that want to scale support without scaling complexity",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Built for Ecommerce Brands Ready to Scale
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This is designed for ecommerce businesses that are serious about growth and want a more efficient way to manage customer communication.
            </p>
          </div>

          {/* Ideal For List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-center mb-8">Ideal For:</h3>
            <div className="grid gap-4">
              {idealFor.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-6 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-lg text-foreground font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}