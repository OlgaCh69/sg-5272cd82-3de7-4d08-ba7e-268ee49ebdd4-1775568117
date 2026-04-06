import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-primary/10 to-transparent">
      <div className="container mx-auto">
        <div className="glass-card p-12 rounded-3xl shadow-glow text-center max-w-4xl mx-auto border-2 border-primary/30">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-4">
            Ready to <span className="text-gradient">Automate</span> Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Automate conversations. Increase sales. Save time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green font-semibold text-base group">
              Get Your Bot Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 font-semibold text-base">
              <Phone className="mr-2 w-5 h-5" />
              Book a Call
            </Button>
          </div>

          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Limited slots available this month</span>
          </div>
        </div>
      </div>
    </section>
  );
}