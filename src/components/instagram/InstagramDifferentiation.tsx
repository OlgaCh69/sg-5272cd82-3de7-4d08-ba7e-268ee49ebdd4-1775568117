import { Target, TrendingUp, Users, Zap, Award } from "lucide-react";

export function InstagramDifferentiation() {
  const points = [
    { icon: Target, text: "Built specifically for ecommerce sales flows" },
    { icon: TrendingUp, text: "Focus on conversion, not just automation" },
    { icon: Users, text: "Designed around real customer behavior" },
    { icon: Zap, text: "Multi-channel integration (Instagram, WhatsApp, Telegram)" },
    { icon: Award, text: "Premium system for growth-focused brands" },
  ];

  return (
    <section id="differentiation" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Why Ecommerce Brands Choose{" "}
              <span className="bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
                OneTech Automation
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Many tools automate messages. Few are designed to increase revenue.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg bg-muted/30 border border-border/30"
              >
                <point.icon className="w-6 h-6 text-pink-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}