import React from "react";
import { Users2, AlertCircle, Droplets, Trash2 } from "lucide-react";

const stats = [
  {
    number: "3.5Bn",
    label: "People lack access to safely managed sanitation services",
    icon: Users2,
    color: "bg-blue-50 text-blue-600",
  },
  {
    number: "8%",
    label: "Of the global population practices open defecation",
    icon: AlertCircle,
    color: "bg-red-50 text-red-600",
  },
  {
    number: "57%",
    label: "Of urban dwellers lack access to toilets that provide a full sanitation service",
    icon: Trash2,
    color: "bg-orange-50 text-orange-600",
  },
  {
    number: "14L",
    label: "Of clean water is wasted by traditional toilets per flush",
    icon: Droplets,
    color: "bg-cyan-50 text-cyan-600",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="section-spacing bg-slate-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Our Current State: <span className="text-sanipepla-indigo underline decoration-sanipepla-mauve/60">Challenge</span>
          </h2>
          <div className="w-20 h-1.5 bg-sanipepla-mauve rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="organic-card p-10 flex flex-col items-center text-center space-y-6 hover:-translate-y-2 transition-all duration-500 animate-fade-in-up" 
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl ${stat.color} flex items-center justify-center shadow-inner`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <span className="text-4xl md:text-5xl font-bold text-slate-900 block tracking-tighter tabular-nums">
                  {stat.number}
                </span>
                <p className="text-slate-700 text-sm font-medium leading-relaxed max-w-[180px] mx-auto">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
