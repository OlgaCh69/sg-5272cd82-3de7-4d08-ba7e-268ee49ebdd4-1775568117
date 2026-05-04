import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function LeadCaptureFAQ() {
  const faqs = [
    {
      question: "What is an AI lead capture assistant?",
      answer: "An AI lead capture assistant is a smart chatbot that talks to visitors, answers questions, collects contact details, qualifies leads, and guides prospects toward booking or buying."
    },
    {
      question: "Can it work on WhatsApp and Instagram?",
      answer: "Yes. The assistant can be connected to your website, WhatsApp, and Instagram DMs so all key conversations are handled instantly."
    },
    {
      question: "Can it remember returning visitors?",
      answer: "Yes. The AI memory feature allows the assistant to recognize returning users and continue conversations with context."
    },
    {
      question: "Can it learn from my website?",
      answer: "Yes. The assistant can scrape your website content, including services, FAQs, pricing, and blogs, to answer questions accurately."
    },
    {
      question: "Does it replace my sales team?",
      answer: "No. It handles first replies, qualification, and basic questions so your sales team can focus on high-value conversations."
    },
    {
      question: "Can it send leads to my CRM?",
      answer: "Yes. Qualified leads can be sent to your CRM with source, intent level, contact details, and conversation notes."
    }
  ];

  return (
    <section className="py-20 bg-[#f0f4f8]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a2332]">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about AI lead capture assistants.
          </p>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-lg font-semibold text-[#1a2332] hover:text-[#0ea5e9] transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}