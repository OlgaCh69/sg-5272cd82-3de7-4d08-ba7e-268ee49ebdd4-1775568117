import { Link2, Settings, Zap, TrendingUp } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Link2,
      number: "1",
      title: "Connect",
      description: "Add your channels (Telegram, WhatsApp, etc.)",
    },
    {
      icon: Settings,
      number: "2",
      title: "Customize",
      description: "We build your bot around your needs.",
    },
    {
      icon: Zap,
      number: "3",
      title: "Automate",
      description: "Engage customers and boost conversions.",
    },
    {
      icon: TrendingUp,
      number: "4",
      title: "Grow",
      description: "Watch your business scale effortlessly.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent" id="how-it-works">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
            How It Works
          </h2>
          <p className="text-xl sm:text-2xl font-heading text-muted-foreground mb-2">
            Simple. Powerful. <span className="text-gradient">Effective.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-card border border-border/50 hover:shadow-glow hover:border-primary/30 transition-all duration-300 text-center">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-glow text-sm sm:text-base">
                    {step.number}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary/40 text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}