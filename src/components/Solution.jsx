import React from "react";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Water Recycling Technology",
    description: "Recycles flushing water up to 50 times using advanced filtration, saving up to 9,000 litres per cycle.",
    icon: "💧",
  },
  {
    title: "Resource Recovery",
    description: "Separates urine and faecal matter for future conversion into fertilizers or biogas.",
    icon: "♻️",
  },
  {
    title: "Scalable & Mobile",
    description: "Built within a modified commuter bus, adaptable for schools, markets, and emergency response.",
    icon: "🚌",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            <img 
              src="/images/SANIPEPLA 1.jpeg" 
              alt="Sanipepla Mobile Unit Interior" 
              className="w-full h-full object-cover aspect-[4/5]"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#2ECC71]/5 rounded-full blur-3xl group-hover:bg-[#2ECC71]/10 transition-colors duration-500"></div>
        </div>
        
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">The Sanipepla Model</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Built within a modified commuter bus, the Sanipepla toilet model is an eco-friendly, self-contained mobile sanitation unit developed with locally sourced materials.
            </p>
          </div>
          
          <div className="space-y-8">
            {features.map((feature, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-2xl bg-slate-50 rounded-xl group-hover:bg-[#2ECC71]/10 transition-colors duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
