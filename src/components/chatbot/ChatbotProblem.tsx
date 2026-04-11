import { AlertCircle } from "lucide-react";

export function ChatbotProblem() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <AlertCircle className="w-12 h-12 text-destructive flex-shrink-0 mt-1" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Most Ecommerce Stores Lose Revenue in Customer Conversations
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Ecommerce brands spend heavily to get traffic.
            </p>
            
            <p>
              But once a visitor has a question, hesitates at checkout, or reaches out before buying, the process often breaks down.
            </p>
            
            <p>
              Replies are delayed. Support teams get overwhelmed. Product questions go unanswered. High-intent visitors leave without converting.
            </p>
            
            <p className="text-foreground font-semibold">
              For many ecommerce businesses, the problem is not a lack of traffic.<br />
              It is a lack of timely, structured communication.
            </p>
            
            <p className="text-primary font-semibold text-xl">
              That is where AI chatbots create a real advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}