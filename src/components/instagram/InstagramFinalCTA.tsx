import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function InstagramFinalCTA() {
  return (
    <section id="final-cta" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Turn Instagram Into a{" "}
            <span className="bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
              Revenue Channel?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            If your ecommerce brand is getting engagement but not converting it fully, automation is the missing layer.
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Let&apos;s build a system that turns attention into revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 text-white text-base font-semibold" asChild>
              <Link href="/contact">
                Book a Strategy Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base font-semibold border-pink-500/50 text-pink-500 hover:bg-pink-50" asChild>
              <Link href="/contact">
                Explore Instagram Automation
              </Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            Built for ecommerce brands that want consistent growth, not inconsistent results
          </p>
        </div>
      </div>
    </section>
  );
}