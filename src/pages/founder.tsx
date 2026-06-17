"use client";

import { useState, useEffect } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Building2, Shield, TrendingUp, Network, Users, Home, DollarSign, Globe, Target, CheckCircle2, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function FounderPage() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const focusAreas = [
    { icon: Building2, title: "Enterprise AI Infrastructure", color: "from-primary/20 to-primary/5" },
    { icon: TrendingUp, title: "Operational Intelligence", color: "from-blue-500/20 to-blue-500/5" },
    { icon: Shield, title: "AI Governance & Risk Management", color: "from-purple-500/20 to-purple-500/5" },
    { icon: Network, title: "Agentic Operations", color: "from-cyan-500/20 to-cyan-500/5" },
    { icon: Users, title: "Workforce Intelligence", color: "from-orange-500/20 to-orange-500/5" },
    { icon: Home, title: "Real Estate Infrastructure", color: "from-pink-500/20 to-pink-500/5" },
    { icon: DollarSign, title: "Forex & Financial Infrastructure", color: "from-yellow-500/20 to-yellow-500/5" },
    { icon: Target, title: "Enterprise Transformation", color: "from-red-500/20 to-red-500/5" },
  ];

  const geographicFocus = [
    { name: "Cyprus", flag: "🇨🇾" },
    { name: "Saudi Arabia", flag: "🇸🇦" },
    { name: "UAE", flag: "🇦🇪" },
    { name: "Qatar", flag: "🇶🇦" },
    { name: "Bahrain", flag: "🇧🇭" },
    { name: "Kuwait", flag: "🇰🇼" },
    { name: "Oman", flag: "🇴🇲" },
  ];

  const principles = [
    "Governance must precede automation",
    "Intelligence without control is enterprise risk",
    "AI should amplify human decision-making, not replace it",
    "Operational ecosystems beat disconnected tools",
    "Executive visibility is non-negotiable",
  ];

  return (
    <>
      <SEO
        title="Olga Chavoshi - Founder & CEO | O.N.E.Tech"
        description="Enterprise AI Infrastructure Strategist building governance-first AI systems for GCC and Cyprus enterprises."
      />
      <Header />

      <main className="relative min-h-screen">
        {/* Background Network */}
        <div className="fixed inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 rounded-full transition-all duration-1000 ${
                  activeNode === i ? "bg-primary scale-150" : "bg-primary/30 scale-100"
                }`}
                style={{
                  left: `${20 + i * 12}%`,
                  top: `${30 + (i % 2) * 20}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Section - Compact */}
        <section className="relative pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-[300px,1fr] gap-12 items-start">
                {/* Left - Photo */}
                <div className="relative space-y-6">
                  <div className="relative">
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
                      <Image
                        src="/olga-chavoshi.jpg"
                        alt="Olga Chavoshi"
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    </div>
                    
                    {/* Badge */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
                        <p className="text-xs font-semibold text-primary">Building Enterprise AI Infrastructure</p>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex justify-center pt-2">
                    <a
                      href="https://linkedin.com/in/olga-chavoshi-798bba177"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-border/30 bg-gradient-to-br from-muted/10 to-background hover:border-primary/30 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-foreground">Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Right - Bio */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h1 className="text-5xl lg:text-6xl font-bold">
                      Olga Chavoshi
                    </h1>
                    <div className="space-y-1">
                      <p className="text-xl text-primary font-semibold">Founder & Chief Executive Officer</p>
                      <p className="text-lg text-muted-foreground">Enterprise AI Infrastructure Strategist</p>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent" />

                  <div className="prose prose-invert max-w-none">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Olga Chavoshi is the Founder and CEO of <span className="text-foreground font-semibold">O.N.E.Tech</span>, 
                      a Governance-First AI Infrastructure company focused on helping enterprises transform fragmented operations 
                      into intelligent, governed, and scalable operational ecosystems.
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Her work focuses on the intersection of operational intelligence, enterprise AI, workforce orchestration, 
                      governance frameworks, and infrastructure modernization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="relative py-20 border-y border-border/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">VISION</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Building The Infrastructure Layer<br />
                  <span className="text-primary">For The AI-Driven Enterprise</span>
                </h2>
              </div>

              <div className="relative p-8 rounded-2xl border border-border/30 bg-gradient-to-br from-muted/10 to-background">
                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-2xl" />
                <div className="relative space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    While many organizations focus on deploying individual AI tools, Olga's vision is centered on something larger:
                  </p>
                  <p className="text-foreground font-semibold text-xl">
                    Creating the infrastructure layer that enables AI, people, systems, and operations to function as a 
                    coordinated enterprise ecosystem.
                  </p>
                  <p>
                    Her approach emphasizes governance, transparency, operational control, and executive visibility as 
                    foundational requirements for enterprise AI adoption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Focus Areas */}
        <section className="relative py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Strategic <span className="text-primary">Focus Areas</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {focusAreas.map((area, index) => {
                  const Icon = area.icon;
                  return (
                    <div
                      key={index}
                      className="group relative p-6 rounded-xl border border-border/30 bg-gradient-to-br from-muted/5 to-background hover:border-primary/30 transition-all duration-300"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${area.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      <div className="relative space-y-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-sm font-semibold text-foreground leading-tight">
                          {area.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Founder Quote */}
        <section className="relative py-20 bg-muted/20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="relative p-12 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-background">
                <div className="absolute -top-6 left-12">
                  <div className="text-8xl text-primary/20 font-serif">"</div>
                </div>
                <blockquote className="relative space-y-6">
                  <p className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed">
                    AI should not operate outside enterprise control.
                  </p>
                  <p className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed">
                    The future belongs to organizations that combine intelligence, governance, 
                    and operational execution into a single infrastructure layer.
                  </p>
                  <footer className="flex items-center gap-4 pt-6 border-t border-primary/20">
                    <div className="text-lg">
                      <p className="font-semibold text-foreground">Olga Chavoshi</p>
                      <p className="text-muted-foreground">Founder & CEO, O.N.E.Tech</p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Principles */}
        <section className="relative py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Leadership <span className="text-primary">Principles</span>
                </h2>
              </div>

              <div className="space-y-4">
                {principles.map((principle, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-xl border border-border/30 bg-gradient-to-br from-muted/5 to-background hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-lg text-foreground font-medium pt-0.5">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Geographic Focus */}
        <section className="relative py-20 bg-muted/20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">MISSION</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Empowering GCC & Cyprus Enterprises
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To help enterprises across Saudi Arabia, UAE, GCC and Cyprus deploy AI safely, govern it effectively, 
                  and transform operations through intelligent infrastructure rather than disconnected technology projects.
                </p>
              </div>

              {/* Geographic Focus */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Geographic Focus</h3>
                <div className="flex flex-wrap gap-3">
                  {geographicFocus.map((location, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/30 bg-gradient-to-br from-muted/10 to-background hover:border-primary/30 transition-all duration-300"
                    >
                      <span className="text-2xl">{location.flag}</span>
                      <span className="text-sm font-medium text-foreground">{location.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Discuss Your Enterprise
                <br />
                <span className="text-primary">Infrastructure Roadmap</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Schedule an executive consultation to explore governance-first AI infrastructure for your organization.
              </p>
              <Link href="/contact">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                  Request Executive Consultation
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