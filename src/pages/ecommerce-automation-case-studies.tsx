import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { CaseStudiesHero } from "@/components/case-studies/CaseStudiesHero";
import { CaseStudiesIntro } from "@/components/case-studies/CaseStudiesIntro";
import { CaseStudyBlock } from "@/components/case-studies/CaseStudyBlock";
import { CaseStudiesSummary } from "@/components/case-studies/CaseStudiesSummary";
import { TrustBuilder } from "@/components/case-studies/TrustBuilder";
import { CaseStudiesFinalCTA } from "@/components/case-studies/CaseStudiesFinalCTA";

export default function CaseStudiesPage() {
  const caseStudy1 = {
    title: "How an Ecommerce Brand Increased Conversions with WhatsApp Automation",
    problem: {
      title: "Problem",
      points: [
        "The brand was receiving a high volume of customer messages related to product questions and order inquiries.",
        "Response times were inconsistent, and many potential customers left without completing their purchase.",
        "There was no structured follow-up system, which meant lost opportunities at key moments in the buying process."
      ]
    },
    solution: {
      title: "Solution",
      points: [
        "Responded instantly to incoming messages",
        "Provided product information and answers to common questions",
        "Followed up with customers who showed buying intent",
        "Guided users through the purchase journey"
      ]
    },
    results: {
      title: "Results",
      points: [
        "Faster response times across all conversations",
        "Improved customer experience",
        "Increased conversion rate from customer interactions",
        "More consistent handling of inquiries"
      ]
    }
  };

  const caseStudy2 = {
    title: "Recovering Lost Revenue with Abandoned Cart Automation",
    problem: {
      title: "Problem",
      points: [
        "The ecommerce store had a high cart abandonment rate and no structured way to re-engage customers after they left checkout.",
        "Many high-intent shoppers were lost without any follow-up."
      ]
    },
    solution: {
      title: "Solution",
      points: [
        "Automatically followed up with customers",
        "Re-engaged users through messaging channels",
        "Addressed common buying objections",
        "Guided customers back to complete their purchase"
      ]
    },
    results: {
      title: "Results",
      points: [
        "Increased recovered revenue from abandoned carts",
        "More efficient use of existing traffic",
        "Improved overall conversion performance"
      ]
    }
  };

  const caseStudy3 = {
    title: "Scaling Customer Support Without Increasing Team Size",
    problem: {
      title: "Problem",
      points: [
        "The business was receiving a growing number of support requests, creating delays and pressure on the support team.",
        "Response times were increasing, and customer satisfaction was at risk."
      ]
    },
    solution: {
      title: "Solution",
      points: [
        "Handled common questions instantly",
        "Provided order updates automatically",
        "Reduced repetitive workload",
        "Allowed the team to focus on complex cases"
      ]
    },
    results: {
      title: "Results",
      points: [
        "Reduced response times",
        "Lower support workload",
        "Improved efficiency",
        "Better customer experience"
      ]
    }
  };

  return (
    <>
      <SEO 
        title="Ecommerce Automation Case Studies | Real Results & Growth"
        description="See how ecommerce brands increase conversions and recover revenue using automation. Real case studies from WhatsApp, chatbots, and support systems."
        url="https://onetechautomation.com/ecommerce-automation-case-studies"
      />
      <Header />
      <main>
        <CaseStudiesHero />
        <CaseStudiesIntro />
        <CaseStudyBlock {...caseStudy1} />
        <CaseStudyBlock {...caseStudy2} variant="accent" />
        <CaseStudyBlock {...caseStudy3} />
        <CaseStudiesSummary />
        <TrustBuilder />
        <CaseStudiesFinalCTA />
      </main>
    </>
  );
}