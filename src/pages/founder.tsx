import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Target, TrendingUp, Globe2, Users, Zap, Network, Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Founder() {
  const focus_areas = [
    { icon: Network, label: "Operational Intelligence", desc: "Transforming enterprise operations through AI orchestration" },
    { icon: Shield, label: "AI Governance", desc: "Building governance-first AI infrastructure" },
    { icon: Target, label: "Agentic Operations", desc: "Deploying intelligent workflow automation" },
    { icon: TrendingUp, label: "Workforce Intelligence", desc: "Enabling multilingual operational coordination" },
    { icon: Building2, label: "Infrastructure Transformation", desc: "Modernizing enterprise systems at scale" },
    { icon: Globe2, label: "GCC Digital Transformation", desc: "Supporting Vision 2030 and regional growth" }
  ];

  const principles = [
    "Governance must be embedded, not retrofitted",
    "AI infrastructure requires executive visibility",
    "Operational intelligence beats isolated tools",
    "Enterprise transformation demands sovereignty",
    "Workforce augmentation preserves human control",
    "Compliance is competitive advantage"
  ];

  return (
    <>
      <SEO 
        title="Olga Chavoshi - Founder & CEO | O.N.E.Tech"
        description="Meet Olga Chavoshi, Founder & CEO of O.N.E.Tech. Enterprise AI Infrastructure Strategist helping GCC and Cyprus-based organizations deploy governance-first AI systems at scale."
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-32 border-b border-border bg-gradient-to-b from-background to-card/30">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-sm text-foreground mb-6">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Enterprise AI Infrastructure Strategist</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="text-foreground">Olga Chavoshi</span>
                </h1>
                <p className="text-2xl text-primary font-semibold mb-6">Founder & CEO</p>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Building governance-first AI infrastructure for enterprise operations across the GCC and Cyprus
                </p>
              </div>

              {/* Executive Photo Placeholder - Premium Style */}
              <div className="rounded-2xl border border-border bg-gradient-to-br from-card/50 to-background backdrop-blur-sm p-2 mb-16">
                <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-muted/30 to-card/30 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-24 h-24 text-primary/40 mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Professional executive photography</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="relative py-24 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                <span className="text-gradient">The Vision</span>
              </h2>
              
              <div className="prose prose-lg prose-invert max-w-none space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Olga Chavoshi founded O.N.E.Tech with a vision to move enterprise AI beyond isolated tools and into <span className="text-primary font-semibold">governed operational infrastructure</span>.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Her focus is helping organizations deploy AI systems that improve operational performance while maintaining <span className="text-primary font-semibold">governance, transparency and executive control</span>.
                </p>

                <p className="text-lg leading-relaxed">
                  Rather than treating AI as a collection of disconnected applications, O.N.E.Tech builds <span className="text-primary font-semibold">infrastructure layers</span> that orchestrate enterprise systems, workforce operations, and decision intelligence into unified, governed ecosystems.
                </p>

                <p className="text-lg leading-relaxed">
                  This approach ensures AI adoption aligns with business strategy, regulatory compliance, and operational sovereignty — critical factors for enterprises in highly regulated industries and rapidly transforming markets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="relative py-24 border-b border-border bg-gradient-to-b from-card/20 to-background">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                <span className="text-foreground">Strategic </span>
                <span className="text-gradient">Focus Areas</span>
              </h2>
              <p className="text-center text-muted-foreground mb-12">
                O.N.E.Tech operates at the intersection of:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {focus_areas.map((area, i) => (
                  <div
                    key={i}
                    className="group rounded-xl border border-border bg-card/30 backdrop-blur-sm p-6 hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                      <area.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">{area.label}</h3>
                    <p className="text-sm text-muted-foreground">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy & Principles */}
        <section className="relative py-24 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="text-foreground">Governance-First </span>
                <span className="text-gradient">Philosophy</span>
              </h2>

              <div className="space-y-4">
                {principles.map((principle, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mt-1">
                      <Shield className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-lg text-foreground">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="relative py-24 border-b border-border bg-gradient-to-b from-card/20 to-background">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="text-gradient">The Mission</span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Help GCC and Cyprus-based enterprises deploy AI safely at scale by building <span className="text-primary font-semibold">governance-first infrastructure</span> that transforms fragmented operations into intelligent, controlled, and sovereign operational ecosystems.
              </p>

              <div className="inline-flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-primary" />
                  <span>Cyprus</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-primary" />
                  <span>Saudi Arabia</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-primary" />
                  <span>UAE</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-primary" />
                  <span>GCC</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-foreground">Discuss Your </span>
                <span className="text-gradient">Infrastructure Roadmap</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Book an executive briefing to explore how O.N.E.Tech can help your organization deploy governance-first AI infrastructure
              </p>
              
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-accent text-white px-8 py-6 text-lg rounded-lg shadow-lg shadow-primary/20">
                  Request Executive Consultation
                  <Zap className="w-5 h-5 ml-2" />
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