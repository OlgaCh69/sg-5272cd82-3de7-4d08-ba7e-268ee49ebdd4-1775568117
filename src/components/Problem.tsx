import { Clock, TrendingDown, Zap, Users } from "lucide-react";

export function Problem() {
  const problems = [
    {
      icon: Clock,
      title: "Slow customer responses",
      description: "Customers wait hours for answers while competitors respond instantly",
    },
    {
      icon: TrendingDown,
      title: "Missed sales opportunities",
      description: "Potential buyers leave before getting the info they need",
    },
    {
      icon: Zap,
      title: "No automation in your business",
      description: "Manual processes waste time and limit growth potential",
    },
    {
      icon: Users,
      title: "Overloaded support team",
      description: "Your team spends time on repetitive questions instead of real issues",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-4">
            <span className="text-destructive">You're Losing Sales</span> Every Day
          </h2>
          <p className="text-lg text-muted-foreground">Without automation, your business is leaving money on the table</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="glass-card p-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-destructive/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}