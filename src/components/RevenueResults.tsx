import { TrendingUp, Zap, Target, Clock, Users } from "lucide-react";

export function RevenueResults() {
  const stats = [
    { icon: TrendingUp, stat: "+40%", label: "more leads captured" },
    { icon: Target, stat: "5–15%", label: "higher conversion rates" },
    { icon: Users, stat: "20–40%", label: "lost bookings recovered" },
    { icon: Clock, stat: "<2 sec", label: "instant response time" },
    { icon: Zap, stat: "24/7", label: "sales coverage without hiring" }
  ];

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
            What Happens When You Install a Revenue System
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-8 text-center hover:border-[#00ff87]/50 hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00ff87] to-[#60efff] flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-[#0a0a0a]" />
                </div>
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] to-[#60efff] mb-2">
                  {item.stat}
                </p>
                <p className="text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}