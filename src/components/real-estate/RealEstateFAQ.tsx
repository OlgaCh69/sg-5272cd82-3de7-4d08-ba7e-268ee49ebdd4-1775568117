import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function RealEstateFAQ() {
  const faqs = [
    {
      question: "What is AI real estate automation?",
      answer: "AI real estate automation uses artificial intelligence to respond to leads, qualify buyers, recommend properties, schedule viewings, and update your CRM automatically. It works 24/7 to handle repetitive tasks so your agents can focus on closing deals."
    },
    {
      question: "Can the AI match buyers with properties?",
      answer: "Yes. The system can scan your website listings and match buyers with suitable properties based on location, budget, requirements, and preferences. It learns from your inventory and buyer conversations to make smart recommendations."
    },
    {
      question: "Does it work after hours?",
      answer: "Yes. The AI agent handles inquiries 24/7, including evenings, weekends, and holidays. Buyers get instant responses regardless of when they reach out, dramatically improving your lead capture rate."
    },
    {
      question: "Can it connect to our CRM?",
      answer: "Yes. The system can capture and sync lead details directly into your CRM. Every conversation, property interest, viewing booking, and buyer detail is automatically logged, keeping your pipeline updated without manual data entry."
    },
    {
      question: "Does it replace real estate agents?",
      answer: "No. It handles repetitive lead intake and qualification so agents can focus on serious buyers, viewings, and closing deals. Think of it as a smart assistant that ensures no opportunity slips through the cracks."
    },
    {
      question: "How long does implementation take?",
      answer: "Setup typically takes 2-4 weeks depending on the plan. This includes AI training, CRM integration, property data import, and testing. Our team handles the technical setup so you can focus on your business."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a2332]">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about AI real estate automation.
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