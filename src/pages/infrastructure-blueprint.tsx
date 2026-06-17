"use client";

import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  ArrowRight,
  Briefcase
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
    role: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        message: `Infrastructure Blueprint Download Request - Role: ${formData.role}, Company: ${formData.company}, Industry: ${formData.industry}, Employees: ${formData.employees}`,
      });

      setIsSubmitted(true);
      
      toast({
        title: "Blueprint Sent",
        description: "Check your email for the Infrastructure Blueprint. Calculating your readiness score...",
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
                <span className="text-sm font-medium text-primary">Executive Blueprint</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold">
                Enterprise AI Infrastructure <span className="text-primary">Blueprint</span>
              </h1>
              
              <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
                <span>35 Pages</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/50"></span>
                <span>Enterprise Edition</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/50"></span>
                <span>15 Minute Read</span>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Complete framework for designing, deploying and governing enterprise AI infrastructure
                at scale across operational, revenue and workforce systems.
              </p>

              <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto">
                Designed for enterprise leaders evaluating AI governance, operational intelligence and infrastructure transformation initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* What's Inside Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What's Inside</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Building2,
                    title: "Enterprise AI Architecture",
                    description: "5-layer governance-first infrastructure model."
                  },
                  {
                    icon: Shield,
                    title: "AI Governance Framework",
                    description: "Human oversight, auditability and compliance controls."
                  },
                  {
                    icon: TrendingUp,
                    title: "Operational Intelligence Model",
                    description: "How enterprises transform data into decisions."
                  },
                  {
                    icon: CheckCircle2,
                    title: "Enterprise Readiness Assessment",
                    description: "Determine your organization's maturity level."
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
                <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-muted/10 p-8 lg:p-12 space-y-8">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">Your Infrastructure Readiness Score</h2>
                    <p className="text-muted-foreground">
                      Based on your company profile, here's your estimated operational maturity assessment
                    </p>
                  </div>

                  {/* Maturity Scores */}
                  <div className="space-y-6">
                    {/* Governance Maturity */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Governance Maturity</span>
                        <span className="text-sm text-muted-foreground">Initial Stage</span>
                      </div>
                      <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary/60 to-primary w-[35%] rounded-full"></div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Limited AI governance frameworks. Opportunity to establish enterprise controls.
                      </p>
                    </div>

                    {/* Operational Intelligence */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Operational Intelligence Maturity</span>
                        <span className="text-sm text-muted-foreground">Developing</span>
                      </div>
                      <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary/60 to-primary w-[45%] rounded-full"></div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Some data visibility. Ready for intelligence layer implementation.
                      </p>
                    </div>

                    {/* Infrastructure Readiness */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Infrastructure Readiness</span>
                        <span className="text-sm text-muted-foreground">Early Stage</span>
                      </div>
                      <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary/60 to-primary w-[40%] rounded-full"></div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Enterprise systems present. Infrastructure coordination layer needed.
                      </p>
                    </div>
                  </div>

                  {/* Overall Assessment */}
                  <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-muted/5 p-6 space-y-4">
                    <h3 className="font-semibold text-lg">Overall Assessment</h3>
                    <p className="text-sm text-muted-foreground">
                      Your organization shows characteristics common to enterprises beginning their AI infrastructure journey.
                      The Blueprint includes specific frameworks for your maturity level, plus a roadmap to advance through
                      each stage of operational intelligence transformation.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="text-center space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      Schedule an executive briefing to discuss your infrastructure roadmap
                    </p>
                    <Link href="/contact">
                      <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                        Book Executive Briefing
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl border border-border/30 bg-gradient-to-br from-muted/5 to-background p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Receive Executive Blueprint</h2>
                    <p className="text-muted-foreground">
                      Receive the Governance-First Enterprise AI Infrastructure Blueprint and Executive Readiness Framework used to evaluate modern operational ecosystems.
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

                    {/* Role / Job Title */}
                    <div className="space-y-2">
                      <label htmlFor="role" className="text-sm font-semibold text-foreground">
                        Role / Job Title
                      </label>
                      <Select
                        name="role"
                        value={formData.role}
                        onValueChange={(value) => setFormData({ ...formData, role: value })}
                        required
                      >
                        <SelectTrigger className="bg-muted/30 border-border/30 focus:border-primary/50">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ceo">CEO</SelectItem>
                          <SelectItem value="coo">COO</SelectItem>
                          <SelectItem value="cio">CIO</SelectItem>
                          <SelectItem value="cto">CTO</SelectItem>
                          <SelectItem value="transformation-director">Transformation Director</SelectItem>
                          <SelectItem value="operations-director">Operations Director</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
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
                      {isSubmitting ? "Processing..." : "Receive Executive Blueprint"}
                    </Button>

                    {/* Credibility Indicators */}
                    <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>Governance-First Framework</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>Executive Readiness Assessment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>Enterprise Architecture Model</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>GCC Transformation Roadmap</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>Infrastructure Reference Architecture</span>
                      </div>
                    </div>
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