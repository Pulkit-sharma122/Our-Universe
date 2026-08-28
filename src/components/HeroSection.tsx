import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  partner1: string;
  partner2: string;
  startDate: string;
  tagline: string;
}

interface TimePassed {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  partner1,
  partner2,
  startDate,
  tagline
}) => {
  const [timePassed, setTimePassed] = useState<TimePassed>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(startDate).getTime();
      const now = new Date().getTime();
      const difference = Math.max(0, now - start);

      const seconds = Math.floor((difference / 1000) % 60);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));

      setTimePassed({
        days,
        hours,
        minutes,
        seconds,
        totalDays: days
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  // Formatted date string for subtitle (e.g. "April 18, 2023")
  const formattedStartDate = (() => {
    try {
      const d = new Date(startDate);
      return d.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    } catch {
      return startDate;
    }
  })();

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16 text-center"
    >
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtle decorative crest */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-4 sm:mb-6"
        >
          <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#c5a059]/60" />
          <span className="font-cinzel text-xs sm:text-sm tracking-[0.35em] text-[#dfbe76]/90 uppercase flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#dfbe76]" />
            Our Little Universe
            <Sparkles className="w-3.5 h-3.5 text-[#dfbe76]" />
          </span>
          <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#c5a059]/60" />
        </motion.div>

        {/* Couple Names */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#fcf7ee] tracking-wide my-2 leading-[1.1]"
        >
          <span className="inline-block hover:text-[#dfbe76] transition-colors">{partner1}</span>
          <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#dfbe76] mx-3 sm:mx-5 inline-block font-normal">
            &
          </span>
          <span className="inline-block hover:text-[#dfbe76] transition-colors">{partner2}</span>
        </motion.h1>

        {/* Romantic Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#dcd0bd]/85 font-serif italic max-w-2xl px-4 leading-relaxed"
        >
          "{tagline}"
        </motion.p>

        {/* Dynamic Relationship Counter Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 sm:mt-12 w-full max-w-2xl"
        >
          <div className="card-frame rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
            {/* Subtle corner decorations */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#c5a059]/40" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#c5a059]/40" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#c5a059]/40" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#c5a059]/40" />

            {/* Header label */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="w-3.5 h-3.5 text-[#c84b4b] fill-[#c84b4b]/40" />
              <span className="font-cinzel text-xs tracking-[0.25em] text-[#dfbe76] uppercase">
                Together for
              </span>
              <Heart className="w-3.5 h-3.5 text-[#c84b4b] fill-[#c84b4b]/40" />
            </div>

            {/* Time units grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-3">
              {/* Days */}
              <div className="bg-[#1b0c26]/80 rounded-xl p-3 sm:p-4 border border-[#c5a059]/15 flex flex-col items-center">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#fcf8ec] gold-glow">
                  {timePassed.days.toLocaleString()}
                </span>
                <span className="font-cinzel text-[10px] sm:text-xs tracking-widest text-[#d5c3aa]/70 uppercase mt-1">
                  Days
                </span>
              </div>

              {/* Hours */}
              <div className="bg-[#1b0c26]/80 rounded-xl p-3 sm:p-4 border border-[#c5a059]/15 flex flex-col items-center">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#fcf8ec] gold-glow">
                  {String(timePassed.hours).padStart(2, '0')}
                </span>
                <span className="font-cinzel text-[10px] sm:text-xs tracking-widest text-[#d5c3aa]/70 uppercase mt-1">
                  Hours
                </span>
              </div>

              {/* Minutes */}
              <div className="bg-[#1b0c26]/80 rounded-xl p-3 sm:p-4 border border-[#c5a059]/15 flex flex-col items-center">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#fcf8ec] gold-glow">
                  {String(timePassed.minutes).padStart(2, '0')}
                </span>
                <span className="font-cinzel text-[10px] sm:text-xs tracking-widest text-[#d5c3aa]/70 uppercase mt-1">
                  Minutes
                </span>
              </div>

              {/* Seconds */}
              <div className="bg-[#1b0c26]/80 rounded-xl p-3 sm:p-4 border border-[#c5a059]/15 flex flex-col items-center">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#dfbe76] gold-glow">
                  {String(timePassed.seconds).padStart(2, '0')}
                </span>
                <span className="font-cinzel text-[10px] sm:text-xs tracking-widest text-[#dfbe76]/70 uppercase mt-1">
                  Seconds
                </span>
              </div>
            </div>

            {/* Start date footnote */}
            <div className="mt-5 text-center">
              <span className="text-xs font-serif text-[#d5c3aa]/60 italic">
                Ever since {formattedStartDate} • And every precious second to come
              </span>
            </div>
          </div>
        </motion.div>

        {/* "ENTER OUR WORLD" Action button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 sm:mt-12 flex flex-col items-center"
        >
          <a
            href="#story"
            id="enter-world-scroll-btn"
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#2a1338] via-[#43175c] to-[#2a1338] border border-[#c5a059]/40 text-[#f5ebd9] font-cinzel text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:border-[#dfbe76] hover:shadow-[0_0_25px_rgba(223,190,118,0.25)] hover:scale-105 active:scale-95"
          >
            <span>Enter Our World</span>
            <ChevronDown className="w-4 h-4 text-[#dfbe76] transition-transform duration-300 group-hover:translate-y-0.5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
