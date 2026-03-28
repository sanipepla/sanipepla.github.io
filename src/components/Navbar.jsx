import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Globe, Droplets, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Model", href: "#solution" },
    { name: "Our Impact", href: "#stats" },
    { name: "Gallery", href: "#gallery" },
    { name: "Our Story", href: "#about" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-nav h-20" : "bg-transparent h-24"
      )}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src="/logos/SANIPEPLA logo 1.png"
            alt="Sanipepla"
            className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-sanipepla-indigo leading-none">
              SANIPEPLA
            </span>
            <span className="text-[10px] font-medium tracking-[0.2em] text-sanipepla-mauve uppercase mt-1">
              Sanitation. People. Planet.
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-slate-800 hover:text-sanipepla-mauve transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sanipepla-mauve transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Button
            className="hidden md:flex bg-sanipepla-indigo hover:bg-sanipepla-indigo/90 text-white px-8 rounded-full shadow-lg shadow-sanipepla-indigo/20 transition-all hover:scale-105"
          >
            <Heart className="w-4 h-4 mr-2 fill-white/20" />
            Get Involved
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-sanipepla-indigo"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 bg-white/95 backdrop-blur-xl z-40 transition-transform duration-500 md:hidden flex flex-col items-center justify-center gap-8",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-semibold text-sanipepla-indigo hover:text-sanipepla-mauve transition-colors"
          >
            {link.name}
          </a>
        ))}
        <Button
          className="bg-sanipepla-indigo text-white px-10 py-6 text-lg rounded-full"
          onClick={() => setMobileMenuOpen(false)}
        >
          Get Involved
        </Button>
      </div>
    </nav>
  );
}
