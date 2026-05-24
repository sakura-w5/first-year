import React from 'react';
import { motion } from 'motion/react';
import { appData } from '../data';
import { CalendarHeart } from 'lucide-react';

const getThemeColor = (theme: string) => {
  switch(theme) {
    case 'pink': return 'bg-pastel-pink text-rose-400 border-rose-100';
    case 'blue': return 'bg-pastel-blue text-sky-400 border-sky-100';
    case 'mint': return 'bg-pastel-mint text-teal-400 border-teal-100';
    case 'purple': return 'bg-pastel-purple text-purple-400 border-purple-100';
    default: return 'bg-white text-gray-400 border-gray-100';
  }
};

export const StoryTimeline: React.FC = () => {
  return (
    <div className="py-16 px-6 max-w-md mx-auto relative">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="text-3xl font-display text-text-primary mb-2 flex flex-col gap-2"
        >
          <span className="opacity-90">这一年</span>
          <span className="text-[1.35rem] tracking-wide mt-1">我们一起去过很多地方</span>
        </motion.h2>
      </div>

      <div className="relative border-l-[1.5px] border-rose-200/50 ml-4 md:ml-6 space-y-16">
        {appData.timeline.map((item, index) => {
          const rawImages = (item as any).images || (item as any).image || [];
          const images = Array.isArray(rawImages) ? rawImages : [rawImages];
          return (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: index * 0.1 }}
            className="relative pl-8"
          >
            {/* Timeline dot */}
            <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border-4 shadow-sm flex items-center justify-center ${getThemeColor(item.theme)}`}>
              <CalendarHeart className="w-3.5 h-3.5" />
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-[1.5rem] p-5 shadow-xl shadow-rose-100/20 border border-white/60 hover:bg-white/80 transition-colors duration-300">
              <h3 className="text-lg font-bold text-text-primary mb-2 tracking-wide">{item.title}</h3>
              <p className="text-[13px] text-text-secondary leading-relaxed mb-5 font-light">
                {item.description}
              </p>
              <div className={`grid gap-3 ${images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {images.map((img: string, i: number) => (
                  <div key={i} className={`rounded-2xl overflow-hidden shadow-sm border border-black/5 ${images.length > 1 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                    <img 
                      src={img} 
                      alt={`${item.title} ${i + 1}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" 
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )})}
      </div>

      <div className="text-center mt-28 mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="text-3xl font-display text-text-primary mb-2 flex flex-col gap-2"
        >
          <span className="text-[1.35rem] tracking-wide opacity-90">也一起做过很多事</span>
        </motion.h2>
      </div>

      <div className="relative border-l-[1.5px] border-rose-200/50 ml-4 md:ml-6 space-y-16">
        {appData.activities?.map((item, index) => {
          const rawImages = (item as any).images || (item as any).image || [];
          const images = Array.isArray(rawImages) ? rawImages : [rawImages];
          return (
          <motion.div 
            key={`act-${item.id}`}
            initial={{ opacity: 0, x: -30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: index * 0.1 }}
            className="relative pl-8"
          >
            {/* Timeline dot */}
            <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border-4 shadow-sm flex items-center justify-center ${getThemeColor(item.theme)}`}>
              <CalendarHeart className="w-3.5 h-3.5" />
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-[1.5rem] p-5 shadow-xl shadow-rose-100/20 border border-white/60 hover:bg-white/80 transition-colors duration-300">
              <h3 className="text-lg font-bold text-text-primary mb-2 tracking-wide">{item.title}</h3>
              <p className="text-[13px] text-text-secondary leading-relaxed mb-5 font-light">
                {item.description}
              </p>
              {images.length > 0 && (
                <div className={`grid gap-3 ${images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  {images.map((img: string, i: number) => (
                    <div key={i} className={`rounded-2xl overflow-hidden shadow-sm border border-black/5 ${images.length > 1 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                      <img 
                        src={img} 
                        alt={`${item.title} ${i + 1}`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" 
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )})}
      </div>
    </div>
  );
};
