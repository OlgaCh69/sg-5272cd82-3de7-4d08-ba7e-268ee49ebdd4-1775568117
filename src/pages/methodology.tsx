"use client";

import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Search,
  PenTool,
  Shield,
  Rocket,
  TrendingUp,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  XCircle,
  Building2,
  Network,
  Eye,
  Database,
  Users,
  BarChart3,
  Settings,
  Lock,
  FileCheck,
  Zap,
  Target,
  Layers
} from "lucide-react";
import Link from "next/link";

export default function MethodologyPage() {
  const methodologySteps = [
    {
      number: "01",
      title: "ASSESS",
      headline: "Understand The Operational Reality",
      description: "Every transformation begins with a deep assessment of systems, workflows, governance maturity, operational complexity and enterprise objectives.",
      icon: Search,
      focusAreas: [
        "Current Systems",
        "Operational Workflows",
        "Data Landscape",
        "AI Readiness",
        "Governance Maturity",
        "Operational Bottlenecks",
        "Executive Visibility Gaps"
      ],
      outputs: [
        "Infrastructure Assessment",
        "Operational Intelligence Score",
        "Governance Readiness Report",
        "Transformation Opportunity Map"
      ],
      color: "from-primary/20 to-primary/5"
    },
    {
      number: "02",
      title: "ARCHITECT",
      headline: "Design The Infrastructure Blueprint",
      description: "Create a governance-first architecture aligned to enterprise operations, systems, workforce requirements and strategic objectives.",
      icon: PenTool,
      focusAreas: [
        "Enterprise Systems",
        "AI Architecture",
        "Workflow Design",
        "Agentic Coordination",
        "Operational Intelligence",
        "Executive Visibility",
        "Infrastructure Scalability"
      ],
      outputs: [
        "Enterprise AI Architecture",
        "Infrastructure Blueprint",
        "Integration Map",
        "Transformation Roadmap"
      ],
      color: "from-primary/20 to-primary/5"
    },
    {
      number: "03",
      title: "GOVERN",
      headline: "Embed Governance By Design",
      description: "Governance is not added later. It is embedded into every layer of infrastructure from day one.",
      icon: Shield,
      focusAreas: [
        "Human Oversight",
        "Audit Trails",
        "Role-Based Access",
        "Policy Controls",
        "Risk Management",
        "Compliance Monitoring",
        "Decision Transparency"
      ],
      outputs: [
        "Governance Framework",
        "Operational Controls",
        "Risk Management Structure",
        "Executive Governance Dashboard"
      ],
      color: "from-primary/20 to-primary/5"
    },
    {
      number: "04",
      title: "DEPLOY",
      headline: "Activate Intelligent Operations",
      description: "Deploy infrastructure in a controlled, scalable and measurable manner while maintaining operational continuity.",
      icon: Rocket,
      focusAreas: [
        "System Integration",
        "Agent Deployment",
        "Workflow Activation",
        "Executive Dashboards",
        "Workforce Enablement",
        "Operational Rollout",
        "Performance Monitoring"
      ],
      outputs: [
        "Operational Infrastructure",
        "Connected Systems",
        "Live Intelligence Layer",
        "Executive Command Center"
      ],
      color: "from-primary/20 to-primary/5"
    },
    {
      number: "05",
      title: "OPTIMIZE",
      headline: "Continuously Improve Operational Performance",
      description: "Transformation does not end at deployment. Infrastructure continuously evolves through intelligence, governance insights and operational feedback.",
      icon: TrendingUp,
      focusAreas: [
        "Operational Performance",
        "Workforce Intelligence",
        "Executive Visibility",
        "AI Performance",
        "Risk Monitoring",
        "Infrastructure Evolution",
        "Strategic Insights"
      ],
      outputs: [
        "Continuous Improvement",
        "Operational Intelligence Expansion",
        "Performance Optimization",
        "Infrastructure Scaling"
      ],
      color: "from-primary/20 to-primary/5"
    }
  ];

  const traditionalApproach = [
    { icon: XCircle, text: "Tool Deployment", negative: true },
    { icon: XCircle, text: "Workflow Automation", negative: true },
    { icon: XCircle, text: "Disconnected AI Systems", negative: true },
    { icon: XCircle, text: "Limited Governance", negative: true },
    { icon: XCircle, text: "Minimal Visibility", negative: true }
  ];

  const onetechApproach = [
    { icon: CheckCircle2, text: "Governance-First Infrastructure", negative: false },
    { icon: CheckCircle2, text: "Operational Intelligence", negative: false },
    { icon: CheckCircle2, text: "Executive Visibility", negative: false },
    { icon: CheckCircle2, text: "Connected Enterprise Ecosystems", negative: false },
    { icon: CheckCircle2, text: "Continuous Optimization", negative: false }
  ];

  return (
    <>
      <SEO
        title="The O.N.E.Tech Methodology | Governance-First Enterprise Transformation Framework"
        description="A proven framework for transforming fragmented enterprise operations into intelligent, scalable and governed operational ecosystems. Assess → Architect → Govern → Deploy → Optimize."
      />
      <Header />

      <main className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
                <Layers className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">PROPRIETARY FRAMEWORK</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold">
                The O.N.E.Tech <span className="text-primary">Methodology</span>
              </h1>

              <p className="text-2xl text-muted-foreground leading-relaxed">
                A Governance-First framework for transforming fragmented enterprise operations into 
                intelligent, scalable and governed operational ecosystems.
              </p>

              {/* Process Flow Visual */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-8">
                {["Assess", "Architect", "Govern", "Deploy", "Optimize"].map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="px-4 py-2 rounded-lg border border-primary/30 bg-gradient-to-br from-primary/10 to-muted/10 font-semibold">
                      {step}
                    </div>
                    {index < 4 && (
                      <ArrowRight className="w-5 h-5 text-primary" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Steps */}
        <section className="relative py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto space-y-24">
              {methodologySteps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Connection Line */}
                  {index < methodologySteps.length - 1 && (
                    <div className="absolute left-[47px] top-[100%] w-0.5 h-24 bg-gradient-to-b from-primary/50 to-transparent hidden lg:block"></div>
                  )}

                  <div className="grid lg:grid-cols-[auto_1fr] gap-8">
                    {/* Step Number & Icon */}
                    <div className="relative">
                      <div className="sticky top-32">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
                          <step.icon className="w-12 h-12 text-primary" />
                        </div>
                        <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                          {step.number}
                        </div>
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="space-y-6">
                      <div>
                        <div className="text-sm font-bold text-primary mb-2 tracking-wider">{step.title}</div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{step.headline}</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Focus Areas */}
                        <div className={`rounded-xl border border-border/30 bg-gradient-to-br ${step.color} p-6`}>
                          <h3 className="font-semibold mb-4 flex items-center gap-2">
                            <Target className="w-5 h-5 text-primary" />
                            Focus Areas
                          </h3>
                          <ul className="space-y-2">
                            {step.focusAreas.map((area, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{area}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Outputs */}
                        <div className={`rounded-xl border border-primary/30 bg-gradient-to-br ${step.color} p-6`}>
                          <h3 className="font-semibold mb-4 flex items-center gap-2">
                            <FileCheck className="w-5 h-5 text-primary" />
                            Outputs
                          </h3>
                          <ul className="space-y-2">
                            {step.outputs.map((output, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="font-medium">{output}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Transformation Flow */}
        <section className="relative py-20 bg-gradient-to-b from-muted/10 to-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Enterprise Transformation Flow
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  How the O.N.E.Tech Methodology connects your transformation process with infrastructure delivery
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Methodology Column */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mb-6 text-center">Transformation Process</h3>
                  {["Assess", "Architect", "Govern", "Deploy", "Optimize"].map((step, index) => (
                    <div key={step}>
                      <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-muted/10 p-6 text-center">
                        <div className="font-bold text-lg">{step}</div>
                      </div>
                      {index < 4 && (
                        <div className="flex justify-center py-2">
                          <ArrowDown className="w-6 h-6 text-primary" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Infrastructure Column */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mb-6 text-center">Infrastructure Delivery</h3>
                  {[
                    { icon: Building2, label: "Enterprise Systems" },
                    { icon: Network, label: "Agentic Coordination" },
                    { icon: Shield, label: "AI Governance" },
                    { icon: BarChart3, label: "Operational Intelligence" },
                    { icon: Eye, label: "Executive Control Center" }
                  ].map((layer, index) => (
                    <div key={layer.label}>
                      <div className="rounded-xl border border-border/30 bg-gradient-to-br from-muted/10 to-background p-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                            <layer.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="font-semibold">{layer.label}</div>
                        </div>
                      </div>
                      {index < 4 && (
                        <div className="flex justify-center py-2">
                          <ArrowDown className="w-6 h-6 text-muted-foreground/50" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Matters - Comparison */}
        <section className="relative py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Most AI Projects Fail Because They Skip The Infrastructure Layer
                </h2>
                <p className="text-lg text-muted-foreground">
                  Traditional AI projects focus on tools. O.N.E.Tech focuses on infrastructure.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Traditional Approach */}
                <div className="rounded-2xl border border-border/30 bg-gradient-to-br from-muted/10 to-background p-8">
                  <h3 className="text-xl font-bold mb-6 text-center text-muted-foreground">
                    Traditional Approach
                  </h3>
                  <div className="space-y-4">
                    {traditionalApproach.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                        <item.icon className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        <span className="text-muted-foreground">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* O.N.E.Tech Approach */}
                <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-muted/10 p-8">
                  <h3 className="text-xl font-bold mb-6 text-center text-primary">
                    O.N.E.Tech Approach
                  </h3>
                  <div className="space-y-4">
                    {onetechApproach.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                        <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-20 bg-gradient-to-b from-background to-muted/10">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Transformation Is Not A Technology Project
              </h2>
              <p className="text-xl text-muted-foreground">
                It Is An Infrastructure Strategy
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The O.N.E.Tech Methodology enables enterprises to deploy AI safely, govern it effectively 
                and transform operations through intelligent infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Link href="/assessment">
                  <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                    Request Infrastructure Assessment
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="gap-2">
                    Book Executive Briefing
                  </Button>
                </Link>
                <Link href="/enterprise-ai-architecture">
                  <Button size="lg" variant="outline" className="gap-2">
                    Explore Architecture
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