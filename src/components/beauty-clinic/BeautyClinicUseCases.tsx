import { Sparkles, Syringe, Zap, Scissors, PaintBucket, Heart } from "lucide-react";

export function BeautyClinicUseCases() {
  const useCases = [
    { icon: Sparkles, text: "Beauty salons" },
    { icon: Syringe, text: "Aesthetic clinics" },
    { icon: Zap, text: "Laser clinics" },
    { icon: Heart, text: "Skincare studios" },
    { icon: PaintBucket, text: "Nail salons" },
    { icon: Scissors, text: "Hair salons" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">
            Perfect For
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-[#f8f3ef] to-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#d4af37] hover:shadow-xl transition-all text-center"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffb6c1] flex items-center justify-center mx-auto mb-4">
                <useCase.icon className="w-7 h-7 text-[#1a1a1a]" />
              </div>
              <p className="text-lg font-semibold text-[#1a1a1a]">{useCase.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}