import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';

interface LoveReasonsSectionProps {
  reasons: string[];
}

export const LoveReasonsSection: React.FC<LoveReasonsSectionProps> = ({ reasons }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isSparkling, setIsSparkling] = useState<boolean>(false);

  const handleNext = () => {
    setDirection(1);
    setIsSparkling(true);
    setCurrentIndex((prev) => (prev + 1) % reasons.length);
    setTimeout(() => setIsSparkling(false), 400);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  const handleRandom = () => {
    setDirection(1);
    setIsSparkling(true);
    let nextIndex = Math.floor(Math.random() * reasons.length);
    if (nextIndex === currentIndex && reasons.length > 1) {
      nextIndex = (currentIndex + 1) % reasons.length;
    }
    setCurrentIndex(nextIndex);
    setTimeout(() => setIsSparkling(false), 400);
  };

  const currentReason = reasons[currentIndex] || "Everything about you.";

  return (
    <section id="reasons" className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[#08030c]/40">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-[#c5a059]/60" />
            <span className="font-cinzel text-xs tracking-[0.3em] text-[#dfbe76] uppercase flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-[#c84b4b] fill-[#c84b4b]/50" />
              Endless Notes
            </span>
            <span className="h-[1px] w-8 bg-[#c5a059]/60" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#fcf8ec] tracking-wide">
            Things I Love About You
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#d5c3aa]/80 font-serif italic">
            "A small constellation of reasons why my heart chose yours."
          </p>
        </div>

        {/* Interactive Reason Card */}
        <div className="w-full relative">
          <div className="card-frame rounded-3xl p-8 sm:p-12 backdrop-blur-md relative overflow-hidden flex flex-col items-center justify-between min-h-[340px] sm:min-h-[380px]">
            {/* Subtle corner decorations */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#dfbe76]/40 rounded-tl-sm" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#dfbe76]/40 rounded-tr-sm" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#dfbe76]/40 rounded-bl-sm" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#dfbe76]/40 rounded-br-sm" />

            {/* Counter pill */}
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#270e37] border border-[#c5a059]/30 text-xs font-cinzel text-[#dfbe76] tracking-widest uppercase">
              <Sparkles className={`w-3.5 h-3.5 text-[#dfbe76] ${isSparkling ? 'animate-spin' : ''}`} />
              <span>Reason #{currentIndex + 1} of {reasons.length}</span>
            </div>

            {/* Reason Text with AnimatePresence */}
            <div className="my-8 sm:my-10 w-full flex items-center justify-center min-h-[140px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: direction * 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -direction * 15, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="px-4 sm:px-6"
                >
                  <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#fcf8ec] leading-relaxed font-normal italic">
                    "{currentReason}"
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Card Footer Controls */}
            <div className="w-full flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-[#c5a059]/15">
              {/* Prev / Next mini buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous love reason"
                  className="p-2.5 rounded-full bg-[#1b0b25] border border-[#c5a059]/20 text-[#d5c3aa]/70 hover:text-[#dfbe76] hover:border-[#dfbe76] transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next love reason"
                  className="p-2.5 rounded-full bg-[#1b0b25] border border-[#c5a059]/20 text-[#d5c3aa]/70 hover:text-[#dfbe76] hover:border-[#dfbe76] transition-all cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Main "Another one" button */}
              <button
                id="another-reason-btn"
                onClick={handleRandom}
                className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-[#321544] via-[#4d1969] to-[#321544] border border-[#dfbe76]/50 text-[#f5ebd9] font-cinzel text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:border-[#dfbe76] hover:shadow-[0_0_20px_rgba(223,190,118,0.3)] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5 text-[#dfbe76] transition-transform duration-500 group-hover:rotate-180" />
                <span>Another one</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
