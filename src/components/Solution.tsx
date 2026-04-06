import { Check } from "lucide-react";

export function Solution() {
  const features = [
    "Unified inbox across all platforms",
    "Smart automations that never sleep",
    "Consistent brand experience everywhere",
    "Built to convert browsers into buyers",
  ];

  const platforms = [
    { name: "Telegram", color: "bg-blue-500" },
    { name: "WhatsApp", color: "bg-green-500" },
    { name: "Instagram", color: "bg-pink-500" },
    { name: "Messenger", color: "bg-blue-600" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-4">
            One Bot. Multiple Platforms.{" "}
            <span className="text-gradient">Endless Possibilities.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Build once. Deploy everywhere. Connect with your customers on their favorite platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className={`${platform.color} w-12 h-12 rounded-xl flex items-center justify-center text-white font-semibold shadow-lg`}
                >
                  {platform.name[0]}
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{feature}</p>
                </div>
              ))}
            </div>

            <div className="glass-card p-6 rounded-2xl border-2 border-primary/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-xl">💡</span>
                </div>
                <div>
                  <div className="font-semibold">Pro Tip</div>
                  <div className="text-sm text-muted-foreground">Save 20+ hours per week</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Automate repetitive tasks and let your bot handle customer inquiries while you focus on growing your business.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl shadow-card">
            <div className="space-y-4">
              <div className="flex items-start gap-3 glass-card p-4 rounded-xl bg-blue-500/10">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">W</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground mb-1">WhatsApp</div>
                  <p className="text-sm">New order received!</p>
                  <div className="text-xs text-muted-foreground mt-1">11:24</div>
                </div>
              </div>

              <div className="flex items-start gap-3 glass-card p-4 rounded-xl bg-pink-500/10">
                <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">I</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground mb-1">Instagram</div>
                  <p className="text-sm">New message from user</p>
                  <div className="text-xs text-muted-foreground mt-1">11:24</div>
                </div>
              </div>

              <div className="flex items-start gap-3 glass-card p-4 rounded-xl bg-blue-600/10">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">T</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground mb-1">Telegram</div>
                  <p className="text-sm">New customer inquiry</p>
                  <div className="text-xs text-muted-foreground mt-1">11:24</div>
                </div>
              </div>

              <div className="flex items-start gap-3 glass-card p-4 rounded-xl bg-blue-500/10">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">M</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground mb-1">Messenger</div>
                  <p className="text-sm">User requested support</p>
                  <div className="text-xs text-muted-foreground mt-1">11:25</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-glass-border text-center">
              <p className="text-sm text-muted-foreground">
                All conversations in one unified dashboard
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}