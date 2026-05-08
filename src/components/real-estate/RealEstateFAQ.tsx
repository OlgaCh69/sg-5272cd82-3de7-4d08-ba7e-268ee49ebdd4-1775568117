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
      answer: "AI real estate automation uses artificial intelligence to respond to leads, qualify buyers, recommend properties, schedule viewings, and update your CRM automatically."
    },
    {
      question: "Can the AI match buyers with properties?",
      answer: "Yes. The system can scan your website listings and match buyers with suitable properties based on location, budget, requirements, and preferences."
    },
    {
      question: "Does it work after hours?",
      answer: "Yes. The AI agent handles inquiries 24/7, including evenings, weekends, and holidays."
    },
    {
      question: "Can it connect to our CRM?",
      answer: "Yes. The system can capture and sync lead details directly into your CRM."
    },
    {
      question: "Does it replace real estate agents?",
      answer: "No. It handles repetitive lead intake and qualification so agents can focus on serious buyers, viewings, and closing deals."
    },
    {
      question: "How long does implementation take?",
      answer: "Most agencies are fully operational within 2-4 weeks, including custom integration with your property listings and CRM system."
    }
  ];

  return (
    <section className="py-32 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-[#c9a961] mb-4 font-medium">Questions</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#1a1a2e] mb-6">
              Everything You Need to <span className="italic">Know</span>
            </h2>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-2xl border border-[#1a1a2e]/5 px-8 hover:shadow-lg transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-[#1a1a2e] py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#1a1a2e]/70 font-light leading-relaxed pb-6">
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