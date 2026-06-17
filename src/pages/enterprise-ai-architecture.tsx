"use client";

import { useState, useEffect } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Database, Workflow, Shield, TrendingUp, Target, ArrowRight, Zap } from "lucide-react";

export default function EnterpriseAIArchitecturePage() {
  const [activeLayer, setActiveLayer] = useState(0);
  const [dataFlow, setDataFlow] = useState(0);

  useEffect(() => {
    const layerInterval = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % 5);
    }, 3000);

    const flowInterval = setInterval(() => {
      setDataFlow((prev) => (prev + 1) % 100);
    }, 50);

    return () => {
      clearInterval(layerInterval);
      clearInterval(flowInterval);
    };
  }, []);

  const layers = [
    {
      number: "01",
      icon: Database,
      title: "Enterprise Systems Layer",
      description: "Existing operational infrastructure - ERP, CRM, HRM, supply chain, financial systems and enterprise databases.",
      components: ["ERP Systems", "CRM Platforms", "Supply Chain", "Financial Systems", "HR Systems", "Legacy Databases"],
      borderColor: "border-primary/50",
      color: "from-primary/10 to-primary/5"
    },
    {
      number: "02",
      icon: Workflow,
      title: "Agentic Coordination Layer",
      description: "AI agents orchestrate workflows across systems - data extraction, process automation, decision support and cross-system coordination.",
      components: ["Workflow Agents", "Data Agents", "Integration Agents", "Decision Support", "Process Orchestration", "System Coordination"],
      borderColor: "border-primary/50",
      color: "from-primary/10 to-primary/5"
    },
    {
      number: "03",
      icon: Shield,
      title: "AI Governance Layer",
      description: "Built-in oversight and control mechanisms - human approval workflows, audit trails, policy enforcement and compliance monitoring.",
      components: ["Human Oversight", "Audit Trails", "Policy Controls", "Compliance Monitoring", "Risk Management", "Access Controls"],
      borderColor: "border-primary/50",
      color: "from-primary/10 to-primary/5"
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Operational Intelligence Layer",
      description: "Real-time insights and intelligence - performance monitoring, predictive analytics, anomaly detection and operational visibility.",
      components: ["Performance Analytics", "Predictive Intelligence", "Anomaly Detection", "Real-time Monitoring", "Trend Analysis", "Operational Metrics"],
      borderColor: "border-primary/50",
      color: "from-primary/10 to-primary/5"
    },
    {
      number: "05",
      icon: Target,
      title: "Executive Control Center",
      description: "Unified command interface for enterprise leadership - strategic dashboards, decision intelligence and operational control.",
      components: ["Strategic Dashboards", "Decision Intelligence", "Performance Overview", "Risk Monitoring", "Resource Allocation", "Strategic Planning"],
      borderColor: "border-primary/50",
      color: "from-primary/10 to-primary/5"
    }
  ];

  return (
    <>
      <SEO
        title="Enterprise AI Architecture - O.N.E.Tech"
        description="The five-layer architecture powering governance-first enterprise AI transformation: Executive Control, Operational Intelligence, AI Governance, Agentic Coordination, Enterprise Systems."
      />
      <Header />

      <main className="relative min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
          
          <div className="relative container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">ENTERPRISE AI ARCHITECTURE</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold">
                The Architecture Behind
                <br />
                <span className="text-primary">Enterprise AI Transformation</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Five layers working together to transform fragmented enterprise operations
                into intelligent, governed, and coordinated operational ecosystems.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                    Request Infrastructure Assessment
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button size="lg" variant="outline" className="gap-2 border-primary/30">
                    See How It Works
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Architecture Diagram */}
        <section className="relative py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Five-Layer <span className="text-primary">Infrastructure Stack</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Each layer builds upon the foundation below, creating an intelligent operational ecosystem
                </p>
              </div>

              {/* Architecture Layers */}
              <div className="relative space-y-6">
                {/* Data Flow Connector */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0">
                  <div 
                    className="absolute w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50 -translate-x-1/2 left-1/2 transition-all duration-100"
                    style={{ top: `${dataFlow}%` }}
                  />
                </div>

                {layers.map((layer, index) => {
                  const Icon = layer.icon;
                  const isActive = activeLayer === index;
                  
                  return (
                    <div
                      key={index}
                      className={`relative group rounded-2xl border transition-all duration-500 ${
                        isActive ? `${layer.borderColor} shadow-2xl scale-[1.02]` : 'border-border/30'
                      }`}
                      style={{
                        background: isActive 
                          ? `linear-gradient(to bottom right, ${layer.color.split(' ')[1].replace('/', '/')} 0%, ${layer.color.split(' ')[2].replace('/', '/')} 100%)`
                          : 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05))'
                      }}
                    >
                      <div className="p-8">
                        <div className="flex items-start gap-6">
                          {/* Layer Number & Icon */}
                          <div className="flex-shrink-0 space-y-4">
                            <div className={`text-6xl font-bold transition-colors ${
                              isActive ? 'text-primary' : 'text-primary/20'
                            }`}>
                              {layer.number}
                            </div>
                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all ${
                              isActive ? 'bg-primary/20 border-2 border-primary/40' : 'bg-primary/10 border border-primary/20'
                            }`}>
                              <Icon className={`w-8 h-8 transition-colors ${
                                isActive ? 'text-primary' : 'text-primary/60'
                              }`} />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 space-y-4">
                            <div>
                              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                                {layer.title}
                              </h3>
                              <p className="text-muted-foreground">
                                {layer.description}
                              </p>
                            </div>

                            {/* Components */}
                            <div className="grid sm:grid-cols-2 gap-3">
                              {layer.components.map((component, idx) => (
                                <div
                                  key={idx}
                                  className={`px-4 py-2 rounded-lg border transition-all ${
                                    isActive ? 'border-primary/30 bg-background/50' : 'border-border/20 bg-background/30'
                                  }`}
                                >
                                  <span className="text-sm font-medium text-foreground">{component}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Data Flow Explanation */}
        <section className="relative py-24 bg-muted/20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  How Data Flows <span className="text-primary">Through The Stack</span>
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    direction: "↑ Upward Flow",
                    title: "From Systems to Intelligence",
                    description: "Operational data flows from enterprise systems through agentic coordination and governance layers, transformed into actionable intelligence at each level before reaching executive dashboards."
                  },
                  {
                    direction: "↓ Downward Flow",
                    title: "From Decisions to Execution",
                    description: "Executive decisions and policies flow down through governance controls, agentic orchestration, and into enterprise systems as governed, auditable actions."
                  },
                  {
                    direction: "↔ Bidirectional Flow",
                    title: "Continuous Intelligence Loop",
                    description: "Real-time feedback between all layers ensures decisions improve operations, operations generate insights, and insights inform better decisions."
                  }
                ].map((flow, index) => (
                  <div
                    key={index}
                    className="p-8 rounded-xl border border-border/30 bg-gradient-to-br from-background to-muted/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">{flow.direction.split(' ')[0]}</span>
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-bold text-foreground">{flow.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{flow.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why This Architecture */}
        <section className="relative py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Why This <span className="text-primary">Architecture Works</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Governance Built-In",
                    description: "Not an afterthought. Every layer includes governance, audit trails, and human oversight as core components."
                  },
                  {
                    title: "Scalable & Modular",
                    description: "Start with specific use cases. Add layers as business needs evolve. Scale across the enterprise at your pace."
                  },
                  {
                    title: "Integration-First",
                    description: "Works with your existing systems. No rip-and-replace. Enhances what you already have."
                  },
                  {
                    title: "Intelligence at Every Level",
                    description: "From system integration to executive oversight, intelligence and automation exist at each layer."
                  },
                  {
                    title: "Enterprise-Grade Security",
                    description: "Role-based access, data residency controls, and compliance frameworks embedded throughout."
                  },
                  {
                    title: "Operational Excellence",
                    description: "Not just technology—a complete approach to transforming enterprise operations through AI."
                  }
                ].map((reason, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl border border-border/30 bg-gradient-to-br from-muted/5 to-background hover:border-primary/30 transition-all duration-300"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-3">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
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
                Deploy Enterprise AI
                <br />
                <span className="text-primary">Architecture</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Schedule an executive briefing to explore how this five-layer architecture
                can transform your enterprise operations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                    Request Infrastructure Assessment
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/ai-governance">
                  <Button size="lg" variant="outline" className="gap-2 border-primary/30">
                    Explore AI Governance
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