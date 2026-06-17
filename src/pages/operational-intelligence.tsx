"use client";

import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, AlertCircle, Target, Users, Zap, Eye, ArrowRight, CheckCircle2 } from "lucide-react";

export default function OperationalIntelligencePage() {
  const limitations = [
    "Static dashboards show what happened, not what to do",
    "No predictive insight into operational bottlenecks",
    "Manual analysis required for decision-making",
    "Limited visibility across departments",
    "Reactive responses to operational issues",
    "Data exists but insights don't flow to decision-makers"
  ];

  const capabilities = [
    {
      icon: TrendingUp,
      title: "Predictive Operations",
      description: "Identify bottlenecks, risks, and opportunities before they impact execution.",
      examples: [
        "Workforce capacity forecasting",
        "Process bottleneck prediction",
        "Resource constraint identification",
        "Risk trend analysis"
      ]
    },
    {
      icon: Target,
      title: "Decision Intelligence",
      description: "AI-powered recommendations for operational decisions with transparency and governance.",
      examples: [
        "Priority task routing",
        "Resource allocation optimization",
        "Approval workflow intelligence",
        "Escalation pattern recognition"
      ]
    },
    {
      icon: Eye,
      title: "Executive Visibility",
      description: "Real-time operational command center for C-suite and leadership teams.",
      examples: [
        "Cross-department performance",
        "Operational KPI tracking",
        "Risk and compliance status",
        "Strategic initiative progress"
      ]
    },
    {
      icon: Users,
      title: "Workforce Intelligence",
      description: "Understand productivity patterns, coordination gaps, and workforce optimization opportunities.",
      examples: [
        "Team productivity analytics",
        "Communication pattern analysis",
        "Skill utilization tracking",
        "Coordination bottleneck detection"
      ]
    },
    {
      icon: Zap,
      title: "Real-Time Alerts",
      description: "Intelligent notifications when operational thresholds, risks, or opportunities emerge.",
      examples: [
        "SLA risk warnings",
        "Capacity threshold alerts",
        "Compliance deviation notices",
        "Opportunity detection signals"
      ]
    },
    {
      icon: BarChart3,
      title: "Operational Patterns",
      description: "Discover hidden patterns in operations that manual analysis would miss.",
      examples: [
        "Seasonal demand patterns",
        "Process efficiency trends",
        "Client behavior insights",
        "Market signal correlation"
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Operational Intelligence - O.N.E.Tech"
        description="Transform operational data into predictive insights, decision intelligence, and executive visibility with O.N.E.Tech's operational intelligence infrastructure."
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
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">OPERATIONAL INTELLIGENCE</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold">
                From Operational Data
                <br />
                <span className="text-primary">To Operational Intelligence</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Dashboards show what happened. Operational intelligence shows what's happening,
                predicts what will happen, and recommends what to do about it.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/infrastructure">
                  <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                    Explore Infrastructure Stack
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

        {/* Problem: Why Dashboards Aren't Enough */}
        <section className="relative py-24 border-y border-border/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold">
                    Why Dashboards
                    <br />
                    <span className="text-primary">Aren't Enough</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Traditional business intelligence tools visualize historical data.
                    Operational intelligence transforms that data into actionable insights,
                    predictions, and recommendations that improve execution.
                  </p>
                </div>

                <div className="space-y-4">
                  {limitations.map((limitation, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg border border-orange-500/20 bg-orange-500/5"
                    >
                      <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{limitation}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intelligence Capabilities */}
        <section className="relative py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Operational Intelligence <span className="text-primary">Capabilities</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Six intelligence layers transforming enterprise operations from reactive to predictive.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {capabilities.map((capability, index) => {
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
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider">Examples</p>
                        {capability.examples.map((example, idx) => (
                          <p key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                            {example}
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

        {/* How It Improves Execution */}
        <section className="relative py-24 bg-muted/20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  How Intelligence <span className="text-primary">Improves Execution</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="p-6 rounded-xl border border-border/30 bg-background space-y-4">
                    <h3 className="text-lg font-bold text-foreground flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                        <span className="text-orange-500 font-bold">1</span>
                      </div>
                      Before Intelligence
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "React to problems after they occur",
                        "Manual analysis paralysis",
                        "Decisions based on gut feel",
                        "Limited cross-department visibility",
                        "Delayed executive awareness"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-6 rounded-xl border border-primary/30 bg-primary/5 space-y-4">
                    <h3 className="text-lg font-bold text-foreground flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      With Intelligence
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Predict and prevent operational issues",
                        "AI-recommended next actions",
                        "Data-driven decision support",
                        "Real-time enterprise visibility",
                        "Proactive executive alerts"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Command Center */}
        <section className="relative py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Executive <span className="text-primary">Command Center</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Real-time operational intelligence for leadership teams
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { metric: "Operational Health", value: "94%", trend: "+3%", status: "healthy" },
                  { metric: "Active Bottlenecks", value: "2", trend: "-5", status: "improving" },
                  { metric: "Workforce Capacity", value: "87%", trend: "+12%", status: "optimal" },
                  { metric: "Process Efficiency", value: "91%", trend: "+7%", status: "healthy" },
                  { metric: "Risk Alerts", value: "1", trend: "-3", status: "healthy" },
                  { metric: "Strategic Initiatives", value: "8/10", trend: "On Track", status: "healthy" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl border border-border/30 bg-gradient-to-br from-muted/5 to-background space-y-3"
                  >
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">{item.metric}</p>
                    <p className="text-3xl font-bold text-primary">{item.value}</p>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        item.status === 'healthy' ? 'bg-primary' :
                        item.status === 'optimal' ? 'bg-blue-500' :
                        item.status === 'improving' ? 'bg-green-500' :
                        'bg-orange-500'
                      }`} />
                      <span className="text-sm text-muted-foreground">{item.trend}</span>
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
                Deploy Operational
                <br />
                <span className="text-primary">Intelligence Infrastructure</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Transform your enterprise from reactive operations to predictive intelligence
                with governance-first AI infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                    Request Executive Briefing
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/assessment">
                  <Button size="lg" variant="outline" className="gap-2 border-primary/30">
                    Take Infrastructure Assessment
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