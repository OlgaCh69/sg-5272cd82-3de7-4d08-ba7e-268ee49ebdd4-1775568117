import { Plug, Settings, Rocket } from "lucide-react";

export function AbandonedCartHowItWorks() {
  const steps = [
    {
      icon: Plug,
      title: "Connect Your Store",
      description: "We integrate with your ecommerce platform and map your checkout journey to identify drop-off points."
    },
    {
      icon: Settings,
      title: "Build Recovery Flows",
      description: "We create multi-channel automation sequences across WhatsApp, Instagram, and Telegram tailored to your customer behavior."
    },
    {
      icon: Rocket,
      title: "Go Live & Optimize",
      description: "Your cart recovery system starts capturing lost revenue automatically. We monitor and refine based on performance data."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              From Setup to <span className="text-[#c9a961] font-normal">Revenue Recovery</span> in Days
            </h2>
            <p className="text-xl text-white/70 font-light">
              No lengthy implementations. Start capturing lost revenue fast.
            </p>
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