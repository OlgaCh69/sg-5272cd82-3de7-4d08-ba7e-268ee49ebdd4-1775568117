import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Blog() {
  const blogPosts = [
    {
      title: "7 Ways AI Chatbots Increase Ecommerce Sales",
      slug: "ai-chatbots-increase-ecommerce-sales",
      description: "Learn how ecommerce brands use AI chatbots to increase conversions, recover lost revenue, and turn customer conversations into sales.",
      date: "2026-04-13",
      category: "AI Automation",
      readTime: "8 min read"
    }
  ];

  return (
    <>
      <SEO 
        title="Blog - OneTech Automation | Ecommerce AI & Automation Insights"
        description="Expert insights on AI chatbots, WhatsApp automation, abandoned cart recovery, and customer support automation for ecommerce brands."
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Ecommerce Automation Insights
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Practical guides on AI chatbots, automation strategies, and proven tactics to increase ecommerce revenue.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                        {post.category}
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        <Link href={`/${post.slug}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" asChild className="group/btn p-0 h-auto">
                        <Link href={`/${post.slug}`} className="flex items-center gap-2">
                          Read Article
                          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Empty State for Future Posts */}
              {blogPosts.length === 1 && (
                <div className="mt-12 text-center py-12 bg-muted/30 rounded-lg">
                  <p className="text-muted-foreground mb-4">
                    More expert insights coming soon!
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/contact">
                      Get Strategy Demo While You Wait
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Increase Your Ecommerce Sales?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Stop losing revenue in customer conversations. Let's build a system that converts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                  <Link href="/contact">Book Your Strategy Demo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent text-white border-white hover:bg-white hover:text-primary">
                  <Link href="/#features">Explore Solutions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}