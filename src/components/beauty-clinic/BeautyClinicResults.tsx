import { TrendingUp, Zap, PhoneOff, Users, Star } from "lucide-react";

export function BeautyClinicResults() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a1a1a]">
            What This Means For Your Business
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-[#e75480] mb-4">
            🔥 Recover 20–40% of lost bookings automatically
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: TrendingUp, text: "More bookings without more staff" },
            { icon: Zap, text: "Faster replies = higher conversion" },
            { icon: PhoneOff, text: "Fewer missed calls" },
            { icon: Users, text: "Reduced admin workload" },
            { icon: Star, text: "Higher client satisfaction" },
            { icon: TrendingUp, text: "Turn missed inquiries into paying clients" },
            { icon: Users, text: "Increase booking conversion without more staff" }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#d4af37]/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffb6c1] flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{item.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}