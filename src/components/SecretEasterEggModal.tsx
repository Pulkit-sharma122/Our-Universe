import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Heart, Lock, ArrowRight, CornerDownLeft } from 'lucide-react';
import { CoupleConfig } from '../types';

interface SecretEasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
  secretData: CoupleConfig['secretEgg'];
  partner1: string;
  partner2: string;
}

export const SecretEasterEggModal: React.FC<SecretEasterEggModalProps> = ({
  isOpen,
  onClose,
  secretData,
  partner1,
  partner2
}) => {
  const [hasEnteredLetter, setHasEnteredLetter] = useState<boolean>(false);

  // Reset stage whenever modal is opened/closed
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setHasEnteredLetter(false);
    } else {
      document.body.style.overflow = '';
      setHasEnteredLetter(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        id="secret-chapter-modal"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      >
        {/* Deep Plum & Starlight Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#060209]/95 backdrop-blur-xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 25 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-2xl max-h-[92vh] flex flex-col bg-[#fdfaf2] text-[#2c1810] rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.95)] border-2 border-[#dfbe76]/70 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Subtle Seal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#dfbe76]/30 bg-[#f6eee0]/90 shrink-0">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#8d1d36]" />
              <span className="font-cinzel text-xs tracking-[0.25em] text-[#8d1d36] uppercase font-semibold">
                Private Archive
              </span>
            </div>

            {/* Close / Return Button */}
            <button
              onClick={onClose}
              id="close-secret-chapter-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#eee0cb] text-[#6b4718] hover:bg-[#dfbe76] hover:text-[#1c1006] text-xs font-cinzel tracking-wider uppercase transition-colors cursor-pointer"
            >
              <span>Return to our story</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Body Content: Discovery Gate OR Full Letter */}
          <div className="p-6 sm:p-10 overflow-y-auto">
            <AnimatePresence mode="wait">
              {!hasEnteredLetter ? (
                /* Step 1: Transition Screen */
                <motion.div
                  key="discovery-screen"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center text-center py-6 sm:py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8d1d36] to-[#590f20] border-2 border-[#dfbe76] flex items-center justify-center shadow-lg mb-6">
                    <Lock className="w-7 h-7 text-[#fbeeee]" />
                  </div>

                  <span className="font-cinzel text-xs tracking-[0.3em] text-[#9b5830] uppercase mb-2">
                    Confidential & Intimate
                  </span>

                  <h3 className="font-serif text-2xl sm:text-4xl text-[#1f1008] font-normal leading-snug mb-4 max-w-lg">
                    "{secretData.discoveryPrompt || 'You found the chapter I couldn\'t put anywhere else.'}"
                  </h3>

                  <p className="font-serif italic text-base sm:text-lg text-[#614736] max-w-md mb-8 leading-relaxed">
                    A truthful, vulnerable letter written for Swati's eyes only.
                  </p>

                  <button
                    id="open-private-letter-btn"
                    onClick={() => setHasEnteredLetter(true)}
                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#8d1d36] via-[#6e1428] to-[#8d1d36] text-[#fbf6ea] border border-[#dfbe76] font-cinzel text-xs tracking-[0.25em] uppercase hover:shadow-[0_0_20px_rgba(141,29,54,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Read The Letter</span>
                    <ArrowRight className="w-4 h-4 text-[#dfbe76]" />
                  </button>
                </motion.div>
              ) : (
                /* Step 2: The Heartfelt Letter */
                <motion.div
                  key="letter-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.45 }}
                  className="relative"
                >
                  {/* Subtle Watermark Heart */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-[#dfbe76]/15 pointer-events-none flex items-center justify-center">
                    <Heart className="w-44 h-44 text-[#dfbe76]/5 fill-[#dfbe76]/5" />
                  </div>

                  {/* Letter Header */}
                  <div className="mb-6">
                    <p className="font-cinzel text-xs text-[#9b5830] tracking-[0.2em] uppercase font-semibold mb-1">
                      {secretData.title}
                    </p>
                    <p className="font-sans text-xs text-[#8c6d56] italic">
                      {secretData.letterDate}
                    </p>
                  </div>

                  {/* Letter Greeting */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1f1008] font-bold mb-6 border-b border-[#dfbe76]/30 pb-3">
                    {secretData.letterGreeting}
                  </h3>

                  {/* Letter Paragraphs */}
                  <div className="space-y-4 font-serif text-base sm:text-lg text-[#3b2316] leading-relaxed">
                    {secretData.letterBody.map((paragraph, idx) => (
                      <p key={idx} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Letter Sign-off & Seal */}
                  <div className="mt-10 pt-6 border-t border-[#dfbe76]/40 flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="font-script text-2xl sm:text-3xl text-[#842338]">
                        {secretData.letterClosing}
                      </p>
                      <p className="font-serif font-bold text-lg text-[#2a1309] mt-1">
                        {secretData.senderSign || `${partner1} (Your Bubu)`}
                      </p>
                    </div>

                    {/* Wax Seal Badge */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8d1d36] to-[#590f20] border-2 border-[#dfbe76]/80 flex items-center justify-center shadow-md">
                      <Heart className="w-6 h-6 text-[#fbeeee] fill-[#fbeeee]" />
                    </div>
                  </div>

                  {/* Bottom Return Button */}
                  <div className="mt-8 pt-4 flex justify-center">
                    <button
                      onClick={onClose}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#eee0cb] text-[#4d2d10] hover:bg-[#dfbe76] hover:text-[#1c1006] text-xs font-cinzel tracking-widest uppercase transition-all cursor-pointer"
                    >
                      <CornerDownLeft className="w-3.5 h-3.5" />
                      <span>Return to our story</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
