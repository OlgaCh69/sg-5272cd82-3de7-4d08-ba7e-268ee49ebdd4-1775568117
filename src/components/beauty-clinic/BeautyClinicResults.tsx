import { TrendingUp, Zap, PhoneOff, Users, Star } from "lucide-react";

export function BeautyClinicResults() {
  const results = [
    { icon: TrendingUp, text: "More bookings without more staff" },
    { icon: Zap, text: "Faster replies = higher conversion" },
    { icon: PhoneOff, text: "Fewer missed calls" },
    { icon: Users, text: "Reduced admin workload" },
    { icon: Star, text: "Higher client satisfaction" },
    { icon: TrendingUp, text: "Turn missed inquiries into paying clients" },
    { icon: Users, text: "Increase booking conversion without more staff" }
  ];

  return (
    <section className="py-20 bg-white">
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
          {results.map((item, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-[#f8f3ef] to-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#d4af37] hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffb6c1] flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-[#1a1a1a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a1a]">{item.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}