import React from "react";
import { Globe2, Droplets, Users2, BarChart3 } from "lucide-react";

const stats = [
  { 
    value: "3.5Bn", 
    label: "People lack safely managed sanitation", 
    icon: Globe2,
    description: "A global crisis affecting health and dignity."
  },
  { 
    value: "8%", 
    label: "Practice open defecation", 
    icon: Users2,
    description: "Leading to preventable disease and environmental harm."
  },
  { 
    value: "57%", 
    label: "Urban toilet services gap", 
    icon: BarChart3,
    description: "Rapid urbanization outpaces current infrastructure."
  },
  { 
    value: "14L", 
    label: "Water wasted per flush", 
    icon: Droplets,
    description: "Traditional systems are draining our most precious resource."
  },
];

export default function Stats() {
  return (
    <section id="stats" className="section-spacing bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <h2 className="text-sm font-bold tracking-[0.2em] text-sanipepla-mauve uppercase mb-4">
            The Magnitude of the Challenge
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Why We <span className="text-sanipepla-indigo underline decoration-sanipepla-mauve/30">Innovate</span>
          </h3>
          <p className="mt-6 text-xl text-slate-500 font-light leading-relaxed">
            Access to safely managed sanitation is a fundamental human right. 
            Yet, the current global systems are failing both people and the planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="organic-card p-10 flex flex-col items-center text-center group"
            >
              <div className="mb-8 p-4 rounded-2xl bg-slate-50 text-sanipepla-indigo group-hover:bg-sanipepla-indigo group-hover:text-white transition-all duration-500 shadow-inner">
                <stat.icon className="w-10 h-10" />
              </div>
              
              <div className="space-y-3">
                <span className="text-5xl font-black text-slate-900 block tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-[15px] font-bold text-sanipepla-mauve uppercase tracking-wider block">
                  {stat.label}
                </span>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle Background Decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
    </section>
  );
}
