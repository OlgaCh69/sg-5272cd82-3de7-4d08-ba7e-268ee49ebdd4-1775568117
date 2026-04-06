import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <section className="py-32 px-4" id="contact">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to automate your business? Send us a message and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-border/50">
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-muted/30 border-border/50 h-12"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-muted/30 border-border/50 h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium">
                Company (Optional)
              </label>
              <Input
                id="company"
                placeholder="Your company name"
                className="bg-muted/30 border-border/50 h-12"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us about your needs..."
                className="bg-muted/30 border-border/50 min-h-[150px] resize-none"
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-14"
            >
              Send Message
              <Send className="ml-2 w-5 h-5" />
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-border/50">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Email</div>
                <div className="font-medium">hello@onetech.com</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Response Time</div>
                <div className="font-medium">Within 24 hours</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Support</div>
                <div className="font-medium">24/7 Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}