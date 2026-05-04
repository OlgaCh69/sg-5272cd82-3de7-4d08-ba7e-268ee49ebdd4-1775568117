import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MessageSquare, Instagram, MessageCircle, Brain, Database } from "lucide-react";

export function LeadCaptureHero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#1a2332] via-[#0f1419] to-[#1a2332]">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0ea5e9] animate-pulse"></span>
              <span className="text-sm font-semibold text-[#0ea5e9]">AI Lead Capture Assistant</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI Lead Capture Assistant That Turns Conversations Into <span className="text-[#0ea5e9]">Customers</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              O.N.E.Tech builds smart AI assistants that capture leads, answer questions, qualify prospects, remember conversations, and push high-intent visitors to book a call — across your website, WhatsApp, and Instagram.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="text-lg bg-[#0ea5e9] hover:bg-[#0ea5e9]/90 text-white" asChild>
                <Link href="/contact">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white/20 text-white hover:bg-white/10" asChild>
                <Link href="/contact">Get a Free Automation Plan</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: MessageSquare, label: "24/7 instant replies" },
                { icon: MessageCircle, label: "WhatsApp automation" },
                { icon: Instagram, label: "Instagram DMs" },
                { icon: Brain, label: "AI memory" },
                { icon: Database, label: "Website scraping" },
                { icon: CheckCircle2, label: "CRM-ready capture" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-[#0ea5e9] shrink-0" />
                    <span className="text-sm text-gray-300">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-white/10 rounded-lg border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#0ea5e9]/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="h-5 w-5 text-[#0ea5e9]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white mb-1">Website Visitor</p>
                    <p className="text-xs text-gray-400">"Do you offer real estate automation?"</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#0ea5e9]/20 rounded-lg border border-[#0ea5e9]/30">
                  <div className="w-10 h-10 rounded-full bg-[#0ea5e9] flex items-center justify-center shrink-0">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white mb-1">AI Assistant</p>
                    <p className="text-xs text-gray-300">"Yes! We build 24/7 AI agents for real estate agencies. I can help you automate lead capture, property matching, and viewing bookings. What's your agency size?"</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white/10 rounded-lg border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#0ea5e9]/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="h-5 w-5 text-[#0ea5e9]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white mb-1">Visitor</p>
                    <p className="text-xs text-gray-400">"We're a team of 5 agents handling 100+ inquiries weekly"</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                  <CheckCircle2 className="h-6 w-6 text-green-400" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">Lead Qualified & Captured</p>
                    <p className="text-xs text-gray-300">Contact info saved → CRM synced → Demo booking sent</p>
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