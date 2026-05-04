import { CheckCircle2 } from "lucide-react";

export function RevenueSolution() {
  const steps = [
    "First message → captured",
    "Questions → answered instantly",
    "Leads → qualified",
    "Appointments → booked",
    "Sales → recovered"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            One System That Handles It All
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-12">
            We build AI systems that manage the entire customer journey:
          </p>

          <div className="space-y-4 mb-12 max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#00ff87]/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00ff87] to-[#60efff] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#0a0a0a]" />
                </div>
                <p className="text-lg text-white font-semibold text-left">{step}</p>
              </div>
            ))}
          </div>

          <p className="text-xl text-white font-semibold">
            👉 Automatically. 24/7.
          </p>
        </div>
      </div>
    </section>
  );
}