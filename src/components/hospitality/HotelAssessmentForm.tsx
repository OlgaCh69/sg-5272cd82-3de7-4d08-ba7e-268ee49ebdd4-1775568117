import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const SOLUTION_AREAS = [
  "Reservations & Direct Booking",
  "Pre-arrival & Reception",
  "Digital Concierge & Guest Portal",
  "Guest Requests & Service Recovery",
  "Housekeeping & Room Readiness",
  "Maintenance & Engineering",
  "Food, Beverage & Room Service",
  "Spa, Wellness & Leisure",
  "Upselling & Ancillary Revenue",
  "Corporate Sales & Travel Trade",
  "Groups, Weddings & Events",
  "Marketing, Loyalty & Retention",
  "Feedback, Reputation & Quality",
  "Staff, Shifts & Knowledge",
  "Purchasing, Suppliers & Inventory",
  "Finance & Administration",
  "Safety, Security & Compliance",
  "Energy, Utilities & Sustainability",
  "Transport, Luggage & Logistics",
  "Revenue Planning & Commercial Insight",
  "Management & Multi-Property Oversight",
  "Integrations, Applications & Data"
];

export function HotelAssessmentForm() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Step 1: Property
  const [propertyType, setPropertyType] = useState("");
  const [rooms, setRooms] = useState("");
  const [numberOfProperties, setNumberOfProperties] = useState("");
  const [country, setCountry] = useState("");

  // Step 2: Challenges
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);

  // Step 3: Priorities
  const [topPriorities, setTopPriorities] = useState<string[]>([]);
  const [impact, setImpact] = useState<string[]>([]);
  const [urgency, setUrgency] = useState("");

  // Step 4: Technology
  const [currentPMS, setCurrentPMS] = useState("");
  const [existingTools, setExistingTools] = useState("");
  const [integrationChallenges, setIntegrationChallenges] = useState("");
  const [currentAI, setCurrentAI] = useState("");

  // Step 5: Contact
  const [fullName, setFullName] = useState("");
  const [position, setPosition] = useState("");
  const [hotelGroup, setHotelGroup] = useState("");
  const [email, setEmail] = useState("");
  const [contactCountry, setContactCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  const totalSteps = 6;

  const toggleChallenge = (challenge: string) => {
    setSelectedChallenges(prev => 
      prev.includes(challenge) 
        ? prev.filter(c => c !== challenge)
        : [...prev, challenge]
    );
  };

  const togglePriority = (priority: string) => {
    setTopPriorities(prev => {
      if (prev.includes(priority)) {
        return prev.filter(p => p !== priority);
      }
      if (prev.length < 3) {
        return [...prev, priority];
      }
      return prev;
    });
  };

  const toggleImpact = (impactType: string) => {
    setImpact(prev => 
      prev.includes(impactType)
        ? prev.filter(i => i !== impactType)
        : [...prev, impactType]
    );
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return propertyType && rooms && numberOfProperties && country;
      case 2:
        return selectedChallenges.length > 0;
      case 3:
        return topPriorities.length === 3 && impact.length > 0 && urgency;
      case 4:
        return true; // Optional step
      case 5:
        return fullName && position && hotelGroup && email && contactCountry && privacyAccepted;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;

    setSubmitting(true);

    try {
      // Prepare assessment data
      const assessmentData = {
        property_type: propertyType,
        rooms,
        number_of_properties: numberOfProperties,
        country,
        selected_challenges: selectedChallenges,
        top_priorities: topPriorities,
        impact,
        urgency,
        current_pms: currentPMS,
        existing_tools: existingTools,
        integration_challenges: integrationChallenges,
        current_ai: currentAI,
        full_name: fullName,
        position,
        hotel_group: hotelGroup,
        email,
        contact_country: contactCountry,
        phone,
        comments,
        marketing_consent: marketingConsent,
        submitted_at: new Date().toISOString()
      };

      // Save to database
      const { error: dbError } = await supabase
        .from("hospitality_assessments")
        .insert(assessmentData);

      if (dbError) throw dbError;

      // Send email notification via Next.js API route
      const emailResponse = await fetch("/api/send-hotel-assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(assessmentData),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.json();
        console.error("Email notification error:", errorData);
        // Don't fail the whole submission if email fails
      }

      setSubmitted(true);
      setStep(6);
      
      toast({
        title: "Assessment Submitted",
        description: "Thank you! We'll review your hotel operations and contact you within 2 business days.",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Error",
        description: "Failed to submit assessment. Please try again or contact us directly at support@onetechautomation.com",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="flex justify-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Assessment Submitted Successfully
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Thank you for completing the O.N.E.Tech Hotel Operations Assessment. Our team will review your responses and contact you within 2 business days to discuss opportunities for improving your operational efficiency.
        </p>
        <Button onClick={() => window.location.href = "/"}>
          Return to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Step {step} of {totalSteps}
          </span>
          <span className="text-sm font-medium text-primary">
            {Math.round((step / totalSteps) * 100)}% Complete
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Property */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Property Details</h3>
            <p className="text-muted-foreground">Tell us about your hotel or hospitality operation.</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="propertyType">Property Type *</Label>
              <RadioGroup value={propertyType} onValueChange={setPropertyType} className="mt-2">
                {["Independent Hotel", "Luxury Hotel", "Resort", "Hotel Group", "Other"].map(type => (
                  <div key={type} className="flex items-center space-x-2">
                    <RadioGroupItem value={type} id={type} />
                    <Label htmlFor={type} className="font-normal cursor-pointer">{type}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="rooms">Number of Rooms *</Label>
              <RadioGroup value={rooms} onValueChange={setRooms} className="mt-2">
                {["Under 50", "50-150", "151-300", "301-500", "500+"].map(range => (
                  <div key={range} className="flex items-center space-x-2">
                    <RadioGroupItem value={range} id={range} />
                    <Label htmlFor={range} className="font-normal cursor-pointer">{range}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="numberOfProperties">Number of Properties *</Label>
              <Input
                id="numberOfProperties"
                type="number"
                min="1"
                value={numberOfProperties}
                onChange={(e) => setNumberOfProperties(e.target.value)}
                placeholder="e.g., 1, 5, 20"
              />
            </div>

            <div>
              <Label htmlFor="country">Country *</Label>
              <Input
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="e.g., Saudi Arabia, UAE, Cyprus"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Challenges */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Operational Challenges</h3>
            <p className="text-muted-foreground">Select all areas where you face operational challenges. (Select at least one)</p>
          </div>

          <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
            {SOLUTION_AREAS.map(area => (
              <div key={area} className="flex items-start space-x-2 p-3 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <Checkbox
                  id={area}
                  checked={selectedChallenges.includes(area)}
                  onCheckedChange={() => toggleChallenge(area)}
                />
                <Label htmlFor={area} className="font-normal cursor-pointer flex-1">{area}</Label>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground">
            Selected: {selectedChallenges.length} {selectedChallenges.length === 1 ? "area" : "areas"}
          </p>
        </div>
      )}

      {/* Step 3: Priorities */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Top Priorities</h3>
            <p className="text-muted-foreground">Select your top 3 challenges and their impact.</p>
          </div>

          <div>
            <Label>Top 3 Challenges * (Select exactly 3)</Label>
            <p className="text-sm text-muted-foreground mb-3">
              Selected: {topPriorities.length} of 3
            </p>
            <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
              {selectedChallenges.map(area => (
                <div key={area} className="flex items-start space-x-2 p-3 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                  <Checkbox
                    id={`priority-${area}`}
                    checked={topPriorities.includes(area)}
                    onCheckedChange={() => togglePriority(area)}
                    disabled={!topPriorities.includes(area) && topPriorities.length >= 3}
                  />
                  <Label htmlFor={`priority-${area}`} className="font-normal cursor-pointer flex-1">{area}</Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label>Primary Impact Areas * (Select all that apply)</Label>
            <div className="space-y-2 mt-2">
              {["Revenue Loss", "Operational Delays", "Staff Workload", "Guest Experience", "Management Visibility"].map(impactType => (
                <div key={impactType} className="flex items-center space-x-2">
                  <Checkbox
                    id={impactType}
                    checked={impact.includes(impactType)}
                    onCheckedChange={() => toggleImpact(impactType)}
                  />
                  <Label htmlFor={impactType} className="font-normal cursor-pointer">{impactType}</Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="urgency">Urgency *</Label>
            <RadioGroup value={urgency} onValueChange={setUrgency} className="mt-2">
              {["Immediate (Within 1 month)", "Short-term (1-3 months)", "Medium-term (3-6 months)", "Long-term (6+ months)"].map(option => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="font-normal cursor-pointer">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      )}

      {/* Step 4: Technology */}
      {step === 4 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Current Technology</h3>
            <p className="text-muted-foreground">Help us understand your existing systems. (Optional)</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="currentPMS">Current PMS (Property Management System)</Label>
              <Input
                id="currentPMS"
                value={currentPMS}
                onChange={(e) => setCurrentPMS(e.target.value)}
                placeholder="e.g., Opera, Mews, Protel, Cloudbeds"
              />
            </div>

            <div>
              <Label htmlFor="existingTools">Other Existing Tools</Label>
              <Textarea
                id="existingTools"
                value={existingTools}
                onChange={(e) => setExistingTools(e.target.value)}
                placeholder="e.g., POS systems, booking engines, CRM, channel managers"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="integrationChallenges">Integration Challenges</Label>
              <Textarea
                id="integrationChallenges"
                value={integrationChallenges}
                onChange={(e) => setIntegrationChallenges(e.target.value)}
                placeholder="Describe any system integration or data flow issues"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="currentAI">Current AI Usage</Label>
              <Input
                id="currentAI"
                value={currentAI}
                onChange={(e) => setCurrentAI(e.target.value)}
                placeholder="e.g., Chatbots, revenue management AI, none"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 5: Contact */}
      {step === 5 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Contact Information</h3>
            <p className="text-muted-foreground">How should we reach you?</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your full name"
              />
            </div>

            <div>
              <Label htmlFor="position">Position *</Label>
              <Input
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="e.g., General Manager, Owner, Director of Operations"
              />
            </div>

            <div>
              <Label htmlFor="hotelGroup">Hotel / Hotel Group Name *</Label>
              <Input
                id="hotelGroup"
                value={hotelGroup}
                onChange={(e) => setHotelGroup(e.target.value)}
                placeholder="Property or group name"
              />
            </div>

            <div>
              <Label htmlFor="email">Business Email *</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@hotel.com"
              />
            </div>

            <div>
              <Label htmlFor="contactCountry">Country *</Label>
              <Input
                id="contactCountry"
                value={contactCountry}
                onChange={(e) => setContactCountry(e.target.value)}
                placeholder="e.g., Saudi Arabia, UAE, Cyprus"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number (Optional)</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+971 50 123 4567"
              />
            </div>

            <div>
              <Label htmlFor="comments">Additional Comments (Optional)</Label>
              <Textarea
                id="comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Any specific questions or requirements?"
                rows={3}
              />
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="privacy"
                  checked={privacyAccepted}
                  onCheckedChange={(checked) => setPrivacyAccepted(checked as boolean)}
                />
                <Label htmlFor="privacy" className="font-normal text-sm cursor-pointer">
                  I acknowledge that O.N.E.Tech will process my information to provide the hotel operations assessment and follow-up consultation. *
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="marketing"
                  checked={marketingConsent}
                  onCheckedChange={(checked) => setMarketingConsent(checked as boolean)}
                />
                <Label htmlFor="marketing" className="font-normal text-sm cursor-pointer">
                  I would like to receive updates about hotel automation insights and O.N.E.Tech solutions. (Optional)
                </Label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-border mt-8">
        <Button
          variant="outline"
          onClick={() => setStep(step - 1)}
          disabled={step === 1}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>

        {step < 5 ? (
          <Button
            onClick={() => setStep(step + 1)}
            disabled={!canProceed()}
            className="gap-2"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={!canProceed() || submitting}
            className="gap-2"
          >
            {submitting ? "Submitting..." : "Submit Assessment"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}