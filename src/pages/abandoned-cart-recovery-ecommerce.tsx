import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { AbandonedCartHero } from "@/components/abandoned-cart/AbandonedCartHero";
import { AbandonedCartProblem } from "@/components/abandoned-cart/AbandonedCartProblem";
import { AbandonedCartSolution } from "@/components/abandoned-cart/AbandonedCartSolution";
import { WhyCartsAbandoned } from "@/components/abandoned-cart/WhyCartsAbandoned";
import { AbandonedCartBenefits } from "@/components/abandoned-cart/AbandonedCartBenefits";
import { ChannelPositioning } from "@/components/abandoned-cart/ChannelPositioning";
import { AbandonedCartHowItWorks } from "@/components/abandoned-cart/AbandonedCartHowItWorks";
import { BuyingObjections } from "@/components/abandoned-cart/BuyingObjections";
import { ROIAngle } from "@/components/abandoned-cart/ROIAngle";
import { AbandonedCartUseCases } from "@/components/abandoned-cart/AbandonedCartUseCases";
import { AbandonedCartWhoItsFor } from "@/components/abandoned-cart/AbandonedCartWhoItsFor";
import { AbandonedCartDifferentiation } from "@/components/abandoned-cart/AbandonedCartDifferentiation";
import { AbandonedCartSocialProof } from "@/components/abandoned-cart/AbandonedCartSocialProof";
import { AbandonedCartInvestment } from "@/components/abandoned-cart/AbandonedCartInvestment";
import { AbandonedCartFAQ } from "@/components/abandoned-cart/AbandonedCartFAQ";
import { AbandonedCartFinalCTA } from "@/components/abandoned-cart/AbandonedCartFinalCTA";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function AbandonedCartPage() {
  return (
    <>
      <SEO 
        title="Abandoned Cart Recovery for Ecommerce | Recover 15-30% Lost Revenue"
        description="Automated cart recovery via WhatsApp, SMS, and Email. Most stores recover €50k-€300k annually from abandoned carts with our AI automation."
      />
      <div className="min-h-screen bg-[#0a0a0a]">
        <Header />
        <main>
          <AbandonedCartHero />
          <AbandonedCartProblem />
          <AbandonedCartSolution />
          <WhyCartsAbandoned />
          <AbandonedCartBenefits />
          <ChannelPositioning />
          <AbandonedCartHowItWorks />
          <BuyingObjections />
          <ROIAngle />
          <AbandonedCartUseCases />
          <AbandonedCartWhoItsFor />
          <AbandonedCartDifferentiation />
          <AbandonedCartSocialProof />
          <AbandonedCartInvestment />
          <AbandonedCartFAQ />
          <ContactForm />
          <AbandonedCartFinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}