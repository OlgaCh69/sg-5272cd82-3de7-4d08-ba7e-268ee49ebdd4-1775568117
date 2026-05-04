import { MessageSquare, Sparkles, Calendar, Bell, CheckCircle2 } from "lucide-react";

export function BeautyClinicHowItWorks() {
  const steps = [
    { icon: MessageSquare, title: "Client messages you on Instagram, WhatsApp, or calls." },
    { icon: Sparkles, title: "AI replies instantly, answers questions, and guides them." },
    { icon: Calendar, title: "Client books appointment directly." },
    { icon: Bell, title: "AI sends confirmations and reminders." },
    { icon: CheckCircle2, title: "You show up to a full calendar." }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f8f3ef] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">
            How It Works
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#d4af37] hover:shadow-lg transition-all">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-[#1a1a1a]" />
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-[#d4af37] mb-2">Step {index + 1}</div>
                <p className="text-lg text-[#1a1a1a] font-medium">{step.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}