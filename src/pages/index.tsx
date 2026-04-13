import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Investment } from "@/components/Investment";
import { Trust } from "@/components/Trust";
import { FinalCTA } from "@/components/FinalCTA";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { UseCases } from "@/components/UseCases";
import { Results } from "@/components/Results";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <SEO />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <UseCases />
        <Results />
        <HowItWorks />
        <Investment />
        <Trust />
        <Testimonials />
        <FAQ />
        
        {/* Latest Article Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-sm font-semibold text-primary mb-2">FROM OUR BLOG</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
              </div>
              
              <Link href="/automate-ecommerce-store">
                <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                          Ecommerce Automation
                        </div>
                        <CardTitle className="text-2xl md:text-3xl mb-3 group-hover:text-primary transition-colors">
                          How to Automate Your Ecommerce Store (Step-by-Step Guide)
                        </CardTitle>
                        <CardDescription className="text-base">
                          Learn how to automate your ecommerce store using AI chatbots, messaging automation, and smart systems that increase conversions and reduce manual work.
                        </CardDescription>
                      </div>
                      <ArrowRight className="h-6 w-6 text-primary shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>10 min read</span>
                      <span>•</span>
                      <span className="text-primary font-medium group-hover:underline">Read Article →</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              
              <div className="text-center mt-8">
                <Link href="/blog">
                  <Button variant="outline" size="lg">
                    View All Articles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <FinalCTA />
      </main>
    </>
  );
}