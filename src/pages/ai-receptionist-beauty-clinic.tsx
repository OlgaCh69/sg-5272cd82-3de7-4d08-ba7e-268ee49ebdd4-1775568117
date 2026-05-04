import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { BeautyClinicHero } from "@/components/beauty-clinic/BeautyClinicHero";
import { BeautyClinicProblem } from "@/components/beauty-clinic/BeautyClinicProblem";
import { BeautyClinicSolution } from "@/components/beauty-clinic/BeautyClinicSolution";
import { BeautyClinicFeatures } from "@/components/beauty-clinic/BeautyClinicFeatures";
import { BeautyClinicHowItWorks } from "@/components/beauty-clinic/BeautyClinicHowItWorks";
import { BeautyClinicResults } from "@/components/beauty-clinic/BeautyClinicResults";
import { BeautyClinicBeforeAfter } from "@/components/beauty-clinic/BeautyClinicBeforeAfter";
import { BeautyClinicUseCases } from "@/components/beauty-clinic/BeautyClinicUseCases";
import { BeautyClinicPricing } from "@/components/beauty-clinic/BeautyClinicPricing";
import { BeautyClinicFAQ } from "@/components/beauty-clinic/BeautyClinicFAQ";
import { BeautyClinicFinalCTA } from "@/components/beauty-clinic/BeautyClinicFinalCTA";

export default function BeautyClinicReceptionist() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an AI receptionist?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An AI receptionist is a system that replies to messages, books appointments, and handles client communication automatically. It works 24/7 across Instagram, WhatsApp, and your website."
        }
      },
      {
        "@type": "Question",
        "name": "Can it book appointments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. It connects to your calendar and allows clients to book instantly. The system shows real-time availability and handles confirmations and reminders automatically."
        }
      },
      {
        "@type": "Question",
        "name": "Does it work with Instagram and WhatsApp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. It can reply and manage conversations on both platforms, ensuring you never miss a client inquiry regardless of where they reach out."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I miss a call?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The system sends an automatic SMS with a booking link within seconds. This recovers missed opportunities and turns them into booked appointments."
        }
      },
      {
        "@type": "Question",
        "name": "Will it replace my staff?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. It reduces repetitive work so your team can focus on clients. Think of it as a smart assistant that handles the busywork while your staff provides personalized service."
        }
      },
      {
        "@type": "Question",
        "name": "How long does setup take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically 2-3 weeks. This includes connecting to your calendar, training the AI on your services, and testing the booking flow. We handle the technical setup for you."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="AI Receptionist for Beauty Salons & Clinics | 24/7 Booking & DM Automation"
        description="Never miss a client again. Automate bookings, Instagram DMs, WhatsApp messages, and missed calls with an AI receptionist for beauty salons and clinics."
        url="https://onetechautomation.com/ai-receptionist-beauty-clinic"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <BeautyClinicHero />
        <BeautyClinicProblem />
        <BeautyClinicSolution />
        <BeautyClinicFeatures />
        <BeautyClinicHowItWorks />
        <BeautyClinicResults />
        <BeautyClinicBeforeAfter />
        <BeautyClinicUseCases />
        <BeautyClinicPricing />
        <BeautyClinicFAQ />
        <ContactForm />
        <BeautyClinicFinalCTA />
      </main>
      <Footer />
    </>
  );
}