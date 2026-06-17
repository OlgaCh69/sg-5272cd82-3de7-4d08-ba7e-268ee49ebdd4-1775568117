"use client";

import { useState } from "react";
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
  ChevronRight,
  Shield,
  Eye,
  Network,
  Database
} from "lucide-react";

const caseStudies = [
  {
    icon: Zap,
    industry: "Energy & Utilities",
    title: "Operational Intelligence For Utility Infrastructure",
    scenario: "Industry Transformation Scenario",
    challenges: [
      "Disconnected operational systems",
      "Manual reporting",
      "Limited asset visibility",
      "Delayed decision making"
    ],
    infrastructure: [
      "Operational Intelligence Layer",
      "AI Governance Layer",
      "Asset Intelligence",
      "Executive Control Center"
    ],
    outcomes: [
      "38% faster incident response",
      "24/7 operational visibility",
      "Governed AI decision support",
      "Improved infrastructure monitoring"
    ]
  },
  {
    icon: Droplet,
    industry: "Oil & Gas",
    title: "Governance-First Workforce Intelligence For Field Operations",
    scenario: "Industry Transformation Scenario",
    challenges: [
      "Large distributed workforce",
      "Multilingual communication barriers",
      "Safety compliance complexity",
      "Knowledge fragmentation"
    ],
    infrastructure: [
      "Workforce Intelligence Infrastructure",
      "Multilingual AI Coordination",
      "Safety Intelligence Layer",
      "Governance Framework"
    ],
    outcomes: [
      "Improved workforce coordination",
      "Reduced operational bottlenecks",
      "Enhanced compliance visibility",
      "Real-time field intelligence"
    ]
  },
  {
    icon: Building,
    industry: "Infrastructure & EPC",
    title: "Pipeline 4.0 Operational Intelligence Ecosystem",
    scenario: "Industry Transformation Scenario",
    challenges: [
      "Field operations disconnected from management",
      "Delayed reporting",
      "Safety oversight limitations",
      "Manual workflows"
    ],
    infrastructure: [
      "Agentic Coordination Layer",
      "Operational Intelligence Layer",
      "AI Governance Framework",
      "Executive Command Center"
    ],
    outcomes: [
      "Real-time site visibility",
      "Digital permit workflows",
      "Workforce orchestration",
      "Executive operational control"
    ]
  },
  {
    icon: HardHat,
    industry: "Construction",
    title: "AI-Powered Construction Operations Infrastructure",
    scenario: "Industry Transformation Scenario",
    challenges: [
      "Project delays",
      "Siloed teams",
      "Fragmented communication",
      "Limited executive visibility"
    ],
    infrastructure: [
      "Project Intelligence Layer",
      "Workforce Coordination",
      "Governance Controls",
      "Executive Dashboard"
    ],
    outcomes: [
      "Faster issue resolution",
      "Improved project coordination",
      "Greater operational transparency",
      "Governed AI adoption"
    ]
  },
  {
    icon: Home,
    industry: "Real Estate",
    title: "Intelligent Property Operations Infrastructure",
    scenario: "Industry Transformation Scenario",
    challenges: [
      "Lead management inefficiencies",
      "Slow response times",
      "Fragmented customer journeys",
      "Limited portfolio visibility"
    ],
    infrastructure: [
      "Revenue Infrastructure",
      "AI Property Intelligence",
      "Multilingual Client Engagement",
      "Executive Analytics"
    ],
    outcomes: [
      "Faster inquiry response",
      "Improved lead qualification",
      "Enhanced client experience",
      "Portfolio-wide visibility"
    ]
  },
  {
    icon: TrendingUp,
    industry: "Forex Brokerage",
    title: "Forex Client Lifecycle Intelligence Infrastructure",
    scenario: "Industry Transformation Scenario",
    challenges: [
      "Fragmented onboarding",
      "Retention inefficiencies",
      "Compliance workload",
      "Limited operational visibility"
    ],
    infrastructure: [
      "Forex Infrastructure Layer",
      "Client Intelligence Engine",
      "Retention Intelligence",
      "Compliance Automation",
      "Executive Control Center"
    ],
    outcomes: [
      "Faster onboarding",
      "Improved client retention",
      "Operational transparency",
      "Governed workflows",
      "Executive visibility"
    ]
  },
  {
    icon: Landmark,
    industry: "Financial Services",
    title: "Enterprise Financial Operations Intelligence",
    scenario: "Industry Transformation Scenario",
    challenges: [
      "Manual processes",
      "Compliance complexity",
      "Operational inefficiencies",
      "Limited executive oversight"
    ],
    infrastructure: [
      "Financial Intelligence Layer",
      "AI Governance Framework",
      "Risk Monitoring",
      "Executive Dashboard"
    ],
    outcomes: [
      "Improved operational efficiency",
      "Enhanced compliance monitoring",
      "Better risk visibility",
      "Data-driven decision support"
    ]
  },
  {
    icon: Globe,
    industry: "Government & Public Sector",
    title: "Digital Service Infrastructure Modernization",
    scenario: "Industry Transformation Scenario",
    challenges: [
      "Fragmented systems",
      "Manual citizen services",
      "Slow decision cycles",
      "Operational inefficiencies"
    ],
    infrastructure: [
      "Operational Intelligence Platform",
      "Governance Framework",
      "Workflow Automation",
      "Executive Visibility Layer"
    ],
    outcomes: [
      "Improved service delivery",
      "Greater transparency",
      "Enhanced operational efficiency",
      "Scalable digital infrastructure"
    ]
  }
];

export default function CaseStudiesPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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

        {/* Case Studies Grid */}
        <section className="relative py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-7xl mx-auto space-y-8">
              {caseStudies.map((study, index) => {
                const Icon = study.icon;
                const isExpanded = expandedIndex === index;

                return (
                  <div
                    key={index}
                    className="group relative"
                  >
                    {/* Glow effect */}
                    {isExpanded && (
                      <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
                    )}

                    <div
                      className={`relative rounded-2xl border transition-all duration-500 cursor-pointer ${
                        isExpanded
                          ? 'border-primary/50 bg-gradient-to-br from-primary/10 to-muted/30 shadow-2xl shadow-primary/20'
                          : 'border-border/30 bg-gradient-to-br from-muted/5 to-background hover:border-primary/30'
                      }`}
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    >
                      <div className="p-8 lg:p-10">
                        {/* Header */}
                        <div className="flex items-start gap-6 mb-6">
                          {/* Icon */}
                          <div className={`w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            isExpanded
                              ? 'bg-primary/20 scale-110'
                              : 'bg-muted/30 group-hover:bg-primary/10'
                          }`}>
                            <Icon className={`w-10 h-10 transition-colors duration-300 ${
                              isExpanded ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                            }`} />
                          </div>

                          {/* Title section */}
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wide">
                                {study.industry}
                              </span>
                              <span className="text-xs text-muted-foreground italic">
                                {study.scenario}
                              </span>
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                              {study.title}
                            </h3>
                            <div className="flex items-center gap-2 text-primary font-medium">
                              <span className="text-sm">{isExpanded ? 'Collapse details' : 'Expand case study'}</span>
                              <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                            </div>
                          </div>
                        </div>

                        {/* Expandable content */}
                        <div className={`transition-all duration-500 overflow-hidden ${
                          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="space-y-8 pt-6 border-t border-border/30">
                            {/* Challenges */}
                            <div>
                              <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center">
                                  <span className="text-destructive font-bold text-sm">!</span>
                                </div>
                                <h4 className="text-lg font-bold text-foreground">Challenges</h4>
                              </div>
                              <div className="grid md:grid-cols-2 gap-3">
                                {study.challenges.map((challenge, i) => (
                                  <div key={i} className="flex items-start gap-2 text-muted-foreground">
                                    <div className="w-1.5 h-1.5 rounded-full bg-destructive/60 mt-2 flex-shrink-0" />
                                    <span className="text-sm">{challenge}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Infrastructure Stack */}
                            <div>
                              <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                  <Database className="w-4 h-4 text-primary" />
                                </div>
                                <h4 className="text-lg font-bold text-foreground">Infrastructure Deployed</h4>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {study.infrastructure.map((layer, i) => (
                                  <div key={i} className="px-4 py-2 rounded-lg border border-primary/30 bg-primary/5 backdrop-blur-sm">
                                    <span className="text-sm font-medium text-primary">{layer}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Outcomes */}
                            <div>
                              <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                  <Eye className="w-4 h-4 text-primary" />
                                </div>
                                <h4 className="text-lg font-bold text-foreground">Expected Outcomes</h4>
                              </div>
                              <div className="grid md:grid-cols-2 gap-3">
                                {study.outcomes.map((outcome, i) => (
                                  <div key={i} className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">{outcome}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Architecture Preview */}
                            <div className="rounded-xl border border-border/30 bg-muted/20 p-6">
                              <div className="flex items-center gap-4">
                                <div className="flex-1">
                                  <h5 className="font-semibold text-foreground mb-2">Infrastructure Architecture</h5>
                                  <p className="text-sm text-muted-foreground">
                                    Governance-first, multi-layer AI infrastructure designed for
                                    operational excellence and executive visibility.
                                  </p>
                                </div>
                                <div className="flex gap-2">
                                  {['05', '04', '03', '02', '01'].map((layer, i) => (
                                    <div
                                      key={i}
                                      className="w-12 h-16 rounded border border-primary/20 bg-primary/5 flex items-center justify-center"
                                      style={{ transitionDelay: `${i * 100}ms` }}
                                    >
                                      <span className="text-xs font-bold text-primary">{layer}</span>
                                    </div>
                                  ))}
                                </div>
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
    </>
  );
}