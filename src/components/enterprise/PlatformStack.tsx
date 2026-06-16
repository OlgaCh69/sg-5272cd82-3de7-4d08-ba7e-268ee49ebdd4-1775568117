import { Database, Shield, TrendingUp, Workflow, Target } from "lucide-react";

export function PlatformStack() {
  const layers = [
    {
      number: 1,
      icon: Database,
      title: "Enterprise Systems",
      items: ["ERP", "CRM", "HR", "Operations", "Finance", "Trading Platforms"],
      color: "from-primary/20 to-accent/20"
    },
    {
      number: 2,
      icon: Workflow,
      title: "Agentic Coordination Layer",
      items: ["AI Agents", "Workflow Intelligence", "Decision Routing", "Task Orchestration"],
      color: "from-accent/20 to-primary/30"
    },
    {
      number: 3,
      icon: Shield,
      title: "Governance Layer",
      items: ["Policies", "Audit Trails", "Approvals", "Compliance Controls"],
      color: "from-primary/30 to-accent/30"
    },
    {
      number: 4,
      icon: TrendingUp,
      title: "Operational Intelligence",
      items: ["Predictive Insights", "Executive Visibility", "Risk Detection", "Workforce Intelligence"],
      color: "from-accent/30 to-primary/40"
    },
    {
      number: 5,
      icon: Target,
      title: "Strategic Outcomes",
      items: ["Reduced Friction", "Faster Execution", "Higher Productivity", "Governed AI Adoption"],
      color: "from-primary/40 to-accent/40"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The O.N.E.Tech <span className="text-gradient">Infrastructure Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Five integrated layers that transform enterprise operations into intelligent, governed, and predictive systems.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {layers.map((layer, i) => (
            <div
              key={i}
              className="glass-panel p-8 rounded-xl hover:bg-card/60 transition-all group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center flex-shrink-0`}>
                  <layer.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-primary">Layer {layer.number}</span>
                    <h3 className="text-2xl font-bold">{layer.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 rounded-lg glass-card text-sm border border-border/50 group-hover:border-primary/30 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}