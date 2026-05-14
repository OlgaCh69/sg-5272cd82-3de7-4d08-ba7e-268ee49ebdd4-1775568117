import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Headphones, TrendingUp, Clock } from "lucide-react";
import Link from "next/link";

export function SupportHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]/90"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <div className="w-2 h-2 rounded-full bg-[#c9a961] animate-pulse"></div>
            <span className="text-sm text-white/80 font-light tracking-wide">Customer Support Automation for Elite Ecommerce</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif mb-8 leading-[1.1]">
            <span className="text-white font-light">Transform Support From</span>
            <br />
            <span className="text-white font-light">Cost Center to</span>
            <br />
            <span className="text-[#c9a961] font-normal">Revenue Driver</span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/70 mb-12 max-w-2xl font-light leading-relaxed">
            AI automation that answers questions instantly, resolves issues autonomously, and turns support conversations into sales opportunities—24/7, at scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-[#c9a961] hover:bg-[#b89851] text-white font-medium px-8 py-6 text-lg border-0"
              asChild
            >
              <Link href="/contact">
                Book a Demo <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-6 text-lg"
              asChild
            >
              <Link href="#how-it-works">
                <Play className="w-5 h-5 mr-2" /> See How It Works
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-[#c9a961]" />
                <p className="text-3xl font-light text-white">70-85%</p>
              </div>
              <p className="text-sm text-white/60 font-light">Automated resolution</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Clock className="w-5 h-5 text-[#c9a961]" />
                <p className="text-3xl font-light text-white">&lt;1min</p>
              </div>
              <p className="text-sm text-white/60 font-light">Response time</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Headphones className="w-5 h-5 text-[#c9a961]" />
                <p className="text-3xl font-light text-white">24/7</p>
              </div>
              <p className="text-sm text-white/60 font-light">Always available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}