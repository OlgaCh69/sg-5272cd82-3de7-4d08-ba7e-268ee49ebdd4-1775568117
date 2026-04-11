import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export function ChatbotHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            AI Chatbot for Ecommerce Brands
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Increase conversions, automate customer conversations, and turn more traffic into revenue with an AI chatbot built for high-growth ecommerce brands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/contact">
                Book a Strategy Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <Link href="#how-it-works">
                See How It Works
                <PlayCircle className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Built for ecommerce businesses that want faster responses, better customer journeys, and scalable growth
          </p>
        </div>
      </div>
    </section>
  );
}