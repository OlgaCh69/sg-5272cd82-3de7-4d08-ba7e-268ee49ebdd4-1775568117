import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { contactService } from "@/services/contactService";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    platform: "",
    message: "",
  });

  const [selectedPlan, setSelectedPlan] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");
    if (plan) {
      setSelectedPlan(plan);
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    console.log("Form submitted");
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      console.log("Validation failed - missing required fields");
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
      return;
    }

    console.log("Validation passed, submitting...");
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await contactService.submitContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || undefined,
        platform: formData.platform || undefined,
        plan: selectedPlan || undefined,
        message: formData.message,
      });

      console.log("✅ Form submitted successfully:", result);
      setSubmitStatus("success");
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        platform: "",
        message: "",
      });
      setSelectedPlan("");

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("❌ Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="text-sm font-medium mb-2 block">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full h-10 px-3 rounded-md bg-muted/30 border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium mb-2 block">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full h-10 px-3 rounded-md bg-muted/30 border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="text-sm font-medium mb-2 block">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full h-10 px-3 rounded-md bg-muted/30 border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="+1 (555) 000-0000"
          />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium mb-2 block">
            Company (Optional)
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full h-10 px-3 rounded-md bg-muted/30 border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your Company"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        <div>
          <label htmlFor="platform" className="text-sm font-medium mb-2 block">
            Platform of Interest
          </label>
          <select
            id="platform"
            name="platform"
            value={formData.platform}
            onChange={(e) => setFormData(prev => ({ ...prev, platform: e.target.value }))}
            className="w-full h-10 px-3 rounded-md bg-muted/30 border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select platform</option>
            <option value="Instagram">Instagram</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Telegram">Telegram</option>
            <option value="All Platforms">All Platforms</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium mb-2 block">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleInputChange}
          rows={5}
          className="w-full px-3 py-2 rounded-md bg-muted/30 border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Tell us about your project and requirements..."
        />
      </div>

      {submitStatus === "success" && (
        <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-md">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <p className="text-sm text-green-800">
            Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-md">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <p className="text-sm text-red-800">
            Something went wrong. Please check all required fields and try again.
          </p>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-base font-semibold"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
      </Button>
    </form>
  );
}