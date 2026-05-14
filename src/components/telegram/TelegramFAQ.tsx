import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function TelegramFAQ() {
  const faqs = [
    {
      question: "How quickly can we launch Telegram automation?",
      answer: "Most brands are live within 7-14 days. We create your bot, design conversation flows, integrate with your store, and build broadcast campaigns—you approve and launch."
    },
    {
      question: "Do we need a Telegram channel or bot?",
      answer: "Both serve different purposes. Channels for broadcasts (one-to-many), bots for conversations (one-to-one). We help you choose the right setup for your goals."
    },
    {
      question: "Can we integrate with our existing ecommerce platform?",
      answer: "Yes. We connect Telegram with Shopify, WooCommerce, custom platforms—any system with an API. Orders, inventory, customer data sync automatically."
    },
    {
      question: "What if the AI can't handle a customer question?",
      answer: "Complex questions route to your team. You see every conversation and can take over anytime. Most brands find AI handles 70-80% autonomously."
    },
    {
      question: "How much does Telegram automation cost?",
      answer: "Pricing depends on subscriber count and features. Most ecommerce brands invest €1,000-€3,500/month. Telegram itself is free—no per-message fees."
    },
    {
      question: "What results should we expect?",
      answer: "Typical outcomes: 95%+ message open rates, €80k-€400k annual direct revenue, 3-5x better engagement than email, and nearly zero marginal cost per message."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              Common <span className="text-[#c9a961] font-normal">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6">
                <AccordionTrigger className="text-left font-serif font-light text-white hover:text-[#c9a961] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 font-light leading-relaxed">
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