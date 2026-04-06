import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent via-primary/10 to-transparent">
      <div className="container mx-auto">
        <div className="glass-card rounded-3xl p-12 lg:p-16 shadow-glow border-2 border-primary/40 text-center max-w-5xl mx-auto backdrop-blur-xl">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl xl:text-6xl mb-6">
            Ready to <span className="text-gradient">Automate</span> Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Automate conversations. Increase sales. Save time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow font-semibold text-base group px-10 h-14">
              Get Your Bot Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 font-semibold text-base h-14 px-10">
              <Phone className="mr-2 w-5 h-5" />
              Book a Call
            </Button>
          </div>

          <div className="inline-flex items-center gap-2.5 glass-card px-5 py-2.5 rounded-full border border-primary/20">
            <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Limited slots available this month</span>
          </div>
        </div>
      </div>
    </section>
  );
}