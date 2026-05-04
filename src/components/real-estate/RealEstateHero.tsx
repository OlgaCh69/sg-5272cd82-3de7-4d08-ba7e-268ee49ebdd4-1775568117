import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function RealEstateHero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#1a2332] via-[#0f1419] to-[#1a2332]">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0ea5e9] animate-pulse"></span>
              <span className="text-sm font-semibold text-[#0ea5e9]">AI Real Estate Automation</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Turn Missed Property Inquiries Into Signed Deals — <span className="text-[#0ea5e9]">Automatically</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              O.N.E.Tech builds 24/7 AI real estate automation systems that capture, qualify, and convert leads before they go cold.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="text-lg bg-[#0ea5e9] hover:bg-[#0ea5e9]/90 text-white" asChild>
                <Link href="/contact">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white/20 text-white hover:bg-white/10" asChild>
                <Link href="#features">See How It Works</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "24/7", label: "Lead Capture" },
                { value: "40%+", label: "More Leads" },
                { value: "5s", label: "Response Time" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#0ea5e9] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-[#0ea5e9]/20 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-[#0ea5e9]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">Lead Qualified</p>
                    <p className="text-xs text-gray-400">Budget: €500k • Location: Downtown</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-[#0ea5e9]/20 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-[#0ea5e9]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">Property Matched</p>
                    <p className="text-xs text-gray-400">3 properties recommended</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-[#0ea5e9]/20 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-[#0ea5e9]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">Viewing Booked</p>
                    <p className="text-xs text-gray-400">Tomorrow 3:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-[#0ea5e9]/20 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-[#0ea5e9]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">CRM Updated</p>
                    <p className="text-xs text-gray-400">Lead synced automatically</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#0ea5e9]/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#0ea5e9]/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}