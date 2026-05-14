import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function WhatsAppFAQ() {
  const faqs = [
    {
      question: "How quickly can we get WhatsApp automation set up?",
      answer: "Most ecommerce stores are live within 7-14 days. We handle the technical integration, AI training, and testing—you just need to provide access to your store and approve the conversation flows."
    },
    {
      question: "Does this work with my ecommerce platform?",
      answer: "Yes. We integrate with Shopify, WooCommerce, BigCommerce, Magento, and custom platforms. If you have an API, we can connect."
    },
    {
      question: "What if customers ask questions the AI can't handle?",
      answer: "The AI seamlessly hands off complex questions to your team. You'll see every conversation in your dashboard and can jump in anytime. Most stores find the AI handles 70-85% of questions autonomously."
    },
    {
      question: "How much does WhatsApp automation cost?",
      answer: "Pricing depends on your message volume and features needed. Most ecommerce stores invest €1,500-€5,000/month—a fraction of hiring support staff, with significantly higher ROI from recovered revenue."
    },
    {
      question: "Can we customize the conversation flows?",
      answer: "Absolutely. We build custom flows based on your products, brand voice, and customer journey. You approve every template before launch, and we adjust based on performance data."
    },
    {
      question: "What results should we expect?",
      answer: "Typical results: 15-30% of abandoned carts recovered, 50-70% reduction in support costs, sub-1-minute response times, and 20-40% increase in customer satisfaction scores."
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
              Everything you need to know about WhatsApp automation for ecommerce.
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