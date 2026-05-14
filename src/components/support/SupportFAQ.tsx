import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function SupportFAQ() {
  const faqs = [
    {
      question: "How quickly can we get AI support automation set up?",
      answer: "Most ecommerce stores are live within 2-3 weeks. We handle the technical integration, AI training, and testing—you approve conversation flows and go live."
    },
    {
      question: "What types of support questions can be automated?",
      answer: "Order status, tracking, returns, refunds, shipping, product information, account questions—typically 70-85% of your current ticket volume."
    },
    {
      question: "What happens when AI can't answer a question?",
      answer: "Seamless handoff to your team. You'll see the full conversation context and can jump in anytime. Complex questions route automatically."
    },
    {
      question: "Does this work across multiple channels?",
      answer: "Yes. Same AI handles email, chat, WhatsApp, Instagram DMs, and other channels. Consistent answers everywhere."
    },
    {
      question: "How much does support automation cost?",
      answer: "Pricing depends on ticket volume and channels. Most ecommerce stores invest €2,000-€6,000/month—significantly less than hiring additional support staff."
    },
    {
      question: "Will customers know they're talking to AI?",
      answer: "The AI is conversational and natural. Most customers don't notice—they just appreciate the instant, accurate responses."
    }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              Common <span className="text-[#c9a961] font-normal">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Everything you need to know about AI support automation for ecommerce.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-serif font-light text-[#1a1a1a] hover:text-[#c9a961] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 font-light leading-relaxed">
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