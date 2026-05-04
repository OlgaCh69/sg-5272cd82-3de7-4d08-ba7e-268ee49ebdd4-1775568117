import { XCircle, CheckCircle2 } from "lucide-react";

export function BeautyClinicBeforeAfter() {
  const before = [
    "Missed DMs",
    "Slow replies",
    "Empty slots in calendar",
    "Overworked staff"
  ];

  const after = [
    "Instant replies 24/7",
    "Fully booked schedule",
    "Automated front desk",
    "More revenue, less stress"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f5f5dc]/10 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">
            From Manual Chaos to Automated Excellence
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border-2 border-red-100 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <XCircle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a]">Before</h3>
            </div>
            <ul className="space-y-4">
              {before.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#d4af37]/5 to-[#ffb6c1]/5 rounded-2xl p-8 border-2 border-[#d4af37]/30 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffb6c1] flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a]">After</h3>
            </div>
            <ul className="space-y-4">
              {after.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}