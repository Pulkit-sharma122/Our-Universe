import React from 'react';
import { motion } from 'motion/react';
import { Chapter } from '../types';
import {
  Sparkles,
  Plane,
  Coffee,
  Heart,
  Smile,
  Gift,
  Music,
  Compass,
  Images
} from 'lucide-react';

interface MemoryArchiveProps {
  chapters: Chapter[];
  onSelectChapter: (chapter: Chapter) => void;
  onOpenAllMemories: () => void;
  totalMemoriesCount: number;
}

// Icon mapper for simple line art
const IconMap: Record<Chapter['iconName'], React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Plane,
  Coffee,
  Heart,
  Smile,
  Gift,
  Music,
  Compass,
};

export const MemoryArchive: React.FC<MemoryArchiveProps> = ({
  chapters,
  onSelectChapter,
  onOpenAllMemories,
  totalMemoriesCount
}) => {
  return (
    <section id="memories" className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[#09040d]/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-[#c5a059]/60" />
            <span className="font-cinzel text-xs tracking-[0.3em] text-[#dfbe76] uppercase">
              The Archive
            </span>
            <span className="h-[1px] w-8 bg-[#c5a059]/60" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#fcf8ec] tracking-wide">
            Our Memories
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-[#dfbe76] font-serif italic">
            Choose a chapter.
          </p>
          <p className="mt-2 text-sm text-[#d5c3aa]/70 font-sans max-w-md mx-auto">
            Click any circular medallion to open the scrapbook and explore photographs from that season of our life.
          </p>

          {/* Quick "View All" Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={onOpenAllMemories}
              id="view-all-memories-btn"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1e0d29] border border-[#c5a059]/30 text-[#f5ebd9] font-cinzel text-xs tracking-widest uppercase hover:border-[#dfbe76] hover:bg-[#2e133d] transition-all cursor-pointer shadow-sm"
            >
              <Images className="w-3.5 h-3.5 text-[#dfbe76]" />
              <span>Browse All {totalMemoriesCount} Memories</span>
            </button>
          </div>
        </div>

        {/* Circular Chapter Medallions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {chapters.map((chapter, index) => {
            const IconComponent = IconMap[chapter.iconName] || Sparkles;

            return (
              <motion.button
                key={chapter.id}
                id={`chapter-medallion-${chapter.id}`}
                onClick={() => onSelectChapter(chapter)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#1c0c27]/80 to-[#120719]/90 border border-[#c5a059]/20 hover:border-[#dfbe76]/70 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_rgba(223,190,118,0.15)] cursor-pointer"
              >
                {/* Outer decorative ring */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 border border-dashed border-[#c5a059]/30 group-hover:border-[#dfbe76] transition-all duration-500 flex items-center justify-center mb-4">
                  {/* Inner medallion circle */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#2f1340] via-[#200d2b] to-[#12061a] border border-[#c5a059]/40 group-hover:border-[#dfbe76] flex items-center justify-center shadow-inner group-hover:shadow-[0_0_20px_rgba(223,190,118,0.3)] transition-all duration-300">
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-[#dfbe76] transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  {/* Photo count indicator badge */}
                  <span className="absolute -top-1 -right-1 px-2 py-0.5 rounded-full bg-[#3d164f] border border-[#c5a059]/40 text-[10px] font-cinzel text-[#fcf8ec] tracking-wider">
                    {chapter.memories.length}
                  </span>
                </div>

                {/* Chapter Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-[#fcf8ec] tracking-wide group-hover:text-[#dfbe76] transition-colors mb-1">
                  {chapter.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs text-[#d5c3aa]/70 font-sans line-clamp-2 px-1">
                  {chapter.subtitle}
                </p>

                {/* Open label hover cue */}
                <div className="mt-3 flex items-center gap-1 text-[11px] font-cinzel text-[#dfbe76]/70 uppercase tracking-wider group-hover:text-[#dfbe76]">
                  <span>Open Album</span>
                  <span>&rarr;</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
