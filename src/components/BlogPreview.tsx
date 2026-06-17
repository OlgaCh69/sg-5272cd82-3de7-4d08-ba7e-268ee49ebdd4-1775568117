"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Shield, Network } from "lucide-react";

const blogPosts = [
  {
    title: "AI Governance Frameworks for Enterprise Operations",
    excerpt: "How forward-thinking organizations implement governance-first AI infrastructure to ensure transparency, compliance, and executive control.",
    date: "2026",
    category: "AI Governance",
    slug: "#"
  },
  {
    title: "Operational Intelligence: Beyond Traditional Business Intelligence",
    excerpt: "Understanding the shift from reactive reporting to predictive operational intelligence in enterprise environments.",
    date: "2026",
    category: "Operational Intelligence",
    slug: "#"
  },
  {
    title: "Building Workforce Intelligence Systems for GCC Enterprises",
    excerpt: "Multilingual workforce coordination, knowledge access, and operational support infrastructure for regional enterprises.",
    date: "2026",
    category: "Workforce Intelligence",
    slug: "#"
  }
];

export function BlogPreview() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Blog posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group rounded-2xl border border-border/30 bg-gradient-to-br from-muted/5 to-background hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>

                <Link 
                  href={post.slug}
                  className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
                >
                  <span>Read article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-muted/10 backdrop-blur-sm overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 183, 122, 0.3) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="relative p-12 text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
                <Network className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Enterprise Infrastructure
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold">
                Ready To Transform Your
                <br />
                <span className="text-primary">Enterprise Operations?</span>
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Stop operating with fragmented systems and disconnected processes.
                Let's build governance-first AI infrastructure that scales.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                    Request Executive Briefing
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/infrastructure">
                  <Button size="lg" variant="outline" className="gap-2 border-primary/30 hover:bg-primary/5">
                    Explore Infrastructure Stack
                    <BookOpen className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}