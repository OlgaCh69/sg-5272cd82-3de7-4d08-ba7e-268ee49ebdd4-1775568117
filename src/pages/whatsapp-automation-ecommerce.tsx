import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { WhatsAppHero } from "@/components/whatsapp/WhatsAppHero";
import { WhatsAppProblem } from "@/components/whatsapp/WhatsAppProblem";
import { WhatsAppSolution } from "@/components/whatsapp/WhatsAppSolution";
import { WhatsAppBenefits } from "@/components/whatsapp/WhatsAppBenefits";
import { WhatsAppUseCases } from "@/components/whatsapp/WhatsAppUseCases";
import { AbandonedCartFocus } from "@/components/whatsapp/AbandonedCartFocus";
import { ProductQuestions } from "@/components/whatsapp/ProductQuestions";
import { WhatsAppHowItWorks } from "@/components/whatsapp/WhatsAppHowItWorks";
import { WhoItsFor } from "@/components/whatsapp/WhoItsFor";
import { WhatsAppDifferentiation } from "@/components/whatsapp/WhatsAppDifferentiation";
import { WhatsAppSocialProof } from "@/components/whatsapp/WhatsAppSocialProof";
import { WhatsAppROI } from "@/components/whatsapp/WhatsAppROI";
import { Pricing } from "@/components/Pricing";
import { WhatsAppFAQ } from "@/components/whatsapp/WhatsAppFAQ";
import { WhatsAppFinalCTA } from "@/components/whatsapp/WhatsAppFinalCTA";
import { Footer } from "@/components/Footer";

export default function WhatsAppAutomation() {
  return (
    <>
      <SEO 
        title="WhatsApp Automation for Ecommerce | Recover More Sales"
        description="Increase ecommerce sales with WhatsApp automation. Recover abandoned carts, automate customer conversations, and scale support with a premium system built for growth."
      />
      <Header />
      <main>
        <WhatsAppHero />
        <WhatsAppProblem />
        <WhatsAppSolution />
        <WhatsAppBenefits />
        <WhatsAppUseCases />
        <AbandonedCartFocus />
        <ProductQuestions />
        <WhatsAppHowItWorks />
        <WhoItsFor />
        <WhatsAppDifferentiation />
        <WhatsAppSocialProof />
        <WhatsAppROI />
        <Pricing />
        <WhatsAppFAQ />
        <WhatsAppFinalCTA />
      </main>
    </>
  );
}