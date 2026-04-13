import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { InstagramHero } from "@/components/instagram/InstagramHero";
import { InstagramProblem } from "@/components/instagram/InstagramProblem";
import { InstagramSolution } from "@/components/instagram/InstagramSolution";
import { InstagramBenefits } from "@/components/instagram/InstagramBenefits";
import { CommentAutomation } from "@/components/instagram/CommentAutomation";
import { DMAutomation } from "@/components/instagram/DMAutomation";
import { InstagramUseCases } from "@/components/instagram/InstagramUseCases";
import { InstagramCustomerJourney } from "@/components/instagram/InstagramCustomerJourney";
import { InstagramHowItWorks } from "@/components/instagram/InstagramHowItWorks";
import { InstagramWhoItsFor } from "@/components/instagram/InstagramWhoItsFor";
import { InstagramDifferentiation } from "@/components/instagram/InstagramDifferentiation";
import { InstagramSocialProof } from "@/components/instagram/InstagramSocialProof";
import { InstagramROI } from "@/components/instagram/InstagramROI";
import { Pricing } from "@/components/Pricing";
import { InstagramFAQ } from "@/components/instagram/InstagramFAQ";
import { InstagramFinalCTA } from "@/components/instagram/InstagramFinalCTA";
import { Footer } from "@/components/Footer";

export default function InstagramAutomation() {
  return (
    <>
      <SEO 
        title="Instagram Automation for Ecommerce | Turn DMs Into Sales"
        description="Increase ecommerce sales with Instagram automation. Convert DMs, capture leads, and automate conversations to scale your business."
      />
      <Header />
      <main>
        <InstagramHero />
        <InstagramProblem />
        <InstagramSolution />
        <InstagramBenefits />
        <CommentAutomation />
        <DMAutomation />
        <InstagramUseCases />
        <InstagramCustomerJourney />
        <InstagramHowItWorks />
        <InstagramWhoItsFor />
        <InstagramDifferentiation />
        <InstagramSocialProof />
        <InstagramROI />
        <Pricing />
        <InstagramFAQ />
        <InstagramFinalCTA />
      </main>
    </>
  );
}