import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, Users, TrendingUp, Target, Clock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff87]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#60efff]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">We Don't Build</span>
              <br />
              <span className="text-white">Automation.</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] to-[#60efff]">
                We Build Revenue Systems.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              O.N.E.Tech creates AI systems that capture leads, book appointments, recover lost sales, and turn everyday conversations into consistent revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#00ff87] to-[#60efff] hover:from-[#00dd75] hover:to-[#50dfef] text-[#0a0a0a] font-semibold px-8 py-6 text-lg"
                asChild
              >
                <Link href="/contact">Book a Demo <ArrowRight className="w-5 h-5 ml-2" /></Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/20 hover:border-[#00ff87]/50 text-white hover:bg-white/5 px-8 py-6 text-lg"
                asChild
              >
                <Link href="#how-it-works">See How It Works <ArrowRight className="w-5 h-5 ml-2" /></Link>
              </Button>
            </div>

            <div className="space-y-3">
              {[
                { icon: Target, text: "Capture more leads automatically" },
                { icon: Clock, text: "Book clients 24/7" },
                { icon: TrendingUp, text: "Recover lost revenue" },
                { icon: Zap, text: "Convert conversations into sales" },
                { icon: Users, text: "Scale without hiring more staff" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00ff87] to-[#60efff] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-3.5 h-3.5 text-[#0a0a0a]" />
                  </div>
                  <span className="text-base md:text-lg text-white font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual elements */}
          <div className="relative">
            <div className="relative h-full flex items-center justify-center">
              <div className="w-full max-w-md space-y-4">
                {/* Stat Card 1 */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-[#00ff87]/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00ff87] to-[#60efff] flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-[#0a0a0a]" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] to-[#60efff]">+40%</p>
                    </div>
                  </div>
                  <p className="text-white font-semibold">More leads captured</p>
                  <p className="text-sm text-gray-400">24/7 automated responses</p>
                </div>

                {/* Stat Card 2 */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-[#00ff87]/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00ff87] to-[#60efff] flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-[#0a0a0a]" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] to-[#60efff]">&lt;2 sec</p>
                    </div>
                  </div>
                  <p className="text-white font-semibold">Response time</p>
                  <p className="text-sm text-gray-400">Instant engagement on all channels</p>
                </div>

                {/* Stat Card 3 */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-[#00ff87]/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00ff87] to-[#60efff] flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-[#0a0a0a]" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] to-[#60efff]">5-15%</p>
                    </div>
                  </div>
                  <p className="text-white font-semibold">Higher conversion</p>
                  <p className="text-sm text-gray-400">Turn conversations into revenue</p>
                </div>

                {/* CTA Badge */}
                <div className="bg-gradient-to-r from-[#00ff87] to-[#60efff] rounded-2xl p-6 text-center">
                  <p className="text-sm font-semibold text-[#0a0a0a] mb-2">Ready to grow revenue?</p>
                  <Button 
                    variant="outline" 
                    className="border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white w-full"
                    asChild
                  >
                    <Link href="/contact">Book Your Demo <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}