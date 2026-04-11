import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What is an ecommerce chatbot?",
      answer: "An ecommerce chatbot is an automated system that interacts with customers, answers questions, and guides them to purchase—without manual effort. It handles everything from product recommendations to order tracking.",
    },
    {
      question: "How does automation increase sales?",
      answer: "By responding instantly to customer inquiries, recovering abandoned carts, and guiding prospects through the buying process. Automation ensures no opportunity is missed, even outside business hours.",
    },
    {
      question: "Which platforms does this support?",
      answer: "We support WhatsApp, Instagram, Messenger, and other major communication channels. Our system integrates with your ecommerce platform to provide a unified automation experience across all channels.",
    },
    {
      question: "Is this suitable for growing ecommerce brands?",
      answer: "Yes—especially for brands looking to scale without increasing support teams. Our automation grows with your business, handling increased volume without additional overhead.",
    },
    {
      question: "How long does it take to set up?",
      answer: "Initial setup takes just minutes to connect your store and channels. We then work with you to design custom automation flows tailored to your business, typically launching within 1-2 weeks.",
    },
    {
      question: "Can I customize the automation flows?",
      answer: "Absolutely. Every business is unique. We design custom conversation flows based on your products, customer journey, and business goals. You maintain full control over messaging and brand voice.",
    },
    {
      question: "What happens if the bot can't answer a question?",
      answer: "The system intelligently escalates complex questions to your support team, ensuring customers always get the help they need. You can set custom escalation rules based on your preferences.",
    },
    {
      question: "Do I need technical skills to use this?",
      answer: "No technical skills required. We handle the setup and technical implementation. You focus on your business while we ensure your automation runs smoothly.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
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
                className="bg-background rounded-xl border border-border/50 px-6 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
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