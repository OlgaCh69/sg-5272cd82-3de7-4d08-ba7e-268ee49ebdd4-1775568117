import { Zap, TrendingUp, Target, Users, Scale } from "lucide-react";

export function InstagramBenefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Faster Response Times",
      description: "Instant replies increase the likelihood of conversion.",
    },
    {
      icon: TrendingUp,
      title: "Higher Conversion Rates",
      description: "Guide customers from interest to purchase without friction.",
    },
    {
      icon: Target,
      title: "Capture More Leads",
      description: "Turn comments and DMs into structured opportunities.",
    },
    {
      icon: Users,
      title: "Reduce Manual Workload",
      description: "Automate repetitive conversations without losing quality.",
    },
    {
      icon: Scale,
      title: "Scale Without Losing Control",
      description: "Handle more conversations without overwhelming your team.",
    },
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Why Ecommerce Brands Use{" "}
              <span className="bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
                Instagram Automation
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Instagram drives attention. Automation turns that attention into revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-background border border-border/50 hover:border-pink-500/50 transition-colors"
              >
                <benefit.icon className="w-8 h-8 text-pink-500 mb-4" />
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
            {benefits.slice(3).map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-background border border-border/50 hover:border-pink-500/50 transition-colors"
              >
                <benefit.icon className="w-8 h-8 text-pink-500 mb-4" />
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}