import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { ChatbotHero } from "@/components/chatbot/ChatbotHero";
import { ChatbotProblem } from "@/components/chatbot/ChatbotProblem";
import { ChatbotSolution } from "@/components/chatbot/ChatbotSolution";
import { ChatbotBenefits } from "@/components/chatbot/ChatbotBenefits";
import { ChatbotUseCases } from "@/components/chatbot/ChatbotUseCases";
import { ProductDiscovery } from "@/components/chatbot/ProductDiscovery";
import { SupportAutomation } from "@/components/chatbot/SupportAutomation";
import { AbandonedCart } from "@/components/chatbot/AbandonedCart";
import { MultiChannel } from "@/components/chatbot/MultiChannel";
import { ChatbotHowItWorks } from "@/components/chatbot/ChatbotHowItWorks";
import { ChatbotWhoItsFor } from "@/components/chatbot/ChatbotWhoItsFor";
import { ChatbotDifferentiation } from "@/components/chatbot/ChatbotDifferentiation";
import { ChatbotSocialProof } from "@/components/chatbot/ChatbotSocialProof";
import { ChatbotInvestment } from "@/components/chatbot/ChatbotInvestment";
import { ChatbotFAQ } from "@/components/chatbot/ChatbotFAQ";
import { ChatbotFinalCTA } from "@/components/chatbot/ChatbotFinalCTA";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function ChatbotPage() {
  return (
    <>
      <SEO 
        title="AI Chatbot for Ecommerce | Automate Sales, Support, and Conversions"
        description="AI chatbots built for ecommerce. Recover abandoned carts, answer product questions, automate support—24/7 across WhatsApp, Instagram, web chat."
      />
      <div className="min-h-screen bg-[#0a0a0a]">
        <Header />
        <main>
          <ChatbotHero />
          <ChatbotProblem />
          <ChatbotSolution />
          <ChatbotBenefits />
          <ChatbotUseCases />
          <ProductDiscovery />
          <SupportAutomation />
          <AbandonedCart />
          <MultiChannel />
          <ChatbotHowItWorks />
          <ChatbotWhoItsFor />
          <ChatbotDifferentiation />
          <ChatbotSocialProof />
          <ChatbotInvestment />
          <ChatbotFAQ />
          <ContactForm />
          <ChatbotFinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}