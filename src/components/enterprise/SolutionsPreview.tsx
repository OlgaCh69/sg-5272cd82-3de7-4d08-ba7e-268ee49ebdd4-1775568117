import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Home, DollarSign, Users, ArrowRight } from "lucide-react";

export function SolutionsPreview() {
  const solutions = [
    {
      icon: Building2,
      title: "Operational Infrastructure",
      desc: "Enterprise orchestration systems for large-scale operations across departments and workflows.",
      color: "from-primary/20 to-accent/20"
    },
    {
      icon: TrendingUp,
      title: "Revenue Infrastructure",
      desc: "AI-powered revenue operations, lead intelligence, sales automation, and pipeline visibility.",
      color: "from-accent/20 to-primary/30"
    },
    {
      icon: Home,
      title: "Real Estate Infrastructure",
      desc: "AI systems for developers, brokers, and property operations management.",
      color: "from-primary/30 to-accent/30"
    },
    {
      icon: DollarSign,
      title: "Forex Infrastructure",
      desc: "Governance-first AI for brokers: client acquisition, onboarding, retention, compliance, and operational intelligence.",
      color: "from-accent/30 to-primary/40"
    },
    {
      icon: Users,
      title: "Workforce Intelligence",
      desc: "Multilingual workforce support, knowledge access, and operational coordination at scale.",
      color: "from-primary/40 to-accent/40"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Infrastructure Solutions</span> For Every Enterprise Function
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI infrastructure tailored to your operational needs, compliance requirements, and strategic objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution, i) => (
            <div
              key={i}
              className="glass-panel p-8 rounded-xl hover:bg-card/60 transition-all group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6`}>
                <solution.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {solution.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {solution.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/solutions">
            <Button size="lg" variant="outline" className="border-border hover:bg-card/50">
              Explore All Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}