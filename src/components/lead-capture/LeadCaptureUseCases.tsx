import { Building2, ShoppingBag, Briefcase, Users, GraduationCap, MapPin } from "lucide-react";

export function LeadCaptureUseCases() {
  const useCases = [
    {
      icon: Building2,
      title: "Real Estate Agencies",
      description: "Capturing buyer and seller inquiries"
    },
    {
      icon: ShoppingBag,
      title: "Ecommerce Stores",
      description: "Handling product questions"
    },
    {
      icon: Briefcase,
      title: "Service Businesses",
      description: "Qualifying new leads"
    },
    {
      icon: Users,
      title: "Agencies",
      description: "Booking discovery calls"
    },
    {
      icon: GraduationCap,
      title: "Coaches & Consultants",
      description: "Capturing prospects"
    },
    {
      icon: MapPin,
      title: "Local Businesses",
      description: "Responding after hours"
    }
  ];

  return (
    <section className="py-20 bg-[#f0f4f8]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a2332]">
            Built for Businesses That Depend on Fast Follow-Up
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#0ea5e9]/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-[#0ea5e9]" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#1a2332]">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}