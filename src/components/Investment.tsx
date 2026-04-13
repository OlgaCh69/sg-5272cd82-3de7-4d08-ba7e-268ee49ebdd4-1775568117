import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Investment() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pricing Built Around Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every implementation is custom-built for your ecommerce business, your traffic, and your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Pricing Plans
            </h3>
            <p className="text-muted-foreground">
              We focus on building systems that generate a return—so the pricing is tied to outcomes, not just access to a tool.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-lg">€1,000 - €15,000+</p>
                <p className="text-muted-foreground">Implementation fee</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-lg">€500 - €5,000+/mo</p>
                <p className="text-muted-foreground">Ongoing optimization</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-bold mb-6">What&apos;s Included</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Multi-Channel Automation</p>
                <p className="text-sm text-muted-foreground">
                  WhatsApp, Instagram, Telegram integration based on your traffic sources
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Custom AI Configuration</p>
                <p className="text-sm text-muted-foreground">
                  Trained on your products, FAQs, and customer journey
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Abandoned Cart Recovery</p>
                <p className="text-sm text-muted-foreground">
                  Automated follow-up sequences designed to recover revenue
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Customer Support Automation</p>
                <p className="text-sm text-muted-foreground">
                  Handle FAQs, order tracking, and common questions instantly
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Analytics Dashboard</p>
                <p className="text-sm text-muted-foreground">
                  Track conversations, conversions, and revenue impact
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Ongoing Optimization</p>
                <p className="text-sm text-muted-foreground">
                  Continuous improvement based on performance data
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">
                How We Calculate Pricing
              </h3>
              <p className="text-muted-foreground">
                Your pricing is based on conversation volume, number of platforms, and the complexity of your automation flows.
              </p>
              <p className="text-muted-foreground mt-2">
                The goal is to ensure that the system pays for itself through improved conversions and reduced manual workload.
              </p>
            </div>
            <Button size="lg" asChild className="whitespace-nowrap">
              <Link href="/contact">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All implementations include full setup, training, and ongoing optimization support.
          </p>
        </div>
      </div>
    </section>
  );
}