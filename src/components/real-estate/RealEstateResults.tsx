import { TrendingUp, Clock, DollarSign, Users } from "lucide-react";

export function RealEstateResults() {
  const results = [
    {
      icon: TrendingUp,
      stat: "+40%",
      label: "More leads captured through 24/7 automation"
    },
    {
      icon: DollarSign,
      stat: "5–15%",
      label: "Conversion lift from lead to signed contract"
    },
    {
      icon: Clock,
      stat: "5-second",
      label: "Missed-call SMS response time"
    },
    {
      icon: Users,
      stat: "24/7",
      label: "Lead handling without extra staff"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(var(--real-estate-navy))] to-[hsl(var(--real-estate-dark))]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Built to Capture More Leads and Convert Faster
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--real-estate-blue))]/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-[hsl(var(--real-estate-blue))]" />
                </div>
                <div className="text-4xl font-bold text-[hsl(var(--real-estate-blue))] mb-2">{result.stat}</div>
                <p className="text-gray-300">{result.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}