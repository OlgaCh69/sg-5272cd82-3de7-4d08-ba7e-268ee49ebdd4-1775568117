import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function TelegramFAQ() {
  const faqs = [
    {
      question: "What is Telegram automation for ecommerce?",
      answer: "Telegram automation uses bots and structured messaging flows to engage customers, send updates, and guide them through the buying journey.",
    },
    {
      question: "How is Telegram different from email or social media?",
      answer: "Telegram offers higher open rates, direct delivery, and fewer restrictions compared to traditional channels.",
    },
    {
      question: "Can Telegram help increase sales?",
      answer: "Yes. It supports product discovery, promotions, and repeat engagement, all of which contribute to increased sales.",
    },
    {
      question: "Is Telegram suitable for all ecommerce brands?",
      answer: "It works best for brands that want to build direct relationships with their audience and encourage repeat purchases.",
    },
    {
      question: "Can this work with other platforms like WhatsApp and Instagram?",
      answer: "Yes. Telegram can be part of a broader multi-channel automation strategy.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-muted/30 hover:border-blue-500/30 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
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