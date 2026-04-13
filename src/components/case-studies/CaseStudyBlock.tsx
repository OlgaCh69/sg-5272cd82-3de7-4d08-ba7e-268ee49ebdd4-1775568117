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
  const bgClass = variant === "accent" ? "bg-primary/5" : "bg-background";
  
  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            {title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Problem */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-destructive" />
                <h3 className="text-xl font-semibold">{problem.title}</h3>
              </div>
              <ul className="space-y-3">
                {problem.points.map((point, index) => (
                  <li key={index} className="text-muted-foreground leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">{solution.title}</h3>
              </div>
              <ul className="space-y-3">
                {solution.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-semibold">{results.title}</h3>
              </div>
              <ul className="space-y-3">
                {results.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <Link href="/contact">
              <Button size="lg">
                Book a Strategy Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}