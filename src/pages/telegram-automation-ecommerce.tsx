import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
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
import { Pricing } from "@/components/Pricing";
import { TelegramFAQ } from "@/components/telegram/TelegramFAQ";
import { TelegramFinalCTA } from "@/components/telegram/TelegramFinalCTA";
import { Footer } from "@/components/Footer";

export default function TelegramAutomation() {
  return (
    <>
      <SEO 
        title="Telegram Automation for Ecommerce | Increase Engagement & Sales"
        description="Use Telegram automation to engage customers, send targeted messages, and drive repeat ecommerce sales. Built for high-growth brands."
      />
      <Header />
      <main>
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
        <Pricing />
        <TelegramFAQ />
        <TelegramFinalCTA />
      </main>
    </>
  );
}