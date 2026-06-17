"use client";

import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Building2, 
  Users, 
  Mail, 
  Download,
  CheckCircle2,
  FileText,
  Shield,
  TrendingUp,
  Network,
  Eye,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { contactService } from "@/services/contactService";
import { useToast } from "@/hooks/use-toast";

export default function InfrastructureBlueprintPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    employees: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Supabase and send email notification
      await contactService.submitContact({
        name: formData.name,
        email: formData.email,
        phone: "", // Not collected on this form
        company: formData.company,
        message: `Infrastructure Blueprint Download Request - Company: ${formData.company}, Industry: ${formData.industry}, Employees: ${formData.employees}`,
      });

      // Download the blueprint PDF
      const link = document.createElement('a');
      link.href = '/onetech-infrastructure-blueprint.pdf';
      link.download = 'ONETech-Infrastructure-Blueprint.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsSubmitted(true);
      
      toast({
        title: "Blueprint Download Started",
        description: "Check your downloads folder for the Infrastructure Blueprint PDF. Our team will contact you within 24 hours.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your request. Please try again or contact support@onetechautomation.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Infrastructure Blueprint | O.N.E.Tech"
        description="Download the complete Enterprise AI Infrastructure Blueprint. Governance frameworks, architecture patterns, and implementation roadmap for GCC enterprises."
      />
      <Header />

      <main className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">PREMIUM RESOURCE</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold">
                Enterprise AI Infrastructure <span className="text-primary">Blueprint</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Complete framework for designing, deploying and governing enterprise AI infrastructure
                at scale across operational, revenue and workforce systems.
              </p>
            </div>
          </div>
        </section>

        {/* What's Inside Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What's Inside The Blueprint</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Governance Framework",
                    description: "AI governance layer architecture, policy enforcement, human oversight and audit trails"
                  },
                  {
                    icon: Building2,
                    title: "5-Layer Architecture",
                    description: "Complete infrastructure stack from enterprise systems to executive control center"
                  },
                  {
                    icon: TrendingUp,
                    title: "Operational Intelligence",
                    description: "Intelligence layer design, data flows, executive visibility and decision support"
                  },
                  {
                    icon: Network,
                    title: "Agentic Coordination",
                    description: "AI agent orchestration, workflow automation and task routing frameworks"
                  },
                  {
                    icon: Eye,
                    title: "Executive Control",
                    description: "Control center design, real-time monitoring and strategic decision interfaces"
                  },
                  {
                    icon: FileText,
                    title: "Implementation Roadmap",
                    description: "Phase-by-phase deployment strategy for GCC enterprise transformation"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group relative rounded-xl border border-border/30 bg-gradient-to-br from-muted/10 to-background p-6 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Download Form Section */}
        <section className="relative py-20 bg-gradient-to-b from-background to-muted/10">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto">
              {isSubmitted ? (
                <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-muted/20 p-12 text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Blueprint Downloaded</h2>
                  <p className="text-lg text-muted-foreground">
                    Check your downloads folder for the Infrastructure Blueprint PDF.
                    Our team will contact you within 24 hours to discuss implementation.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="gap-2"
                  >
                    Download Again
                  </Button>
                </div>
              ) : (
                <div className="rounded-2xl border border-border/30 bg-gradient-to-br from-muted/5 to-background p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Download The Blueprint</h2>
                    <p className="text-muted-foreground">
                      Enter your details to receive the complete Infrastructure Blueprint PDF
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-foreground">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="bg-muted/30 border-border/30 focus:border-primary/50"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-foreground">
                        Work Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@company.com"
                        className="bg-muted/30 border-border/30 focus:border-primary/50"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-semibold text-foreground">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Your company name"
                        className="bg-muted/30 border-border/30 focus:border-primary/50"
                      />
                    </div>

                    {/* Industry */}
                    <div className="space-y-2">
                      <label htmlFor="industry" className="text-sm font-semibold text-foreground">
                        Industry
                      </label>
                      <Input
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Energy, Real Estate, Financial Services"
                        className="bg-muted/30 border-border/30 focus:border-primary/50"
                      />
                    </div>

                    {/* Employees */}
                    <div className="space-y-2">
                      <label htmlFor="employees" className="text-sm font-semibold text-foreground">
                        Company Size
                      </label>
                      <Input
                        id="employees"
                        name="employees"
                        value={formData.employees}
                        onChange={handleChange}
                        required
                        placeholder="e.g., 50-200, 200-500, 500+"
                        className="bg-muted/30 border-border/30 focus:border-primary/50"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full gap-2 bg-primary hover:bg-primary/90"
                      size="lg"
                    >
                      <Download className="w-4 h-4" />
                      {isSubmitting ? "Processing..." : "Download Infrastructure Blueprint"}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Your download will start immediately. Our team will follow up within 24 hours.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Ready To Implement Enterprise AI Infrastructure?
              </h2>
              <p className="text-xl text-muted-foreground">
                Schedule an executive briefing to discuss your operational transformation roadmap
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                    Book Executive Briefing
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/enterprise-ai-architecture">
                  <Button size="lg" variant="outline" className="gap-2">
                    Explore Architecture
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}