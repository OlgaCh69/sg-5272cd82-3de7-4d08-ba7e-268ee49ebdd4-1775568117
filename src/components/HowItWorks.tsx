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
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-4">
            How It Works
          </h2>
          <p className="text-2xl font-heading mb-2">
            Simple. Powerful. <span className="text-gradient">Effective.</span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="glass-card p-6 rounded-2xl shadow-card text-center hover:shadow-glow transition-all duration-300">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 relative">
                  <step.icon className="w-8 h-8 text-primary" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 text-primary">→</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}