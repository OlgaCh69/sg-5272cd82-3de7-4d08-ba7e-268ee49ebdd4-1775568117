import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function AbandonedCartFAQ() {
  const faqs = [
    {
      question: "What is abandoned cart recovery?",
      answer: "Abandoned cart recovery is the process of re-engaging shoppers who added products to their cart but left before completing checkout. We use automated multi-channel messaging to bring them back."
    },
    {
      question: "Why is abandoned cart recovery important for ecommerce?",
      answer: "Because 70% of carts are abandoned, representing massive lost revenue. Cart recovery helps recapture 15-30% of that—€50k-€300k+ annually for most growing stores—from customers who already showed strong buying intent."
    },
    {
      question: "How does abandoned cart automation work?",
      answer: "It uses automated follow-up messages across WhatsApp, Instagram, and Telegram to reconnect with shoppers within minutes of abandonment. AI handles objections, answers questions, and guides them back to complete their purchase."
    },
    {
      question: "Can this work with WhatsApp and Instagram?",
      answer: "Yes. Our cart recovery systems work across WhatsApp (95%+ open rates), Instagram DMs, Telegram, and email—all coordinated from one platform. Different customers prefer different channels."
    },
    {
      question: "Is this only for large ecommerce brands?",
      answer: "No. It's valuable for any growing ecommerce business (€500k+ revenue) that's generating consistent checkout activity and wants to recover more lost sales. The ROI is highest when you already have traffic and volume."
    },
    {
      question: "How much does cart recovery automation cost?",
      answer: "Pricing depends on your message volume, checkout activity, and channels needed. Most ecommerce stores invest €2,000-€6,000/month—a fraction of the €50k-€300k+ they recover annually."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-12 text-center">
            Common <span className="text-[#c9a961] font-normal">Questions</span>
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6"
              >
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