import { TrendingUp, Zap, PhoneOff, Users, Star } from "lucide-react";

export function BeautyClinicResults() {
  const results = [
    {
      icon: TrendingUp,
      title: "More bookings without more staff",
      description: "Scale your client acquisition without hiring"
    },
    {
      icon: Zap,
      title: "Faster replies = higher conversion",
      description: "Instant responses capture hot leads"
    },
    {
      icon: PhoneOff,
      title: "Fewer missed calls",
      description: "Every call becomes a potential booking"
    },
    {
      icon: Users,
      title: "Reduced admin workload",
      description: "Free your team from repetitive tasks"
    },
    {
      icon: Star,
      title: "Higher client satisfaction",
      description: "24/7 availability delights customers"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What This Means For Your Business
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#d4af37]/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffb6c1] flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{result.title}</h3>
                <p className="text-gray-400 text-sm">{result.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}