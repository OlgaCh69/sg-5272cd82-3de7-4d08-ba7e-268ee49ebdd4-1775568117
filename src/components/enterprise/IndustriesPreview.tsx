import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Building, Home, TrendingUp, Globe, Landmark, ArrowRight } from "lucide-react";

export function IndustriesPreview() {
  const industries = [
    {
      icon: Zap,
      name: "Energy & Oil/Gas",
      challenges: "Complex operations, regulatory compliance, multi-site coordination",
      outcome: "Unified operational intelligence across production, distribution, and compliance"
    },
    {
      icon: Building,
      name: "Infrastructure & Construction",
      challenges: "Project delays, resource coordination, quality control",
      outcome: "Real-time project intelligence and automated compliance workflows"
    },
    {
      icon: Home,
      name: "Real Estate Development",
      challenges: "Client management, sales coordination, property operations",
      outcome: "Intelligent CRM, automated follow-ups, operational dashboards"
    },
    {
      icon: TrendingUp,
      name: "Financial Services",
      challenges: "Client onboarding, compliance documentation, service delivery",
      outcome: "Governance-first automation with full audit trails"
    },
    {
      icon: Globe,
      name: "Forex Brokerage",
      challenges: "Client acquisition, KYC/AML compliance, retention, operational visibility",
      outcome: "End-to-end client lifecycle automation with regulatory compliance"
    },
    {
      icon: Landmark,
      name: "Government & Enterprise",
      challenges: "Siloed departments, manual processes, limited visibility",
      outcome: "Integrated operational ecosystems with governance controls"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built For <span className="text-gradient">GCC & Cyprus Industries</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep industry expertise meeting regional operational requirements and regulatory frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {industries.map((industry, i) => (
            <div key={i} className="glass-card p-6 rounded-xl hover:bg-card/50 transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-destructive font-medium mb-1">Challenges:</p>
                  <p className="text-muted-foreground">{industry.challenges}</p>
                </div>
                <div>
                  <p className="text-primary font-medium mb-1">Outcome:</p>
                  <p className="text-muted-foreground">{industry.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/industries">
            <Button size="lg" variant="outline" className="border-border hover:bg-card/50">
              View All Industries
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}