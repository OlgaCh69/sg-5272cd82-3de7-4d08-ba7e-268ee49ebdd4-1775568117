import { TrendingUp, Clock, DollarSign, Users, Zap } from "lucide-react";

export function Results() {
  const results = [
    {
      icon: TrendingUp,
      title: "Higher Conversion Rates",
      description: "Convert more visitors from existing traffic without increasing ad spend",
    },
    {
      icon: Clock,
      title: "Instant Response Times",
      description: "24/7 availability means no customer inquiry goes unanswered",
    },
    {
      icon: DollarSign,
      title: "Reduced Support Costs",
      description: "Automate repetitive questions and free your team for high-value tasks",
    },
    {
      icon: Users,
      title: "Increased Customer Lifetime Value",
      description: "Personalized experiences that drive repeat purchases and loyalty",
    },
    {
      icon: Zap,
      title: "Scalable Growth Systems",
      description: "Handle 10x the volume without increasing team size",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Built for Performance,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Not Just Convenience
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We focus on what actually matters—growth, efficiency, and measurable results.
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid gap-6">
            {results.map((result, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-6 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <result.icon className="h-6 w-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
                  <p className="text-muted-foreground">{result.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}