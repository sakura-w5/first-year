import React from 'react';
import { motion } from 'motion/react';
import { appData } from '../data';

export const FirstPhoto: React.FC = () => {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="absolute top-10 right-[-10%] w-48 h-48 bg-pastel-mint rounded-full blur-[80px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-[-10%] w-64 h-64 bg-pastel-purple rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="z-10 w-full max-w-sm"
      >
        <div className="text-center mb-10">
          <h2 className="text-[2.25rem] font-display text-text-primary mb-3 drop-shadow-sm">
            {appData.firstPhoto.title}
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed px-6 tracking-wide font-light">
            {appData.firstPhoto.description}
          </p>
        </div>

        <motion.div 
          whileHover={{ rotate: 0, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative p-4 pb-14 bg-[#FCFBFA] rounded-sm shadow-2xl shadow-rose-200/30 rotate-2 cursor-pointer border border-black/5"
        >
          <div className="overflow-hidden aspect-square rounded-sm border border-black/5">
            <img
              src={appData.firstPhoto.image}
              alt="Our First Photo"
              className="w-full h-full object-cover filter contrast-[1.05]"
              loading="lazy"
            />
          </div>
          
          <div className="absolute bottom-4 left-0 w-full text-center font-sans text-xs text-text-secondary/70 tracking-widest uppercase">
            Memories
          </div>
          
          {/* Elegant Tape */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/50 backdrop-blur-md border border-white/80 shadow-sm -rotate-3 rounded-sm opacity-90" />
        </motion.div>
      </motion.div>
    </div>
  );
};
