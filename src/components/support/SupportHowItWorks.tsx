import { Search, Wrench, Rocket } from "lucide-react";

export function SupportHowItWorks() {
  const steps = [
    {
      icon: Search,
      step: "Step 1",
      title: "Analyze Your Support Flow",
      description: "We identify the most common questions and support patterns.",
    },
    {
      icon: Wrench,
      step: "Step 2",
      title: "Build Automation Logic",
      description: "We create structured responses and conversation flows tailored to your store.",
    },
    {
      icon: Rocket,
      step: "Step 3",
      title: "Launch and Optimize",
      description: "Your system goes live and improves over time based on real interactions.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              How Our Customer Support Automation Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We build support systems based on your actual customer conversations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm font-medium text-primary">{step.step}</div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}