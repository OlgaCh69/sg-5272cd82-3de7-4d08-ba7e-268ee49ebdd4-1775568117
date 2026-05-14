import { Zap } from "lucide-react";

export function WhatsAppSolution() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <Zap className="w-4 h-4 text-[#c9a961]" />
            <span className="text-sm text-white/80 font-light">The Solution</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-8">
            24/7 WhatsApp AI That <span className="text-[#c9a961] font-normal">Converts Like Your Best Sales Rep</span>
          </h2>
          
          <p className="text-xl text-white/70 font-light leading-relaxed">
            O.N.E.Tech builds custom WhatsApp automation that captures abandoned cart revenue, answers product questions instantly, and handles customer conversations at scale—automatically.
          </p>
        </div>
      </div>
    </section>
  );
}