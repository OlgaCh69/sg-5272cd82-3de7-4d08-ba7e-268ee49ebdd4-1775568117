import { Plug, Settings, Rocket } from "lucide-react";

export function InstagramHowItWorks() {
  const steps = [
    {
      icon: Plug,
      title: "Connect Instagram",
      description: "We integrate with Instagram Business API and your ecommerce platform. No technical complexity."
    },
    {
      icon: Settings,
      title: "Train Your AI",
      description: "We customize conversation flows based on your products, brand voice, and customer data."
    },
    {
      icon: Rocket,
      title: "Launch & Scale",
      description: "Your Instagram automation goes live. Monitor conversations and revenue in real-time."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              From Setup to <span className="text-[#c9a961] font-normal">Sales</span> in Days
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
                  <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                    <step.icon className="w-6 h-6 text-[#c9a961]" />
                  </div>
                  <div className="mb-4">
                    <span className="text-sm text-[#c9a961] font-medium">Step {index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-light text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-[#c9a961] to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}