"use client";

import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2, Users, Network, Shield, Target, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

type AssessmentStep = 1 | 2 | 3 | 4 | 5 | 6;

interface AssessmentData {
  industry: string;
  companySize: string;
  systems: string[];
  aiAdoption: string;
  governance: string;
  complexity: string;
}

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState<AssessmentStep>(1);
  const [showResults, setShowResults] = useState(false);
  const [data, setData] = useState<AssessmentData>({
    industry: "",
    companySize: "",
    systems: [],
    aiAdoption: "",
    governance: "",
    complexity: ""
  });

  const calculateScore = () => {
    let score = 0;
    
    // Industry complexity scoring
    if (["energy", "oil-gas", "finance", "forex"].includes(data.industry)) score += 20;
    else if (["construction", "real-estate", "infrastructure"].includes(data.industry)) score += 15;
    else score += 10;

    // Company size scoring
    if (data.companySize === "500+") score += 20;
    else if (data.companySize === "200-500") score += 15;
    else if (data.companySize === "50-200") score += 10;
    else score += 5;

    // Systems integration scoring
    score += data.systems.length * 5;

    // AI adoption scoring
    if (data.aiAdoption === "none") score += 25;
    else if (data.aiAdoption === "experimental") score += 20;
    else if (data.aiAdoption === "limited") score += 15;
    else score += 10;

    // Governance maturity scoring
    if (data.governance === "none") score += 20;
    else if (data.governance === "basic") score += 15;
    else if (data.governance === "developing") score += 10;
    else score += 5;

    // Operational complexity scoring
    if (data.complexity === "high") score += 15;
    else if (data.complexity === "medium") score += 10;
    else score += 5;

    return Math.min(score, 100);
  };

  const getReadinessLevel = (score: number) => {
    if (score >= 80) return { level: "High Priority", color: "text-red-400", desc: "Significant infrastructure gaps detected" };
    if (score >= 60) return { level: "Medium Priority", color: "text-amber-400", desc: "Notable opportunities for optimization" };
    if (score >= 40) return { level: "Strategic Opportunity", color: "text-primary", desc: "Ready for governance-first transformation" };
    return { level: "Foundational", color: "text-blue-400", desc: "Early stage optimization potential" };
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleOptionClick = (field: keyof AssessmentData, value: string) => {
    setData({ ...data, [field]: value });
  };

  const handleSystemToggle = (system: string) => {
    const systems = data.systems.includes(system)
      ? data.systems.filter(s => s !== system)
      : [...data.systems, system];
    setData({ ...data, systems });
  };

  const score = calculateScore();
  const readiness = getReadinessLevel(score);

  return (
    <>
      <SEO
        title="Infrastructure Assessment | O.N.E.Tech"
        description="Evaluate your enterprise's readiness for governance-first AI infrastructure transformation."
      />
      <Header />

      <main className="relative min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
          
          <div className="relative container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">INTERACTIVE ASSESSMENT</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold">
                Enterprise Infrastructure
                <br />
                <span className="text-primary">Readiness Assessment</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Evaluate your organization's readiness for governance-first AI infrastructure transformation.
                Receive a personalized readiness score and strategic recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Assessment */}
        <section className="relative pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              {!showResults ? (
                <div className="space-y-8">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Question {currentStep} of 6</span>
                      <span>{Math.round((currentStep / 6) * 100)}% Complete</span>
                    </div>
                    <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${(currentStep / 6) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Question Card */}
                  <div className="rounded-2xl border border-border/30 bg-gradient-to-br from-muted/5 to-background p-8 lg:p-12">
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Building2 className="w-8 h-8 text-primary" />
                          <h2 className="text-2xl font-bold">What is your primary industry?</h2>
                        </div>
                        <div className="grid gap-3">
                          {[
                            { value: "energy", label: "Energy & Utilities" },
                            { value: "oil-gas", label: "Oil & Gas" },
                            { value: "infrastructure", label: "Infrastructure & EPC" },
                            { value: "construction", label: "Construction" },
                            { value: "real-estate", label: "Real Estate" },
                            { value: "finance", label: "Financial Services" },
                            { value: "forex", label: "Forex Brokerage" },
                            { value: "other", label: "Other Enterprise" }
                          ].map((option) => (
                            <button
                              key={option.value}
                              onClick={() => {
                                handleOptionClick("industry", option.value);
                                setCurrentStep(2);
                              }}
                              className={`text-left p-4 rounded-lg border transition-all ${
                                data.industry === option.value
                                  ? "border-primary bg-primary/10"
                                  : "border-border/30 hover:border-primary/50 bg-muted/20"
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Users className="w-8 h-8 text-primary" />
                          <h2 className="text-2xl font-bold">Company size (employees)?</h2>
                        </div>
                        <div className="grid gap-3">
                          {[
                            { value: "1-50", label: "1-50 employees" },
                            { value: "50-200", label: "50-200 employees" },
                            { value: "200-500", label: "200-500 employees" },
                            { value: "500+", label: "500+ employees" }
                          ].map((option) => (
                            <button
                              key={option.value}
                              onClick={() => {
                                handleOptionClick("companySize", option.value);
                                setCurrentStep(3);
                              }}
                              className={`text-left p-4 rounded-lg border transition-all ${
                                data.companySize === option.value
                                  ? "border-primary bg-primary/10"
                                  : "border-border/30 hover:border-primary/50 bg-muted/20"
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Network className="w-8 h-8 text-primary" />
                          <h2 className="text-2xl font-bold">Which systems are currently in use?</h2>
                          <p className="text-muted-foreground">Select all that apply</p>
                        </div>
                        <div className="grid gap-3">
                          {[
                            { value: "erp", label: "ERP (SAP, Oracle, Dynamics)" },
                            { value: "crm", label: "CRM (Salesforce, HubSpot)" },
                            { value: "hr", label: "HR Systems (Workday, BambooHR)" },
                            { value: "finance", label: "Finance & Accounting" },
                            { value: "operations", label: "Operations Management" },
                            { value: "trading", label: "Trading Platforms (for Finance/Forex)" },
                            { value: "custom", label: "Custom Enterprise Software" },
                            { value: "legacy", label: "Legacy Systems" }
                          ].map((option) => (
                            <button
                              key={option.value}
                              onClick={() => handleSystemToggle(option.value)}
                              className={`text-left p-4 rounded-lg border transition-all ${
                                data.systems.includes(option.value)
                                  ? "border-primary bg-primary/10"
                                  : "border-border/30 hover:border-primary/50 bg-muted/20"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span>{option.label}</span>
                                {data.systems.includes(option.value) && (
                                  <CheckCircle2 className="w-5 h-5 text-primary" />
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                        <Button
                          onClick={() => setCurrentStep(4)}
                          disabled={data.systems.length === 0}
                          className="w-full gap-2"
                        >
                          Continue
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Target className="w-8 h-8 text-primary" />
                          <h2 className="text-2xl font-bold">Current AI adoption level?</h2>
                        </div>
                        <div className="grid gap-3">
                          {[
                            { value: "none", label: "No AI implementation" },
                            { value: "experimental", label: "Experimental/pilot projects" },
                            { value: "limited", label: "Limited production use" },
                            { value: "established", label: "Established AI operations" }
                          ].map((option) => (
                            <button
                              key={option.value}
                              onClick={() => {
                                handleOptionClick("aiAdoption", option.value);
                                setCurrentStep(5);
                              }}
                              className={`text-left p-4 rounded-lg border transition-all ${
                                data.aiAdoption === option.value
                                  ? "border-primary bg-primary/10"
                                  : "border-border/30 hover:border-primary/50 bg-muted/20"
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {currentStep === 5 && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Shield className="w-8 h-8 text-primary" />
                          <h2 className="text-2xl font-bold">AI governance maturity?</h2>
                        </div>
                        <div className="grid gap-3">
                          {[
                            { value: "none", label: "No governance framework" },
                            { value: "basic", label: "Basic policies in place" },
                            { value: "developing", label: "Developing governance controls" },
                            { value: "mature", label: "Mature governance framework" }
                          ].map((option) => (
                            <button
                              key={option.value}
                              onClick={() => {
                                handleOptionClick("governance", option.value);
                                setCurrentStep(6);
                              }}
                              className={`text-left p-4 rounded-lg border transition-all ${
                                data.governance === option.value
                                  ? "border-primary bg-primary/10"
                                  : "border-border/30 hover:border-primary/50 bg-muted/20"
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {currentStep === 6 && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Network className="w-8 h-8 text-primary" />
                          <h2 className="text-2xl font-bold">Operational complexity?</h2>
                        </div>
                        <div className="grid gap-3">
                          {[
                            { value: "low", label: "Single location, simple workflows" },
                            { value: "medium", label: "Multi-location, moderate complexity" },
                            { value: "high", label: "Distributed operations, high complexity" }
                          ].map((option) => (
                            <button
                              key={option.value}
                              onClick={() => {
                                handleOptionClick("complexity", option.value);
                                handleSubmit();
                              }}
                              className={`text-left p-4 rounded-lg border transition-all ${
                                data.complexity === option.value
                                  ? "border-primary bg-primary/10"
                                  : "border-border/30 hover:border-primary/50 bg-muted/20"
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Navigation */}
                  {currentStep > 1 && currentStep < 6 && (
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep((currentStep - 1) as AssessmentStep)}
                    >
                      Back
                    </Button>
                  )}
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Results Card */}
                  <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-muted/20 p-8 lg:p-12 text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20">
                      <Target className="w-10 h-10 text-primary" />
                    </div>
                    
                    <div>
                      <h2 className="text-3xl font-bold mb-2">Infrastructure Readiness Score</h2>
                      <div className="text-7xl font-bold text-primary mb-4">{score}</div>
                      <div className={`text-xl font-semibold ${readiness.color} mb-2`}>
                        {readiness.level}
                      </div>
                      <p className="text-muted-foreground">
                        {readiness.desc}
                      </p>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="rounded-2xl border border-border/30 bg-gradient-to-br from-muted/5 to-background p-8 lg:p-12 space-y-6">
                    <h3 className="text-2xl font-bold">Recommended Next Steps</h3>
                    
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Governance Framework Assessment</h4>
                          <p className="text-sm text-muted-foreground">
                            Evaluate current governance controls and establish AI oversight structure
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Infrastructure Architecture Review</h4>
                          <p className="text-sm text-muted-foreground">
                            Map current systems and design operational intelligence layer
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Executive Briefing</h4>
                          <p className="text-sm text-muted-foreground">
                            Schedule strategic consultation to discuss transformation roadmap
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 flex gap-4">
                      <Button asChild className="flex-1 gap-2">
                        <Link href="/contact">
                          Book Executive Briefing
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1 gap-2">
                        <Link href="/enterprise-ai-architecture">
                          Explore Architecture
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Related Resources */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <Link
                      href="/ai-governance"
                      className="group rounded-xl border border-border/30 bg-gradient-to-br from-muted/10 to-background p-6 hover:border-primary/50 transition-all"
                    >
                      <Shield className="w-8 h-8 text-primary mb-4" />
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        AI Governance
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Learn about governance-first infrastructure
                      </p>
                    </Link>

                    <Link
                      href="/operational-intelligence"
                      className="group rounded-xl border border-border/30 bg-gradient-to-br from-muted/10 to-background p-6 hover:border-primary/50 transition-all"
                    >
                      <Target className="w-8 h-8 text-primary mb-4" />
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Operational Intelligence
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Transform data into strategic insights
                      </p>
                    </Link>

                    <Link
                      href="/case-studies"
                      className="group rounded-xl border border-border/30 bg-gradient-to-br from-muted/10 to-background p-6 hover:border-primary/50 transition-all"
                    >
                      <Building2 className="w-8 h-8 text-primary mb-4" />
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Transformation Scenarios
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Industry-specific infrastructure examples
                      </p>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}