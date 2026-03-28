import React from "react";
import { Heart, Users2, ShieldCheck, Zap } from "lucide-react";

const values = [
  {
    title: "People First",
    description: "Every solution we design starts with the dignity and health of the individuals in the community.",
    icon: Users2,
  },
  {
    title: "Planet Focused",
    description: "Our closed-loop systems ensure that we protect our ecosystems while providing essential services.",
    icon: Zap,
  },
  {
    title: "Innovation Driven",
    description: "We harness local talent and modern technology to create scalable, sustainable sanitation.",
    icon: ShieldCheck,
  },
];

export default function About() {
  return (
    <section id="about" className="section-spacing bg-white relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-sanipepla-indigo/5 to-transparent pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-sanipepla-indigo/5 text-sanipepla-indigo mb-6 shadow-sm">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              A Mission for <span className="text-sanipepla-indigo italic">Change</span>.
            </h2>
            <div className="w-20 h-1.5 bg-sanipepla-mauve rounded-full mx-auto mt-8" />
          </div>

          {/* Core Story Card */}
          <div className="organic-card p-12 md:p-20 text-center space-y-8 animate-fade-in delay-300 opacity-0 [animation-fill-mode:forwards]">
            <p className="text-2xl md:text-3xl font-light text-slate-600 leading-relaxed italic">
              "SaniPepla is more than a sanitation enterprise; it's a commitment to providing smart, sustainable, and scalable solutions for underserved communities worldwide."
            </p>
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto pt-6 border-t border-slate-100">
              We believe in sanitation that serves the <span className="text-sanipepla-indigo font-bold">People</span>, 
              protects the <span className="text-sanipepla-mauve font-bold">Planet</span>, 
              and harnesses <span className="text-slate-900 font-bold underline decoration-sanipepla-indigo/20">Innovation</span> for lasting impact.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-12 mt-24">
            {values.map((value, i) => (
              <div key={i} className="space-y-6 text-center group">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-slate-50 text-sanipepla-indigo group-hover:bg-sanipepla-mauve group-hover:text-white transition-all duration-500 shadow-sm group-hover:scale-110">
                  <value.icon className="w-8 h-8" />
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-slate-900">{value.title}</h4>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Partner */}
          <div className="mt-24 text-center p-12 bg-sanipepla-indigo rounded-[3rem] shadow-2xl shadow-sanipepla-indigo/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Want to partner with our mission?
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:info@sanipepla.com" 
                className="bg-white text-sanipepla-indigo px-10 h-14 rounded-full font-bold flex items-center justify-center hover:bg-slate-50 transition-all hover:scale-105"
              >
                Send an Inquiry
              </a>
              <a 
                href="#gallery" 
                className="text-white font-bold flex items-center gap-2 hover:translate-x-1 transition-transform"
              >
                Explore our projects
                <Zap className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
