import React from "react";
import { Droplets, Recycle, Truck, FlaskConical, CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Eco-Friendly Water Management",
    description: "Our advanced filtration system recycles water up to 50 times, drastically reducing waste in water-scarce regions.",
    icon: Droplets,
  },
  {
    title: "Waste-to-Value Recovery",
    description: "We separate and recover nutrients, preparing them for conversion into sustainable fertilizers and renewable biogas.",
    icon: Recycle,
  },
  {
    title: "Mobile Stability",
    description: "Housed in modified commuter buses, our units provide dignity and hygiene in markets, schools, and disaster zones.",
    icon: Truck,
  },
  {
    title: "Material Innovation",
    description: "Constructed with durable, locally-sourced materials to ensure sustainability and support local economies.",
    icon: FlaskConical,
  },
];

export default function Solution() {
  return (
    <section id="solution" className="section-spacing bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Visual Impact Side */}
        <div className="relative group order-2 lg:order-1">
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-[0_48px_80px_-16px_rgba(45,58,130,0.25)] border-4 border-white">
            <img 
              src="/images/SANIPEPLA 1.jpeg" 
              alt="Inside the Sanipepla Innovation" 
              className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-1000"
            />
          </div>
          
          {/* Circular Decorative Element */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-sanipepla-mauve/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-sanipepla-indigo/10 rounded-full blur-[100px]" />
          
          {/* Trust Badge */}
          <div className="absolute top-10 right-10 z-20 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sanipepla-indigo text-white flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-slate-900 leading-tight">
                Sustainable <br /> Certification
              </p>
            </div>
          </div>
        </div>
        
        {/* Content Side */}
        <div className="space-y-12 order-1 lg:order-2">
          <div className="space-y-6">
            <h2 className="text-sm font-bold tracking-[0.2em] text-sanipepla-mauve uppercase">
              The Sanipepla Innovation
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1]">
              A Model that <span className="text-sanipepla-indigo">Respects</span> the Earth.
            </h3>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              Our self-contained, mobile sanitation unit isn't just a toilet—it's a closed-loop resource recovery hub designed for dignity and environmental resilience.
            </p>
          </div>
          
          <div className="grid gap-8">
            {features.map((feature, i) => (
              <div key={i} className="flex gap-6 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-sanipepla-indigo/5 text-sanipepla-indigo rounded-2xl group-hover:bg-sanipepla-indigo group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-sanipepla-indigo/20">
                  <feature.icon className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-sanipepla-indigo transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 C20,80 50,0 100,0" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <path d="M0,0 C20,20 50,100 100,100" fill="none" stroke="currentColor" strokeWidth="0.1" />
        </svg>
      </div>
    </section>
  );
}
