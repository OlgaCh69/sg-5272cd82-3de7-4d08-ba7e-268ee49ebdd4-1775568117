"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, Building2, TrendingUp, Users, Zap, Shield, ArrowRight } from "lucide-react";

const capabilities = [
  { icon: TrendingUp, text: "Saudi Vision 2030 Alignment" },
  { icon: Building2, text: "Digital Transformation" },
  { icon: Zap, text: "Industrial Modernization" },
  { icon: Users, text: "Workforce Intelligence" },
  { icon: Shield, text: "Operational Excellence" },
  { icon: Globe, text: "Cross-Border Growth" }
];

export function GCCPositioning() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Main content */}
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">GCC & CYPRUS TRANSFORMATION</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold">
              Built For The Next Wave Of
              <br />
              <span className="text-primary">GCC & Cyprus Transformation</span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              O.N.E.Tech infrastructure designed for enterprise organizations navigating
              operational modernization, workforce intelligence, and AI-driven transformation
              across Saudi Arabia, UAE, GCC markets, and Cyprus.
            </p>
          </div>

          {/* Capabilities grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-xl border border-border/30 bg-gradient-to-br from-muted/5 to-background hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground">{capability.text}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Final CTA */}
          <div className="text-center space-y-8 p-12 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-muted/10 backdrop-blur-sm">
            <h3 className="text-3xl lg:text-4xl font-bold">
              Ready To Transform Your
              <br />
              <span className="text-primary">Enterprise Operations?</span>
            </h3>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop operating with fragmented systems and disconnected processes.
              Let's build governance-first AI infrastructure that scales.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                  Request Executive Briefing
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/infrastructure">
                <Button size="lg" variant="outline" className="gap-2">
                  Explore Infrastructure Stack
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}