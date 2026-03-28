import React from "react";
import { CheckCircle2, Droplets, Recycle, Laptop } from "lucide-react";

export default function Solution() {
  const highlights = [
    {
      title: "Water Recycling Technology",
      description: "Each unit uses advanced decantation and filtration systems to recycle flushing water up to 50 times, saving up to 9,000 litres per service cycle. Includes two waterless urinals capable of serving 300 users each before requiring cleaning.",
      icon: Droplets,
    },
    {
      title: "Waste Separation & Resource Recovery",
      description: "The toilet separates urine and faecal matter at collection, allowing future conversion into fertilizers or biogas, promoting circular sanitation practices.",
      icon: Recycle,
    },
    {
      title: "Scalable and Replicable Model",
      description: "Using standard market toilet designs and locally available materials, the unit is easy to maintain and scale — adaptable for schools, markets, residential estates, and emergency response settings.",
      icon: Laptop,
    },
  ];

  return (
    <section id="solution" className="section-spacing bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-[1.02]">
              <img 
                src="/images/SANIPEPLA 1.jpeg" 
                alt="Sanipepla Solution" 
                className="w-full h-auto" 
              />
            </div>
            {/* Decal Background */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-sanipepla-mauve/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-sanipepla-indigo/5 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="space-y-12 animate-fade-in-up">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
                The Sanipepla <span className="text-sanipepla-mauve italic">Model</span>
              </h2>
              <p className="text-lg text-slate-800 leading-relaxed">
                Built within a modified commuter bus, the Sanipepla toilet model is an eco-friendly, self-contained mobile sanitation unit that integrates water recycling technology, waste separation, and locally sourced materials to deliver high-impact, environmentally conscious sanitation services.
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-slate-900 border-l-4 border-sanipepla-indigo pl-6 py-1">
                What Makes It Unique?
              </h3>
              
              <div className="grid gap-8">
                {highlights.map((item, i) => (
                  <div key={i} className="flex gap-6 group hover:translate-x-1 transition-transform">
                    <div className="w-14 h-14 rounded-2xl bg-sanipepla-indigo/5 border border-slate-200 text-sanipepla-indigo flex items-center justify-center shrink-0 shadow-sm group-hover:bg-sanipepla-indigo group-hover:text-white transition-all duration-500">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-700 leading-relaxed text-sm font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
