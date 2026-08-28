import React from 'react';
import { motion } from 'motion/react';
import { SongItem } from '../types';
import { Music, ExternalLink, Sparkles } from 'lucide-react';

interface SoundtrackSectionProps {
  songs: SongItem[];
}

export const SoundtrackSection: React.FC<SoundtrackSectionProps> = ({ songs }) => {
  return (
    <section id="soundtrack" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-[#c5a059]/60" />
            <span className="font-cinzel text-xs tracking-[0.3em] text-[#dfbe76] uppercase flex items-center gap-1.5">
              <Music className="w-3.5 h-3.5 text-[#dfbe76]" />
              Melodies of Us
            </span>
            <span className="h-[1px] w-8 bg-[#c5a059]/60" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#fcf8ec] tracking-wide">
            Our Soundtrack
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#d5c3aa]/80 font-serif italic max-w-xl mx-auto">
            "The songs that played in the car with the windows down, slow danced to in the kitchen, and softly scored our quietest evenings."
          </p>
        </div>

        {/* Tasteful Songbook List */}
        <div className="space-y-6">
          {songs.map((song, index) => {
            const trackNum = String(index + 1).padStart(2, '0');

            return (
              <motion.div
                key={song.id}
                id={`song-item-${song.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="paper-panel rounded-2xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Track Number Badge */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1e0e28] border border-[#c5a059]/30 flex items-center justify-center shrink-0 group-hover:border-[#dfbe76] transition-colors shadow-inner">
                      <span className="font-cinzel text-xs sm:text-sm text-[#dfbe76] font-semibold">
                        {trackNum}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      {/* Song Title & Year */}
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-serif text-2xl sm:text-3xl text-[#fcf8ec] tracking-wide group-hover:text-[#dfbe76] transition-colors leading-snug">
                          {song.title}
                        </h3>
                        {song.year && (
                          <span className="text-[11px] font-cinzel text-[#dfbe76]/70 px-2 py-0.5 rounded bg-[#1f0d2b]/80 border border-[#c5a059]/20">
                            {song.year}
                          </span>
                        )}
                      </div>

                      {/* Artist */}
                      <p className="text-sm sm:text-base font-sans text-[#dfbe76]/90 font-medium">
                        {song.artist}
                      </p>

                      {/* Personal Romantic Note */}
                      <div className="pt-2">
                        <p className="text-sm sm:text-base text-[#d5c3aa]/90 font-serif italic leading-relaxed">
                          "{song.note}"
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Optional External Link Button */}
                  {song.link && (
                    <div className="sm:self-center shrink-0 pt-2 sm:pt-0">
                      <a
                        href={song.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#200d2b] border border-[#c5a059]/30 text-[#f5ebd9] font-cinzel text-[11px] tracking-wider uppercase hover:border-[#dfbe76] hover:text-[#dfbe76] hover:bg-[#2e133d] transition-all"
                      >
                        <span>Listen</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section bottom quote */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-serif italic text-[#d5c3aa]/60">
            <Sparkles className="w-3.5 h-3.5 text-[#dfbe76]/60" />
            <span>"Music is the language of memory."</span>
            <Sparkles className="w-3.5 h-3.5 text-[#dfbe76]/60" />
          </div>
        </div>
      </div>
    </section>
  );
};
