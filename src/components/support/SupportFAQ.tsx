import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function SupportFAQ() {
  const faqs = [
    {
      question: "What is ecommerce customer support automation?",
      answer: "It is the use of AI and automation to handle customer inquiries, provide answers, and support the buying journey without manual effort.",
    },
    {
      question: "Can automation replace my support team?",
      answer: "No. It supports your team by handling repetitive tasks, allowing humans to focus on complex interactions.",
    },
    {
      question: "Will customers notice they are talking to automation?",
      answer: "The system is designed to feel natural and helpful, maintaining a strong customer experience.",
    },
    {
      question: "Can this work across multiple platforms?",
      answer: "Yes. It can support WhatsApp, Instagram, and chatbot-based communication.",
    },
    {
      question: "Is this suitable for small ecommerce brands?",
      answer: "Yes. It is valuable for both growing and established businesses.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Frequently Asked Questions
          </h2>

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