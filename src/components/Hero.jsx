import React from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#E8F5E9] to-white pt-16">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <div>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider text-[#2ECC71] uppercase bg-[#2ECC71]/10 rounded-full">
              Sanitation Innovation
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Sanitation for <span className="text-[#2ECC71]">People</span>, Solutions for <span className="text-[#3498DB]">Planet</span>
            </h1>
          </div>
          <p className="text-lg text-slate-600 max-w-[600px] leading-relaxed">
            To design and deliver innovative, sustainable, socially- and environmentally-conscious scalable sanitation solutions that serve communities and transform waste into value.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#2ECC71] hover:bg-[#27ae60] text-white px-8 h-12 text-md shadow-lg shadow-[#2ECC71]/20">
              Discover the Model
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 px-8 h-12 text-md">
              Our Story
            </Button>
          </div>
        </div>
        <div className="relative animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="/images/SANIPEPLA 2.jpeg" 
              alt="Sanipepla Mobile Unit" 
              className="w-full object-cover aspect-[4/3]"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#3498DB]/10 rounded-full blur-2xl"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#2ECC71]/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
