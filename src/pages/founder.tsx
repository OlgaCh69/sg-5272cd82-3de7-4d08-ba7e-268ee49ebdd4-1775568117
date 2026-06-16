"use client";

import { useState, useEffect } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Target, TrendingUp, Globe2, Network, Building2, Zap, Users, Database, Lock, Eye, Workflow } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Founder() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const focus_areas = [
    "Enterprise AI Infrastructure",
    "Operational Intelligence",
    "AI Governance & Risk Management",
    "Agentic Operations",
    "Workforce Intelligence",
    "Revenue Infrastructure",
    "Industrial AI Systems",
    "Financial & Forex Infrastructure",
    "Enterprise Transformation"
  ];

  const networkNodes = [
    { x: 20, y: 30, icon: Database, label: "Systems" },
    { x: 80, y: 25, icon: Users, label: "Workforce" },
    { x: 70, y: 70, icon: Shield, label: "Governance" },
    { x: 30, y: 75, icon: TrendingUp, label: "Intelligence" },
    { x: 50, y: 15, icon: Network, label: "Operations" },
    { x: 50, y: 85, icon: Target, label: "Strategy" }
  ];

  return (
    <>
      <SEO 
        title="Olga Chavoshi - Founder & CEO | O.N.E.Tech"
        description="Olga Chavoshi is the Founder and CEO of O.N.E.Tech, a Governance-First AI Infrastructure company helping enterprises transform fragmented operations into intelligent, governed ecosystems."
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Premium Hero Section with Portrait */}
        <section className="relative min-h-screen flex items-center border-b border-border overflow-hidden">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-background" />
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent/5 blur-[150px] rounded-full" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              {/* Left: Executive Portrait with Network Animation */}
              <div className="relative order-2 lg:order-1">
                {/* Animated Infrastructure Network Behind Portrait */}
                <div className="absolute inset-0 -z-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    {/* Connection Lines */}
                    {networkNodes.map((node, i) => 
                      networkNodes.slice(i + 1).map((target, j) => (
                        <line
                          key={`${i}-${j}`}
                          x1={node.x}
                          y1={node.y}
                          x2={target.x}
                          y2={target.y}
                          stroke="rgba(0, 182, 122, 0.15)"
                          strokeWidth="0.3"
                          className="transition-all duration-1000"
                        />
                      ))
                    )}
                    
                    {/* Animated Nodes */}
                    {networkNodes.map((node, i) => (
                      <g key={i}>
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={activeNode === i ? "2" : "1.5"}
                          fill={activeNode === i ? "rgba(0, 182, 122, 0.8)" : "rgba(0, 182, 122, 0.4)"}
                          className="transition-all duration-500"
                        />
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={activeNode === i ? "3.5" : "2.5"}
                          fill="none"
                          stroke="rgba(0, 182, 122, 0.3)"
                          strokeWidth="0.5"
                          className="transition-all duration-500"
                        />
                      </g>
                    ))}
                  </svg>
                </div>

                {/* Portrait Container with Glow */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl rounded-full" />
                  
                  <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                    <Image
                      src="/olga-chavoshi.jpg"
                      alt="Olga Chavoshi - Founder & CEO, O.N.E.Tech"
                      width={600}
                      height={600}
                      className="w-full h-auto relative z-10"
                      priority
                    />
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full border border-primary/30 bg-background/90 backdrop-blur-md shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-sm font-medium text-foreground">Building Enterprise AI Infrastructure</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Executive Bio with Glass Card */}
              <div className="order-1 lg:order-2 space-y-8">
                {/* Title Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-sm text-foreground">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Enterprise AI Infrastructure Strategist</span>
                </div>

                {/* Name & Title */}
                <div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                    <span className="text-foreground">Olga Chavoshi</span>
                  </h1>
                  <p className="text-2xl md:text-3xl text-primary font-semibold mb-2">Founder & Chief Executive Officer</p>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Globe2 className="w-5 h-5 text-primary" />
                    <span className="text-lg">O.N.E.Tech</span>
                  </div>
                </div>

                {/* Glass Card Bio */}
                <div className="rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-8 shadow-xl">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    <span className="text-foreground font-semibold">Olga Chavoshi</span> is the Founder and CEO of <span className="text-primary font-medium">O.N.E.Tech</span>, a Governance-First AI Infrastructure company focused on helping enterprises transform fragmented operations into intelligent, governed, and scalable operational ecosystems.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Her work focuses on the intersection of <span className="text-primary">operational intelligence</span>, <span className="text-primary">enterprise AI</span>, <span className="text-primary">workforce orchestration</span>, <span className="text-primary">governance frameworks</span>, and <span className="text-primary">infrastructure modernization</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="relative py-24 border-b border-border bg-gradient-to-b from-card/20 to-background">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-foreground">Building The Infrastructure Layer</span>
                  <br />
                  <span className="text-gradient">For The AI-Driven Enterprise</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="rounded-xl border border-border bg-card/30 backdrop-blur-sm p-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    While many organizations focus on deploying individual AI tools, Olga's vision is centered on something larger:
                  </p>
                  <p className="text-xl text-foreground font-semibold mt-4">
                    Creating the infrastructure layer that enables AI, people, systems, and operations to function as a coordinated enterprise ecosystem.
                  </p>
                </div>

                <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm p-8">
                  <div className="flex items-start gap-3 mb-4">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Her approach emphasizes <span className="text-primary font-semibold">governance</span>, <span className="text-primary font-semibold">transparency</span>, <span className="text-primary font-semibold">operational control</span>, and <span className="text-primary font-semibold">executive visibility</span> as foundational requirements for enterprise AI adoption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Focus Areas */}
        <section className="relative py-24 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                <span className="text-gradient">Strategic Focus Areas</span>
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Leading enterprise transformation across critical infrastructure domains
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {focus_areas.map((area, i) => (
                  <div
                    key={i}
                    className="group rounded-lg border border-border bg-card/20 backdrop-blur-sm px-6 py-4 hover:border-primary/50 hover:bg-card/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                      <span className="text-foreground font-medium">{area}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder Quote - Premium Callout */}
        <section className="relative py-24 border-b border-border bg-gradient-to-b from-card/30 to-background">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-card/50 to-background backdrop-blur-md p-12 shadow-2xl shadow-primary/10">
                {/* Quote Icon */}
                <div className="absolute -top-6 left-12 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-3xl text-background font-serif">
                  "
                </div>

                <blockquote className="space-y-6">
                  <p className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed">
                    AI should not operate outside enterprise control.
                  </p>
                  <p className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed">
                    The future belongs to organizations that combine intelligence, governance, and operational execution into a single infrastructure layer.
                  </p>
                  
                  <footer className="pt-6 border-t border-primary/20">
                    <cite className="not-italic">
                      <p className="text-lg font-semibold text-primary">— Olga Chavoshi</p>
                      <p className="text-sm text-muted-foreground mt-1">Founder & CEO, O.N.E.Tech</p>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="relative py-24 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  <span className="text-gradient">Mission</span>
                </h2>
              </div>

              <div className="rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-10">
                <p className="text-2xl text-foreground leading-relaxed text-center mb-8">
                  To help enterprises across <span className="text-primary font-semibold">Saudi Arabia</span>, <span className="text-primary font-semibold">UAE</span>, <span className="text-primary font-semibold">GCC</span> and <span className="text-primary font-semibold">Cyprus</span> deploy AI safely, govern it effectively, and transform operations through intelligent infrastructure rather than disconnected technology projects.
                </p>

                {/* Geographic Focus */}
                <div className="flex flex-wrap justify-center gap-4 pt-8 border-t border-border">
                  {[
                    { icon: Globe2, label: "Cyprus", region: "European Hub" },
                    { icon: Globe2, label: "Saudi Arabia", region: "Vision 2030" },
                    { icon: Globe2, label: "UAE", region: "Digital Innovation" },
                    { icon: Globe2, label: "GCC", region: "Regional Transformation" }
                  ].map((location, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/20 bg-primary/5">
                      <location.icon className="w-4 h-4 text-primary" />
                      <div>
                        <div className="text-sm font-semibold text-foreground">{location.label}</div>
                        <div className="text-xs text-muted-foreground">{location.region}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Positioning - What She Is / What She's Not */}
        <section className="relative py-24 border-b border-border bg-gradient-to-b from-card/20 to-background">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="text-foreground">Leadership </span>
                <span className="text-gradient">Positioning</span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* What She Is */}
                <div className="rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-card/30 backdrop-blur-sm p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                      <Shield className="w-6 h-6 text-background" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Enterprise Leader</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {[
                      "Enterprise Transformation Leader",
                      "AI Infrastructure Strategist",
                      "Operational Intelligence Advocate",
                      "Governance-First AI Executive",
                      "Founder Building Enterprise-Scale Infrastructure"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-foreground font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What She's Not */}
                <div className="rounded-xl border border-border bg-card/20 backdrop-blur-sm p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <Eye className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-muted-foreground">Not Positioned As</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {[
                      "Automation Consultant",
                      "Marketing Agency Owner",
                      "Chatbot Builder",
                      "Freelancer",
                      "No-Code Expert"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 opacity-50">
                        <div className="w-6 h-6 rounded-full bg-muted/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                        </div>
                        <span className="text-muted-foreground line-through">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
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

              <p className="text-sm text-muted-foreground mt-6">
                Supporting enterprise transformation across Cyprus, Saudi Arabia, UAE, and the GCC region
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}