import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Compass } from 'lucide-react';

interface IntroScreenProps {
  partner1: string;
  partner2: string;
  onEnter: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({
  partner1,
  partner2,
  onEnter
}) => {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    // Step 0: Initial fade in "Our little universe"
    const timer1 = setTimeout(() => {
      setStep(1); // Show names "[NAME 1] & [NAME 2]"
    }, 1200);

    // Step 2: Show "Enter" prompt button
    const timer2 = setTimeout(() => {
      setStep(2);
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <motion.div
      id="intro-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d0614] px-6 text-center select-none"
    >
      {/* Background vignette & ambient glow */}
      <div className="absolute inset-0 bg-radial from-[#2d123d]/40 via-[#13071c]/90 to-[#09030e] pointer-events-none" />
      
      {/* Delicate antique gold star medallion in background */}
      <div className="absolute w-80 h-80 rounded-full border border-[#c5a059]/10 animate-pulse pointer-events-none flex items-center justify-center">
        <div className="w-64 h-64 rounded-full border border-dashed border-[#c5a059]/15" />
      </div>

      <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
        {/* Step 0: "Our little universe" */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#c5a059]/60" />
          <span className="font-cinzel text-xs md:text-sm tracking-[0.35em] text-[#dfbe76]/80 uppercase flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#dfbe76]" />
            Our little universe
            <Sparkles className="w-3.5 h-3.5 text-[#dfbe76]" />
          </span>
          <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#c5a059]/60" />
        </motion.div>

        {/* Step 1: Names */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="my-4"
            >
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#fcf6e8] tracking-wider leading-tight">
                <span>{partner1}</span>
                <span className="font-script text-3xl sm:text-4xl text-[#dfbe76] mx-3 md:mx-4 inline-block font-normal">
                  &
                </span>
                <span>{partner2}</span>
              </h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 2: Enter Button & Flourish */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-10 flex flex-col items-center gap-4"
            >
              <p className="text-[#d5c3aa]/70 font-serif italic text-base md:text-lg mb-2">
                "Where our stories are written in starlight."
              </p>

              <button
                id="enter-universe-btn"
                onClick={onEnter}
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#2a1338] via-[#3d1852] to-[#2a1338] border border-[#c5a059]/50 text-[#f5ebd9] font-cinzel text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:border-[#dfbe76] hover:shadow-[0_0_25px_rgba(223,190,118,0.3)] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#dfbe76] transition-transform duration-500 group-hover:rotate-45" />
                <span>Enter Our World</span>
              </button>

              <span className="text-[11px] text-[#c5a059]/50 tracking-widest font-sans uppercase">
                Click anywhere to begin
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Direct click-to-skip anywhere */}
      <button
        type="button"
        aria-label="Skip to main content"
        onClick={onEnter}
        className="absolute inset-0 z-0 bg-transparent border-0 cursor-pointer w-full h-full"
      />
    </motion.div>
  );
};
