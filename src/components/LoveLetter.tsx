import React from 'react';
import { motion } from 'motion/react';
import { appData } from '../data';

export const LoveLetter: React.FC = () => {
  return (
    <div className="py-20 sm:py-24 px-4 sm:px-6 max-w-md mx-auto relative overflow-hidden">
      {/* Decorative floral/soft elements */}
      <div className="absolute top-0 right-10 w-32 h-32 bg-pastel-mint rounded-full blur-[60px] opacity-60" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-pastel-pink rounded-full blur-[80px] opacity-50" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-6 sm:p-10 shadow-2xl shadow-rose-200/20 border border-white"
      >
        <h2 className="text-[2rem] font-display text-rose-400 mb-8 text-center drop-shadow-sm">
          {appData.letter.title}
        </h2>
        
        <div className="text-[15px] text-text-primary leading-[2.2] space-y-4 whitespace-pre-wrap font-sans font-medium tracking-wide">
          {appData.letter.content}
        </div>
        
        {appData.letter.signoff && (
          <div className="mt-12 text-[2rem] font-display text-rose-400 text-center drop-shadow-sm">
            {appData.letter.signoff}
          </div>
        )}
        
        <div className="mt-8 pt-6 border-t border-rose-100 flex justify-center items-center">
          <div className="w-2 h-2 rounded-full bg-rose-200 opacity-50" />
          <div className="w-1.5 h-1.5 rounded-full bg-rose-200 opacity-50 mx-2" />
          <div className="w-2 h-2 rounded-full bg-rose-200 opacity-50" />
        </div>
      </motion.div>
    </div>
  );
};
