import { MessageCircle, Zap, Target, TrendingUp } from "lucide-react";

export function CommentAutomation() {
  const points = [
    {
      icon: MessageCircle,
      text: "Automatically message users who comment",
    },
    {
      icon: Zap,
      text: "Deliver offers, links, or product info instantly",
    },
    {
      icon: Target,
      text: "Capture leads directly from content",
    },
    {
      icon: TrendingUp,
      text: "Turn engagement into measurable results",
    },
  ];

  return (
    <section id="comment-automation" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Turn Comments Into{" "}
              <span className="bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
                Conversations Automatically
              </span>
            </h2>
          </div>

          <div className="space-y-6 mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every comment on your posts is potential buying intent.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With Instagram automation, you can trigger direct messages when someone comments on your content.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This allows you to move users from public engagement into private conversations where conversions happen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg bg-muted/30 border border-border/30"
              >
                <point.icon className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                <p className="text-sm leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}