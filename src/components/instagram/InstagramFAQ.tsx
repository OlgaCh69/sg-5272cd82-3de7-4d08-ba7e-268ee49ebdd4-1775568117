import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function InstagramFAQ() {
  const faqs = [
    {
      question: "How quickly can we launch Instagram automation?",
      answer: "Most brands are live within 7-14 days. We handle Instagram Business API setup, AI training, and conversation flow design—you just approve the templates."
    },
    {
      question: "Does this work with Instagram Business accounts?",
      answer: "Yes, you need an Instagram Business or Creator account connected to a Facebook Page. We help with the setup if needed."
    },
    {
      question: "What if the AI can't answer a question?",
      answer: "Complex questions route to your team automatically. You see every conversation in your dashboard and can take over anytime. Most brands find AI handles 70-80% autonomously."
    },
    {
      question: "Can we customize the conversation flows?",
      answer: "Absolutely. We build custom flows for your products, brand voice, and sales process. You approve every template before launch."
    },
    {
      question: "How much does Instagram automation cost?",
      answer: "Pricing depends on DM volume and features. Most Instagram-focused brands invest €1,200-€4,000/month—far less than hiring support staff, with significantly higher ROI."
    },
    {
      question: "What results should we expect?",
      answer: "Typical outcomes: 20-35% conversion lift, sub-30-second response times, 60-75% support cost reduction, and €40k-€200k additional revenue annually."
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