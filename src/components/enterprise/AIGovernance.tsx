import { Shield, Eye, CheckCircle2, Lock, FileText, Users } from "lucide-react";

export function AIGovernance() {
  const principles = [
    {
      icon: Eye,
      title: "Auditability",
      desc: "Complete audit trails for every AI decision and action"
    },
    {
      icon: Users,
      title: "Human Oversight",
      desc: "Configurable approval workflows for critical operations"
    },
    {
      icon: Shield,
      title: "Policy Enforcement",
      desc: "Automated compliance with enterprise governance rules"
    },
    {
      icon: Lock,
      title: "Role-Based Access",
      desc: "Granular permissions aligned with organizational structure"
    },
    {
      icon: FileText,
      title: "Decision Transparency",
      desc: "Explainable AI outputs for regulatory and business needs"
    },
    {
      icon: CheckCircle2,
      title: "Compliance Frameworks",
      desc: "Built-in support for GCC and international regulations"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm text-muted-foreground mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span>Governance-First Approach</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI Without Governance <span className="text-gradient">Becomes Enterprise Risk</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              O.N.E.Tech deploys AI infrastructure with built-in governance, ensuring compliance, transparency, and control from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, i) => (
              <div key={i} className="glass-panel p-6 rounded-xl hover:bg-card/60 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <principle.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{principle.title}</h3>
                    <p className="text-sm text-muted-foreground">{principle.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 glass-card p-8 rounded-xl border-2 border-primary/20">
            <p className="text-center text-lg text-muted-foreground">
              <span className="text-primary font-semibold">Governance is not a feature.</span> It's the foundation of responsible AI deployment at enterprise scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}