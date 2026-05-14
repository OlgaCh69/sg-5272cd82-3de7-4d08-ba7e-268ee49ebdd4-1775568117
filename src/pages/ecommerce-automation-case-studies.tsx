import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { CaseStudiesHero } from "@/components/case-studies/CaseStudiesHero";
import { CaseStudiesIntro } from "@/components/case-studies/CaseStudiesIntro";
import { CaseStudyBlock } from "@/components/case-studies/CaseStudyBlock";
import { CaseStudiesSummary } from "@/components/case-studies/CaseStudiesSummary";
import { TrustBuilder } from "@/components/case-studies/TrustBuilder";
import { CaseStudiesFinalCTA } from "@/components/case-studies/CaseStudiesFinalCTA";
import { CaseStudiesTestimonials } from "@/components/case-studies/CaseStudiesTestimonials";
import { Footer } from "@/components/Footer";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      company: "Premium Fashion Brand",
      industry: "Fashion & Apparel",
      revenue: "€2.5M annual",
      challenge: "70% cart abandonment, 5-hour average response time on WhatsApp inquiries, support team overwhelmed during peak seasons.",
      solution: "Implemented WhatsApp automation for cart recovery, product questions, and order tracking. Multi-touch recovery sequences with personalized incentives.",
      results: [
        "€180k recovered revenue in 6 months",
        "22% cart recovery rate (from 0%)",
        "Response time down to 45 seconds",
        "60% reduction in support workload"
      ],
      metric: "€180k",
      metricLabel: "Recovered in 6 months"
    },
    {
      company: "Beauty & Skincare DTC",
      industry: "Beauty & Cosmetics",
      revenue: "€1.8M annual",
      challenge: "Instagram DMs piling up, product questions going unanswered for hours, losing sales to competitors while customers waited.",
      solution: "Instagram DM automation handling product recommendations, ingredient questions, routine suggestions, and checkout links.",
      results: [
        "28% increase in Instagram-sourced revenue",
        "Sub-1-minute response time on all DMs",
        "40% higher conversion from DM to purchase",
        "3x more DM volume handled with same team"
      ],
      metric: "28%",
      metricLabel: "Revenue increase"
    },
    {
      company: "Electronics Retailer",
      industry: "Consumer Electronics",
      revenue: "€5M annual",
      challenge: "Technical support questions overwhelming team, high ticket volume during product launches, inconsistent answers across channels.",
      solution: "Multi-channel AI support (email, chat, Telegram, WhatsApp) with product knowledge base integration and technical troubleshooting flows.",
      results: [
        "72% of support tickets resolved autonomously",
        "€90k annual cost savings on support staff",
        "CSAT scores up 45%",
        "Handled 2x ticket volume during product launches"
      ],
      metric: "72%",
      metricLabel: "Autonomous resolution"
    },
    {
      company: "Home & Lifestyle Store",
      industry: "Home Goods",
      revenue: "€3.2M annual",
      challenge: "Abandoned carts across multiple platforms, no unified customer communication, missed upsell opportunities.",
      solution: "Cross-platform automation (WhatsApp, Email, SMS) for cart recovery, post-purchase upsells, and customer retention campaigns.",
      results: [
        "€240k additional revenue in year 1",
        "18% average cart recovery rate",
        "35% increase in repeat purchases",
        "Automated upsells generated €60k"
      ],
      metric: "€240k",
      metricLabel: "Additional revenue"
    }
  ];

  return (
    <>
      <SEO 
        title="Ecommerce Automation Case Studies | Real Results from AI Implementation"
        description="See how ecommerce brands recovered €180k-€240k annually with WhatsApp automation, Instagram DMs, and AI support. Real numbers, real businesses."
      />
      <div className="min-h-screen bg-[#0a0a0a]">
        <Header />
        <main>
          <CaseStudiesHero />
          <CaseStudiesIntro />
          
          {caseStudies.map((study, index) => (
            <CaseStudyBlock
              key={index}
              {...study}
              isEven={index % 2 === 0}
            />
          ))}
          
          <CaseStudiesSummary />
          <CaseStudiesTestimonials />
          <TrustBuilder />
          <CaseStudiesFinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}