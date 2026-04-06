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
    <section className="py-24 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent" id="how-it-works">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            How It Works
          </h2>
          <p className="text-2xl font-heading text-muted-foreground mb-2">
            Simple. Powerful. <span className="text-gradient">Effective.</span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="glass-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-glow hover:border-primary/30 transition-all duration-300 text-center">
                <div className="relative w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-primary" />
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-glow">
                    {step.number}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{step.title}</h3>
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