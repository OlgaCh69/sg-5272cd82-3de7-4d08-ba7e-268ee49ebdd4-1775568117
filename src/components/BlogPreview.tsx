import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, TrendingUp } from "lucide-react";

export function BlogPreview() {
  const articles = [
    {
      title: "AI Chatbots Increase Ecommerce Sales",
      description: "Learn how AI-powered chatbots can boost your ecommerce revenue by 30-50% through automated customer engagement.",
      link: "/ai-chatbots-increase-ecommerce-sales",
      readTime: "8 min read",
      category: "Ecommerce"
    },
    {
      title: "Best Chatbots for Ecommerce",
      description: "Complete guide to choosing the right AI chatbot solution for your ecommerce store in 2026.",
      link: "/best-chatbots-ecommerce",
      readTime: "12 min read",
      category: "Guide"
    },
    {
      title: "Increase Ecommerce Conversion Rate",
      description: "Proven strategies to boost your ecommerce conversion rates using AI automation and smart customer engagement.",
      link: "/increase-ecommerce-conversion-rate",
      readTime: "10 min read",
      category: "Strategy"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Learn How to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] to-[#60efff]">Grow Your Revenue</span>
            </h2>
            <p className="text-xl text-gray-400">
              Expert insights on AI automation, lead generation, and revenue optimization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {articles.map((article, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 hover:border-[#00ff87]/50 transition-all duration-300 overflow-hidden group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#00ff87]/10 border border-[#00ff87]/20 rounded-full text-xs font-semibold text-[#00ff87]">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ff87] transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 line-clamp-2">
                    {article.description}
                  </p>

                  <Button 
                    asChild
                    variant="outline"
                    className="w-full border-white/20 hover:border-[#00ff87]/50 text-white hover:bg-white/5"
                  >
                    <Link href={article.link}>
                      Read Article <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              asChild
              className="bg-gradient-to-r from-[#00ff87] to-[#60efff] hover:from-[#00dd75] hover:to-[#50dfef] text-[#0a0a0a] font-semibold px-8"
            >
              <Link href="/blog">
                View All Articles <TrendingUp className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}