import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";

interface CaseStudyBlockProps {
  title: string;
  problem: {
    title: string;
    points: string[];
  };
  solution: {
    title: string;
    points: string[];
  };
  results: {
    title: string;
    points: string[];
  };
  variant?: "default" | "accent";
}

export function CaseStudyBlock({ title, problem, solution, results, variant = "default" }: CaseStudyBlockProps) {
  const bgClass = variant === "accent" ? "bg-[#0a0a0a]" : "bg-[#faf8f5]";
  
  return (
    <section className={bgClass + " py-24"}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-center" style={{ color: variant === "accent" ? "#ffffff" : "#1a1a1a" }}>
            {title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Problem */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#c9a961]/10 rounded-lg flex items-center justify-center">
                  <AlertCircle className="h-5 w-5 text-[#c9a961]" />
                </div>
                <h3 className="text-xl font-serif font-light" style={{ color: variant === "accent" ? "#ffffff" : "#1a1a1a" }}>
                  {problem.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {problem.points.map((point, index) => (
                  <li key={index} className="font-light leading-relaxed" style={{ color: variant === "accent" ? "rgba(255,255,255,0.7)" : "#6b7280" }}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#c9a961]/10 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-[#c9a961]" />
                </div>
                <h3 className="text-xl font-serif font-light" style={{ color: variant === "accent" ? "#ffffff" : "#1a1a1a" }}>
                  {solution.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {solution.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#c9a961] mt-0.5 flex-shrink-0" />
                    <span className="font-light" style={{ color: variant === "accent" ? "rgba(255,255,255,0.7)" : "#6b7280" }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#c9a961]/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-[#c9a961]" />
                </div>
                <h3 className="text-xl font-serif font-light" style={{ color: variant === "accent" ? "#ffffff" : "#1a1a1a" }}>
                  {results.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {results.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <TrendingUp className="h-5 w-5 text-[#c9a961] mt-0.5 flex-shrink-0" />
                    <span className="font-light" style={{ color: variant === "accent" ? "rgba(255,255,255,0.7)" : "#6b7280" }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-[#c9a961] hover:bg-[#b89851] text-white font-medium px-8 py-6 text-lg border-0"
              asChild
            >
              <Link href="/contact">
                Book a Strategy Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}