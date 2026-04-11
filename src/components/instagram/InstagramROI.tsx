import { MessageCircle, Zap, TrendingUp } from "lucide-react";

export function InstagramROI() {
  return (
    <section id="roi" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Every DM Is a{" "}
              <span className="bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
                Revenue Opportunity
              </span>
            </h2>
          </div>

          <div className="space-y-6 mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              When a customer messages your brand, they are already interested.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              The difference between a sale and a lost opportunity often comes down to speed and structure.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Instagram automation ensures you never miss that moment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-gradient-to-r from-pink-500/5 to-fuchsia-500/5 border border-pink-500/20 text-center">
              <MessageCircle className="w-8 h-8 text-pink-500 mx-auto mb-4" />
              <p className="text-sm text-muted-foreground">Instant engagement</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-r from-pink-500/5 to-fuchsia-500/5 border border-pink-500/20 text-center">
              <Zap className="w-8 h-8 text-pink-500 mx-auto mb-4" />
              <p className="text-sm text-muted-foreground">Faster conversions</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-r from-pink-500/5 to-fuchsia-500/5 border border-pink-500/20 text-center">
              <TrendingUp className="w-8 h-8 text-pink-500 mx-auto mb-4" />
              <p className="text-sm text-muted-foreground">More revenue</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}