import { UserPlus, MessageCircle, Sparkles, Tag, Repeat } from "lucide-react";

export function CustomerJourney() {
  const steps = [
    {
      icon: UserPlus,
      text: "User joins your Telegram channel",
    },
    {
      icon: MessageCircle,
      text: "Receives onboarding sequence",
    },
    {
      icon: Sparkles,
      text: "Gets product recommendations",
    },
    {
      icon: Tag,
      text: "Receives targeted offers",
    },
    {
      icon: Repeat,
      text: "Returns for repeat purchases",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Build a Complete Customer Journey on Telegram
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Telegram is not just for sending updates. It can support the full customer lifecycle.
            </p>
            <p className="text-lg text-muted-foreground">
              From the first interaction to repeat purchases, automation helps guide users step by step.
            </p>
          </div>

          {/* Journey Flow */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/20 via-blue-500/40 to-blue-500/20 rounded-full" />

            <div className="grid md:grid-cols-5 gap-6 relative">
              {steps.map((step, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-blue-500/10 border-4 border-background flex items-center justify-center mx-auto relative z-10">
                      <step.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-sm font-medium text-foreground leading-tight">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-blue-500/5 border border-blue-500/10">
            <p className="text-xl font-semibold text-foreground">
              This creates a system that keeps customers engaged long after their first visit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}