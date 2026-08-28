import React from 'react';
import { motion } from 'motion/react';
import { TimelineMilestone } from '../types';
import { MapPin, Sparkles, Quote, Calendar } from 'lucide-react';

interface StoryTimelineProps {
  milestones: TimelineMilestone[];
}

export const StoryTimeline: React.FC<StoryTimelineProps> = ({ milestones }) => {
  return (
    <section id="story" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-[#c5a059]/60" />
            <span className="font-cinzel text-xs tracking-[0.3em] text-[#dfbe76] uppercase">
              Chapters of Us
            </span>
            <span className="h-[1px] w-8 bg-[#c5a059]/60" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#fcf8ec] tracking-wide">
            Our Story
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#d5c3aa]/80 font-serif italic max-w-xl mx-auto">
            "The moments, quiet and grand, that turned two separate paths into one shared journey."
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical central filigree line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 md:-translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#c5a059]/40 to-transparent" />

          <div className="space-y-12 sm:space-y-20">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Medallion Marker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border border-[#dfbe76] bg-[#220d30] flex items-center justify-center shadow-[0_0_15px_rgba(223,190,118,0.3)]">
                      <Sparkles className="w-3.5 h-3.5 text-[#dfbe76]" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? 'md:pl-10 lg:pl-12' : 'md:pr-10 lg:pr-12'
                    } w-full`}
                  >
                    <div className="card-frame rounded-2xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group">
                      {/* Era Tag & Date */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="font-cinzel text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#dfbe76] uppercase px-2.5 py-1 rounded bg-[#2c133a] border border-[#c5a059]/30">
                          {milestone.era}
                        </span>

                        <div className="flex items-center gap-1.5 text-xs text-[#d5c3aa]/70 font-sans">
                          <Calendar className="w-3.5 h-3.5 text-[#dfbe76]/70" />
                          <span>{milestone.date}</span>
                        </div>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#fcf8ec] tracking-wide mt-2 mb-2 group-hover:text-[#dfbe76] transition-colors">
                        {milestone.title}
                      </h3>

                      {/* Optional Location */}
                      {milestone.location && (
                        <div className="flex items-center gap-1.5 text-xs text-[#d5c3aa]/60 mb-4 font-sans">
                          <MapPin className="w-3.5 h-3.5 text-[#c84b4b]" />
                          <span>{milestone.location}</span>
                        </div>
                      )}

                      {/* Story Text */}
                      <p className="text-sm sm:text-base text-[#e2d6c3]/90 leading-relaxed font-sans font-light">
                        {milestone.story}
                      </p>

                      {/* Optional Quote */}
                      {milestone.quote && (
                        <div className="mt-4 pt-4 border-t border-[#c5a059]/15 flex items-start gap-2.5">
                          <Quote className="w-4 h-4 text-[#dfbe76]/60 shrink-0 mt-0.5" />
                          <p className="font-serif italic text-sm sm:text-base text-[#dfbe76]/90 leading-normal">
                            "{milestone.quote}"
                          </p>
                        </div>
                      )}

                      {/* Optional Image */}
                      {milestone.image && (
                        <div className="mt-5 overflow-hidden rounded-xl border border-[#c5a059]/20 aspect-video relative group-hover:border-[#dfbe76]/40 transition-all">
                          <img
                            src={milestone.image}
                            alt={milestone.title}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              e.currentTarget.src = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop";
                            }}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0714]/60 via-transparent to-transparent pointer-events-none" />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
