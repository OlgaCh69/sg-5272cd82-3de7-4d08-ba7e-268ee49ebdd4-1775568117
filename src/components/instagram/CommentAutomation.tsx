import { MessageSquare, Users, TrendingUp, Zap, Target, Clock } from "lucide-react";

export function CommentAutomation() {
  const features = [
    {
      icon: MessageSquare,
      title: "Auto-Reply to Comments",
      description: "AI responds to product questions in comments, moving interested users into private DM conversations."
    },
    {
      icon: Users,
      title: "Story Engagement",
      description: "Automatically reply to story mentions, questions, and poll responses with personalized messages."
    },
    {
      icon: TrendingUp,
      title: "Turn Engagement Into Sales",
      description: "Convert public interest into private sales conversations. Guide followers from comment to checkout."
    },
    {
      icon: Zap,
      title: "Instant Response",
      description: "No more waiting hours to reply to comments. AI engages within seconds of any public interaction."
    },
    {
      icon: Target,
      title: "Qualified Lead Filtering",
      description: "AI identifies buying signals and routes high-intent users to priority DM queues."
    },
    {
      icon: Clock,
      title: "24/7 Coverage",
      description: "Never miss engagement opportunities. AI monitors and responds to comments around the clock."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              Comment Automation That <span className="text-[#c9a961] font-normal">Drives Conversions</span>
            </h2>
            <p className="text-xl text-white/70 font-light">
              Turn every comment and story interaction into a sales opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:border-[#c9a961]/30 transition-colors">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-serif font-light text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}