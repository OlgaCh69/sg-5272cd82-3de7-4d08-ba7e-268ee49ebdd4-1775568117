import { Target, TrendingUp, Award, Users, Zap } from "lucide-react";

export function WhatsAppDifferentiation() {
  const points = [
    {
      icon: Target,
      text: "Built specifically for ecommerce businesses",
    },
    {
      icon: TrendingUp,
      text: "Focused on revenue, not just message handling",
    },
    {
      icon: Award,
      text: "Premium positioning for growth-focused brands",
    },
    {
      icon: Users,
      text: "Structured around real customer buying behavior",
    },
    {
      icon: Zap,
      text: "Designed to support scale across channels",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Brands Choose OneTech Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              There are many automation tools on the market. Most were not built with ecommerce performance in mind.
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              OneTech Automation is designed around the conversations that directly impact sales, support efficiency, and customer experience.
            </p>
          </div>

          {/* Differentiation Points */}
          <div className="grid md:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-6 rounded-xl bg-background border border-border/50 hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <point.icon className="h-6 w-6 text-green-600 dark:text-green-500" />
                </div>
                <p className="text-lg text-foreground font-medium flex-1">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}