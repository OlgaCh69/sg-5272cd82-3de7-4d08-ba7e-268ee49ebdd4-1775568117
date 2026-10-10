import { ArrowRight, Bell, CheckCircle2, MessageSquare, Settings, User } from "lucide-react";

export function AIWorkflowDemo() {
  const steps = [
    {
      icon: MessageSquare,
      label: "Guest Reports Issue",
      description: "Guest submits maintenance request via mobile app"
    },
    {
      icon: Settings,
      label: "AI Classifies",
      description: "System categorizes urgency and assigns to maintenance"
    },
    {
      icon: User,
      label: "Task Assigned",
      description: "Technician receives notification with room details"
    },
    {
      icon: Bell,
      label: "SLA Monitored",
      description: "System tracks resolution time against targets"
    },
    {
      icon: Bell,
      label: "Delay Escalated",
      description: "Automatic alert to management if SLA at risk"
    },
    {
      icon: User,
      label: "Team Updates",
      description: "Technician logs progress, guest receives updates"
    },
    {
      icon: CheckCircle2,
      label: "Completion Confirmed",
      description: "Guest confirmation, analytics updated, case closed"
    }
  ];

  return (
    <section className="py-24 bg-card/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            AI Workflow Orchestration
          </h2>
          <p className="text-lg text-muted-foreground">
            Illustrative example: Automated guest service request from intake to resolution
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 hidden lg:block" />

            {/* Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {/* Step Number and Icon */}
                    <div className="flex flex-col items-center mb-4">
                      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-background border-2 border-primary shadow-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="absolute top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white -translate-y-2 translate-x-6">
                        {index + 1}
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="text-center">
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        {step.label}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow for mobile */}
                    {index < steps.length - 1 && (
                      <div className="flex justify-center mt-4 lg:hidden">
                        <ArrowRight className="h-5 w-5 text-primary" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground italic">
              This is an illustrative workflow demonstration. Actual implementations are customized to your hotel's specific processes and systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}