import React from "react";
import { Camera, Image as ImageIcon, Heart } from "lucide-react";

const galleryImages = [
  { src: "/images/SANIPEPLA 1.jpeg", alt: "Sanipepla Mobile Unit Interior", title: "Smart Interior" },
  { src: "/images/SANIPEPLA 2.jpeg", alt: "Sanipepla Exterior Innovation", title: "Mobile Innovation" },
  { src: "/images/SANIPEPLA 5.jpeg", alt: "Community Engagement", title: "Public Impact" },
  { src: "/images/SANIPEPLA 7.jpeg", alt: "Sanitation Technology", title: "The Hardware" },
  { src: "/images/SANIPEPLA 12.jpeg", alt: "Sustainable Solutions", title: "Sustainable Tech" },
  { src: "/images/SANIPEPLA 15.jpeg", alt: "Clean Water Access", title: "Water Recovery" },
  { src: "/images/SANIPEPLA 17.jpeg", alt: "Model Development", title: "Prototyping" },
  { src: "/images/SANIPEPLA 18.jpeg", alt: "Scaling the Impact", title: "Scaling Up" },
  { src: "/images/SANIPEPLA 19.jpeg", alt: "User Dignity", title: "Dignity at Heart" },
  { src: "/images/SANIPEPLA 21.jpeg", alt: "Future Visions", title: "Global Vision" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-spacing bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none select-none">
        <ImageIcon className="w-[800px] h-[800px] absolute -top-4 -right-4 grayscale" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-sanipepla-mauve/10 text-sanipepla-mauve mb-6 shadow-sm">
            <Camera className="w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Sanipepla in <span className="text-sanipepla-indigo underline decoration-sanipepla-mauve/20 decoration-8 underline-offset-[-2px]">Action</span>
          </h2>
          <p className="mt-6 text-xl text-slate-500 font-light leading-relaxed">
            A glimpse into our journey of transforming sanitation systems and improving lives through sustainable innovation.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 max-w-7xl mx-auto">
          {galleryImages.map((image, i) => (
            <div 
              key={i} 
              className="break-inside-avoid relative group rounded-[2rem] overflow-hidden shadow-xl hover:shadow-[0_32px_64px_-16px_rgba(206,126,175,0.2)] transition-all duration-700 bg-white border-4 border-white"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-sanipepla-indigo/90 via-sanipepla-indigo/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-4 h-4 text-sanipepla-mauve fill-current" />
                    <p className="text-xs font-bold text-white uppercase tracking-widest opacity-80">Impact Story</p>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-1">
                    {image.title}
                  </h4>
                  <p className="text-sm text-white/70 font-medium">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Support Call to Action */}
        <div className="mt-20 text-center animate-fade-in">
          <p className="text-slate-900 font-bold text-lg inline-flex items-center gap-2">
            Want to see our latest field reports?
            <a href="#about" className="text-sanipepla-mauve border-b-2 border-sanipepla-mauve/30 hover:border-sanipepla-mauve transition-all">
              Learn more about our journey.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
