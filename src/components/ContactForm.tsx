"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Clock, Headphones, CheckCircle2, AlertCircle } from "lucide-react";
import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { contactService } from "@/services/contactService";
import { supabase } from "@/lib/supabase";

export function ContactForm() {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    // Get plan from URL parameter
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");
    if (plan) {
      setSelectedPlan(plan);
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(`Input changed - ${name}:`, value);
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Diagnostic test function
  const testSupabaseConnection = async () => {
    console.log("=== TESTING SUPABASE CONNECTION ===");
    try {
      const testData = {
        name: "Test User " + new Date().getTime(),
        email: "test@example.com",
        company: "Test Company",
        plan: "Starter",
        message: "This is a diagnostic test from the browser",
      };

      console.log("Test data:", testData);
      
      const { data, error } = await supabase
        .from("contacts")
        .insert(testData)
        .select()
        .single();

      console.log("Supabase test response:", { data, error });

      if (error) {
        console.error("❌ Test failed:", error);
        alert("Test FAILED: " + error.message);
      } else {
        console.log("✅ Test SUCCESS:", data);
        alert("Test SUCCESS! Check console for details.");
      }
    } catch (err) {
      console.error("❌ Test exception:", err);
      alert("Test FAILED with exception: " + err);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    console.log("=== FORM SUBMIT TRIGGERED ===");
    console.log("Current form data:", formData);
    console.log("Selected plan:", selectedPlan);
    
    // Trim values and check validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();
    
    console.log("Trimmed values:", { trimmedName, trimmedEmail, trimmedMessage });
    
    // Basic validation
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      console.log("❌ Validation failed - missing required fields");
      console.log("Name empty:", !trimmedName);
      console.log("Email empty:", !trimmedEmail);
      console.log("Message empty:", !trimmedMessage);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
      return;
    }

    console.log("✅ Validation passed, submitting...");
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      console.log("Calling contactService.submitContact...");
      const result = await contactService.submitContact({
        name: trimmedName,
        email: trimmedEmail,
        company: formData.company.trim() || undefined,
        plan: selectedPlan || undefined,
        message: trimmedMessage,
      });

      console.log("✅ Form submission successful:", result);
      setSubmitStatus("success");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
      setSelectedPlan("");

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("❌ Form submission error:", error);
      console.error("Error object:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 sm:py-32 px-4" id="contact">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
            Let's <span className="text-gradient">Build</span> Together
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us to discuss your project and start automating your business today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border/50">
              
              {/* DIAGNOSTIC TEST BUTTON - REMOVE AFTER FIXING */}
              <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-sm text-yellow-600 dark:text-yellow-400 mb-3">
                  🔧 Diagnostic Test: Click to test Supabase connection (check console after clicking)
                </p>
                <Button 
                  type="button"
                  onClick={testSupabaseConnection}
                  variant="outline"
                  className="w-full"
                >
                  Test Supabase Connection
                </Button>
              </div>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-sm text-primary">
                    Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                  <p className="text-sm text-destructive">
                    Please fill in all required fields (Name, Email, and Message) and try again.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Your Name <span className="text-destructive">*</span>
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe" 
                      className="bg-muted/30 border-border/50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com" 
                      className="bg-muted/30 border-border/50"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="text-sm font-medium mb-2 block">
                      Company <span className="text-muted-foreground">(Optional)</span>
                    </label>
                    <Input 
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company" 
                      className="bg-muted/30 border-border/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="plan" className="text-sm font-medium mb-2 block">
                      Interested Plan
                    </label>
                    <select
                      id="plan"
                      value={selectedPlan}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                      className="w-full h-10 px-3 rounded-md bg-muted/30 border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a plan</option>
                      <option value="Starter">Starter - €699</option>
                      <option value="Growth">Growth - €1,490</option>
                      <option value="Pro">Pro - €2,490</option>
                      <option value="Enterprise">Enterprise - Custom</option>
                      <option value="Demo">Just a Demo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Your Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project and requirements..." 
                    rows={6}
                    className="bg-muted/30 border-border/50 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base h-12 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-sm text-muted-foreground">support@onetechautomation.com</p>
                </div>
              </div>
            </div>

            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Response Time</h3>
                  <p className="text-sm text-muted-foreground">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Support</h3>
                  <p className="text-sm text-muted-foreground">24/7 available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}