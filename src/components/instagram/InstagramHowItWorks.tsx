import { Plug, PenTool, Rocket } from "lucide-react";

export function InstagramHowItWorks() {
  const steps = [
    {
      icon: Plug,
      title: "Connect Your Instagram Account",
      description: "Integrate your account into a structured automation system.",
    },
    {
      icon: PenTool,
      title: "Build Conversation Flows",
      description: "We create automated paths based on customer intent and buying behavior.",
    },
    {
      icon: Rocket,
      title: "Launch and Optimize",
      description: "Your system goes live and continuously improves with performance data.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              How Instagram Automation{" "}
              <span className="bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We design systems that fit your business, not generic templates.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-6 rounded-lg bg-muted/30 border border-border/30 hover:border-pink-500/30 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500/10 to-fuchsia-500/10 border border-pink-500/20 flex-shrink-0">
                  <step.icon className="w-6 h-6 text-pink-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-semibold text-pink-500">Step {index + 1}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}