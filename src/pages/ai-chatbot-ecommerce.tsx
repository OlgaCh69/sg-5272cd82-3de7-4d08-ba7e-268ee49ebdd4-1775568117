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

export default function AIChatbotEcommerce() {
  return (
    <>
      <SEO
        title="AI Chatbot for Ecommerce Brands | Increase Sales with Automation"
        description="Increase ecommerce sales with an AI chatbot built for growth. Automate customer conversations, improve support, and convert more traffic into revenue."
        url="https://onetechautomation.com/ai-chatbot-ecommerce"
      />
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
        <ChatbotFinalCTA />
      </main>
    </>
  );
}