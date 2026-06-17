"use client";

import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, FileCheck, Users, AlertTriangle, CheckCircle2, ArrowRight, Database } from "lucide-react";

export default function TrustCenterPage() {
  const principles = [
    {
      icon: Shield,
      title: "Governance Controls",
      description: "Policy-driven AI operations with human oversight at every critical decision point",
      features: [
        "Multi-tier approval workflows",
        "Policy enforcement engine",
        "Decision transparency logs",
        "Governance dashboard"
      ]
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "Enterprise-grade security with data residency controls and encryption at rest and in transit",
      features: [
        "End-to-end encryption",
        "Data residency compliance",
        "Access control policies",
        "Secure data pipelines"
      ]
    },
    {
      icon: FileCheck,
      title: "Auditability",
      description: "Complete audit trails for every AI decision, action, and system interaction",
      features: [
        "Immutable audit logs",
        "Decision tracking",
        "Action timestamps",
        "Compliance reporting"
      ]
    },
    {
      icon: Eye,
      title: "Operational Transparency",
      description: "Real-time visibility into AI operations, performance, and governance status",
      features: [
        "Live governance dashboards",
        "Performance monitoring",
        "Risk indicators",
        "Operational metrics"
      ]
    },
    {
      icon: Users,
      title: "Role-Based Access",
      description: "Granular permission controls ensuring right person, right access, right context",
      features: [
        "Hierarchical permissions",
        "Context-aware access",
        "Separation of duties",
        "Privilege escalation controls"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Risk Controls",
      description: "Proactive risk detection and mitigation with automated threshold monitoring",
      features: [
        "Risk threshold alerts",
        "Anomaly detection",
        "Automated escalation",
        "Incident response protocols"
      ]
    }
  ];

  const compliance = [
    { standard: "GDPR", status: "Ready", description: "Data protection and privacy compliance" },
    { standard: "SOC 2", status: "Ready", description: "Security and availability controls" },
    { standard: "ISO 27001", status: "Ready", description: "Information security management" },
    { standard: "NIST", status: "Ready", description: "Cybersecurity framework alignment" }
  ];

  return (
    <>
      <SEO
        title="Trust Center - O.N.E.Tech"
        description="Enterprise trust, security, and governance. O.N.E.Tech builds AI infrastructure with governance controls, data protection, auditability, and operational transparency at the core."
      />
      <Header />

      <main className="relative min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
          
          <div className="relative container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">TRUST CENTER</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold">
                Trust, Security &
                <br />
                <span className="text-primary">Governance</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Enterprise AI infrastructure built on governance-first principles,
                with security, auditability, and transparency embedded at every layer.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/ai-governance">
                  <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                    Explore AI Governance
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="gap-2 border-primary/30">
                    Discuss Governance Requirements
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Principles */}
        <section className="relative py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Six Pillars Of <span className="text-primary">Enterprise Trust</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our approach to building AI infrastructure you can trust
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {principles.map((principle, index) => {
                  const Icon = principle.icon;
                  return (
                    <div
                      key={index}
                      className="group rounded-2xl border border-border/30 bg-gradient-to-br from-muted/5 to-background hover:border-primary/30 transition-all duration-300 p-8 space-y-6"
                    >
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-foreground">{principle.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {principle.description}
                        </p>
                      </div>

                      <div className="space-y-2 pt-4 border-t border-border/30">
                        {principle.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Trust Dashboard */}
        <section className="relative py-24 bg-muted/20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Enterprise Trust <span className="text-primary">Dashboard</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Real-time visibility into governance status, security posture, and operational transparency
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { metric: "Governance Status", value: "Active", icon: Shield, color: "text-primary" },
                  { metric: "Policies Enforced", value: "24/24", icon: FileCheck, color: "text-primary" },
                  { metric: "Audit Trail", value: "100%", icon: Eye, color: "text-primary" },
                  { metric: "Access Controls", value: "Verified", icon: Lock, color: "text-primary" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="p-6 rounded-xl border border-border/30 bg-gradient-to-br from-background to-muted/10 space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <Icon className={`w-6 h-6 ${item.color}`} />
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.metric}</p>
                        <p className="text-2xl font-bold text-foreground">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Readiness */}
        <section className="relative py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Compliance <span className="text-primary">Readiness</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Infrastructure designed to support enterprise compliance requirements
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {compliance.map((item, index) => (
                  <div
                    key={index}
                    className="p-8 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/5 to-muted/10"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-foreground">{item.standard}</h3>
                      <div className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30">
                        <span className="text-xs font-semibold text-primary">{item.status}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Human Oversight */}
        <section className="relative py-24 bg-muted/20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-bold">
                    Human Oversight
                    <br />
                    <span className="text-primary">By Design</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    AI augments human decision-making, never replaces it.
                    Critical decisions require explicit human approval.
                    Governance thresholds ensure appropriate oversight.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "Multi-tier approval workflows for critical operations",
                    "AI recommendations always require human confirmation",
                    "Governance thresholds trigger escalation protocols",
                    "Executive oversight for strategic AI decisions",
                    "Audit trails capture all human approvals",
                    "Role-based authority controls prevent unauthorized actions"
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg border border-border/30 bg-background"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Sovereignty */}
        <section className="relative py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Data Sovereignty & <span className="text-primary">Residency</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Your data stays where your governance requires it
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "GCC Data Residency",
                    description: "Infrastructure deployed in Saudi Arabia, UAE, and regional data centers"
                  },
                  {
                    title: "Cyprus Compliance",
                    description: "EU data protection standards with Cyprus-based infrastructure options"
                  },
                  {
                    title: "Custom Deployment",
                    description: "On-premises, private cloud, or hybrid architectures based on requirements"
                  }
                ].map((option, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl border border-border/30 bg-gradient-to-br from-muted/5 to-background hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <Database className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{option.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{option.description}</p>
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
                Discuss Your
                <br />
                <span className="text-primary">Governance Requirements</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Schedule a consultation to explore how governance-first infrastructure
                meets your enterprise trust, security, and compliance needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                    Request Executive Briefing
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/enterprise-ai-architecture">
                  <Button size="lg" variant="outline" className="gap-2 border-primary/30">
                    View Enterprise Architecture
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