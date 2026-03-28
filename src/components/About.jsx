import React from "react";
import { Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-spacing bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-sanipepla-indigo/5 text-sanipepla-indigo mb-6 shadow-sm">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              About <span className="text-sanipepla-indigo italic">SaniPepla</span>
            </h2>
            <div className="w-20 h-1.5 bg-sanipepla-mauve rounded-full mx-auto mt-6" />
          </div>

          {/* Core Story Card — no animation delay so text is always visible */}
          <div className="bg-slate-50 rounded-3xl border border-slate-100 shadow-sm p-12 md:p-20 text-center">
            <p className="text-xl md:text-2xl text-slate-800 leading-relaxed max-w-3xl mx-auto">
              SaniPepla is a sanitation innovation enterprise committed to providing smart, sustainable, and scalable solutions for underserved communities. SaniPepla believes in sanitation that serves the People, protects the Planet, and harnesses innovation for lasting impact.
            </p>
          </div>

          {/* Brand Logo Accent */}
          <div className="mt-20 text-center">
            <img
              src="/logos/SANIPEPLA logo 1.png"
              alt="Sanipepla"
              className="h-16 w-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
