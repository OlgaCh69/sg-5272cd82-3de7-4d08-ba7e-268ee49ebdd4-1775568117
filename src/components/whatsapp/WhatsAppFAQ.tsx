import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function WhatsAppFAQ() {
  const faqs = [
    {
      question: "What is WhatsApp automation for ecommerce?",
      answer: "WhatsApp automation for ecommerce uses automated messaging and chatbot workflows to handle customer conversations, answer questions, recover abandoned carts, and support the buying journey.",
    },
    {
      question: "Can WhatsApp automation help increase sales?",
      answer: "Yes. It can improve response time, reduce friction in the customer journey, and help recover lost opportunities such as abandoned carts and unanswered product questions.",
    },
    {
      question: "Is this only for large ecommerce brands?",
      answer: "No. It works for both growing stores and established ecommerce businesses, especially those handling a steady volume of customer messages.",
    },
    {
      question: "Can it automate customer support too?",
      answer: "Yes. Common support questions, order updates, and repetitive inquiries can be handled automatically.",
    },
    {
      question: "Does this replace my team?",
      answer: "No. It helps your team work more efficiently by automating the repetitive parts of customer communication while allowing human support where needed.",
    },
    {
      question: "Can this work alongside Instagram and Messenger automation?",
      answer: "Yes. OneTech Automation is designed to support multi-channel ecommerce communication, including WhatsApp, Instagram, and other messaging platforms.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-muted/30 rounded-xl border border-border/50 px-6 hover:border-green-500/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-green-600 dark:hover:text-green-500">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
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