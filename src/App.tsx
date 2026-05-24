import React from 'react';
import { Hero } from './components/Hero';
import { FirstPhoto } from './components/FirstPhoto';
import { StoryTimeline } from './components/StoryTimeline';
import { Gallery } from './components/Gallery';
import { LoveLetter } from './components/LoveLetter';
import { AudioPlayer } from './components/AudioPlayer';

export default function App() {
  return (
    <div className="min-h-[100dvh] relative font-sans antialiased overflow-x-hidden selection:bg-rose-200 selection:text-text-primary">
      {/* Refined ambient background using elegant pastel tones */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-pastel-beige via-pastel-pink to-pastel-beige opacity-80" />
      
      <AudioPlayer />

      <main className="max-w-md mx-auto w-full shadow-2xl shadow-rose-100/10 bg-white/40 backdrop-blur-md min-h-[100dvh]">
        <Hero />
        <FirstPhoto />
        <StoryTimeline />
        <Gallery />
        <LoveLetter />
      </main>
    </div>
  );
}
