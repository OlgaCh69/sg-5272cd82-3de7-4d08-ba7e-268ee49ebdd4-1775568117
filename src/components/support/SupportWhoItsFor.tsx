import { CheckCircle2 } from "lucide-react";

export function SupportWhoItsFor() {
  const idealFor = [
    "Growing ecommerce stores",
    "Brands receiving frequent customer inquiries",
    "Teams struggling with response time",
    "Businesses looking to scale efficiently",
    "Ecommerce brands focused on customer experience",
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Built for Ecommerce Brands Handling Growing Support Volume
          </h2>
          
          <p className="text-lg text-muted-foreground">
            This is ideal for ecommerce businesses that want to improve support without increasing complexity.
          </p>

          <div>
            <h3 className="text-xl font-semibold mb-4">Ideal For:</h3>
            <div className="grid gap-3">
              {idealFor.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}