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

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  isActive(item.href)
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Active indicator */}
                {isActive(item.href) && (
                  <div className="absolute inset-0 bg-primary/10 rounded-lg" />
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Animated underline */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                  isActive(item.href) 
                    ? 'w-8' 
                    : 'w-0 group-hover:w-8'
                }`} />
              </Link>
            ))}
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
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-xl border-primary/20">
              <div className="flex flex-col gap-6 mt-6">
                <Link href="/" className="flex items-center gap-3">
                  <Image 
                    src="/onetech-logo.png" 
                    alt="O.N.E.Tech Logo" 
                    width={40} 
                    height={40}
                    className="w-10 h-10"
                  />
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-foreground">O.N.E.Tech</span>
                    <span className="text-xs text-muted-foreground">AI Infrastructure</span>
                  </div>
                </Link>
                
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                        isActive(item.href)
                          ? 'bg-primary/10 text-primary border-l-2 border-primary' 
                          : 'text-foreground hover:bg-muted/50 hover:text-primary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-6 border-t border-border/30">
                    <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                      <Link href="/contact">
                        Book Executive Briefing
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}