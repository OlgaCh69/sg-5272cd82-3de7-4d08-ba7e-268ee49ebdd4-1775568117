"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Header() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const infrastructureLinks = [
    { href: "/enterprise-ai-architecture", label: "Enterprise AI Architecture", desc: "Five-layer infrastructure stack" },
    { href: "/operational-intelligence", label: "Operational Intelligence", desc: "Transform data into insights" },
    { href: "/ai-governance", label: "AI Governance", desc: "Policy enforcement and oversight" },
    { href: "/how-it-works", label: "How It Works", desc: "Infrastructure methodology" },
    { href: "/infrastructure", label: "Platform Stack", desc: "Complete infrastructure overview" },
  ];

  const solutionsLinks = [
    { href: "/solutions", label: "All Solutions", desc: "Complete solutions overview" },
    { href: "/solutions#operational", label: "Operational Infrastructure", desc: "Enterprise orchestration systems" },
    { href: "/solutions#revenue", label: "Revenue Infrastructure", desc: "AI-powered revenue operations" },
    { href: "/solutions#real-estate", label: "Real Estate Infrastructure", desc: "Property operations intelligence" },
    { href: "/solutions#forex", label: "Forex Infrastructure", desc: "Client lifecycle intelligence" },
  ];

  const resourcesLinks = [
    { href: "/blog", label: "The Intelligence Layer", desc: "Insights and thought leadership" },
    { href: "/case-studies", label: "Transformation Scenarios", desc: "Industry infrastructure examples" },
    { href: "/infrastructure-blueprint", label: "Infrastructure Blueprint", desc: "Download complete framework" },
    { href: "/assessment", label: "Infrastructure Assessment", desc: "Evaluate your readiness" },
    { href: "/gcc-transformation", label: "GCC Transformation", desc: "Built for Vision 2030" },
    { href: "/trust-center", label: "Trust Center", desc: "Security and governance" },
  ];

  const companyLinks = [
    { href: "/founder", label: "Founder", desc: "Olga Chavoshi, CEO" },
    { href: "/industries", label: "Industries", desc: "Sector-specific solutions" },
    { href: "/contact", label: "Contact", desc: "Book executive briefing" },
  ];

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'border-b border-primary/20 bg-background/80 backdrop-blur-xl shadow-lg' 
          : 'border-b border-border/20 bg-background/60 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image 
                src="/onetech-logo.png" 
                alt="O.N.E.Tech Logo" 
                width={40} 
                height={40}
                className="w-10 h-10 relative z-10 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">O.N.E.Tech</span>
              <span className="text-xs text-muted-foreground">AI Infrastructure</span>
            </div>
          </Link>

          {/* Desktop Mega Menu */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-2">
              {/* Infrastructure */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-muted/50">
                  Infrastructure
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] p-4">
                    <div className="grid gap-3">
                      {infrastructureLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="group grid grid-cols-[1fr_auto] items-start gap-4 rounded-lg p-3 hover:bg-muted/50 transition-colors"
                        >
                          <div>
                            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {link.label}
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">
                              {link.desc}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-muted/50">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] p-4">
                    <div className="grid gap-3">
                      {solutionsLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="group grid grid-cols-[1fr_auto] items-start gap-4 rounded-lg p-3 hover:bg-muted/50 transition-colors"
                        >
                          <div>
                            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {link.label}
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">
                              {link.desc}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-muted/50">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] p-4">
                    <div className="grid gap-3">
                      {resourcesLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="group grid grid-cols-[1fr_auto] items-start gap-4 rounded-lg p-3 hover:bg-muted/50 transition-colors"
                        >
                          <div>
                            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {link.label}
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">
                              {link.desc}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Company */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-muted/50">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <div className="grid gap-3">
                      {companyLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="group grid grid-cols-[1fr_auto] items-start gap-4 rounded-lg p-3 hover:bg-muted/50 transition-colors"
                        >
                          <div>
                            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {link.label}
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">
                              {link.desc}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              asChild 
              className="relative overflow-hidden bg-primary hover:bg-primary/90 transition-all duration-300 group"
            >
              <Link href="/contact">
                <span className="relative z-10">Book Executive Briefing</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="relative">
                <Menu className="h-6 w-6 transition-transform duration-300 hover:scale-110" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] overflow-y-auto">
              <nav className="flex flex-col gap-8 mt-8">
                {/* Infrastructure Section */}
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold text-primary uppercase tracking-wider">Infrastructure</h3>
                  {infrastructureLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block"
                    >
                      <div className="text-sm font-medium hover:text-primary transition-colors">
                        {link.label}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {link.desc}
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Solutions Section */}
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold text-primary uppercase tracking-wider">Solutions</h3>
                  {solutionsLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block"
                    >
                      <div className="text-sm font-medium hover:text-primary transition-colors">
                        {link.label}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {link.desc}
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Resources Section */}
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold text-primary uppercase tracking-wider">Resources</h3>
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block"
                    >
                      <div className="text-sm font-medium hover:text-primary transition-colors">
                        {link.label}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {link.desc}
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Company Section */}
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold text-primary uppercase tracking-wider">Company</h3>
                  {companyLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block"
                    >
                      <div className="text-sm font-medium hover:text-primary transition-colors">
                        {link.label}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {link.desc}
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Mobile CTA */}
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full gap-2 bg-primary hover:bg-primary/90">
                    Book Executive Briefing
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}