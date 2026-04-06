import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What platforms do you support?",
      answer: "We support all major messaging platforms including Telegram, WhatsApp, Instagram, Facebook Messenger, and more. Our bots work seamlessly across multiple platforms from a single dashboard."
    },
    {
      question: "How long does it take to set up a bot?",
      answer: "Most bots can be set up within 5-10 days, depending on your requirements and customization needs. We handle the technical setup, and you can start engaging with customers immediately after launch."
    },
    {
      question: "Can I customize the bot to match my brand?",
      answer: "Absolutely! All our bots are fully customizable. You can adjust the messaging, tone, product catalog, and even the conversation flow to perfectly match your brand identity and business needs."
    },
    {
      question: "Do I need technical knowledge to manage the bot?",
      answer: "No technical knowledge required! We provide an intuitive dashboard where you can manage products, update messaging, view analytics, and configure automations without writing any code."
    },
    {
      question: "What happens if I want to upgrade or downgrade my plan?",
      answer: "You can upgrade or downgrade your plan at any time. When upgrading, new features become available immediately. When downgrading, changes take effect at the start of your next billing cycle."
    },
    {
      question: "Is customer support included?",
      answer: "Yes! All plans include customer support and maintenance as part of your monthly subscription fee. Our team is available to help you with setup, troubleshooting, and optimization. Enterprise customers get priority support with dedicated account managers."
    },
    {
      question: "Can the bot handle multiple languages?",
      answer: "Multi-language support is available on Pro and Enterprise plans. The bot can automatically detect user language and respond accordingly, making it perfect for businesses with international customers."
    },
    {
      question: "How secure is my customer data?",
      answer: "Security is our top priority. All data is encrypted in transit and at rest. We're fully GDPR compliant and follow industry best practices for data protection. Your customer information is safe with us."
    }
  ];

  return (
    <section className="py-32 px-4" id="faq">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our bot automation platform
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`}
              className="bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a href="#contact" className="text-primary font-semibold hover:underline">
            Contact our team →
          </a>
        </div>
      </div>
    </section>
  );
}