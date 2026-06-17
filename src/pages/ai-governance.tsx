"use client";

import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Eye, FileCheck, Lock, Users, AlertTriangle, CheckCircle2, Network, Database, ArrowRight } from "lucide-react";

export default function AIGovernancePage() {
  const governanceCapabilities = [
    {
      icon: Eye,
      title: "Human Oversight",
      description: "Every AI decision includes human-in-the-loop controls where required, ensuring critical business decisions remain under human authority.",
      features: [
        "Configurable approval thresholds",
        "Escalation workflows",
        "Decision review queues",
        "Executive override capabilities"
      ]
    },
    {
      icon: Shield,
      title: "Policy Enforcement",
      description: "Centralized policy engine ensures AI operations comply with organizational rules, industry regulations, and regional requirements.",
      features: [
        "Business rule automation",
        "Regulatory compliance checks",
        "Data residency controls",
        "Industry-specific frameworks"
      ]
    },
    {
      icon: FileCheck,
      title: "Audit Trails",
      description: "Complete visibility into AI decisions, actions, and outcomes with immutable audit logs for compliance and investigation.",
      features: [
        "Immutable decision logs",
        "User action tracking",
        "System event recording",
        "Compliance reporting"
      ]
    },
    {
      icon: Network,
      title: "Decision Transparency",
      description: "Every AI recommendation includes explainability—why this decision was made, what data informed it, and what alternatives exist.",
      features: [
        "Decision reasoning display",
        "Data source attribution",
        "Confidence scores",
        "Alternative options presentation"
      ]
    },
    {
      icon: Users,
      title: "Role-Based Permissions",
      description: "Granular access controls ensure users only interact with AI capabilities appropriate to their role and responsibility level.",
      features: [
        "Hierarchical access control",
        "Department-level permissions",
        "Function-based restrictions",
        "Temporary elevation controls"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Risk Monitoring",
      description: "Continuous monitoring detects anomalous AI behavior, policy violations, or operational risks requiring attention.",
      features: [
        "Real-time risk alerts",
        "Anomaly detection",
        "Compliance violation triggers",
        "Executive risk dashboard"
      ]
    },
    {
      icon: Lock,
      title: "Compliance Controls",
      description: "Built-in frameworks for GDPR, regional regulations, industry standards, and corporate governance requirements.",
      features: [
        "GDPR compliance automation",
        "GCC regulatory alignment",
        "Industry standards adherence",
        "Custom compliance rules"
      ]
    },
    {
      icon: Database,
      title: "Data Residency",
      description: "Control where data is processed and stored, ensuring compliance with sovereignty requirements and regional regulations.",
      features: [
        "Regional data processing",
        "Sovereign cloud options",
        "Cross-border controls",
        "Data localization enforcement"
      ]
    }
  ];

  return (
    <>
      <SEO
        title="AI Governance - O.N.E.Tech"
        description="Governance-first AI infrastructure ensuring transparency, compliance, human oversight, and operational control across enterprise AI deployments."
      />
      <Header />

      <main className="relative min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 183, 122, 0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">AI GOVERNANCE</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold">
                AI Without Governance
                <br />
                <span className="text-primary">Becomes Enterprise Risk</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                O.N.E.Tech embeds governance, auditability, human oversight, and compliance controls 
                into every layer of enterprise AI infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/enterprise-ai-architecture">
                  <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                    Explore Enterprise AI Architecture
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/trust-center">
                  <Button size="lg" variant="outline" className="gap-2 border-primary/30">
                    View Trust Center
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="relative py-24 border-y border-border/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-foreground">
                    The Governance Challenge
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      AI making decisions without human oversight
                    </p>
                    <p className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      No audit trails for AI recommendations
                    </p>
                    <p className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      Compliance violations from ungoverned AI
                    </p>
                    <p className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      Lack of transparency in AI operations
                    </p>
                    <p className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      No executive visibility into AI behavior
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-primary">
                    The O.N.E.Tech Approach
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      Governance embedded in every infrastructure layer
                    </p>
                    <p className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      Immutable audit trails for all AI decisions
                    </p>
                    <p className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      Automated compliance verification
                    </p>
                    <p className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      Complete decision transparency
                    </p>
                    <p className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      Executive governance dashboard
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Governance Capabilities Grid */}
        <section className="relative py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Enterprise Governance <span className="text-primary">Framework</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Eight governance capabilities embedded across every AI infrastructure deployment.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {governanceCapabilities.map((capability, index) => {
                  const Icon = capability.icon;
                  return (
                    <div
                      key={index}
                      className="group rounded-2xl border border-border/30 bg-gradient-to-br from-muted/5 to-background hover:border-primary/30 transition-all duration-300 p-8 space-y-6"
                    >
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-foreground">
                          {capability.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {capability.description}
                        </p>
                      </div>

                      <div className="space-y-2 pt-4 border-t border-border/30">
                        {capability.features.map((feature, idx) => (
                          <p key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                            {feature}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Governance Architecture Diagram */}
        <section className="relative py-24 bg-muted/20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Governance Across <span className="text-primary">Every Layer</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  The O.N.E.Tech Infrastructure Stack with embedded governance controls
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { layer: "Executive Control Center", governance: "Risk Dashboard • Policy Management • Compliance Reports" },
                  { layer: "Operational Intelligence", governance: "Audit Trails • Decision Logs • Anomaly Detection" },
                  { layer: "AI Governance Layer", governance: "Policy Enforcement • Human Oversight • Access Controls" },
                  { layer: "Agentic Coordination", governance: "Approval Workflows • Decision Transparency • Role Permissions" },
                  { layer: "Enterprise Systems", governance: "Data Residency • Integration Controls • System Monitoring" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group p-6 rounded-xl border border-border/30 bg-gradient-to-br from-background to-muted/10 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary">
                          {5 - index}
                        </div>
                        <h3 className="text-lg font-bold text-foreground">{item.layer}</h3>
                      </div>
                      <div className="flex-1 text-right">
                        <p className="text-sm text-muted-foreground">{item.governance}</p>
                      </div>
                      <Shield className="w-6 h-6 text-primary/50 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Executive Governance Dashboard */}
        <section className="relative py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Executive Governance <span className="text-primary">Dashboard</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Real-time visibility into AI operations, compliance posture, and risk status
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: "AI Decisions Today", value: "1,247", status: "normal", color: "text-primary" },
                  { label: "Human Approvals", value: "38", status: "normal", color: "text-blue-500" },
                  { label: "Policy Compliance", value: "100%", status: "healthy", color: "text-primary" },
                  { label: "Active Audit Trails", value: "12.4K", status: "normal", color: "text-foreground" },
                  { label: "Risk Alerts", value: "0", status: "healthy", color: "text-primary" },
                  { label: "Transparency Score", value: "98%", status: "optimal", color: "text-primary" }
                ].map((metric, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl border border-border/30 bg-gradient-to-br from-muted/5 to-background space-y-2"
                  >
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">{metric.label}</p>
                    <p className={`text-3xl font-bold ${metric.color}`}>{metric.value}</p>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        metric.status === 'healthy' ? 'bg-primary' :
                        metric.status === 'optimal' ? 'bg-blue-500' :
                        'bg-muted-foreground'
                      }`} />
                      <span className="text-xs text-muted-foreground capitalize">{metric.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-32 border-t border-border/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Deploy Governed AI
                <br />
                <span className="text-primary">Infrastructure</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Schedule an executive briefing to discuss how governance-first AI infrastructure 
                ensures transparency, compliance, and operational control.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                    Discuss Governance Requirements
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/infrastructure">
                  <Button size="lg" variant="outline" className="gap-2 border-primary/30">
                    Explore Infrastructure Stack
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}