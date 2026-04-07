import { Clock, TrendingDown, Zap, Users } from "lucide-react";

export function Problem() {
  const problems = [
    {
      icon: Clock,
      title: "Slow customer responses",
      description: "Delayed replies cost you sales and hurt customer satisfaction"
    },
    {
      icon: TrendingDown,
      title: "Missed sales opportunities",
      description: "Potential customers leave before getting answers"
    },
    {
      icon: Zap,
      title: "No automation in your business",
      description: "Manual processes waste time and limit growth"
    },
    {
      icon: Users,
      title: "Overloaded support team",
      description: "Your team drowns in repetitive questions daily"
    }
  ];

  return (
    <section className="py-24 sm:py-32 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
            You're <span className="text-destructive">Losing Sales</span> Every Day
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Without automation, your business is leaving money on the table
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {problems.map((problem, i) => (
            <div key={i} className="text-center space-y-4 p-4 sm:p-0">
              <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center mx-auto">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="font-heading font-semibold text-base sm:text-lg">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}