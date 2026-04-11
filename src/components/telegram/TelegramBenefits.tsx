import { TrendingUp, Target, MessageCircle, Repeat, Zap } from "lucide-react";

export function TelegramBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "High Open Rates",
      description: "Your messages are seen more consistently compared to email or social media.",
    },
    {
      icon: Target,
      title: "Direct Customer Access",
      description: "No algorithm limits. You reach your audience when it matters.",
    },
    {
      icon: MessageCircle,
      title: "Stronger Engagement",
      description: "Telegram users are more active and responsive.",
    },
    {
      icon: Repeat,
      title: "Repeat Sales Opportunities",
      description: "Stay connected with customers beyond the first purchase.",
    },
    {
      icon: Zap,
      title: "Scalable Communication",
      description: "Engage thousands of users without increasing workload.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Ecommerce Brands Are Turning to Telegram
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Telegram gives ecommerce brands something most platforms don't—direct, uninterrupted communication.
            </p>
            <p className="text-lg text-muted-foreground">
              When combined with automation, it becomes a powerful growth tool.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-background border border-border/50 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}