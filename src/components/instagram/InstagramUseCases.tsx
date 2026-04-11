import { Target, Sparkles, Headphones, Tag, Users, Gift, MessageCircle, CheckCircle2 } from "lucide-react";

export function InstagramUseCases() {
  const useCases = [
    { icon: Target, title: "Lead capture from DMs and comments" },
    { icon: Sparkles, title: "Product recommendation flows" },
    { icon: Headphones, title: "FAQ and customer support automation" },
    { icon: Tag, title: "Campaign and offer delivery" },
    { icon: Users, title: "Influencer campaign automation" },
    { icon: Gift, title: "Giveaway and promotion funnels" },
    { icon: MessageCircle, title: "Abandoned conversation follow-ups" },
    { icon: CheckCircle2, title: "Pre-sale qualification" },
  ];

  return (
    <section id="use-cases" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              What You Can Automate on{" "}
              <span className="bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
                Instagram
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our system is built around how ecommerce customers actually interact with brands.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-muted/30 border border-border/30 hover:border-pink-500/30 transition-colors text-center"
              >
                <useCase.icon className="w-8 h-8 text-pink-500 mx-auto mb-4" />
                <p className="text-sm leading-relaxed">{useCase.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}