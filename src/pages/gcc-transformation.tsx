"use client";

import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrendingUp, Building2, Globe, Users, Zap, Shield, Target, ArrowRight, Factory, Landmark } from "lucide-react";

export default function GCCTransformationPage() {
  const drivers = [
    {
      icon: Target,
      title: "Saudi Vision 2030",
      description: "Economic diversification, digital transformation, and operational excellence initiatives driving AI infrastructure adoption across Saudi enterprises."
    },
    {
      icon: Globe,
      title: "UAE AI Strategy",
      description: "National AI strategy positioning UAE as global AI hub, accelerating enterprise AI infrastructure deployment."
    },
    {
      icon: Building2,
      title: "Industrial Modernization",
      description: "Oil & gas, energy, construction, and industrial sectors modernizing operations through intelligent infrastructure."
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "GCC governments and enterprises investing heavily in operational digitization and AI-driven transformation."
    },
    {
      icon: Users,
      title: "Workforce Intelligence",
      description: "Multilingual, distributed workforce coordination requiring intelligent operational systems."
    },
    {
      icon: Shield,
      title: "Sovereign AI Infrastructure",
      description: "Data sovereignty requirements driving demand for locally-deployed, governance-first AI systems."
    }
  ];

  const sectors = [
    {
      icon: Factory,
      sector: "Energy & Industrial",
      challenge: "Operational complexity across distributed sites, multilingual workforce, safety compliance",
      transformation: "Operational Intelligence infrastructure coordinating workforce, assets, and compliance"
    },
    {
      icon: Building2,
      sector: "Real Estate & Construction",
      challenge: "Project delays, fragmented communication, limited visibility, client management inefficiencies",
      transformation: "AI infrastructure for property operations, client intelligence, project coordination"
    },
    {
      icon: Landmark,
      sector: "Financial Services & Forex",
      challenge: "Client onboarding bottlenecks, retention challenges, compliance workload, operational visibility gaps",
      transformation: "Client lifecycle intelligence, retention systems, compliance automation, executive dashboards"
    },
    {
      icon: Globe,
      sector: "Government & Public Sector",
      challenge: "Siloed systems, manual citizen services, slow decision cycles, operational inefficiencies",
      transformation: "Digital service infrastructure, workflow automation, operational intelligence, transparency layers"
    }
  ];

  return (
    <>
      <SEO
        title="GCC Transformation - O.N.E.Tech"
        description="AI infrastructure built for GCC and Cyprus transformation. Supporting Saudi Vision 2030, UAE AI Strategy, industrial modernization, and enterprise operational excellence."
      />
      <Header />

      <main className="relative min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
          
          <div className="relative container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">GCC & CYPRUS TRANSFORMATION</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold">
                Built For The Next Wave Of
                <br />
                <span className="text-primary">GCC Transformation</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                O.N.E.Tech infrastructure designed for enterprise organizations navigating
                operational modernization, workforce intelligence, and AI-driven transformation
                across Saudi Arabia, UAE, GCC markets, and Cyprus.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/industries">
                  <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                    Explore Industry Solutions
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline" className="gap-2 border-primary/30">
                    View Transformation Scenarios
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Drivers */}
        <section className="relative py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Six Forces Driving <span className="text-primary">Regional Transformation</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {drivers.map((driver, index) => {
                  const Icon = driver.icon;
                  return (
                    <div
                      key={index}
                      className="group rounded-2xl border border-border/30 bg-gradient-to-br from-muted/5 to-background hover:border-primary/30 transition-all duration-300 p-8 space-y-4"
                    >
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{driver.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{driver.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Sector Transformation */}
        <section className="relative py-24 bg-muted/20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Sector-Specific <span className="text-primary">Transformation</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  How O.N.E.Tech infrastructure addresses regional enterprise challenges
                </p>
              </div>

              <div className="space-y-6">
                {sectors.map((sector, index) => {
                  const Icon = sector.icon;
                  return (
                    <div
                      key={index}
                      className="p-8 rounded-2xl border border-border/30 bg-gradient-to-br from-background to-muted/10"
                    >
                      <div className="grid md:grid-cols-3 gap-8 items-start">
                        <div className="space-y-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">{sector.sector}</h3>
                        </div>

                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-orange-500 uppercase tracking-wider">Current Challenge</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{sector.challenge}</p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-primary uppercase tracking-wider">Infrastructure Solution</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{sector.transformation}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Regional Presence */}
        <section className="relative py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Regional <span className="text-primary">Presence</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Headquartered in Cyprus, serving GCC enterprises
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/5 to-muted/10 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Cyprus Headquarters</h3>
                    <p className="text-muted-foreground">
                      European operations center providing EU data protection standards,
                      strategic location, and access to GCC markets.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["EU Compliance", "Strategic Location", "Financial Services Hub", "Tech Innovation Center"].map((item, idx) => (
                      <div key={idx} className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30">
                        <span className="text-xs font-semibold text-primary">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 rounded-xl border border-border/30 bg-gradient-to-br from-muted/5 to-background space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">GCC Markets</h3>
                    <p className="text-muted-foreground">
                      Serving Saudi Arabia, UAE, Qatar, Bahrain, Kuwait, Oman with
                      governance-first infrastructure aligned to regional transformation priorities.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Saudi Arabia", "UAE", "Qatar", "Bahrain", "Kuwait", "Oman"].map((country, idx) => (
                      <div key={idx} className="px-3 py-1 rounded-full bg-muted/30 border border-border/30">
                        <span className="text-xs font-medium text-foreground">{country}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why GCC Enterprises Choose O.N.E.Tech */}
        <section className="relative py-24 bg-muted/20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Why GCC Enterprises
                  <br />
                  <span className="text-primary">Choose O.N.E.Tech</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Governance-First Approach",
                    description: "Not bolted on later. Governance, transparency, and human oversight embedded from day one."
                  },
                  {
                    title: "Regional Understanding",
                    description: "Infrastructure designed for multilingual workforce, data sovereignty requirements, and GCC operational context."
                  },
                  {
                    title: "Vision 2030 Aligned",
                    description: "Supporting Saudi Arabia's economic diversification and digital transformation objectives."
                  },
                  {
                    title: "Sovereign Infrastructure",
                    description: "Data residency options in Saudi Arabia, UAE, and regional data centers."
                  },
                  {
                    title: "Enterprise Scale",
                    description: "Built for complex, multi-site, distributed operations typical of GCC industrial enterprises."
                  },
                  {
                    title: "Compliance Ready",
                    description: "Infrastructure designed to support regional regulatory requirements and international standards."
                  }
                ].map((reason, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl border border-border/30 bg-background"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-3">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
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
                Transform Your
                <br />
                <span className="text-primary">Enterprise Operations</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Schedule an executive briefing to explore how governance-first AI infrastructure
                can accelerate your organization's transformation roadmap.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                    Request Executive Briefing
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