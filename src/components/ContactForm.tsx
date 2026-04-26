import { useState, FormEvent, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    platform: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    platform: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      platform: "",
      message: "",
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    }

    if (!formData.platform) {
      newErrors.platform = "Please select a platform";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Include platform in message for the external endpoint
      const fullMessage = `Platform: ${formData.platform}\n\n${formData.message}`;
      
      const formBody = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: fullMessage,
      });

      const response = await fetch("https://workspace-grid.emergent.host/api/public/lead?key=pb_lead__ysTmm0l5DwzgbUzs9DfvCgCm4NpsVX3LU5Yru2Vxqk", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitStatus("success");
      
      toast({
        title: "Message sent!",
        description: `Thank you for your interest in ${formData.platform} automation. We'll be in touch within 24 hours.`,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        platform: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
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
            className={`w-full h-10 px-3 rounded-md bg-muted/30 border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? 'border-red-500' : 'border-border/50'}`}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
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
            className={`w-full h-10 px-3 rounded-md bg-muted/30 border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500' : 'border-border/50'}`}
            placeholder="john@company.com"
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
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
            className={`w-full h-10 px-3 rounded-md bg-muted/30 border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${errors.phone ? 'border-red-500' : 'border-border/50'}`}
            placeholder="+1 (555) 000-0000"
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
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

      <div>
        <label htmlFor="platform" className="text-sm font-medium mb-2 block">
          Platform of Interest <span className="text-red-500">*</span>
        </label>
        <select
          id="platform"
          name="platform"
          required
          value={formData.platform}
          onChange={handleInputChange}
          className={`w-full h-10 px-3 rounded-md bg-muted/30 border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${errors.platform ? 'border-red-500' : 'border-border/50'}`}
        >
          <option value="">Select platform</option>
          <option value="Instagram">Instagram</option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="Telegram">Telegram</option>
          <option value="All Platforms">All Platforms</option>
        </select>
        {errors.platform && <p className="text-xs text-red-500 mt-1">{errors.platform}</p>}
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
          className={`w-full px-3 py-2 rounded-md bg-muted/30 border text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none ${errors.message ? 'border-red-500' : 'border-border/50'}`}
          placeholder="Tell us about your project and requirements..."
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
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