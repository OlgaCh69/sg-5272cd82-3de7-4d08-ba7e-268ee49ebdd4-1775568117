import { Rocket, TrendingUp, Users, Target, Sparkles, RefreshCw, Award, Heart } from "lucide-react";

export function TelegramUseCases() {
  const useCases = [
    {
      icon: Rocket,
      title: "Product launches and announcements",
    },
    {
      icon: TrendingUp,
      title: "Promotional campaigns and offers",
    },
    {
      icon: Users,
      title: "Customer onboarding sequences",
    },
    {
      icon: Target,
      title: "Lead capture and nurturing",
    },
    {
      icon: Sparkles,
      title: "Product recommendation flows",
    },
    {
      icon: RefreshCw,
      title: "Re-engagement campaigns",
    },
    {
      icon: Award,
      title: "VIP customer communication",
    },
    {
      icon: Heart,
      title: "Post-purchase engagement",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              What You Can Automate on Telegram
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Telegram automation allows you to build structured communication flows that support both engagement and revenue.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-muted/30 border border-border/50 hover:border-blue-500/30 transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-500/20 transition-colors">
                  <useCase.icon className="h-6 w-6 text-blue-600" />
                </div>
                
                <p className="text-foreground font-medium leading-relaxed">
                  {useCase.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}