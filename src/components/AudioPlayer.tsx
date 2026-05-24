import React, { useState, useEffect, useRef } from 'react';
import { Music, Disc } from 'lucide-react';
import { appData } from '../data';

export const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Only try to play if a URL is provided
        if (appData.music.url) {
          audioRef.current.play().catch(e => console.log("Audio playback failed", e));
        }
      }
      setIsPlaying(!isPlaying);
      setHasInteracted(true);
    }
  };

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current && !isPlaying && appData.music.url) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        }).catch((e) => {
          console.log("Autoplay prevented", e);
        });
      }
    };
    
    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });
    
    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [hasInteracted, isPlaying]);

  if (!appData.music.url) return null;

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        togglePlay();
      }}
      className="fixed top-6 right-6 z-50 w-11 h-11 bg-white/50 backdrop-blur-md border border-white/60 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 group"
      title={appData.music.title}
    >
      <Disc 
        className={`w-6 h-6 transition-all duration-300 ${
          isPlaying 
            ? 'text-rose-400 [animation:spin_3s_linear_infinite]' 
            : 'text-gray-400'
        }`} 
      />
      
      {/* Tooltip to show song name on interaction */}
      <div className="absolute right-14 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm text-xs text-text-primary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {appData.music.title}
      </div>

      <audio 
        ref={audioRef} 
        src={appData.music.url} 
        loop 
        preload="auto"
      />
    </button>
  );
};
