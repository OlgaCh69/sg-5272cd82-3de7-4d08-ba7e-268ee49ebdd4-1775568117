"use client";

import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Building2, Mail, User, Users, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    employees: "",
    challenge: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Insert into database
      const { data: contactData, error: dbError } = await supabase.from("contacts").insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.employees,
          message: formData.industry,
          plan: formData.challenge
        }
      ]).select().single();

      if (dbError) throw dbError;

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke("send-contact-notification", {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.employees,
          company: formData.company,
          message: formData.industry,
          plan: formData.challenge,
          created_at: contactData?.created_at || new Date().toISOString()
        }
      });

      if (emailError) {
        console.error("Email notification error:", emailError);
        // Don't throw - form submission succeeded even if email fails
      }

      setIsSubmitted(true);
      toast({
        title: "Request Received",
        description: "Our team will contact you within 24 hours to schedule your executive briefing.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        industry: "",
        employees: "",
        challenge: ""
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEO
        title="Contact | O.N.E.Tech"
        description="Request an executive briefing to discuss your operational infrastructure roadmap."
      />
      <Header />

      <main className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
          
          <div className="relative container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">EXECUTIVE BRIEFING</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold">
                Discuss Your Operational
                <br />
                <span className="text-primary">Infrastructure Roadmap</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Schedule a strategic consultation to explore how governance-first AI infrastructure
                can transform your enterprise operations.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              {isSubmitted ? (
                <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-muted/20 p-12 text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Request Received</h2>
                  <p className="text-lg text-muted-foreground">
                    Our team will contact you within 24 hours to schedule your executive briefing.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="gap-2"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <div className="rounded-2xl border border-border/30 bg-gradient-to-br from-muted/5 to-background p-8 lg:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <User className="w-4 h-4 text-primary" />
                        Name
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
                      <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <Mail className="w-4 h-4 text-primary" />
                        Email
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
                      <label htmlFor="company" className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <Building2 className="w-4 h-4 text-primary" />
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
                      <label htmlFor="industry" className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <Building2 className="w-4 h-4 text-primary" />
                        Industry
                      </label>
                      <Input
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Energy, Real Estate, Financial Services, Forex Brokerage"
                        className="bg-muted/30 border-border/30 focus:border-primary/50"
                      />
                    </div>

                    {/* Employees */}
                    <div className="space-y-2">
                      <label htmlFor="employees" className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <Users className="w-4 h-4 text-primary" />
                        Number of Employees
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

                    {/* Challenge */}
                    <div className="space-y-2">
                      <label htmlFor="challenge" className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <MessageSquare className="w-4 h-4 text-primary" />
                        Operational Challenge
                      </label>
                      <Textarea
                        id="challenge"
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Describe your key operational challenges or infrastructure requirements..."
                        className="bg-muted/30 border-border/30 focus:border-primary/50 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full gap-2 bg-primary hover:bg-primary/90"
                      size="lg"
                    >
                      {isSubmitting ? "Submitting..." : "Request Executive Briefing"}
                      <ArrowRight className="w-4 h-4" />
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Our team typically responds within 24 hours to schedule your consultation.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}