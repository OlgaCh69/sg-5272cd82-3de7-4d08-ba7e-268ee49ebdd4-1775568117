import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function TelegramFinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Ready to Build a Direct Revenue Channel with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-[length:200%_auto] animate-gradient">
              Telegram?
            </span>
          </h2>

          {/* Body */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            If you want more control, better engagement, and a stronger connection with your customers, Telegram automation is a powerful next step.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="/contact">Book Your Strategy Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <Link href="/telegram-automation-ecommerce">Learn More</Link>
            </Button>
          </div>

          {/* Supporting Text */}
          <p className="text-sm text-muted-foreground pt-4">
            Built for ecommerce brands that want long-term growth, not just short-term campaigns
          </p>
        </div>
      </div>
    </section>
  );
}