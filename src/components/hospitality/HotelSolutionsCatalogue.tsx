import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Solution {
  name: string;
  description: string;
  workflows: string[];
  aiOpportunities: string[];
  benefits: string[];
}

interface Category {
  name: string;
  letter: string;
  solutions: Solution[];
}

export function HotelSolutionsCatalogue() {
  const [openCategory, setOpenCategory] = useState<number | null>(0);
  const [openSolution, setOpenSolution] = useState<string | null>(null);

  const categories: Category[] = [
    {
      name: "Guest Journey & Experience",
      letter: "A",
      solutions: [
        {
          name: "Reservations & Direct Booking",
          description: "AI-powered enquiry handling and direct booking optimization to convert inquiries into confirmed reservations.",
          workflows: [
            "Automated multilingual enquiry responses",
            "Guest qualification and segmentation",
            "Dynamic quotation generation",
            "Real-time availability integration",
            "Automated follow-up sequences",
            "Abandoned booking recovery"
          ],
          aiOpportunities: [
            "Natural language processing for enquiry understanding",
            "Intelligent price recommendations",
            "Predictive conversion scoring",
            "Automated upsell suggestions"
          ],
          benefits: [
            "Increased direct booking conversion",
            "Reduced response time from hours to minutes",
            "24/7 multilingual support coverage",
            "Lower OTA commission costs"
          ]
        },
        {
          name: "Pre-arrival & Reception",
          description: "Streamlined guest journey from booking confirmation to check-in with personalized communication and coordination.",
          workflows: [
            "Automated welcome messages",
            "Digital pre-registration forms",
            "Arrival time collection and coordination",
            "Special request capture and routing",
            "Transfer arrangement coordination",
            "Room assignment optimization",
            "Express check-in processing"
          ],
          aiOpportunities: [
            "Predictive room assignment based on preferences",
            "Smart arrival coordination",
            "Automated special request classification",
            "VIP detection and flagging"
          ],
          benefits: [
            "Faster check-in experience",
            "Reduced reception workload",
            "Improved guest satisfaction",
            "Better room allocation efficiency"
          ]
        },
        {
          name: "Digital Concierge & Guest Portal",
          description: "QR-code accessible digital portal with AI concierge for instant guest information and service access.",
          workflows: [
            "QR code hotel portal access",
            "AI-powered hotel FAQ responses",
            "Local area information and recommendations",
            "Activity and restaurant bookings",
            "Real-time service requests",
            "Voice-enabled assistance",
            "Multilingual support"
          ],
          aiOpportunities: [
            "Conversational AI concierge",
            "Personalized recommendations",
            "Context-aware assistance",
            "Natural language voice interaction"
          ],
          benefits: [
            "Reduced concierge workload",
            "24/7 guest self-service",
            "Improved information accuracy",
            "Enhanced guest independence"
          ]
        },
        {
          name: "Guest Requests & Service Recovery",
          description: "Multichannel request intake with AI classification, intelligent routing, and proactive service recovery.",
          workflows: [
            "Omnichannel request capture",
            "AI urgency classification",
            "Intelligent department routing",
            "SLA tracking and alerts",
            "Automated escalation workflows",
            "Complaint management",
            "Resolution tracking and closure"
          ],
          aiOpportunities: [
            "Sentiment analysis for complaint detection",
            "Predictive escalation triggers",
            "Smart routing based on request type",
            "Resolution time prediction"
          ],
          benefits: [
            "Faster issue resolution",
            "Proactive service recovery",
            "Reduced guest complaints",
            "Improved staff response coordination"
          ]
        }
      ]
    },
    {
      name: "Property Operations",
      letter: "B",
      solutions: [
        {
          name: "Housekeeping & Room Readiness",
          description: "Intelligent housekeeping coordination for optimal room turnover and cleanliness standards.",
          workflows: [
            "AI-optimized cleaning assignments",
            "Priority-based task scheduling",
            "Quality inspection workflows",
            "Real-time room status updates",
            "Cleaning checklist management",
            "Linen and minibar coordination",
            "Lost property tracking"
          ],
          aiOpportunities: [
            "Predictive cleaning time estimation",
            "Dynamic priority adjustment",
            "Staff workload optimization",
            "Pattern-based scheduling"
          ],
          benefits: [
            "Faster room turnover",
            "Improved cleaning consistency",
            "Better staff productivity",
            "Real-time availability for sales"
          ]
        },
        {
          name: "Maintenance & Engineering",
          description: "Predictive maintenance intelligence and efficient fault resolution workflows.",
          workflows: [
            "Automated fault reporting",
            "AI-powered work order creation",
            "Intelligent technician routing",
            "Preventive maintenance scheduling",
            "Contractor coordination",
            "Spare parts inventory alerts",
            "Recurring fault pattern detection"
          ],
          aiOpportunities: [
            "Fault classification and prioritization",
            "Predictive maintenance alerts",
            "Technician availability optimization",
            "Maintenance cost forecasting"
          ],
          benefits: [
            "Reduced equipment downtime",
            "Lower maintenance costs",
            "Proactive fault prevention",
            "Improved guest comfort"
          ]
        },
        {
          name: "Food, Beverage & Room Service",
          description: "Seamless F&B operations from reservation to delivery with kitchen coordination.",
          workflows: [
            "Restaurant reservation management",
            "Digital menu access",
            "Order capture and routing",
            "Kitchen display coordination",
            "Delivery tracking",
            "Dietary requirement management",
            "Automatic guest charging"
          ],
          aiOpportunities: [
            "Demand forecasting",
            "Menu recommendation engine",
            "Delivery time optimization",
            "Dietary preference learning"
          ],
          benefits: [
            "Improved order accuracy",
            "Faster service delivery",
            "Better kitchen coordination",
            "Enhanced dietary compliance"
          ]
        },
        {
          name: "Spa, Wellness & Leisure",
          description: "Comprehensive spa and leisure facility management with automated booking and coordination.",
          workflows: [
            "Treatment booking management",
            "Therapist schedule optimization",
            "Automated reminders",
            "Waitlist management",
            "Class and activity scheduling",
            "Facility access coordination",
            "Package and membership management"
          ],
          aiOpportunities: [
            "Optimal therapist-guest matching",
            "Dynamic pricing suggestions",
            "Capacity optimization",
            "Upsell opportunity identification"
          ],
          benefits: [
            "Maximized facility utilization",
            "Reduced no-shows",
            "Improved therapist productivity",
            "Enhanced guest experience"
          ]
        }
      ]
    },
    {
      name: "Revenue & Relationships",
      letter: "C",
      solutions: [
        {
          name: "Upselling & Ancillary Revenue",
          description: "AI-driven upselling engine for maximizing revenue per guest through personalized offers.",
          workflows: [
            "Room upgrade opportunities",
            "Late checkout offers",
            "Breakfast package sales",
            "Spa and treatment upsells",
            "Airport transfer coordination",
            "Personalized package creation",
            "Conversion tracking and analytics"
          ],
          aiOpportunities: [
            "Guest propensity scoring",
            "Optimal offer timing",
            "Dynamic pricing recommendations",
            "Personalization based on booking data"
          ],
          benefits: [
            "Increased revenue per available room",
            "Higher conversion on ancillary services",
            "Improved guest value perception",
            "Data-driven upsell targeting"
          ]
        },
        {
          name: "Corporate Sales & Travel Trade",
          description: "Streamlined corporate client and travel agent relationship management system.",
          workflows: [
            "Corporate enquiry management",
            "Proposal and quotation generation",
            "Contract approval workflows",
            "Travel agent coordination",
            "Account management tracking",
            "Commission calculations",
            "Automated follow-up sequences"
          ],
          aiOpportunities: [
            "Lead scoring and qualification",
            "Proposal generation automation",
            "Relationship strength analytics",
            "Revenue opportunity prediction"
          ],
          benefits: [
            "Faster proposal turnaround",
            "Improved corporate conversion",
            "Better account visibility",
            "Streamlined agent relationships"
          ]
        },
        {
          name: "Groups, Weddings & Events",
          description: "End-to-end event and group booking management from enquiry to execution.",
          workflows: [
            "Event enquiry handling",
            "Quotation and availability management",
            "Site visit coordination",
            "Deposit and payment tracking",
            "Contract management",
            "Rooming list processing",
            "Event coordination",
            "Supplier management"
          ],
          aiOpportunities: [
            "Event type classification",
            "Pricing optimization",
            "Timeline automation",
            "Resource allocation optimization"
          ],
          benefits: [
            "Increased group conversion",
            "Better event coordination",
            "Reduced administrative time",
            "Improved profitability tracking"
          ]
        },
        {
          name: "Marketing, Loyalty & Retention",
          description: "Guest lifecycle marketing with AI-powered segmentation and retention campaigns.",
          workflows: [
            "Guest segmentation and profiling",
            "Targeted marketing campaigns",
            "Loyalty program management",
            "Referral tracking",
            "Repeat stay incentives",
            "Guest reactivation sequences",
            "Direct booking promotions"
          ],
          aiOpportunities: [
            "Predictive churn detection",
            "Lifetime value calculation",
            "Campaign performance optimization",
            "Next-best-offer recommendations"
          ],
          benefits: [
            "Higher guest retention rates",
            "Increased direct booking share",
            "Better marketing ROI",
            "Stronger guest relationships"
          ]
        }
      ]
    },
    {
      name: "People, Quality & Administration",
      letter: "D",
      solutions: [
        {
          name: "Feedback, Reputation & Quality",
          description: "Comprehensive feedback management with AI sentiment analysis and quality improvement workflows.",
          workflows: [
            "Review monitoring and aggregation",
            "Guest survey distribution",
            "Complaint tracking",
            "AI sentiment analysis",
            "Quality inspection checklists",
            "Corrective action workflows",
            "Reputation response management"
          ],
          aiOpportunities: [
            "Sentiment trend detection",
            "Issue prioritization",
            "Response suggestion generation",
            "Predictive quality alerts"
          ],
          benefits: [
            "Improved online reputation",
            "Faster issue identification",
            "Better quality standards",
            "Proactive service recovery"
          ]
        },
        {
          name: "Staff, Shifts & Knowledge",
          description: "Intelligent staff coordination with AI-powered knowledge base and task management.",
          workflows: [
            "Shift scheduling and management",
            "Task assignment and tracking",
            "Digital handover procedures",
            "Internal AI assistant",
            "Multilingual knowledge base",
            "Training content delivery",
            "Performance tracking"
          ],
          aiOpportunities: [
            "Optimal shift scheduling",
            "Task priority intelligence",
            "Knowledge recommendation",
            "Multilingual AI staff support"
          ],
          benefits: [
            "Improved staff coordination",
            "Reduced training time",
            "Better shift coverage",
            "Enhanced productivity"
          ]
        },
        {
          name: "Purchasing, Suppliers & Inventory",
          description: "Intelligent procurement and inventory management with automated workflows.",
          workflows: [
            "Purchase approval workflows",
            "Stock level monitoring",
            "Automated reorder alerts",
            "Supplier management",
            "Order tracking",
            "Delivery confirmation",
            "Invoice matching automation"
          ],
          aiOpportunities: [
            "Demand forecasting",
            "Optimal reorder point calculation",
            "Supplier performance analytics",
            "Cost optimization suggestions"
          ],
          benefits: [
            "Reduced stock-outs",
            "Lower inventory holding costs",
            "Better supplier relationships",
            "Improved purchase approval speed"
          ]
        },
        {
          name: "Finance & Administration",
          description: "Automated document processing and financial workflow management.",
          workflows: [
            "AI invoice data extraction",
            "Document workflow automation",
            "Expense approval processes",
            "Accounting system integration",
            "Payment reconciliation",
            "Financial reporting",
            "Audit trail management"
          ],
          aiOpportunities: [
            "OCR document processing",
            "Smart data extraction",
            "Anomaly detection",
            "Automated reconciliation"
          ],
          benefits: [
            "Faster invoice processing",
            "Reduced data entry errors",
            "Improved compliance",
            "Better financial visibility"
          ]
        }
      ]
    },
    {
      name: "Facilities & Logistics",
      letter: "E",
      solutions: [
        {
          name: "Safety, Security & Compliance",
          description: "Comprehensive safety and compliance management with automated documentation and alerts.",
          workflows: [
            "Incident reporting and tracking",
            "Safety inspection scheduling",
            "Compliance record management",
            "Escalation procedures",
            "Approval workflows",
            "Audit documentation",
            "Regulatory reporting"
          ],
          aiOpportunities: [
            "Risk pattern identification",
            "Compliance deadline tracking",
            "Incident classification",
            "Preventive measure recommendations"
          ],
          benefits: [
            "Enhanced guest and staff safety",
            "Improved regulatory compliance",
            "Better incident response",
            "Reduced liability risk"
          ]
        },
        {
          name: "Energy, Utilities & Sustainability",
          description: "Resource consumption monitoring and sustainability reporting with optimization insights.",
          workflows: [
            "Energy consumption monitoring",
            "Usage anomaly alerts",
            "Utility analytics",
            "Sustainability KPI tracking",
            "Carbon footprint reporting",
            "Resource optimization recommendations",
            "Green certification support"
          ],
          aiOpportunities: [
            "Consumption pattern analysis",
            "Anomaly detection",
            "Optimization suggestions",
            "Predictive maintenance for efficiency"
          ],
          benefits: [
            "Lower utility costs",
            "Reduced environmental impact",
            "Better sustainability reporting",
            "Improved resource efficiency"
          ]
        },
        {
          name: "Transport, Luggage & Logistics",
          description: "Guest transport and luggage coordination with real-time tracking and communication.",
          workflows: [
            "Airport transfer scheduling",
            "Driver coordination",
            "Vehicle tracking",
            "Luggage handling workflows",
            "Arrival coordination",
            "Guest notifications",
            "Service completion tracking"
          ],
          aiOpportunities: [
            "Route optimization",
            "Driver assignment intelligence",
            "Predictive arrival times",
            "Demand forecasting"
          ],
          benefits: [
            "Improved punctuality",
            "Better resource utilization",
            "Enhanced guest communication",
            "Reduced coordination time"
          ]
        }
      ]
    },
    {
      name: "Management & Technology",
      letter: "F",
      solutions: [
        {
          name: "Revenue Planning & Commercial Insight",
          description: "Comprehensive revenue analytics and commercial intelligence dashboards.",
          workflows: [
            "Occupancy tracking and forecasting",
            "ADR and RevPAR analytics",
            "Booking pace monitoring",
            "Cancellation analysis",
            "Channel performance comparison",
            "Demand forecasting",
            "Dynamic pricing insights"
          ],
          aiOpportunities: [
            "Predictive demand modeling",
            "Price optimization recommendations",
            "Channel mix optimization",
            "Revenue opportunity identification"
          ],
          benefits: [
            "Optimized pricing strategies",
            "Improved revenue forecasting",
            "Better channel management",
            "Data-driven commercial decisions"
          ]
        },
        {
          name: "Management & Multi-Property Oversight",
          description: "Executive dashboards and multi-property operational intelligence for hotel groups.",
          workflows: [
            "Executive operational dashboards",
            "AI-generated daily briefings",
            "Property performance comparison",
            "Department KPI tracking",
            "Escalation monitoring",
            "Owner reporting automation",
            "Group-level analytics"
          ],
          aiOpportunities: [
            "Executive briefing generation",
            "Anomaly flagging",
            "Performance benchmarking",
            "Predictive insight delivery"
          ],
          benefits: [
            "Real-time operational visibility",
            "Better decision-making speed",
            "Improved property comparison",
            "Reduced reporting overhead"
          ]
        },
        {
          name: "Integrations, Applications & Data",
          description: "System integration and custom application development for connected hotel operations.",
          workflows: [
            "PMS integration",
            "POS system connectivity",
            "CRM synchronization",
            "Booking engine integration",
            "Accounting system links",
            "Custom mobile app development",
            "Guest portal creation",
            "Operational dashboard building"
          ],
          aiOpportunities: [
            "Data synchronization intelligence",
            "Integration health monitoring",
            "Custom AI application development",
            "Workflow automation creation"
          ],
          benefits: [
            "Eliminated data silos",
            "Improved system efficiency",
            "Custom solutions for unique needs",
            "Better data flow across systems"
          ]
        }
      ]
    }
  ];

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
    setOpenSolution(null);
  };

  const toggleSolution = (categoryIndex: number, solutionName: string) => {
    const key = `${categoryIndex}-${solutionName}`;
    setOpenSolution(openSolution === key ? null : key);
  };

  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            22 Solution Areas. One Connected Hospitality Operation.
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive hotel automation across guest journey, operations, revenue, people, facilities, and technology. Each solution is custom-developed for your specific needs.
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-4">
          {categories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="rounded-lg border border-border bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(categoryIndex)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                    <span className="text-sm font-bold text-primary">{category.letter}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {category.solutions.length} solutions
                    </p>
                  </div>
                </div>
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 text-muted-foreground transition-transform duration-200",
                    openCategory === categoryIndex && "rotate-180"
                  )}
                />
              </button>

              {/* Category Solutions */}
              {openCategory === categoryIndex && (
                <div className="border-t border-border bg-background/50 p-6 space-y-3">
                  {category.solutions.map((solution, solutionIndex) => {
                    const solutionKey = `${categoryIndex}-${solution.name}`;
                    const isOpen = openSolution === solutionKey;

                    return (
                      <div 
                        key={solutionIndex}
                        className="rounded-lg border border-border/50 bg-card/30 overflow-hidden"
                      >
                        {/* Solution Header */}
                        <button
                          onClick={() => toggleSolution(categoryIndex, solution.name)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/20 transition-colors"
                        >
                          <div>
                            <h4 className="text-base font-semibold text-foreground">
                              {categoryIndex + 1}.{solutionIndex + 1}. {solution.name}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {solution.description}
                            </p>
                          </div>
                          <ChevronDown 
                            className={cn(
                              "h-4 w-4 text-muted-foreground transition-transform duration-200 flex-shrink-0 ml-4",
                              isOpen && "rotate-180"
                            )}
                          />
                        </button>

                        {/* Solution Details */}
                        {isOpen && (
                          <div className="border-t border-border/50 p-4 space-y-4 bg-background/30">
                            {/* Workflows */}
                            <div>
                              <h5 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                                Example Workflows
                              </h5>
                              <ul className="space-y-1.5">
                                {solution.workflows.map((workflow, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <div className="mt-1.5 h-1 w-1 rounded-full bg-primary/50 flex-shrink-0" />
                                    <span>{workflow}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* AI Opportunities */}
                            <div>
                              <h5 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                                AI Opportunities
                              </h5>
                              <ul className="space-y-1.5">
                                {solution.aiOpportunities.map((opportunity, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <div className="mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                                    <span>{opportunity}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Benefits */}
                            <div>
                              <h5 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                                Potential Benefits
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {solution.benefits.map((benefit, idx) => (
                                  <span 
                                    key={idx}
                                    className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs text-foreground"
                                  >
                                    {benefit}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}