import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ChatbotInvestment() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Investment
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground mb-10">
            <p>
              Every ecommerce business has a different customer journey, message volume, and level of complexity.
            </p>
            
            <p>
              Because of that, we do not rely on generic packages.
            </p>
            
            <p className="text-foreground font-semibold">
              We build AI chatbot systems based on your business model, your goals, and the opportunities available in your customer journey.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-xl border border-border/50 mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Built Around Return, Not Just Access
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Most ecommerce brands we work with invest based on the scale of their operations and the level of automation required.
            </p>
            <p className="text-lg text-foreground font-semibold">
              The goal is simple: create a system that generates a measurable return through better conversion, stronger customer experience, and more efficient operations.
            </p>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/contact">
                Book a Strategy Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}