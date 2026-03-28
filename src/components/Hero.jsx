import React from "react";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 rounded-l-[100px] -z-10 translate-x-20" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-sanipepla-indigo/5 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-10 animate-fade-in-up">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Sanitation for <span className="text-sanipepla-indigo italic">people</span>, <br />
              solutions for <span className="text-sanipepla-mauve italic">planet</span>
            </h1>
            <p className="text-xl text-slate-800 leading-relaxed max-w-xl">
              To design and deliver innovative, sustainable, socially- and environmentally-conscious scalable sanitation solutions that serve communities and transform waste into value.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <a 
              href="#solution" 
              className="w-full sm:w-auto bg-sanipepla-indigo text-white px-10 h-16 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-sanipepla-indigo/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-sanipepla-indigo/20 group"
            >
              Discover the Model
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#about" 
              className="w-full sm:w-auto px-10 h-16 rounded-full font-bold flex items-center justify-center gap-3 border-2 border-slate-300 text-slate-800 hover:bg-slate-50 transition-all hover:scale-105 active:scale-95"
            >
              Our Story
            </a>
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="relative">
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700 aspect-[4/5] md:aspect-auto">
            <img 
              src="/images/SANIPEPLA 2.jpeg" 
              alt="Sanipepla Innovation" 
              className="w-full h-full object-cover scale-105" 
            />
            {/* Impact Overlay */}
            <div className="absolute bottom-8 left-8 right-8 glass-card p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sanipepla-indigo flex items-center justify-center text-white shrink-0">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-xs font-bold text-sanipepla-indigo uppercase tracking-wider">Our Vision</p>
                  <p className="text-sm text-slate-700 font-medium">Sanitation for people, solutions for planet</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-sanipepla-mauve/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sanipepla-indigo/10 rounded-[2rem] -rotate-12 -z-10" />
        </div>
      </div>
    </section>
  );
}
