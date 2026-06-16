import { AlertCircle, BarChart3, Lock, TrendingDown, Users, Workflow } from "lucide-react";

export function ProblemSection() {
  const challenges = [
    { icon: Workflow, title: "Siloed Departments", desc: "Teams operate in isolation" },
    { icon: TrendingDown, title: "Manual Approvals", desc: "Slow decision cycles" },
    { icon: Users, title: "Knowledge Fragmentation", desc: "Critical insights locked in silos" },
    { icon: Lock, title: "Compliance Risk", desc: "Unaudited AI deployment" },
    { icon: BarChart3, title: "Limited Visibility", desc: "No operational intelligence" },
    { icon: AlertCircle, title: "Workforce Bottlenecks", desc: "Multilingual support gaps" },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Most Enterprises Don't Need More AI Tools.
            <span className="block text-gradient mt-2">They Need Operational Intelligence.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Fragmented systems create operational friction, compliance gaps, and missed opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {challenges.map((challenge, i) => (
            <div key={i} className="glass-card p-6 rounded-lg hover:bg-card/50 transition-all">
              <challenge.icon className="w-8 h-8 text-destructive mb-4" />
              <h3 className="font-semibold text-lg mb-2">{challenge.title}</h3>
              <p className="text-sm text-muted-foreground">{challenge.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass-panel p-8 rounded-xl max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gradient mb-2">O.N.E.Tech Infrastructure Layer</h3>
            <p className="text-muted-foreground">Connecting your enterprise ecosystem</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {["People", "Processes", "Systems", "AI Agents"].map((item, i) => (
              <div key={i} className="glass-card p-4 rounded-lg text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                  <span className="text-primary font-bold">{i + 1}</span>
                </div>
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}