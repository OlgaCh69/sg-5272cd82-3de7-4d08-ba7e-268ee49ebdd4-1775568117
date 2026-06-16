import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Database, Workflow, Shield, TrendingUp, Target, ArrowRight, CheckCircle2 } from "lucide-react";

export default function InfrastructurePage() {
  const layers = [
    {
      number: "01",
      icon: Database,
      title: "Enterprise Systems Layer",
      description: "Integration foundation connecting your existing enterprise systems and data sources.",
      components: [
        "ERP Systems (SAP, Oracle, Microsoft Dynamics)",
        "CRM Platforms (Salesforce, HubSpot, Custom)",
        "HR Management Systems",
        "Operations & Logistics Platforms",
        "Finance & Accounting Systems",
        "Trading Platforms & Market Data",
        "Document Management Systems",
        "Communication Infrastructure"
      ]
    },
    {
      number: "02",
      icon: Workflow,
      title: "Agentic Coordination Layer",
      description: "AI agents orchestrating workflows, decisions, and tasks across your enterprise.",
      components: [
        "Intelligent Workflow Orchestration",
        "Cross-System Decision Routing",
        "Task Assignment & Prioritization",
        "Process Automation Intelligence",
        "Knowledge Synthesis & Access",
        "Multilingual AI Assistants",
        "Predictive Action Triggers",
        "Context-Aware Recommendations"
      ]
    },
    {
      number: "03",
      icon: Shield,
      title: "Governance Layer",
      description: "Enterprise-grade controls ensuring safe, compliant, and auditable AI operations.",
      components: [
        "Policy Enforcement Engine",
        "Role-Based Access Controls",
        "Approval Workflow Management",
        "Audit Trail & Logging",
        "Compliance Framework Integration",
        "Data Privacy & Security Controls",
        "Human-in-the-Loop Orchestration",
        "Risk Assessment & Mitigation"
      ]
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Operational Intelligence Layer",
      description: "Real-time insights, predictive analytics, and executive visibility across operations.",
      components: [
        "Predictive Analytics & Forecasting",
        "Operational Performance Metrics",
        "Risk Detection & Monitoring",
        "Workforce Intelligence & Productivity",
        "Financial Operations Intelligence",
        "Client Journey Analytics",
        "Process Bottleneck Identification",
        "Trend Analysis & Reporting"
      ]
    },
    {
      number: "05",
      icon: Target,
      title: "Strategic Outcomes",
      description: "The business results your enterprise achieves through AI infrastructure.",
      components: [
        "Reduced Operational Friction",
        "Accelerated Execution Cycles",
        "Enhanced Decision Quality",
        "Improved Workforce Productivity",
        "Governed AI Adoption at Scale",
        "Risk-Aware Operations",
        "Competitive Operational Advantage",
        "Sustainable Operational Excellence"
      ]
    }
  ];

  const principles = [
    {
      title: "Governance-First Architecture",
      description: "Every component designed with built-in governance, audit trails, and compliance controls from day one."
    },
    {
      title: "Enterprise Integration",
      description: "Seamlessly connects with existing systems without replacing your core enterprise infrastructure."
    },
    {
      title: "Scalable & Modular",
      description: "Start with specific use cases and scale across the enterprise as you validate business outcomes."
    },
    {
      title: "Multilingual & Regional",
      description: "Built for GCC and Cyprus markets with Arabic, English, Greek, and regional language support."
    },
    {
      title: "Operational Intelligence",
      description: "Real-time visibility and predictive insights for executive decision-making and strategic planning."
    },
    {
      title: "Secure & Compliant",
      description: "Enterprise-grade security with regional compliance frameworks and sovereign data considerations."
    }
  ];

  return (
    <>
      <SEO 
        title="Infrastructure - O.N.E.Tech"
        description="The O.N.E.Tech Infrastructure Stack: Enterprise Systems, Agentic Coordination, Governance Layer, Operational Intelligence, and Strategic Outcomes for enterprise operations."
        image="/og-image.png"
      />
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative border-b border-border bg-background pt-32 pb-20">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="container relative mx-auto px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
                The O.N.E.Tech Infrastructure Stack
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Five-layer architecture transforming fragmented enterprise operations into intelligent, governed, and coordinated operational ecosystems.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture Layers */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="space-y-16">
              {layers.map((layer, index) => {
                const Icon = layer.icon;
                return (
                  <div key={index} className="mx-auto max-w-6xl">
                    <div className="grid gap-8 lg:grid-cols-[300px,1fr]">
                      {/* Left: Layer Header */}
                      <div className="space-y-4">
                        <div className="text-6xl font-bold text-primary/20">
                          {layer.number}
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-foreground">
                              {layer.title}
                            </h2>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          {layer.description}
                        </p>
                      </div>

                      {/* Right: Components */}
                      <div className="rounded-lg border border-border bg-card/50 backdrop-blur-sm p-8">
                        <div className="grid gap-4 sm:grid-cols-2">
                          {layer.components.map((component, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-foreground">{component}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Architecture Principles */}
        <section className="border-t border-border bg-card/30 py-24">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-6xl">
              <div className="mb-16 text-center">
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                  Architecture Principles
                </h2>
                <p className="text-lg text-muted-foreground">
                  Foundation of enterprise-grade AI infrastructure
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {principles.map((principle, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg border border-border bg-background/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-colors"
                  >
                    <h3 className="mb-3 text-lg font-semibold text-foreground">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-background py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Deploy Enterprise AI Infrastructure
              </h2>
              <p className="text-lg text-muted-foreground">
                Schedule an executive briefing to explore how the O.N.E.Tech Infrastructure Stack can transform your operations.
              </p>
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Request Executive Consultation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}