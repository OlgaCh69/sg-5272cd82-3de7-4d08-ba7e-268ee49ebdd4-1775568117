import { Repeat, Users, Rocket, Target, TrendingUp } from "lucide-react";

export function TelegramWhoItsFor() {
  const idealFor = [
    {
      icon: Repeat,
      title: "Brands with repeat purchase potential",
    },
    {
      icon: Users,
      title: "Ecommerce stores building communities",
    },
    {
      icon: Rocket,
      title: "Businesses launching products regularly",
    },
    {
      icon: Target,
      title: "Brands with active audiences",
    },
    {
      icon: TrendingUp,
      title: "Teams looking for better engagement channels",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Built for Ecommerce Brands Focused on Retention and Growth
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Telegram automation is especially valuable for ecommerce businesses that want to build long-term relationships with their customers.
            </p>
          </div>

          {/* Ideal For Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {idealFor.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-muted/30 border border-border/50 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                
                <p className="text-foreground font-medium leading-relaxed">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}