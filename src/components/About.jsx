import React from "react";
import { Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-spacing bg-white relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-sanipepla-indigo/5 to-transparent pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-sanipepla-indigo/5 text-sanipepla-indigo mb-6 shadow-sm">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              About <span className="text-sanipepla-indigo italic">SaniPepla</span>
            </h2>
            <div className="w-20 h-1.5 bg-sanipepla-mauve rounded-full mx-auto mt-6" />
          </div>

          {/* Core Story Card */}
          <div className="organic-card p-12 md:p-20 text-center animate-fade-in delay-300 opacity-0 [animation-fill-mode:forwards]">
            <p className="text-xl md:text-2xl font-light text-slate-800 leading-relaxed max-w-3xl mx-auto">
              SaniPepla is a sanitation innovation enterprise committed to providing smart, sustainable, and scalable solutions for underserved communities. SaniPepla believes in sanitation that serves the People, protects the Planet, and harnesses innovation for lasting impact.
            </p>
          </div>

          {/* Brand Logo Accent */}
          <div className="mt-20 text-center opacity-40 hover:opacity-100 transition-opacity duration-700">
            <img 
              src="/logos/SANIPEPLA logo 1.png" 
              alt="Sanipepla" 
              className="h-16 w-auto mx-auto grayscale group-hover:grayscale-0 transition-all" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
