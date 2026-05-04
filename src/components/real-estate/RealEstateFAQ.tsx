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
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to know about AI real estate automation.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-slate-50 rounded-xl px-6 border-none">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-blue-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}