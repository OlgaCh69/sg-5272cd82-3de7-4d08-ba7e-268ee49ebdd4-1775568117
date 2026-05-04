import { Sparkles, Syringe, Zap, Scissors, PaintBucket, Heart } from "lucide-react";

export function BeautyClinicUseCases() {
  const useCases = [
    { icon: Sparkles, title: "Beauty salons" },
    { icon: Syringe, title: "Aesthetic clinics" },
    { icon: Zap, title: "Laser clinics" },
    { icon: Heart, title: "Skincare studios" },
    { icon: PaintBucket, title: "Nail salons" },
    { icon: Scissors, title: "Hair salons" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">
            Perfect For
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div 
                key={index} 
                className="flex items-center gap-4 bg-gradient-to-br from-[#f5f5dc]/10 to-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#d4af37]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffb6c1] flex items-center justify-center shrink-0">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-lg font-semibold text-[#1a1a1a]">{useCase.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}