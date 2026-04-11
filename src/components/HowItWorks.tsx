import { Plug, PenTool, Rocket } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Plug,
      step: "1",
      title: "Connect Your Store & Channels",
      description: "Integrate your ecommerce platform and messaging channels in minutes.",
    },
    {
      icon: PenTool,
      step: "2",
      title: "Build Your Automation Flows",
      description: "We design high-converting conversation flows tailored to your business.",
    },
    {
      icon: Rocket,
      step: "3",
      title: "Launch & Optimize",
      description: "Go live quickly and continuously improve performance with real data.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              A Simple System That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Scales With You
              </span>
            </h2>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Number Badge */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center">
                        <step.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}