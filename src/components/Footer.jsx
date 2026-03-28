import React from "react";
import { 
  Heart,
  Globe,
  ArrowRight
} from "lucide-react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaXTwitter, 
  FaLinkedinIn 
} from "react-icons/fa6";

const footerLinks = [
  {
    title: "Organization",
    links: [
      { name: "Our Model", href: "#solution" },
      { name: "Our Impact", href: "#stats" },
      { name: "Gallery", href: "#gallery" },
      { name: "Our Story", href: "#about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-10">
            <a href="#hero" className="flex items-center gap-4 group">
              <img 
                src="/logos/SANIPEPLA logo 1.png" 
                alt="Sanipepla" 
                className="h-14 w-auto brightness-0 invert transition-transform group-hover:scale-105" 
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight">SANIPEPLA</span>
                <span className="text-[10px] font-medium tracking-[0.2em] text-sanipepla-mauve uppercase mt-1">
                  Sanitation, People, Planet
                </span>
              </div>
            </a>
            
            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-sm">
              Sanitation for people, solutions for planet. Providing smart, sustainable, and scalable solutions for underserved communities.
            </p>
            
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:bg-sanipepla-mauve hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:flex lg:justify-end">
            {footerLinks.map((section, i) => (
              <div key={i} className="space-y-8 min-w-[200px]">
                <h3 className="text-lg font-bold tracking-wider uppercase text-sanipepla-mauve">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a 
                        href={link.href} 
                        className="text-slate-400 hover:text-white transition-colors flex items-center group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-sanipepla-mauve" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-sm font-medium">
            © 2026 Sanipepla. All rights reserved.
          </p>
          <div className="inline-flex items-center gap-2 text-sanipepla-mauve text-sm font-bold opacity-50">
            <Heart className="w-4 h-4 fill-current" />
            Empowering Communities
          </div>
        </div>
      </div>
    </footer>
  );
}
