import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function InstagramFAQ() {
  const faqs = [
    {
      question: "What is Instagram automation for ecommerce?",
      answer: "It uses automated messaging and workflows to respond to DMs, capture leads, and guide customers toward purchase.",
    },
    {
      question: "Can Instagram automation increase sales?",
      answer: "Yes. Faster responses and structured conversations improve conversion rates.",
    },
    {
      question: "Can it respond to comments automatically?",
      answer: "Yes. You can trigger messages when users comment on your posts.",
    },
    {
      question: "Is it suitable for small ecommerce brands?",
      answer: "Yes, especially those looking to scale engagement without increasing workload.",
    },
    {
      question: "Does it replace human support?",
      answer: "No. It handles repetitive conversations and supports your team, not replaces it.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
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