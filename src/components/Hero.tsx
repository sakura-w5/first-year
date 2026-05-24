import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Heart, ChevronDown } from 'lucide-react';
import { appData } from '../data';
import { getImageUrl } from '../utils/image';

export const Hero: React.FC = () => {
  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(appData.startDate).getTime();
      const now = new Date().getTime();
      const diff = now - start;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeElapsed({ days, hours, minutes, seconds });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Decorative background blur shapes */}
      <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-pastel-pink rounded-full blur-[100px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[350px] h-[350px] bg-pastel-purple rounded-full blur-[100px] opacity-50 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 20, duration: 1 }}
        className="z-10 w-full max-w-sm"
      >
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-rose-200/40 aspect-[4/5] bg-white border-4 border-white/80 group">
          <img
            src={getImageUrl(appData.hero.coverImage)}
            alt="Cover"
            className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
          
          <div className="absolute bottom-8 left-0 w-full px-6 text-center text-white">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
              className="text-sm font-light tracking-[0.2em] mb-2 opacity-90 uppercase"
            >
              {appData.hero.subtitle}
            </motion.h2>
            <motion.h1 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8, type: "spring", stiffness: 80, damping: 15 }}
              className="text-[2.75rem] font-display tracking-wider drop-shadow-lg leading-tight"
            >
              {appData.hero.title}
            </motion.h1>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="z-10 mt-12 text-center"
      >
        <h3 className="text-[13px] text-text-secondary tracking-[0.15em] mb-5 flex items-center justify-center gap-2 font-medium">
          我们在一起 <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 animate-pulse" />
        </h3>
        <div className="flex gap-4 justify-center items-end text-text-primary px-4">
          <div className="flex flex-col items-center min-w-[3rem]">
            <span className="text-4xl font-display text-text-primary">{timeElapsed.days}</span>
            <span className="text-[10px] text-text-secondary mt-1 tracking-widest uppercase">天</span>
          </div>
          <span className="text-2xl font-light text-rose-200 pb-2">:</span>
          <div className="flex flex-col items-center min-w-[2.5rem]">
            <span className="text-3xl font-light">{timeElapsed.hours.toString().padStart(2, '0')}</span>
            <span className="text-[10px] text-text-secondary mt-1 tracking-widest uppercase">时</span>
          </div>
          <span className="text-xl font-light text-rose-200 pb-2">:</span>
          <div className="flex flex-col items-center min-w-[2.5rem]">
            <span className="text-3xl font-light">{timeElapsed.minutes.toString().padStart(2, '0')}</span>
            <span className="text-[10px] text-text-secondary mt-1 tracking-widest uppercase">分</span>
          </div>
          <span className="text-xl font-light text-rose-200 pb-2">:</span>
          <div className="flex flex-col items-center min-w-[2.5rem]">
            <span className="text-3xl font-light">{timeElapsed.seconds.toString().padStart(2, '0')}</span>
            <span className="text-[10px] text-text-secondary mt-1 tracking-widest uppercase">秒</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2, y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
        className="absolute bottom-6 z-10 text-text-secondary/50"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </div>
  );
};
