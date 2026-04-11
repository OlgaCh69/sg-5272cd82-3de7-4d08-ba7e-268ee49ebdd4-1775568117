import { Shield, TrendingDown, TrendingUp } from "lucide-react";

export function TelegramROI() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Own Your Audience, Not Just Rent It
            </h2>
          </div>

          {/* Main Content */}
          <div className="space-y-8 text-center mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Most ecommerce brands rely on platforms they don't control.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="space-y-2">
                <TrendingDown className="h-8 w-8 text-destructive mx-auto" />
                <p className="text-foreground font-medium">Algorithms change</p>
              </div>
              <div className="space-y-2">
                <TrendingDown className="h-8 w-8 text-destructive mx-auto" />
                <p className="text-foreground font-medium">Reach drops</p>
              </div>
              <div className="space-y-2">
                <TrendingUp className="h-8 w-8 text-destructive mx-auto" />
                <p className="text-foreground font-medium">Costs increase</p>
              </div>
            </div>

            <p className="text-2xl font-semibold text-foreground">
              Telegram gives you a channel you own.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              With automation, you turn that ownership into consistent engagement and repeat revenue.
            </p>
          </div>

          {/* Value Block */}
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-blue-500/5 border border-blue-500/10">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <p className="text-xl font-semibold text-foreground">
              Build a direct revenue channel that you control
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}