"use client";

import { useEffect } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Zap, 
  Droplet, 
  Building, 
  HardHat, 
  Home, 
  TrendingUp, 
  Landmark, 
  Globe,
  ArrowRight,
  Shield,
  Network,
  Database,
  Eye,
  Activity,
  AlertTriangle,
  CheckCircle2,
  TrendingUp as TrendUp
} from "lucide-react";

const caseStudies = [
  {
    icon: Zap,
    industry: "Energy & Utilities",
    title: "Operational Intelligence For Utility Infrastructure",
    scenario: "Industry Transformation Scenario",
    summary: "Transform disconnected utility operations into an integrated intelligence platform with real-time asset health monitoring, predictive incident management, and executive operational control.",
    challenges: [
      "Disconnected operational systems across grid infrastructure",
      "Manual incident reporting and delayed response times",
      "Limited real-time asset health visibility",
      "Fragmented decision-making processes"
    ],
    infrastructure: [
      "Operational Intelligence Layer",
      "AI Governance Layer",
      "Asset Intelligence Module",
      "Executive Control Center",
      "Predictive Analytics Engine"
    ],
    governance: [
      "Real-time decision audit trails",
      "AI transparency controls",
      "Compliance monitoring dashboard",
      "Executive override protocols"
    ],
    outcomes: [
      "38% faster incident response across grid operations",
      "24/7 operational visibility for executive teams",
      "Governed AI decision support for critical infrastructure",
      "Improved asset health monitoring and predictive maintenance"
    ],
    metrics: [
      { label: "Asset Health", value: "94%", status: "healthy" },
      { label: "Incident Response", value: "12 min", status: "optimal" },
      { label: "Grid Visibility", value: "Real-time", status: "active" },
      { label: "Risk Alerts", value: "3 Active", status: "warning" }
    ]
  },
  {
    icon: Droplet,
    industry: "Oil & Gas",
    title: "Governance-First Workforce Intelligence For Field Operations",
    scenario: "Industry Transformation Scenario",
    summary: "Enable distributed workforce coordination across multilingual field operations with AI-powered safety intelligence, compliance monitoring, and real-time operational oversight.",
    challenges: [
      "Large distributed workforce across remote locations",
      "Multilingual communication barriers in field operations",
      "Complex safety compliance requirements",
      "Knowledge fragmentation and delayed information flow"
    ],
    infrastructure: [
      "Workforce Intelligence Infrastructure",
      "Multilingual AI Coordination Layer",
      "Safety Intelligence Module",
      "Governance Framework",
      "Real-time Field Data Platform"
    ],
    governance: [
      "Safety protocol enforcement",
      "Workforce action audit logs",
      "Compliance tracking dashboard",
      "Multilingual governance controls"
    ],
    outcomes: [
      "Improved cross-team workforce coordination",
      "Reduced operational bottlenecks in field workflows",
      "Enhanced compliance visibility for safety teams",
      "Real-time field intelligence for executives"
    ],
    metrics: [
      { label: "Field Workforce", value: "847", status: "active" },
      { label: "Permit Status", value: "23 Pending", status: "normal" },
      { label: "Safety Compliance", value: "98.2%", status: "healthy" },
      { label: "Site Intelligence", value: "Live", status: "active" }
    ]
  },
  {
    icon: Building,
    industry: "Infrastructure & EPC",
    title: "Pipeline 4.0 Operational Intelligence Ecosystem",
    scenario: "Industry Transformation Scenario",
    summary: "Connect field operations to executive management through an integrated intelligence platform that enables real-time site visibility, digital workflows, and governed AI coordination.",
    challenges: [
      "Field operations disconnected from management systems",
      "Delayed reporting and information silos",
      "Limited safety oversight across distributed sites",
      "Manual workflow processes and approvals"
    ],
    infrastructure: [
      "Agentic Coordination Layer",
      "Operational Intelligence Platform",
      "AI Governance Framework",
      "Executive Command Center",
      "Digital Workflow Engine"
    ],
    governance: [
      "Permit approval chains",
      "Site access controls",
      "Executive decision logging",
      "Compliance automation"
    ],
    outcomes: [
      "Real-time visibility across all construction sites",
      "Digital permit workflows replacing manual processes",
      "Intelligent workforce orchestration and coordination",
      "Executive operational control with governance oversight"
    ],
    metrics: [
      { label: "Active Sites", value: "12", status: "active" },
      { label: "Permits Today", value: "34 Approved", status: "healthy" },
      { label: "Workforce", value: "1,243", status: "active" },
      { label: "Issues", value: "5 Open", status: "warning" }
    ]
  },
  {
    icon: HardHat,
    industry: "Construction",
    title: "AI-Powered Construction Operations Infrastructure",
    scenario: "Industry Transformation Scenario",
    summary: "Unify siloed construction teams through intelligent coordination infrastructure that provides real-time project visibility, automated issue resolution, and governance-controlled AI adoption.",
    challenges: [
      "Project delays due to coordination failures",
      "Siloed teams and fragmented communication",
      "Limited executive visibility into project status",
      "Manual tracking and reporting overhead"
    ],
    infrastructure: [
      "Project Intelligence Layer",
      "Workforce Coordination Module",
      "Governance Controls",
      "Executive Dashboard",
      "Issue Resolution Engine"
    ],
    governance: [
      "Project milestone tracking",
      "Budget oversight controls",
      "Resource allocation governance",
      "Quality compliance monitoring"
    ],
    outcomes: [
      "Faster issue identification and resolution",
      "Improved cross-team project coordination",
      "Greater operational transparency for stakeholders",
      "Governed AI adoption with executive oversight"
    ],
    metrics: [
      { label: "Project Progress", value: "67%", status: "healthy" },
      { label: "Issue Resolution", value: "2.3 days", status: "optimal" },
      { label: "Team Coordination", value: "Active", status: "active" },
      { label: "Budget Status", value: "On Track", status: "healthy" }
    ]
  },
  {
    icon: Home,
    industry: "Real Estate",
    title: "Intelligent Property Operations Infrastructure",
    scenario: "Industry Transformation Scenario",
    summary: "Transform property operations with AI-powered lead intelligence, multilingual client engagement, and portfolio-wide visibility that accelerates inquiry response and improves conversion rates.",
    challenges: [
      "Inefficient lead management across portfolios",
      "Slow response times to buyer inquiries",
      "Fragmented customer journey tracking",
      "Limited portfolio-wide operational visibility"
    ],
    infrastructure: [
      "Revenue Infrastructure Layer",
      "AI Property Intelligence Module",
      "Multilingual Client Engagement",
      "Executive Analytics Dashboard",
      "Lead Scoring Engine"
    ],
    governance: [
      "Lead qualification standards",
      "Client interaction audit trails",
      "Portfolio performance monitoring",
      "Revenue attribution tracking"
    ],
    outcomes: [
      "Faster inquiry response across all channels",
      "Improved lead qualification and prioritization",
      "Enhanced multilingual client experience",
      "Real-time portfolio visibility for executives"
    ],
    metrics: [
      { label: "Lead Quality", value: "A-Grade", status: "healthy" },
      { label: "Portfolio Visibility", value: "100%", status: "active" },
      { label: "Buyer Intent", value: "High", status: "healthy" },
      { label: "Viewing Requests", value: "18 Today", status: "active" }
    ]
  },
  {
    icon: TrendingUp,
    industry: "Forex Brokerage",
    title: "Forex Client Lifecycle Intelligence Infrastructure",
    scenario: "Industry Transformation Scenario",
    summary: "Optimize client lifecycle management from onboarding through retention with AI-powered intelligence that automates compliance workflows and provides executive visibility into client health.",
    challenges: [
      "Fragmented client onboarding workflows",
      "Retention inefficiencies and churn risk",
      "Heavy compliance workload and manual processes",
      "Limited operational visibility for executives"
    ],
    infrastructure: [
      "Forex Infrastructure Layer",
      "Client Intelligence Engine",
      "Retention Intelligence Module",
      "Compliance Automation Platform",
      "Executive Control Center"
    ],
    governance: [
      "Regulatory compliance tracking",
      "Client action audit logs",
      "Risk monitoring dashboard",
      "Executive oversight controls"
    ],
    outcomes: [
      "Faster client onboarding with automated workflows",
      "Improved retention through predictive intelligence",
      "Operational transparency across client lifecycle",
      "Governed compliance workflows with audit trails",
      "Real-time executive visibility into client health"
    ],
    metrics: [
      { label: "FTD Pipeline", value: "124", status: "healthy" },
      { label: "Retention Risk", value: "12 Clients", status: "warning" },
      { label: "Compliance Tasks", value: "8 Pending", status: "normal" },
      { label: "Client Lifecycle", value: "Active", status: "active" }
    ]
  },
  {
    icon: Landmark,
    industry: "Financial Services",
    title: "Enterprise Financial Operations Intelligence",
    scenario: "Industry Transformation Scenario",
    summary: "Modernize financial operations with AI-driven intelligence infrastructure that automates compliance monitoring, enhances risk visibility, and provides executives with data-driven decision support.",
    challenges: [
      "Manual processes creating operational inefficiencies",
      "Complex compliance requirements and audit overhead",
      "Limited real-time risk visibility",
      "Fragmented executive oversight and reporting"
    ],
    infrastructure: [
      "Financial Intelligence Layer",
      "AI Governance Framework",
      "Risk Monitoring Platform",
      "Executive Dashboard",
      "Compliance Automation Engine"
    ],
    governance: [
      "Transaction audit trails",
      "Regulatory compliance monitoring",
      "Risk threshold controls",
      "Executive decision logging"
    ],
    outcomes: [
      "Improved operational efficiency through automation",
      "Enhanced real-time compliance monitoring",
      "Better risk visibility for executive teams",
      "Data-driven decision support with governance controls"
    ],
    metrics: [
      { label: "Operational Efficiency", value: "87%", status: "healthy" },
      { label: "Compliance Score", value: "96%", status: "healthy" },
      { label: "Risk Visibility", value: "Real-time", status: "active" },
      { label: "Audit Trail", value: "Complete", status: "active" }
    ]
  },
  {
    icon: Globe,
    industry: "Government & Public Sector",
    title: "Digital Service Infrastructure Modernization",
    scenario: "Industry Transformation Scenario",
    summary: "Transform citizen services through integrated operational intelligence that automates workflows, enhances transparency, and provides executives with scalable digital infrastructure.",
    challenges: [
      "Fragmented legacy systems across departments",
      "Manual citizen service processes and delays",
      "Slow decision cycles and approval workflows",
      "Limited operational visibility and transparency"
    ],
    infrastructure: [
      "Operational Intelligence Platform",
      "Governance Framework",
      "Workflow Automation Engine",
      "Executive Visibility Layer",
      "Citizen Service Portal"
    ],
    governance: [
      "Service level monitoring",
      "Process audit trails",
      "Transparency dashboard",
      "Executive oversight controls"
    ],
    outcomes: [
      "Improved citizen service delivery times",
      "Greater operational transparency for stakeholders",
      "Enhanced efficiency through workflow automation",
      "Scalable digital infrastructure for future growth"
    ],
    metrics: [
      { label: "Service Delivery", value: "2.1 days", status: "optimal" },
      { label: "Transparency", value: "98%", status: "healthy" },
      { label: "Efficiency", value: "+42%", status: "healthy" },
      { label: "Digital Reach", value: "Scalable", status: "active" }
    ]
  }
];

export default function CaseStudiesPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".case-study-card").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="Infrastructure In Action | O.N.E.Tech"
        description="Explore how Governance-First AI Infrastructure transforms operations, governance, workforce intelligence and executive visibility across industries."
      />
      <Header />

      <main className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
          
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 183, 122, 0.3) 1px, transparent 0)`,
              backgroundSize: '60px 60px'
            }} />
          </div>

          <div className="relative container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">TRANSFORMATION PORTFOLIO</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold">
                Infrastructure
                <br />
                <span className="text-primary">In Action</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Explore how Governance-First AI Infrastructure transforms operations, governance,
                workforce intelligence and executive visibility across industries.
              </p>

              {/* Interactive ecosystem visualization */}
              <div className="relative py-16">
                <div className="relative max-w-4xl mx-auto">
                  {/* Central hub */}
                  <div className="relative mx-auto w-48 h-48 rounded-full border-2 border-primary/30 bg-gradient-to-br from-primary/20 to-muted/30 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <Network className="w-12 h-12 text-primary mx-auto" />
                      <div className="text-sm font-semibold text-primary">O.N.E.Tech</div>
                      <div className="text-xs text-muted-foreground">Infrastructure</div>
                    </div>
                    
                    {/* Pulsing rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" style={{ animationDuration: '3s' }} />
                    <div className="absolute inset-0 rounded-full border-2 border-primary/10 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                  </div>

                  {/* Orbiting industry nodes */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {[Zap, Droplet, Building, Home, TrendingUp, Landmark, Globe, HardHat].map((Icon, index) => {
                      const angle = (index * 360) / 8;
                      const radius = 200;
                      const x = Math.cos((angle * Math.PI) / 180) * radius;
                      const y = Math.sin((angle * Math.PI) / 180) * radius;
                      
                      return (
                        <div
                          key={index}
                          className="absolute w-16 h-16 rounded-full border border-primary/30 bg-muted/30 backdrop-blur-sm flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                          style={{
                            left: '50%',
                            top: '50%',
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                          }}
                        >
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies - Premium 2-Column Layout */}
        <section className="relative py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-7xl mx-auto space-y-16">
              {caseStudies.map((study, index) => {
                const Icon = study.icon;

                return (
                  <div
                    key={index}
                    className="case-study-card group relative opacity-0 translate-y-8 transition-all duration-700"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative rounded-2xl border border-border/30 bg-gradient-to-br from-muted/5 to-background group-hover:border-primary/30 transition-all duration-500 overflow-hidden">
                      {/* 2-Column Layout */}
                      <div className="grid lg:grid-cols-2 gap-0">
                        {/* LEFT COLUMN - Content */}
                        <div className="p-8 lg:p-12 space-y-8">
                          {/* Header */}
                          <div className="space-y-4">
                            <div className="flex items-center gap-4">
                              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Icon className="w-8 h-8 text-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                  <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wide">
                                    {study.industry}
                                  </span>
                                  <span className="text-xs text-muted-foreground italic">
                                    {study.scenario}
                                  </span>
                                </div>
                              </div>
                            </div>
                            
                            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                              {study.title}
                            </h3>
                            
                            <p className="text-muted-foreground leading-relaxed">
                              {study.summary}
                            </p>
                          </div>

                          {/* Challenges */}
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <AlertTriangle className="w-5 h-5 text-destructive" />
                              <h4 className="text-lg font-bold text-foreground">Operational Challenges</h4>
                            </div>
                            <div className="space-y-2">
                              {study.challenges.map((challenge, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <div className="w-1.5 h-1.5 rounded-full bg-destructive/60 mt-2 flex-shrink-0" />
                                  <span>{challenge}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Infrastructure Stack */}
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <Database className="w-5 h-5 text-primary" />
                              <h4 className="text-lg font-bold text-foreground">Infrastructure Deployed</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {study.infrastructure.map((layer, i) => (
                                <div key={i} className="px-3 py-1.5 rounded-lg border border-primary/30 bg-primary/5 backdrop-blur-sm text-xs font-medium text-primary">
                                  {layer}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Governance Controls */}
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <Shield className="w-5 h-5 text-primary" />
                              <h4 className="text-lg font-bold text-foreground">Governance Controls</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              {study.governance.map((control, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span>{control}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Expected Outcomes */}
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <TrendUp className="w-5 h-5 text-primary" />
                              <h4 className="text-lg font-bold text-foreground">Expected Outcomes</h4>
                            </div>
                            <div className="space-y-2">
                              {study.outcomes.map((outcome, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span>{outcome}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CTA */}
                          <div className="pt-4">
                            <Link href="/contact">
                              <Button className="w-full gap-2 bg-primary hover:bg-primary/90">
                                View Transformation Scenario
                                <ArrowRight className="w-4 h-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>

                        {/* RIGHT COLUMN - Visuals */}
                        <div className="relative p-8 lg:p-12 bg-gradient-to-br from-muted/10 to-background border-l border-border/30 space-y-6">
                          {/* Architecture Diagram */}
                          <div className="rounded-xl border border-primary/20 bg-muted/20 backdrop-blur-sm p-6">
                            <h5 className="text-sm font-semibold text-primary mb-4">Infrastructure Architecture</h5>
                            
                            <div className="relative space-y-3">
                              {[
                                { label: "Enterprise Systems", layer: "01" },
                                { label: "Agentic Coordination", layer: "02" },
                                { label: "AI Governance Layer", layer: "03" },
                                { label: "Operational Intelligence", layer: "04" },
                                { label: "Executive Control", layer: "05" }
                              ].map((item, i) => (
                                <div key={i} className="relative">
                                  {/* Connecting line */}
                                  {i < 4 && (
                                    <div className="absolute left-6 top-12 w-0.5 h-3 bg-gradient-to-b from-primary/50 to-primary/20">
                                      {/* Moving particle */}
                                      <div 
                                        className="absolute w-1 h-1 rounded-full bg-primary"
                                        style={{
                                          animation: `moveParticle 2s ease-in-out infinite`,
                                          animationDelay: `${i * 0.4}s`
                                        }}
                                      />
                                    </div>
                                  )}
                                  
                                  <div className="flex items-center gap-3 group/layer">
                                    <div className="w-12 h-12 rounded-lg border border-primary/30 bg-primary/5 flex items-center justify-center group-hover/layer:bg-primary/10 group-hover/layer:border-primary/50 transition-all">
                                      <span className="text-xs font-bold text-primary">{item.layer}</span>
                                    </div>
                                    <span className="text-xs font-medium text-muted-foreground group-hover/layer:text-foreground transition-colors">
                                      {item.label}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Live Dashboard Preview */}
                          <div className="rounded-xl border border-primary/20 bg-muted/20 backdrop-blur-sm p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h5 className="text-sm font-semibold text-primary">Operational Dashboard</h5>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-xs text-muted-foreground">Live</span>
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              {study.metrics.map((metric, i) => (
                                <div 
                                  key={i} 
                                  className="flex items-center justify-between p-3 rounded-lg border border-border/20 bg-background/50 group/metric hover:border-primary/30 transition-all"
                                >
                                  <div className="flex items-center gap-3">
                                    <Activity className={`w-4 h-4 ${
                                      metric.status === 'healthy' ? 'text-primary' :
                                      metric.status === 'warning' ? 'text-yellow-500' :
                                      metric.status === 'optimal' ? 'text-emerald-500' :
                                      'text-primary'
                                    }`} />
                                    <span className="text-xs font-medium text-muted-foreground group-hover/metric:text-foreground transition-colors">
                                      {metric.label}
                                    </span>
                                  </div>
                                  <span className={`text-sm font-bold ${
                                    metric.status === 'healthy' ? 'text-primary' :
                                    metric.status === 'warning' ? 'text-yellow-500' :
                                    metric.status === 'optimal' ? 'text-emerald-500' :
                                    'text-primary'
                                  }`}>
                                    {metric.value}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Status indicator */}
                            <div className="mt-4 pt-4 border-t border-border/20">
                              <div className="flex items-center gap-2">
                                <Eye className="w-4 h-4 text-primary" />
                                <span className="text-xs text-muted-foreground">Executive visibility active</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
          
          <div className="relative container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-muted/10 backdrop-blur-sm overflow-hidden">
                <div className="relative p-12 text-center space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
                    <Network className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                      Custom Infrastructure
                    </span>
                  </div>

                  <h2 className="text-3xl lg:text-5xl font-bold">
                    Your Industry.
                    <br />
                    <span className="text-primary">Your Infrastructure.</span>
                  </h2>

                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Every organization has unique operational challenges. O.N.E.Tech designs
                    governance-first infrastructure aligned to operational objectives, compliance
                    requirements and enterprise scale.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/contact">
                      <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                        Request Executive Briefing
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href="/infrastructure">
                      <Button size="lg" variant="outline" className="gap-2 border-primary/30 hover:bg-primary/5">
                        Explore Infrastructure Stack
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes moveParticle {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(12px); opacity: 0.5; }
        }
        
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </>
  );
}