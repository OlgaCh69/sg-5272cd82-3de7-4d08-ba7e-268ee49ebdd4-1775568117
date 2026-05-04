import { Building2, Sparkles, ShoppingCart, Briefcase, Users } from "lucide-react";

export function RevenueIndustries() {
  const industries = [
    { icon: Building2, name: "Real Estate" },
    { icon: Sparkles, name: "Beauty & Aesthetic Clinics" },
    { icon: ShoppingCart, name: "Ecommerce Brands" },
    { icon: Briefcase, name: "Service Businesses" },
    { icon: Users, name: "Agencies & Consultants" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">
            Built for Businesses That Rely on Conversations
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16">
            If your revenue depends on conversations, we have a system for you
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-[#00ff87]/50 hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00ff87] to-[#60efff] flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-[#0a0a0a]" />
                </div>
                <p className="text-white font-semibold">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}