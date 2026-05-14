import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Investment() {
  return (
    <section id="pricing" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
            Pricing Built Around <span className="text-[#c9a961] font-normal">Results</span>
          </h2>
          <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
            Every implementation is custom-built for your ecommerce business, your traffic, and your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-light text-white mb-4">
              Pricing Plans
            </h3>
            <p className="text-white/70 font-light leading-relaxed">
              We focus on building systems that generate a return—so the pricing is tied to outcomes, not just access to a tool.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Check className="h-6 w-6 text-[#c9a961] shrink-0 mt-1" />
              <div>
                <p className="font-medium text-white text-lg">€1,000 - €15,000+</p>
                <p className="text-white/60 font-light">Implementation fee</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-6 w-6 text-[#c9a961] shrink-0 mt-1" />
              <div>
                <p className="font-medium text-white text-lg">€300 - €5,000+/mo</p>
                <p className="text-white/60 font-light">Ongoing optimization</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-serif font-light text-white mb-8">What's Included</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#c9a961]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="h-5 w-5 text-[#c9a961]" />
              </div>
              <div>
                <p className="font-medium text-white mb-1">Multi-Channel Automation</p>
                <p className="text-sm text-white/60 font-light">
                  WhatsApp, Instagram, Telegram integration based on your traffic sources
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#c9a961]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="h-5 w-5 text-[#c9a961]" />
              </div>
              <div>
                <p className="font-medium text-white mb-1">Custom AI Configuration</p>
                <p className="text-sm text-white/60 font-light">
                  Trained on your products, FAQs, and customer journey
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#c9a961]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="h-5 w-5 text-[#c9a961]" />
              </div>
              <div>
                <p className="font-medium text-white mb-1">Abandoned Cart Recovery</p>
                <p className="text-sm text-white/60 font-light">
                  Automated follow-up sequences designed to recover revenue
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#c9a961]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="h-5 w-5 text-[#c9a961]" />
              </div>
              <div>
                <p className="font-medium text-white mb-1">Customer Support Automation</p>
                <p className="text-sm text-white/60 font-light">
                  Handle FAQs, order tracking, and common questions instantly
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#c9a961]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="h-5 w-5 text-[#c9a961]" />
              </div>
              <div>
                <p className="font-medium text-white mb-1">Analytics Dashboard</p>
                <p className="text-sm text-white/60 font-light">
                  Track conversations, conversions, and revenue impact
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#c9a961]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="h-5 w-5 text-[#c9a961]" />
              </div>
              <div>
                <p className="font-medium text-white mb-1">Ongoing Optimization</p>
                <p className="text-sm text-white/60 font-light">
                  Continuous improvement based on performance data
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden bg-[#c9a961]/10 border border-[#c9a961]/20 rounded-xl p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#c9a961]/5 to-transparent"></div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-serif font-light text-white mb-3">
                How We Calculate Pricing
              </h3>
              <p className="text-white/80 font-light mb-2">
                Your pricing is based on conversation volume, number of platforms, and the complexity of your automation flows.
              </p>
              <p className="text-white/80 font-light">
                The goal is to ensure that the system pays for itself through improved conversions and reduced manual workload.
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-[#c9a961] hover:bg-[#b89851] text-white font-medium px-8 py-6 text-lg border-0 whitespace-nowrap"
              asChild
            >
              <Link href="/contact">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-white/50 font-light">
            All implementations include full setup, training, and ongoing optimization support.
          </p>
        </div>
      </div>
    </section>
  );
}