import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-24 pb-16">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-sanipepla-mauve/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-sanipepla-indigo/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sanipepla-indigo/5 text-sanipepla-indigo text-sm font-semibold tracking-wide border border-sanipepla-indigo/10">
            <span className="w-2 h-2 rounded-full bg-sanipepla-mauve animate-pulse" />
            Leading Sustainable Sanitation Innovation
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[1.05]">
            Sanitation for <span className="text-sanipepla-indigo italic">People</span>, <br />
            Solutions for <span className="text-sanipepla-mauve">Planet</span>.
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            Empowering communities with scalable, socially-conscious, and environmentally-sustainable sanitation that transforms waste into value.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Button
              size="lg"
              className="bg-sanipepla-indigo hover:bg-sanipepla-indigo/90 text-white px-10 h-16 text-lg rounded-full shadow-2xl shadow-sanipepla-indigo/20 transition-all hover:scale-105"
              asChild
            >
              <a href="#solution">
                Discover the Model
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-10 h-16 text-lg rounded-full border-2 border-slate-200 hover:bg-slate-50 transition-all group"
              asChild
            >
              <a href="#about">
                <Play className="mr-2 w-4 h-4 fill-slate-400 group-hover:fill-sanipepla-mauve transition-colors" />
                Our Story
              </a>
            </Button>
          </div>
        </div>

        {/* Impact Image Feature */}
        <div className="mt-20 relative max-w-5xl mx-auto animate-fade-in delay-500 opacity-0 [animation-fill-mode:forwards]">
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-8 border-white">
            <img
              src="/images/SANIPEPLA 2.jpeg"
              alt="Sanipepla Innovation in Action"
              className="w-full h-auto object-cover aspect-video hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
          
          {/* Decorative Floating Card */}
          <div className="absolute -bottom-10 -right-10 hidden lg:block p-8 bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-xs animate-bounce-subtle">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 rounded-2xl bg-sanipepla-mauve/10 text-sanipepla-mauve">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <div className="text-left leading-tight">
                <p className="text-sm font-bold text-slate-900">Community Impact</p>
                <p className="text-xs text-slate-500">Transforming lives daily</p>
              </div>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full w-[85%] bg-sanipepla-mauve rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
