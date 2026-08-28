import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Chapter, MemoryItem } from '../types';
import { X, Calendar, MapPin, ZoomIn, ChevronLeft, ChevronRight, Sparkles, Star } from 'lucide-react';

interface PhotoGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentChapter: Chapter | null;
  allChapters: Chapter[];
  onSwitchChapter: (chapter: Chapter) => void;
}

export const PhotoGalleryModal: React.FC<PhotoGalleryModalProps> = ({
  isOpen,
  onClose,
  currentChapter,
  allChapters,
  onSwitchChapter
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<MemoryItem | null>(null);

  // Prevent background scrolling while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSelectedPhoto(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedPhoto) {
          setSelectedPhoto(null);
        } else if (isOpen) {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedPhoto, onClose]);

  if (!isOpen || !currentChapter) return null;

  // Rotation angles for vintage Polaroid scrapbook feel
  const rotations = [-2, 1.5, -1, 2, -1.8, 1.2, -2.2, 1.7];
  const fallbackImage = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop";

  const currentPhotoIndex = selectedPhoto
    ? currentChapter.memories.findIndex((m) => m.id === selectedPhoto.id)
    : -1;

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentPhotoIndex !== -1 && currentChapter.memories.length > 1) {
      const nextIdx = (currentPhotoIndex + 1) % currentChapter.memories.length;
      setSelectedPhoto(currentChapter.memories[nextIdx]);
    }
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentPhotoIndex !== -1 && currentChapter.memories.length > 1) {
      const prevIdx =
        (currentPhotoIndex - 1 + currentChapter.memories.length) %
        currentChapter.memories.length;
      setSelectedPhoto(currentChapter.memories[prevIdx]);
    }
  };

  return (
    <AnimatePresence>
      <div
        id="gallery-modal-container"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#07030a]/85 backdrop-blur-md"
        />

        {/* Main Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col bg-[#14081c] border border-[#c5a059]/30 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#c5a059]/20 bg-[#1b0a26]/90 shrink-0">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#dfbe76]" />
                <span className="font-cinzel text-xs tracking-[0.25em] text-[#dfbe76] uppercase">
                  Memory Chapter
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#fcf8ec] tracking-wide mt-1">
                {currentChapter.title}
              </h2>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              id="gallery-close-btn"
              aria-label="Close memory archive"
              className="p-2.5 rounded-full bg-[#270e37] border border-[#c5a059]/30 text-[#dfbe76] hover:bg-[#3d1656] hover:border-[#dfbe76] transition-all cursor-pointer shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chapter Quick Switcher Tabs */}
          <div className="px-6 py-3 bg-[#0f0516] border-b border-[#c5a059]/15 overflow-x-auto flex items-center gap-2 scrollbar-none shrink-0">
            <span className="text-[11px] font-cinzel text-[#d5c3aa]/60 uppercase tracking-wider mr-2 shrink-0">
              Jump to:
            </span>
            {allChapters.map((ch) => {
              const isSelected = ch.id === currentChapter.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => onSwitchChapter(ch)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-cinzel tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#3b154e] text-[#fcf8ec] border border-[#dfbe76] shadow-[0_0_12px_rgba(223,190,118,0.25)]'
                      : 'bg-[#1a0b23] text-[#d5c3aa]/70 border border-[#c5a059]/20 hover:border-[#c5a059]/60 hover:text-[#fcf8ec]'
                  }`}
                >
                  {ch.title} ({ch.memories.length})
                </button>
              );
            })}
          </div>

          {/* Scrollable Gallery Content Area */}
          <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-140px)]">
            {/* Chapter description banner */}
            <div className="mb-8 p-4 rounded-xl bg-[#1b0b25]/60 border border-[#c5a059]/15">
              <p className="text-sm sm:text-base text-[#d5c3aa] font-serif italic text-center">
                "{currentChapter.description}"
              </p>
            </div>

            {/* Polaroid Scrapbook Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {currentChapter.memories.map((memory, index) => {
                const rot = rotations[index % rotations.length];
                const isSpecial = memory.isSpecialHighlight;

                return (
                  <motion.div
                    key={memory.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    style={{ transform: `rotate(${rot}deg)` }}
                    className={`group relative bg-[#fdfaf2] text-[#1c120c] p-3.5 pb-6 rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-300 hover:scale-105 hover:z-20 cursor-pointer ${
                      isSpecial
                        ? 'ring-2 ring-[#dfbe76] shadow-[0_0_25px_rgba(223,190,118,0.35)]'
                        : ''
                    }`}
                    onClick={() => setSelectedPhoto(memory)}
                  >
                    {/* Washi tape visual detail at top of polaroid */}
                    <div
                      className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 ${
                        isSpecial
                          ? 'bg-[#dfbe76]/60 border-[#dfbe76]'
                          : 'bg-[#dfbe76]/30 border-[#dfbe76]/40'
                      } backdrop-blur-sm border rotate-[-1deg] shadow-sm pointer-events-none`}
                    />

                    {/* Special Highlight Badge (e.g. Mahakal Darshan) */}
                    {isSpecial && (
                      <div className="absolute top-2 right-2 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#8d1d36] text-[#fcf8ec] text-[10px] font-cinzel tracking-wider uppercase shadow-md">
                        <Star className="w-3 h-3 text-[#dfbe76] fill-[#dfbe76]" />
                        <span>Sacred Highlight</span>
                      </div>
                    )}

                    {/* Image Container */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#24131a] rounded-[2px] mb-3.5">
                      <img
                        src={memory.image}
                        alt={memory.caption}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.src = fallbackImage;
                        }}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Zoom cue badge on hover */}
                      <div className="absolute inset-0 bg-[#0e0714]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="p-2 rounded-full bg-[#1b0b25]/80 text-[#dfbe76] border border-[#dfbe76]/50">
                          <ZoomIn className="w-5 h-5" />
                        </span>
                      </div>
                    </div>

                    {/* Polaroid Handwritten Caption & Metadata */}
                    <div className="px-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="font-serif text-base sm:text-lg font-semibold text-[#2b170e] leading-snug">
                          {memory.caption || memory.title}
                        </h4>
                        {memory.photoNumber && (
                          <span className="shrink-0 text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#dfbe76]/20 text-[#6b4718] font-bold">
                            #{memory.photoNumber.toString().padStart(2, '0')}
                          </span>
                        )}
                      </div>

                      {/* Date & Location stamps */}
                      <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#715946] mb-2 font-sans">
                        {memory.date && (
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-[#9b5830]" />
                            {memory.date}
                          </span>
                        )}
                        {memory.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#9b5830]" />
                            {memory.location}
                          </span>
                        )}
                      </div>

                      {/* Short description */}
                      {memory.description && (
                        <p className="text-xs text-[#523d2f] font-sans italic line-clamp-3 leading-relaxed border-t border-[#dfbe76]/30 pt-1.5">
                          "{memory.description}"
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {currentChapter.memories.length === 0 && (
              <div className="py-16 text-center text-[#d5c3aa]/60">
                <Sparkles className="w-8 h-8 text-[#dfbe76]/40 mx-auto mb-2" />
                <p className="font-serif text-lg">No memories added to this chapter yet.</p>
                <p className="text-xs font-sans mt-1">You can easily add photos in the config file!</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Lightbox Photo Zoom Sub-modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 z-60 bg-[#060208]/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8"
            >
              <div
                className="relative max-w-4xl w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Lightbox */}
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute -top-12 right-0 p-2 rounded-full bg-[#270e37] border border-[#c5a059]/40 text-[#dfbe76] hover:bg-[#3d1656] cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Lightbox Prev / Next Nav Buttons */}
                {currentChapter.memories.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevPhoto}
                      aria-label="Previous photo"
                      className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#270e37]/90 border border-[#dfbe76]/50 text-[#dfbe76] hover:bg-[#43175c] transition-all cursor-pointer z-10"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNextPhoto}
                      aria-label="Next photo"
                      className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#270e37]/90 border border-[#dfbe76]/50 text-[#dfbe76] hover:bg-[#43175c] transition-all cursor-pointer z-10"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Big Image Frame */}
                <div className="bg-[#fdfaf2] p-4 sm:p-6 rounded-sm shadow-[0_25px_70px_rgba(0,0,0,0.9)] max-w-full">
                  <div className="flex justify-center">
                    <img
                      src={selectedPhoto.image}
                      alt={selectedPhoto.caption}
                      onError={(e) => {
                        e.currentTarget.src = fallbackImage;
                      }}
                      className="max-h-[62vh] w-auto object-contain rounded-[2px]"
                    />
                  </div>
                  <div className="mt-4 px-2 text-[#1c120c]">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-xl sm:text-2xl font-bold">
                          {selectedPhoto.caption || selectedPhoto.title}
                        </h3>
                        {selectedPhoto.photoNumber && (
                          <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#dfbe76]/25 text-[#6b4718] font-bold">
                            #{selectedPhoto.photoNumber.toString().padStart(2, '0')}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {currentPhotoIndex >= 0 && (
                          <span className="text-[11px] font-sans text-[#715946] px-2 py-0.5 rounded bg-[#ebdcc2]">
                            {currentPhotoIndex + 1} of {currentChapter.memories.length}
                          </span>
                        )}
                        {selectedPhoto.date && (
                          <span className="text-xs font-sans bg-[#dfbe76]/20 px-2.5 py-1 rounded text-[#6b4718] font-medium">
                            {selectedPhoto.date}
                          </span>
                        )}
                      </div>
                    </div>
                    {selectedPhoto.location && (
                      <p className="text-xs text-[#715946] flex items-center gap-1 mt-1 font-sans">
                        <MapPin className="w-3.5 h-3.5 text-[#8d1d36]" />
                        {selectedPhoto.location}
                      </p>
                    )}
                    {selectedPhoto.description && (
                      <p className="text-sm sm:text-base text-[#483526] font-serif italic mt-3 pt-2 border-t border-[#dfbe76]/30">
                        "{selectedPhoto.description}"
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
};
