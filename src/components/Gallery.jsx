import React from "react";
import { Camera } from "lucide-react";

const galleryImages = [
  { src: "/images/SANIPEPLA 1.jpeg", alt: "Sanipepla Mobile Unit Interior" },
  { src: "/images/SANIPEPLA 2.jpeg", alt: "Sanipepla Exterior Innovation" },
  { src: "/images/SANIPEPLA 5.jpeg", alt: "Community Engagement" },
  { src: "/images/SANIPEPLA 7.jpeg", alt: "Sanitation Technology" },
  { src: "/images/SANIPEPLA 12.jpeg", alt: "Sustainable Solutions" },
  { src: "/images/SANIPEPLA 15.jpeg", alt: "Clean Water Access" },
  { src: "/images/SANIPEPLA 17.jpeg", alt: "Model Development" },
  { src: "/images/SANIPEPLA 18.jpeg", alt: "Scaling the Impact" },
  { src: "/images/SANIPEPLA 19.jpeg", alt: "User Dignity" },
  { src: "/images/SANIPEPLA 21.jpeg", alt: "Future Visions" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-spacing bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-sanipepla-mauve/10 text-sanipepla-mauve mb-6 shadow-sm">
            <Camera className="w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Gallery
          </h2>
          <div className="w-20 h-1.5 bg-sanipepla-mauve rounded-full mx-auto mt-6" />
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
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
