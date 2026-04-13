import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function AbandonedCartFAQ() {
  const faqs = [
    {
      question: "What is abandoned cart recovery?",
      answer: "Abandoned cart recovery is the process of re-engaging shoppers who added products to their cart but left before completing checkout.",
    },
    {
      question: "Why is abandoned cart recovery important for ecommerce?",
      answer: "Because it helps recover revenue from shoppers who already showed strong buying intent, making it one of the most efficient ways to improve ecommerce performance.",
    },
    {
      question: "How does abandoned cart automation work?",
      answer: "It uses automated follow-up messages and conversation flows to reconnect with shoppers, answer objections, and guide them back to complete their purchase.",
    },
    {
      question: "Can this work with WhatsApp and Instagram?",
      answer: "Yes. Our abandoned cart recovery systems can support channels like WhatsApp, Instagram, and AI chatbot flows as part of a broader ecommerce automation strategy.",
    },
    {
      question: "Is this only for large ecommerce brands?",
      answer: "No. It is valuable for both growing and established ecommerce businesses that want to recover more lost sales.",
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