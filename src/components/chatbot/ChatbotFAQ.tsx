import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function ChatbotFAQ() {
  const faqs = [
    {
      question: "What is an AI chatbot for ecommerce?",
      answer: "An AI chatbot for ecommerce is an automated system that helps online stores interact with customers, answer questions, recommend products, and support the buying journey in real time.",
    },
    {
      question: "How can an AI chatbot increase ecommerce sales?",
      answer: "It improves response speed, reduces friction during the customer journey, and helps recover lost sales opportunities such as abandoned carts or unanswered product questions.",
    },
    {
      question: "Can an AI chatbot handle support requests?",
      answer: "Yes. It can automate repetitive support conversations such as shipping questions, return policies, order updates, and product details.",
    },
    {
      question: "Is this only useful for large ecommerce brands?",
      answer: "No. It is valuable for both growing and established ecommerce businesses, especially those handling regular customer conversations.",
    },
    {
      question: "Can this work across multiple platforms?",
      answer: "Yes. Our chatbot systems can support channels such as WhatsApp, Instagram, and Telegram as part of a broader ecommerce automation strategy.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}