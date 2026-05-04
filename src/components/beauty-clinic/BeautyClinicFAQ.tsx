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
      answer: "Yes. It connects to your calendar and allows clients to book instantly. The system shows real-time availability and handles confirmations and reminders automatically."
    },
    {
      question: "Does it work with Instagram and WhatsApp?",
      answer: "Yes. It can reply and manage conversations on both platforms, ensuring you never miss a client inquiry regardless of where they reach out."
    },
    {
      question: "What happens if I miss a call?",
      answer: "The system sends an automatic SMS with a booking link within seconds. This recovers missed opportunities and turns them into booked appointments."
    },
    {
      question: "Will it replace my staff?",
      answer: "No. It reduces repetitive work so your team can focus on clients. Think of it as a smart assistant that handles the busywork while your staff provides personalized service."
    },
    {
      question: "How long does setup take?",
      answer: "Typically 2-3 weeks. This includes connecting to your calendar, training the AI on your services, and testing the booking flow. We handle the technical setup for you."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#1a1a1a]">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 border-gray-100 rounded-xl px-6 hover:border-[#d4af37]/30 transition-colors">
                <AccordionTrigger className="text-left text-lg font-semibold text-[#1a1a1a] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
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