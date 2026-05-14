import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function ChatbotFAQ() {
  const faqs = [
    { question: "What is an AI chatbot for ecommerce?", answer: "An AI chatbot for ecommerce automates customer interactions, answers questions, recommends products, and supports the buying journey in real time across multiple channels." },
    { question: "How can an AI chatbot increase ecommerce sales?", answer: "It improves response speed, reduces friction during the customer journey, and helps recover lost sales opportunities like abandoned carts or unanswered product questions." },
    { question: "Can an AI chatbot handle support requests?", answer: "Yes. It automates repetitive support conversations—shipping questions, return policies, order updates, and product details—while routing complex issues to your team." },
    { question: "Is this only useful for large ecommerce brands?", answer: "No. It's valuable for both growing and established ecommerce businesses, especially those handling regular customer conversations and looking to scale efficiently." },
    { question: "Can this work across multiple platforms?", answer: "Yes. Our chatbot systems support WhatsApp, Instagram, Telegram, website chat, and email as part of a comprehensive ecommerce automation strategy." }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white text-center mb-16">
            Common <span className="text-[#c9a961] font-normal">Questions</span>
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6">
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