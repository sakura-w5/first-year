import React from 'react';
import { motion } from 'motion/react';
import { appData } from '../data';
import { Image as ImageIcon } from 'lucide-react';

export const Gallery: React.FC = () => {
  return (
    <div className="py-16 px-4 max-w-md mx-auto mb-8 relative">
      {/* Decorative backdrop */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-[2.5rem] shadow-xl shadow-rose-100/10 border border-white/60 -z-10" />
      
      <div className="text-center mb-12 pt-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
           whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ type: "spring", stiffness: 100, damping: 15 }}
           className="inline-flex items-center justify-center w-14 h-14 bg-pastel-pink rounded-full mb-5 shadow-sm border-[3px] border-white"
        >
          <ImageIcon className="w-6 h-6 text-rose-400" />
        </motion.div>
        <motion.h2 
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-3xl font-display text-text-primary mb-2 drop-shadow-sm"
        >
          {appData.galleryTitle}
        </motion.h2>
      </div>

      <div className="columns-2 gap-3 px-3 space-y-3">
        {appData.gallery.map((url, index) => {
          // Add some dynamic heights using inline styles for masonry feel
          const heights = ['h-32', 'h-48', 'h-40', 'h-56', 'h-36', 'h-44'];
          const randomHeight = heights[index % heights.length];
          return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: index * 0.05 }}
            className={`relative rounded-3xl overflow-hidden shadow-sm border border-black/5 ${randomHeight} inline-block w-full`}
          >
            <img 
              src={url} 
              alt={`Gallery image ${index + 1}`} 
              className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
              loading="lazy"
            />
          </motion.div>
        )})}
      </div>
    </div>
  );
};
