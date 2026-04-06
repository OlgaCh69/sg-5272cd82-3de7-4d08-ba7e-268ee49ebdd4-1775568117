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
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-destructive/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-4">
            You're <span className="text-destructive">Losing Sales</span> Every Day
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Without automation, your business is leaving money on the table
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 border border-destructive/20 hover:border-destructive/40 transition-all hover:scale-105"
            >
              <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}