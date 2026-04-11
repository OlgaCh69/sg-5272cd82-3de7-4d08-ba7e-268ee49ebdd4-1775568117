import { Plug, PenTool, Rocket } from "lucide-react";

export function WhatsAppHowItWorks() {
  const steps = [
    {
      icon: Plug,
      step: "1",
      title: "Connect Your Systems",
      description: "Integrate your ecommerce business with WhatsApp and your existing workflow.",
    },
    {
      icon: PenTool,
      step: "2",
      title: "Build Your Automation Flows",
      description: "We create structured conversation paths based on your customer journey, support needs, and sales goals.",
    },
    {
      icon: Rocket,
      step: "3",
      title: "Launch and Optimize",
      description: "Once live, your automation starts handling conversations in real time while performance data helps improve results over time.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              How Our WhatsApp Automation Works
            </h2>
            <p className="text-xl text-muted-foreground">
              We make the setup simple, but the impact is powerful.
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500/20 via-green-500/40 to-green-500/20" />

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Number Badge */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-green-500/10 border-4 border-background flex items-center justify-center">
                        <step.icon className="h-7 w-7 text-green-600 dark:text-green-500" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">
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