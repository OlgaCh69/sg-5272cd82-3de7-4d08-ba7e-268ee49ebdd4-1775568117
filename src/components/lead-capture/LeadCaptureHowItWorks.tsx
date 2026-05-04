import { MessageSquare, Zap, UserCheck, Database, CheckCircle2 } from "lucide-react";

export function LeadCaptureHowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Visitor Starts Conversation",
      description: "Someone reaches out on your website, WhatsApp, or Instagram with a question or inquiry."
    },
    {
      icon: Zap,
      title: "AI Answers Instantly",
      description: "The assistant responds in seconds using your real website and service information."
    },
    {
      icon: UserCheck,
      title: "Smart Qualification",
      description: "It asks targeted questions to understand intent, need, budget, and urgency."
    },
    {
      icon: Database,
      title: "Lead Details Captured",
      description: "Contact information is collected naturally inside the conversation flow."
    },
    {
      icon: CheckCircle2,
      title: "Leads Sent to Sales",
      description: "Hot leads go to booking, qualified leads are stored in your CRM with full context."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a2332]">
            How the AI Lead Capture Assistant Works
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-[#0ea5e9]" />
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-[#0ea5e9]">Step {index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-[#1a2332]">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}