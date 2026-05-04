import { MessageSquare, Sparkles, Calendar, Bell, CheckCircle2 } from "lucide-react";

export function BeautyClinicHowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Client messages you on Instagram, WhatsApp, or calls.",
      number: "1"
    },
    {
      icon: Sparkles,
      title: "AI replies instantly, answers questions, and guides them.",
      number: "2"
    },
    {
      icon: Calendar,
      title: "Client books appointment directly.",
      number: "3"
    },
    {
      icon: Bell,
      title: "AI sends confirmations and reminders.",
      number: "4"
    },
    {
      icon: CheckCircle2,
      title: "You show up to a full calendar.",
      number: "5"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">
            How It Works
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="flex items-start gap-6 bg-gradient-to-r from-[#f5f5dc]/10 to-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#d4af37]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffb6c1] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="h-6 w-6 text-[#d4af37]" />
                    <p className="text-lg font-semibold text-[#1a1a1a]">{step.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}