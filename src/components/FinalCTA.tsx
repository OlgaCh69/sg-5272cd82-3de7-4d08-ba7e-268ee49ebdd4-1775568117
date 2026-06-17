"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Network } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 183, 122, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-muted/10 backdrop-blur-sm overflow-hidden">
            <div className="relative p-12 text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
                <Network className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Enterprise Infrastructure
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold">
                Ready To Transform Your
                <br />
                <span className="text-primary">Enterprise Operations?</span>
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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
  );
}