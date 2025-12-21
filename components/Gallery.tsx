
import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const images = [
    { src: 'https://picsum.photos/600/400?random=11', span: 'col-span-2 row-span-2' },
    { src: 'https://picsum.photos/600/600?random=12', span: 'col-span-1 row-span-1' },
    { src: 'https://picsum.photos/400/600?random=13', span: 'col-span-1 row-span-2' },
    { src: 'https://picsum.photos/600/400?random=14', span: 'col-span-1 row-span-1' },
    { src: 'https://picsum.photos/600/400?random=15', span: 'col-span-2 row-span-1' },
  ];

  return (
    <section id="gallery" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-outfit font-bold text-white mb-2">Moments of Impact</h2>
            <p className="text-acm-offwhite/50">Glimpses into our workshops and community meetups.</p>
          </div>
          <button className="text-acm-gold font-bold flex items-center gap-2 hover:gap-4 transition-all">
            VIEW FULL GALLERY &rarr;
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${img.span} relative overflow-hidden rounded-3xl group`}
            >
              <img 
                src={img.src} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Event memory" 
              />
              <div className="absolute inset-0 bg-acm-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold tracking-widest uppercase text-sm">Event #0{i+1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
