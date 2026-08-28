import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FutureDreamItem } from '../types';
import { Compass, Plane, Sparkles, MapPin, Star, CalendarHeart } from 'lucide-react';

interface FutureSectionProps {
  dreams: FutureDreamItem[];
}

export const FutureSection: React.FC<FutureSectionProps> = ({ dreams }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Extract unique categories dynamically from dreams list or use default set
  const rawCategories = Array.from(new Set(dreams.map((d) => d.category)));
  const categories = ['All', ...rawCategories];

  const filteredDreams =
    selectedCategory === 'All'
      ? dreams
      : dreams.filter((d) => d.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    const lower = category.toLowerCase();
    if (lower.includes('travel') || lower.includes('visit') || lower.includes('places')) {
      return <Plane className="w-3.5 h-3.5" />;
    }
    if (lower.includes('experience')) {
      return <Compass className="w-3.5 h-3.5" />;
    }
    if (lower.includes('dream')) {
      return <Star className="w-3.5 h-3.5" />;
    }
    return <CalendarHeart className="w-3.5 h-3.5" />;
  };

  return (
    <section id="someday" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-[#c5a059]/60" />
            <span className="font-cinzel text-xs tracking-[0.3em] text-[#dfbe76] uppercase flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#dfbe76]" />
              Unwritten Horizons
            </span>
            <span className="h-[1px] w-8 bg-[#c5a059]/60" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#fcf8ec] tracking-wide">
            Our Future
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#d5c3aa]/80 font-serif italic max-w-xl mx-auto">
            "The places we want to visit, the things we want to experience, and the dreams we will build together."
          </p>

          {/* Category Filter Pills */}
          {categories.length > 2 && (
            <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-cinzel tracking-wider uppercase transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#3b154e] text-[#fcf8ec] border border-[#dfbe76] shadow-[0_0_15px_rgba(223,190,118,0.25)]'
                      : 'bg-[#180922] text-[#d5c3aa]/70 border border-[#c5a059]/20 hover:border-[#c5a059]/50 hover:text-[#fcf8ec]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Future Dream Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDreams.map((dream, index) => (
            <motion.div
              key={dream.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="paper-panel rounded-2xl p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle background ring */}
              <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 w-28 h-28 rounded-full border border-[#c5a059]/10 pointer-events-none" />

              <div>
                {/* Category & Target Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#240d33] border border-[#c5a059]/30 text-[11px] font-cinzel text-[#dfbe76] uppercase tracking-wider">
                    {getCategoryIcon(dream.category)}
                    {dream.category}
                  </span>

                  {dream.target && (
                    <span className="text-[11px] font-sans text-[#d5c3aa]/65 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#c84b4b]" />
                      {dream.target}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl text-[#fcf8ec] tracking-wide mb-3 group-hover:text-[#dfbe76] transition-colors leading-snug">
                  {dream.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#d5c3aa]/85 font-sans font-light leading-relaxed">
                  {dream.description}
                </p>
              </div>

              {/* Card Footer Detail */}
              <div className="mt-6 pt-4 border-t border-[#c5a059]/15 flex items-center justify-between text-xs text-[#c5a059]/70">
                <span className="font-cinzel text-[10px] tracking-widest uppercase flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#dfbe76]" />
                  A Promise to Us
                </span>
                <span className="font-serif italic text-xs text-[#dfbe76]/70">
                  Someday soon
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
