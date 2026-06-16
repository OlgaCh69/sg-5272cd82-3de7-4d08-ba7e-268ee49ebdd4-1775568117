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

export default function Home() {
  return (
    <>
      <SEO 
        title="O.N.E.Tech - Governance-First AI Infrastructure For Enterprise Operations"
        description="Transform fragmented enterprise processes into intelligent operational ecosystems powered by AI orchestration, governance frameworks, and real-time operational intelligence across GCC and Cyprus."
        image="/og-image.png"
      />
      <Header />
      <main className="min-h-screen">
        <EnterpriseHero />
        <TrustBar />
        <ProblemSection />
        <PlatformStack />
        <SolutionsPreview />
        <IndustriesPreview />
        <AIGovernance />
        <GCCPositioning />
      </main>
      <Footer />
    </>
  );
}