"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Clock, Headphones } from "lucide-react";
import { useEffect, useState } from "react";

export function ContactForm() {
  const [selectedPlan, setSelectedPlan] = useState("");

  useEffect(() => {
    // Get plan from URL parameter
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");
    if (plan) {
      setSelectedPlan(plan);
    }
  }, []);

  return (
    <section className="py-32 px-4" id="contact">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Let's <span className="text-gradient">Build</span> Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us to discuss your project and start automating your business today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Your Name
                    </label>
                    <Input 
                      id="name"
                      placeholder="John Doe" 
                      className="bg-muted/30 border-border/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email Address
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="john@company.com" 
                      className="bg-muted/30 border-border/50"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="text-sm font-medium mb-2 block">
                      Company <span className="text-muted-foreground">(Optional)</span>
                    </label>
                    <Input 
                      id="company"
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
                    Your Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us about your project and requirements..." 
                    rows={6}
                    className="bg-muted/30 border-border/50 resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base h-12"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-sm text-muted-foreground">hello@onetech.com</p>
                </div>
              </div>
            </div>

            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
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

            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
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