"use client";

import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Database, Network, Shield, Brain, Eye, ArrowRight, CheckCircle2 } from "lucide-react";

export default function HowItWorksPage() {
  const layers = [
    {
      number: "01",
      icon: Database,
      title: "Enterprise Systems",
      description: "Connect existing infrastructure",
      details: [
        "ERP, CRM, HR, Finance, Operations systems",
        "Secure API connections maintain data sovereignty",
        "No rip-and-replace of working systems",
        "Preserve institutional knowledge and workflows"
      ]
    },
    {
      number: "02",
      icon: Network,
      title: "Agentic Coordination",
      description: "Intelligent workflow orchestration",
      details: [
        "AI agents handle routine operational tasks",
        "Cross-system workflow automation",
        "Task routing based on context and priority",
        "Multilingual workforce coordination"
      ]
    },
    {
      number: "03",
      icon: Shield,
      title: "AI Governance",
      description: "Policy enforcement and human oversight",
      details: [
        "Multi-tier approval workflows for critical decisions",
        "Policy-driven AI operations with audit trails",
        "Role-based access and privilege controls",
        "Governance thresholds trigger human review"
      ]
    },
    {
      number: "04",
      icon: Brain,
      title: "Operational Intelligence",
      description: "Transform data into actionable insights",
      details: [
        "Real-time operational visibility across systems",
        "Predictive intelligence for proactive decisions",
        "Risk detection and anomaly alerting",
        "Performance monitoring and optimization"
      ]
    },
    {
      number: "05",
      icon: Eye,
      title: "Executive Control Center",
      description: "Strategic oversight and governance dashboard",
      details: [
        "Portfolio-wide visibility for executive teams",
        "Governance status and compliance monitoring",
        "Strategic KPIs and operational metrics",
        "Decision support with full transparency"
      ]
    }
  ];

  const principles = [
    {
      title: "Governance First",
      description: "Not bolted on later. Human oversight, audit trails, and policy enforcement embedded from day one."
    },
    {
      title: "Operational Intelligence",
      description: "Beyond dashboards. Predictive insights, risk detection, and proactive decision support."
    },
    {
      title: "Agentic Coordination",
      description: "AI agents handle routine work. Humans focus on strategy, relationships, and complex decisions."
    },
    {
      title: "Enterprise Scale",
      description: "Built for complex, multi-site, distributed operations typical of GCC industrial enterprises."
    }
  ];

  return (
    <>
      <SEO
        title="How It Works - O.N.E.Tech"
        description="How governance-first AI infrastructure works. Five-layer architecture connecting enterprise systems, agentic coordination, AI governance, operational intelligence, and executive control."
      />
      <Header />

      <main className="relative min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
          
          <div className="relative container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
                <Network className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">INFRASTRUCTURE METHODOLOGY</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold">
                How Governance-First
                <br />
                <span className="text-primary">AI Infrastructure Works</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                A five-layer architecture connecting enterprise systems, agentic coordination,
                AI governance, operational intelligence, and executive control.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/enterprise-ai-architecture">
                  <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                    View Technical Architecture
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline" className="gap-2 border-primary/30">
                    See Transformation Scenarios
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Five Layers */}
        <section className="relative py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Five-Layer <span className="text-primary">Infrastructure Stack</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Each layer serves a specific function in the operational intelligence ecosystem
                </p>
              </div>

              <div className="space-y-8">
                {layers.map((layer, index) => {
                  const Icon = layer.icon;
                  return (
                    <div
                      key={index}
                      className="relative group"
                    >
                      <div className="p-8 rounded-2xl border border-border/30 bg-gradient-to-br from-muted/5 to-background hover:border-primary/30 transition-all duration-300">
                        <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                          {/* Left - Layer Info */}
                          <div className="space-y-4">
                            <div className="inline-flex items-center gap-4">
                              <div className="text-4xl font-bold text-primary/30">{layer.number}</div>
                              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Icon className="w-6 h-6 text-primary" />
                              </div>
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-foreground mb-2">{layer.title}</h3>
                              <p className="text-sm text-muted-foreground">{layer.description}</p>
                            </div>
                          </div>

                          {/* Right - Details */}
                          <div className="space-y-3">
                            {layer.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/20">
                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-muted-foreground">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Connection Line */}
                      {index < layers.length - 1 && (
                        <div className="flex justify-center py-4">
                          <div className="w-0.5 h-8 bg-gradient-to-b from-primary/50 to-primary/10" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Flow Diagram */}
        <section className="relative py-24 bg-muted/20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Data Flow & <span className="text-primary">Decision Process</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  How information moves through the infrastructure
                </p>
              </div>

              <div className="relative p-12 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-muted/10">
                <div className="space-y-6">
                  {[
                    {
                      step: "Event Occurs",
                      description: "Operational event triggers in enterprise system (inquiry, transaction, alert, workflow)"
                    },
                    {
                      step: "Agentic Coordination",
                      description: "AI agent analyzes context, routes task, initiates appropriate workflow or escalation"
                    },
                    {
                      step: "Governance Check",
                      description: "Governance layer verifies policy compliance, determines if human approval required"
                    },
                    {
                      step: "Human Review (if needed)",
                      description: "Multi-tier approval workflow engages appropriate authority level for decision"
                    },
                    {
                      step: "Action Execution",
                      description: "System executes approved action across connected systems with full audit trail"
                    },
                    {
                      step: "Intelligence Update",
                      description: "Operational intelligence layer updates metrics, dashboards, and predictive models"
                    },
                    {
                      step: "Executive Visibility",
                      description: "Strategic dashboards reflect real-time operational status and governance compliance"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-primary">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{item.step}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="relative py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Four Core <span className="text-primary">Principles</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {principles.map((principle, index) => (
                  <div
                    key={index}
                    className="p-8 rounded-xl border border-border/30 bg-gradient-to-br from-muted/5 to-background hover:border-primary/30 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold text-foreground mb-4">{principle.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why This Approach */}
        <section className="relative py-24 bg-muted/20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-bold">
                    Why This
                    <br />
                    <span className="text-primary">Approach Works</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Most enterprises don't have an AI problem. They have a coordination problem.
                    Disconnected systems, fragmented workflows, limited visibility.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    O.N.E.Tech infrastructure doesn't replace your systems. It connects them intelligently,
                    with governance embedded at every layer.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "No rip-and-replace. Connect existing systems.",
                    "Governance from day one, not bolted on later.",
                    "Human oversight at every critical decision.",
                    "Operational intelligence, not just dashboards.",
                    "Built for enterprise scale and complexity.",
                    "Data sovereignty and compliance by design."
                  ].map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-background"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-32 border-t border-border/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold">
                See The Infrastructure
                <br />
                <span className="text-primary">In Action</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Explore industry-specific transformation scenarios showing how governance-first
                infrastructure addresses real enterprise challenges.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/case-studies">
                  <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                    View Transformation Scenarios
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="gap-2 border-primary/30">
                    Request Executive Briefing
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