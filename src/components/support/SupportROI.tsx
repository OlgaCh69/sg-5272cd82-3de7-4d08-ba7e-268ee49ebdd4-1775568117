import { TrendingUp, DollarSign, Clock, Users } from "lucide-react";

export function SupportROI() {
  const metrics = [
    {
      icon: DollarSign,
      metric: "50-70%",
      label: "Support cost reduction",
      description: "Automate 70-85% of tickets. Eliminate manual work on repetitive questions without sacrificing quality."
    },
    {
      icon: Clock,
      metric: "<1 min",
      label: "Average response time",
      description: "Instant responses drive higher CSAT, lower churn, and better customer lifetime value."
    },
    {
      icon: TrendingUp,
      metric: "35-50%",
      label: "Higher CSAT scores",
      description: "Fast, accurate support significantly improves customer satisfaction and retention."
    },
    {
      icon: Users,
      metric: "Unlimited",
      label: "Capacity scaling",
      description: "Handle 10x ticket volume without 10x team size. Support scales independently of headcount."
    }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              Expected <span className="text-[#c9a961] font-normal">Financial Impact</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Real numbers from ecommerce stores using AI support automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {metrics.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <p className="text-4xl font-serif font-light text-[#1a1a1a] mb-2">{item.metric}</p>
                <p className="text-lg text-[#c9a961] font-medium mb-4">{item.label}</p>
                <p className="text-gray-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}