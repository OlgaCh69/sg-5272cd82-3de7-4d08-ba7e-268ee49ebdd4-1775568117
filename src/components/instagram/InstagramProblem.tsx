import { AlertCircle, Clock, MessageSquareX } from "lucide-react";

export function InstagramProblem() {
  const problems = [
    {
      icon: Clock,
      title: "Delayed responses",
      description: "Manual replies create gaps that cost conversions",
    },
    {
      icon: MessageSquareX,
      title: "Inconsistent follow-up",
      description: "Leads are missed when conversations fall through cracks",
    },
    {
      icon: AlertCircle,
      title: "Lost buying intent",
      description: "Slow response times kill momentum and reduce sales",
    },
  ];

  return (
    <section id="problem" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Most Ecommerce Brands Lose Sales in{" "}
              <span className="bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
                Instagram DMs
              </span>
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg leading-relaxed">
              Instagram is one of the most powerful sales channels for ecommerce.
            </p>
            <p className="text-lg leading-relaxed">
              Customers discover your brand, engage with your content, and message you with buying intent.
            </p>
            <p className="text-lg leading-relaxed">
              But most brands handle DMs manually.
            </p>
            <p className="text-lg leading-relaxed">
              Replies are delayed. Conversations are inconsistent. Leads are missed.<br />
              And when response time slows down, conversions drop.
            </p>
            <p className="text-lg leading-relaxed font-semibold text-foreground">
              Instagram is not just engagement. It is a sales channel.<br />
              But without automation, it cannot scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-background border border-border/50 hover:border-pink-500/50 transition-colors"
              >
                <problem.icon className="w-8 h-8 text-pink-500 mb-4" />
                <h3 className="font-semibold mb-2">{problem.title}</h3>
                <p className="text-sm text-muted-foreground">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}