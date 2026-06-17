import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero";
import { TrustBar } from "@/components/enterprise/TrustBar";
import { ProblemSection } from "@/components/enterprise/ProblemSection";
import { PlatformStack } from "@/components/enterprise/PlatformStack";
import { SolutionsPreview } from "@/components/enterprise/SolutionsPreview";
import { IndustriesPreview } from "@/components/enterprise/IndustriesPreview";
import { AIGovernance } from "@/components/enterprise/AIGovernance";
import { GCCPositioning } from "@/components/enterprise/GCCPositioning";
import { WhyONETech } from "@/components/WhyONETech";
import { TechnologyEcosystem } from "@/components/TechnologyEcosystem";

export default function Home() {
  return (
    <>
      <SEO />
      <Header />
      <main className="relative">
        <EnterpriseHero />
        <TrustBar />
        <ProblemSection />
        <PlatformStack />
        <SolutionsPreview />
        <IndustriesPreview />
        <WhyONETech />
        <TechnologyEcosystem />
        <AIGovernance />
        <GCCPositioning />
      </main>
      <Footer />
    </>
  );
}