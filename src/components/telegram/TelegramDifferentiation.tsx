import { Target, TrendingUp, Award, Users, Zap } from "lucide-react";

export function TelegramDifferentiation() {
  const points = [
    {
      icon: Target,
      text: "Built for ecommerce use cases, not generic messaging",
    },
    {
      icon: TrendingUp,
      text: "Focus on engagement and revenue, not just broadcasts",
    },
    {
      icon: Award,
      text: "Designed for long-term customer retention",
    },
    {
      icon: Users,
      text: "Multi-channel strategy (Telegram + other platforms)",
    },
    {
      icon: Zap,
      text: "Premium approach tailored for growth-focused brands",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why OneTech Automation for Telegram
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Most Telegram tools focus on basic messaging.
            </p>
            <p className="text-xl font-semibold text-foreground">
              We focus on building structured systems that drive measurable results.
            </p>
          </div>

          {/* Points Grid */}
          <div className="grid gap-4">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border/50 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <point.icon className="h-4 w-4 text-blue-600" />
                </div>
                <p className="text-lg text-foreground flex-1">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}