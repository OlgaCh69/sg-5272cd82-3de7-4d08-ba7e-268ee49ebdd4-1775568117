import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function BeautyClinicFAQ() {
  const faqs = [
    {
      question: "What is an AI receptionist?",
      answer: "An AI receptionist is a system that replies to messages, books appointments, and handles client communication automatically. It works 24/7 across Instagram, WhatsApp, and your website."
    },
    {
      question: "Can it book appointments?",
      answer: "Yes. It connects to your calendar and allows clients to book instantly. The system checks real-time availability and confirms bookings automatically."
    },
    {
      question: "Does it work with Instagram and WhatsApp?",
      answer: "Yes. It can reply and manage conversations on both platforms, handling DMs, comments, and messages with intelligent responses."
    },
    {
      question: "What happens if I miss a call?",
      answer: "The system sends an automatic SMS within seconds with a booking link, turning missed calls into confirmed appointments."
    },
    {
      question: "Will it replace my staff?",
      answer: "No. It reduces repetitive work so your team can focus on clients. Think of it as a smart assistant that handles initial inquiries and bookings."
    },
    {
      question: "How long does setup take?",
      answer: "Typically 2-4 weeks depending on the plan. This includes AI training, platform integration, calendar setup, and testing."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f8f3ef] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#1a1a1a]">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border-2 border-gray-200 rounded-lg px-6 hover:border-[#d4af37] transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-[#1a1a1a] hover:text-[#d4af37] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed">
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