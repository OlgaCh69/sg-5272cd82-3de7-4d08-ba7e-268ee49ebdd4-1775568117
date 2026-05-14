import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TelegramHero } from "@/components/telegram/TelegramHero";
import { TelegramProblem } from "@/components/telegram/TelegramProblem";
import { TelegramSolution } from "@/components/telegram/TelegramSolution";
import { TelegramBenefits } from "@/components/telegram/TelegramBenefits";
import { TelegramUseCases } from "@/components/telegram/TelegramUseCases";
import { BroadcastPower } from "@/components/telegram/BroadcastPower";
import { CustomerJourney } from "@/components/telegram/CustomerJourney";
import { TelegramHowItWorks } from "@/components/telegram/TelegramHowItWorks";
import { TelegramWhoItsFor } from "@/components/telegram/TelegramWhoItsFor";
import { TelegramDifferentiation } from "@/components/telegram/TelegramDifferentiation";
import { TelegramSocialProof } from "@/components/telegram/TelegramSocialProof";
import { TelegramROI } from "@/components/telegram/TelegramROI";
import { Investment } from "@/components/Investment";
import { TelegramFAQ } from "@/components/telegram/TelegramFAQ";
import { ContactForm } from "@/components/ContactForm";
import { TelegramFinalCTA } from "@/components/telegram/TelegramFinalCTA";

export default function TelegramAutomationEcommerce() {
  return (
    <>
      <SEO 
        title="Telegram Automation for Ecommerce | AI Bot for Sales & Support"
        description="Automate your ecommerce store with Telegram AI. Handle orders, support, and broadcasts at scale with 24/7 automated conversations."
        url="https://onetechautomation.com/telegram-automation-ecommerce"
      />
      <Header />
      <main className="bg-[#0a0a0a]">
        <TelegramHero />
        <TelegramProblem />
        <TelegramSolution />
        <TelegramBenefits />
        <TelegramUseCases />
        <BroadcastPower />
        <CustomerJourney />
        <TelegramHowItWorks />
        <TelegramWhoItsFor />
        <TelegramDifferentiation />
        <TelegramSocialProof />
        <TelegramROI />
        <Investment />
        <TelegramFAQ />
        <ContactForm />
        <TelegramFinalCTA />
      </main>
      <Footer />
    </>
  );
}