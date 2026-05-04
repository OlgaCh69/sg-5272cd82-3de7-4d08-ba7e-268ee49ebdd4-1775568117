import { XCircle, CheckCircle2 } from "lucide-react";

export function RevenueBeforeAfter() {
  const before = [
    "Messages unanswered",
    "Leads lost",
    "Sales inconsistent",
    "Team overwhelmed"
  ];

  const after = [
    "Every message handled instantly",
    "Leads captured automatically",
    "More bookings and sales",
    "Scalable growth system"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
            From Missed Opportunities to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] to-[#60efff]"> Predictable Revenue</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-red-400" />
                <h3 className="text-2xl font-bold text-white">Before</h3>
              </div>
              <ul className="space-y-4">
                {before.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-gradient-to-br from-[#00ff87]/10 to-[#60efff]/5 border border-[#00ff87]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#00ff87]" />
                <h3 className="text-2xl font-bold text-white">After</h3>
              </div>
              <ul className="space-y-4">
                {after.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#00ff87] mt-1">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}