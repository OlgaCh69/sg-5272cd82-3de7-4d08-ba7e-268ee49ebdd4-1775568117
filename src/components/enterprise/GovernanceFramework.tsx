"use client";

import { Shield, Eye, CheckCircle2, Lock, FileText, Users, AlertCircle, GitBranch } from "lucide-react";

export function GovernanceFramework() {
  const frameworks = [
    {
      icon: Shield,
      title: "Policy Enforcement",
      desc: "AI actions governed by enterprise policies",
      features: ["Role-based permissions", "Approval hierarchies", "Business rules engine"]
    },
    {
      icon: Eye,
      title: "Human Oversight",
      desc: "Critical decisions require human approval",
      features: ["Approval gates", "Review workflows", "Escalation paths"]
    },
    {
      icon: FileText,
      title: "Audit Trails",
      desc: "Complete decision history and traceability",
      features: ["Immutable logs", "Decision tracking", "Compliance reports"]
    },
    {
      icon: Lock,
      title: "Access Control",
      desc: "Granular permissions and data security",
      features: ["Role management", "Data encryption", "Secure APIs"]
    },
    {
      icon: CheckCircle2,
      title: "Compliance Frameworks",
      desc: "Built-in regulatory compliance",
      features: ["GDPR ready", "SOC 2 aligned", "Industry standards"]
    },
    {
      icon: GitBranch,
      title: "Decision Transparency",
      desc: "Explainable AI reasoning and logic",
      features: ["Decision paths", "Reasoning logs", "Model explanations"]
    }
  ];

  return (
    <section className="relative py-32 border-t border-border bg-gradient-to-b from-background to-card/30">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium mb-6">
              <AlertCircle className="w-4 h-4" />
              <span>Critical Enterprise Risk</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Governance By Design</span>
            </h2>
            <p className="text-2xl text-muted-foreground mb-4">
              Not Governance As An Afterthought
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              AI without governance becomes enterprise risk. O.N.E.Tech embeds governance, compliance, and control at the foundation of every AI system.
            </p>
          </div>

          {/* Governance Framework Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {frameworks.map((framework, i) => (
              <div
                key={i}
                className="group relative rounded-xl border border-border bg-card/30 backdrop-blur-sm p-6 hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                    <framework.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-lg font-bold text-foreground mb-2">{framework.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{framework.desc}</p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {framework.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Governance Flow Diagram */}
          <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm p-8">
            <h3 className="text-xl font-bold text-center mb-8">How O.N.E.Tech Prevents Uncontrolled AI Deployment</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { label: "AI Request", icon: Users, desc: "User initiates action" },
                { label: "Policy Check", icon: Shield, desc: "Rules validation" },
                { label: "Approval Gate", icon: Eye, desc: "Human review if needed" },
                { label: "Audit Log", icon: FileText, desc: "Record decision" },
                { label: "Execution", icon: CheckCircle2, desc: "Governed action" }
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full border-2 border-primary/30 bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="font-semibold text-sm mb-1">{step.label}</div>
                    <div className="text-xs text-muted-foreground">{step.desc}</div>
                  </div>
                  
                  {/* Connector Arrow */}
                  {i < 4 && (
                    <div className="hidden md:block absolute top-8 -right-2 w-4 h-px bg-primary/50">
                      <div className="absolute -right-1 -top-1 w-0 h-0 border-l-4 border-l-primary/50 border-t-2 border-t-transparent border-b-2 border-b-transparent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 bg-primary/5">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Every AI action is governed, audited, and controllable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}