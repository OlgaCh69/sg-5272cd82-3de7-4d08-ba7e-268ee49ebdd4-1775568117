import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero";
import { TrustBar } from "@/components/enterprise/TrustBar";
import { InfrastructureProblem } from "@/components/enterprise/InfrastructureProblem";
import { FutureEnterpriseStack } from "@/components/enterprise/FutureEnterpriseStack";
import { OperationalDashboard } from "@/components/enterprise/OperationalDashboard";
import { GovernanceFramework } from "@/components/enterprise/GovernanceFramework";
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
        description="O.N.E.Tech designs and deploys governance-first AI infrastructure that connects enterprise systems, workforce operations, decision intelligence and operational execution into unified ecosystems. Serving GCC & Cyprus enterprises."
      />
      <Header />
      <main className="min-h-screen">
        <EnterpriseHero />
        <TrustBar />
        <InfrastructureProblem />
        <FutureEnterpriseStack />
        <OperationalDashboard />
        <GovernanceFramework />
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