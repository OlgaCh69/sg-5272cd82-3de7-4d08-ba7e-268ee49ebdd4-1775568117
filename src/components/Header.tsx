"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/solutions", label: "Solutions" },
    { href: "/industries", label: "Industries" },
    { href: "/infrastructure", label: "Infrastructure" },
    { href: "/founder", label: "Founder" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" }
  ];

  const isActive = (href: string) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname.startsWith(href);
  };

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

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                isScrolled ? "" : ""
              }`}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/solutions"
              className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                isScrolled ? "" : ""
              }`}
            >
              Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/industries"
              className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                isScrolled ? "" : ""
              }`}
            >
              Industries
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/infrastructure"
              className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                isScrolled ? "" : ""
              }`}
            >
              Infrastructure
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/case-studies"
              className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                isScrolled ? "" : ""
              }`}
            >
              Case Studies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/founder"
              className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                isScrolled ? "" : ""
              }`}
            >
              Founder
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>

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

          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="relative">
                <Menu className="h-6 w-6 transition-transform duration-300 hover:scale-110" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/solutions"
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Solutions
                </Link>
                <Link
                  href="/industries"
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Industries
                </Link>
                <Link
                  href="/infrastructure"
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Infrastructure
                </Link>
                <Link
                  href="/case-studies"
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Case Studies
                </Link>
                <Link
                  href="/founder"
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Founder
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full gap-2 bg-primary hover:bg-primary/90">
                    Contact Us
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