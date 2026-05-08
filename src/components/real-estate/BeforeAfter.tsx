import { XCircle, CheckCircle2 } from "lucide-react";

export function BeforeAfter() {
  const before = [
    "Leads wait hours for responses",
    "Agents manually search property listings",
    "Viewings require back-and-forth coordination",
    "Missed calls are forgotten opportunities",
    "CRM updates delayed by days"
  ];

  const after = [
    "Leads answered in under 2 seconds",
    "AI matches properties automatically",
    "Viewings booked in one click",
    "Missed calls get instant SMS follow-up",
    "Every lead syncs directly to CRM"
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-[#c9a961] mb-4 font-medium">Transformation</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white mb-6">
              From Manual Bottlenecks to <span className="italic text-[#c9a961]">Automated Growth</span>
            </h2>
          </div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Before */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-3xl font-serif font-light text-white">Before</h3>
              </div>
              <div className="space-y-4">
                {before.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-red-500/20"
                  >
                    <span className="text-red-400 mt-1 flex-shrink-0">✗</span>
                    <p className="text-white/70 font-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#c9a961]/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-3xl font-serif font-light text-white">After</h3>
              </div>
              <div className="space-y-4">
                {after.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-[#c9a961]/30 hover:bg-white/10 hover:border-[#c9a961]/50 transition-all duration-300"
                  >
                    <span className="text-[#c9a961] mt-1 flex-shrink-0">✓</span>
                    <p className="text-white font-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}