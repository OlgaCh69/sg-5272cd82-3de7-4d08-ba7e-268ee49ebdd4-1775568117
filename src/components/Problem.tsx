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
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-destructive/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-4">
            You're <span className="text-destructive">Losing Sales</span> Every Day
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Without automation, your business is leaving money on the table
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 border border-destructive/20 hover:border-destructive/40 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2.5">
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