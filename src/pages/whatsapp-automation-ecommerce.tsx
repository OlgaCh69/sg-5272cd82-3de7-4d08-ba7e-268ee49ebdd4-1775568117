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
import { WhatsAppFAQ } from "@/components/whatsapp/WhatsAppFAQ";
import { WhatsAppFinalCTA } from "@/components/whatsapp/WhatsAppFinalCTA";

export default function WhatsAppAutomationPage() {
  return (
    <>
      <SEO 
        title="WhatsApp Automation for Ecommerce Brands | Recover More Sales"
        description="Increase ecommerce sales with WhatsApp automation. Recover abandoned carts, automate customer conversations, and scale support with a premium system built for growth."
        image="/og-image.png"
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
        <WhatsAppFAQ />
        <WhatsAppFinalCTA />
      </main>
    </>
  );
}