import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ChatbotFinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Turn More Conversations Into Revenue?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            If your ecommerce brand is already getting traffic, messages, and customer questions, there is likely revenue being left on the table.
          </p>
          
          <p className="text-lg md:text-xl text-foreground font-semibold mb-10">
            Let's build a chatbot system that helps you capture more of it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="/contact">Book Your Strategy Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <Link href="/ai-chatbot-ecommerce">Learn More</Link>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Built for ecommerce brands that want measurable growth, not just more software
          </p>
        </div>
      </div>
    </section>
  );
}