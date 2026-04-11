import { Zap, TrendingUp, Target } from "lucide-react";

export function WhatsAppROI() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              A Faster Response Time Can Mean More Revenue
            </h2>
          </div>

          {/* Main Copy */}
          <div className="prose prose-lg max-w-none text-center mb-12 space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              For ecommerce brands, speed matters.
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              When a customer is ready to buy, even a short delay can cost the sale. WhatsApp automation helps you respond in real time, keep momentum high, and remove friction from the buying process.
            </p>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/5 via-green-600/5 to-green-500/5 border border-green-500/10">
              <p className="text-xl text-foreground font-semibold">
                The result is a system that supports both growth and efficiency at the same time.
              </p>
            </div>
          </div>

          {/* Supporting Points */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-background border border-border/50">
              <Zap className="h-10 w-10 text-green-600 dark:text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Instant Engagement</h3>
              <p className="text-sm text-muted-foreground">Connect with customers the moment they show interest</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-background border border-border/50">
              <TrendingUp className="h-10 w-10 text-green-600 dark:text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Higher Momentum</h3>
              <p className="text-sm text-muted-foreground">Keep the buying journey moving forward without delays</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-background border border-border/50">
              <Target className="h-10 w-10 text-green-600 dark:text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Less Friction</h3>
              <p className="text-sm text-muted-foreground">Remove obstacles between interest and purchase</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}