import React from 'react';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';

interface FooterProps {
  partner1: string;
  partner2: string;
  onReplayIntro: () => void;
}

export const Footer: React.FC<FooterProps> = ({ partner1, partner2, onReplayIntro }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#c5a059]/20 bg-[#08030c] py-14 sm:py-16 px-4 sm:px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtle decorative crest */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#c5a059]/50" />
          <Sparkles className="w-4 h-4 text-[#dfbe76]" />
          <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#c5a059]/50" />
        </div>

        {/* Minimal Footer Quote & Tagline */}
        <p className="font-serif text-2xl sm:text-3xl text-[#fcf8ec] tracking-wide mb-3">
          {partner1} & {partner2}
        </p>

        {/* Requested text: "Made with ♥ for us." */}
        <p className="flex items-center justify-center gap-1.5 font-cinzel text-xs tracking-[0.25em] text-[#d5c3aa]/80 uppercase">
          <span>Made with</span>
          <Heart className="w-3.5 h-3.5 text-[#c84b4b] fill-[#c84b4b] inline-block mx-0.5 animate-pulse" />
          <span>for us.</span>
        </p>

        <p className="text-[11px] text-[#c5a059]/60 font-sans mt-3">
          Our private sanctuary in the digital cosmos • Forever & Always
        </p>

        {/* Action links */}
        <div className="mt-8 flex items-center gap-4 text-xs font-cinzel text-[#d5c3aa]/70 tracking-widest uppercase">
          <button
            onClick={onReplayIntro}
            className="hover:text-[#dfbe76] transition-colors cursor-pointer"
          >
            Replay Intro
          </button>
          <span>•</span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-[#dfbe76] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
