import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function CaseStudiesHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]/90"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <div className="w-2 h-2 rounded-full bg-[#c9a961] animate-pulse"></div>
            <span className="text-sm text-white/80 font-light tracking-wide">Real Results From Real Businesses</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif mb-8 leading-[1.1]">
            <span className="text-white font-light">Ecommerce Automation</span>
            <br />
            <span className="text-[#c9a961] font-normal">Case Studies</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/70 mb-12 max-w-2xl font-light leading-relaxed">
            See how ecommerce brands recovered €180k-€240k annually with WhatsApp automation, Instagram DMs, and AI support systems.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-[#c9a961] hover:bg-[#b89851] text-white font-medium px-8 py-6 text-lg border-0"
              asChild
            >
              <Link href="/contact">
                Book Your Strategy Demo <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-6 text-lg"
              asChild
            >
              <Link href="#case-studies">
                <Play className="w-5 h-5 mr-2" /> View Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}