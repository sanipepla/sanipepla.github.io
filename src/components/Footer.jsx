import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#solution" },
      { name: "Features", href: "#solution" },
      { name: "Gallery", href: "#gallery" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#about" },
      { name: "Mission", href: "/" },
      { name: "Team", href: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "/" },
      { name: "Sales", href: "/" },
      { name: "Privacy", href: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <img src="/logos/SANIPEPLA logo-1.png" alt="Sanipepla" className="h-10 w-auto" />
              <span className="text-2xl font-bold tracking-tight text-slate-900">Sanipepla</span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Leading the way in sustainable sanitation solutions. Designing for people, protecting the planet.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-50 rounded-lg hover:bg-[#2ECC71]/10 hover:text-[#2ECC71] transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="p-2 bg-slate-50 rounded-lg hover:bg-[#2ECC71]/10 hover:text-[#2ECC71] transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="p-2 bg-slate-50 rounded-lg hover:bg-[#2ECC71]/10 hover:text-[#2ECC71] transition-colors"><FaTwitter size={20} /></a>
              <a href="#" className="p-2 bg-slate-50 rounded-lg hover:bg-[#2ECC71]/10 hover:text-[#2ECC71] transition-colors"><FaLinkedin size={20} /></a>
            </div>
          </div>
          {sections.map((section, i) => (
            <div key={i} className="space-y-6">
              <h3 className="font-bold text-slate-900">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} className="text-slate-500 hover:text-[#2ECC71] transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-slate-100 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">© 2026 Sanipepla. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-slate-400 hover:text-[#2ECC71] transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-slate-400 hover:text-[#2ECC71] transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
