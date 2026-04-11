import { CheckCircle2 } from "lucide-react";

export function InstagramSolution() {
  const points = [
    "Automatically respond to Instagram DMs",
    "Capture leads from comments and messages",
    "Guide customers to purchase decisions",
    "Answer product and support questions instantly",
    "Qualify prospects before your team steps in",
    "Create consistent, high-converting conversation flows",
  ];

  return (
    <section id="solution" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Turn Instagram Conversations Into a{" "}
              <span className="bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
                Scalable Sales System
              </span>
            </h2>
          </div>

          <div className="space-y-6 mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              OneTech Automation helps ecommerce brands structure and automate their Instagram conversations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Instead of reacting to messages, your business runs a system that captures, engages, and converts customers in real time.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This gives your team more leverage while giving your customers a better buying experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/30">
                <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}