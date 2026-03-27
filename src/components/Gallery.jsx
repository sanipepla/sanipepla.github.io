import React from "react";

export default function Gallery() {
  const images = Array.from({ length: 21 }, (_, i) => `/images/SANIPEPLA ${i + 1}.jpeg`);

  return (
    <section id="gallery" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Sanipepla in Action</h2>
          <p className="text-slate-400">Capturing the progress, impact, and innovation of our mobile sanitation solutions.</p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {images.map((src, i) => (
            <div key={i} className="break-inside-avoid overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img 
                src={src} 
                alt={`Sanipepla Action ${i + 1}`} 
                className="w-full h-auto object-cover hover:scale-[1.05] transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
