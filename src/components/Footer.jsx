import { 
  Mail, 
  Phone, 
  MapPin, 
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
import { Button } from "@/components/ui/button";

const footerLinks = [
  {
    title: "The Mission",
    links: [
      { name: "Our Model", href: "#solution" },
      { name: "Our Impact", href: "#stats" },
      { name: "Global Vision", href: "/vision" },
    ],
  },
  {
    title: "Organization",
    links: [
      { name: "Our Story", href: "#about" },
      { name: "Partnerships", href: "/partners" },
      { name: "Transparency", href: "/transparency" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { name: "Donate", href: "/donate" },
      { name: "Volunteer", href: "/volunteer" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 C50,10 50,90 100,100" fill="none" stroke="white" strokeWidth="0.05" />
          <path d="M0,100 C50,90 50,10 100,0" fill="none" stroke="white" strokeWidth="0.05" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-10">
            <a href="#hero" className="flex items-center gap-4 group">
              <img 
                src="/logos/SANIPEPLA logo 1.png" 
                alt="Sanipepla" 
                className="h-14 w-auto brightness-0 invert transition-transform group-hover:scale-105" 
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight">SANIPEPLA</span>
                <span className="text-[10px] font-medium tracking-[0.2em] text-sanipepla-mauve uppercase mt-1">
                  Sanitation. People. Planet.
                </span>
              </div>
            </a>
            
            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-sm">
              Leading the way in sustainable sanitation innovation. Designing for the dignity of people, protecting the future of our planet.
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

          {/* Links Columns */}
          {footerLinks.map((section, i) => (
            <div key={i} className="space-y-8">
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

          {/* Newsletter/Action Area */}
          <div className="lg:col-span-1 space-y-8">
            <h3 className="text-lg font-bold tracking-wider uppercase text-sanipepla-mauve">
              Connect
            </h3>
            <div className="space-y-4">
              <a href="mailto:info@sanipepla.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-sanipepla-mauve" />
                info@sanipepla.com
              </a>
              <a href="tel:+254700000000" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-sanipepla-mauve" />
                +254 700 000 000
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 mt-1 text-sanipepla-mauve shrink-0" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-sm font-medium">
            © 2026 SANIPEPLA Organization. All rights reserved.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="inline-flex items-center gap-2 text-sanipepla-mauve text-sm font-bold">
            <Heart className="w-4 h-4 fill-current" />
            Support Clean Water
          </div>
        </div>
      </div>
    </footer>
  );
}
