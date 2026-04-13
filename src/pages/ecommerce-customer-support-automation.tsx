import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { SupportHero } from "@/components/support/SupportHero";
import { SupportProblem } from "@/components/support/SupportProblem";
import { SupportSolution } from "@/components/support/SupportSolution";
import { SupportBenefits } from "@/components/support/SupportBenefits";
import { WhatCanBeAutomated } from "@/components/support/WhatCanBeAutomated";
import { MultiChannelSupport } from "@/components/support/MultiChannelSupport";
import { ResponseTimeImpact } from "@/components/support/ResponseTimeImpact";
import { SupportHowItWorks } from "@/components/support/SupportHowItWorks";
import { SupportWhoItsFor } from "@/components/support/SupportWhoItsFor";
import { SupportDifferentiation } from "@/components/support/SupportDifferentiation";
import { SupportSocialProof } from "@/components/support/SupportSocialProof";
import { SupportROI } from "@/components/support/SupportROI";
import { SupportInvestment } from "@/components/support/SupportInvestment";
import { SupportFAQ } from "@/components/support/SupportFAQ";
import { SupportFinalCTA } from "@/components/support/SupportFinalCTA";

export default function SupportAutomationPage() {
  return (
    <>
      <SEO
        title="Ecommerce Customer Support Automation | AI Support Systems"
        description="Automate ecommerce customer support with AI. Improve response time, reduce workload, and scale your support across WhatsApp and Instagram."
        url="https://onetechautomation.com/ecommerce-customer-support-automation"
      />
      <Header />
      <main>
        <SupportHero />
        <SupportProblem />
        <SupportSolution />
        <SupportBenefits />
        <WhatCanBeAutomated />
        <MultiChannelSupport />
        <ResponseTimeImpact />
        <SupportHowItWorks />
        <SupportWhoItsFor />
        <SupportDifferentiation />
        <SupportSocialProof />
        <SupportROI />
        <SupportInvestment />
        <SupportFAQ />
        <SupportFinalCTA />
      </main>
    </>
  );
}