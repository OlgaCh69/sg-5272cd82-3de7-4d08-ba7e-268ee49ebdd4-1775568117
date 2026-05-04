import { TrendingUp, Clock, DollarSign, Users } from "lucide-react";

export function RealEstateResults() {
  const results = [
    {
      icon: TrendingUp,
      stat: "+40%",
      label: "More Leads Captured",
      description: "Through 24/7 automation"
    },
    {
      icon: DollarSign,
      stat: "5-15%",
      label: "Conversion Lift",
      description: "From lead to signed contract"
    },
    {
      icon: Clock,
      stat: "5 seconds",
      label: "Missed-Call Response",
      description: "Instant SMS follow-up"
    },
    {
      icon: Users,
      stat: "24/7",
      label: "Lead Handling",
      description: "Without extra staff"
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            Built to Capture More Leads and <span className="text-blue-400">Convert Faster</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real results from real estate agencies using AI automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-blue-400 mb-2">{result.stat}</div>
                <div className="text-xl font-semibold mb-2">{result.label}</div>
                <div className="text-slate-400">{result.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}