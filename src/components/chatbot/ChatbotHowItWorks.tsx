import { Plug, Settings, Rocket } from "lucide-react";

export function ChatbotHowItWorks() {
  const steps = [
    { icon: Plug, title: "Connect Your Store", description: "We integrate with your ecommerce platform and channels. No complex technical setup." },
    { icon: Settings, title: "Customize Your AI", description: "We train the AI on your products, brand voice, FAQs, and customer data." },
    { icon: Rocket, title: "Go Live", description: "Your chatbot starts handling conversations automatically. Monitor results in real-time." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] text-center mb-16">
            From Setup to <span className="text-[#c9a961] font-normal">Revenue</span> in Days
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                    <step.icon className="w-6 h-6 text-[#c9a961]" />
                  </div>
                  <div className="mb-4">
                    <span className="text-sm text-[#c9a961] font-medium">Step {index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">{step.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{step.description}</p>
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