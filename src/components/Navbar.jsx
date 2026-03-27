import React from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/logos/SANIPEPLA logo-1.png" alt="Sanipepla" className="h-10 w-auto" />
          <span className="text-xl font-extrabold tracking-tight text-slate-900 hidden sm:block">Sanipepla</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#challenge" className="text-sm font-semibold text-slate-600 hover:text-[#2ECC71] transition-colors">The Challenge</a>
          <a href="#solution" className="text-sm font-semibold text-slate-600 hover:text-[#2ECC71] transition-colors">Our Model</a>
          <a href="#gallery" className="text-sm font-semibold text-slate-600 hover:text-[#2ECC71] transition-colors">Gallery</a>
          <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-[#2ECC71] transition-colors">About Us</a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex text-slate-600 hover:text-[#2ECC71]">Log In</Button>
          <Button className="bg-[#2ECC71] hover:bg-[#27ae60] text-white px-6">Get Involved</Button>
        </div>
      </div>
    </nav>
  );
}
