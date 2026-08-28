import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { COUPLE_DATA } from './config/data';
import { Chapter } from './types';
import { CosmicBackground } from './components/CosmicBackground';
import { IntroScreen } from './components/IntroScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StoryTimeline } from './components/StoryTimeline';
import { MemoryArchive } from './components/MemoryArchive';
import { PhotoGalleryModal } from './components/PhotoGalleryModal';
import { LoveReasonsSection } from './components/LoveReasonsSection';
import { SoundtrackSection } from './components/SoundtrackSection';
import { FutureSection } from './components/FutureSection';
import { SecretEasterEggModal } from './components/SecretEasterEggModal';
import { Footer } from './components/Footer';

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);
  const [secretClicks, setSecretClicks] = useState<number>(0);
  const [isSecretOpen, setIsSecretOpen] = useState<boolean>(false);

  // Calculate total count of all photos across chapters
  const totalMemories = COUPLE_DATA.chapters.reduce(
    (acc, ch) => acc + ch.memories.length,
    0
  );

  const handleOpenChapter = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setIsGalleryOpen(true);
  };

  const handleOpenAllMemories = () => {
    // Flatten all memories into a synthetic chapter
    const allChapter: Chapter = {
      id: 'all',
      title: 'All Memories',
      subtitle: 'The complete collection of our shared moments',
      iconName: 'Sparkles',
      description: 'Every photograph, road trip, late night talk, and celebration gathered in one place.',
      memories: COUPLE_DATA.chapters.flatMap((ch) => ch.memories)
    };
    setSelectedChapter(allChapter);
    setIsGalleryOpen(true);
  };

  const handleSecretClick = () => {
    const nextCount = secretClicks + 1;
    setSecretClicks(nextCount);
    if (nextCount >= COUPLE_DATA.secretEgg.clickTargetCount) {
      setIsSecretOpen(true);
      setSecretClicks(0);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0e0714] text-[#f4ecd8] selection:bg-[#c5a059]/30 selection:text-[#fff6e5]">
      {/* 1. Ambient Cosmic Background with Starfield */}
      <CosmicBackground />

      {/* 2. Intro Screen Overlay */}
      <AnimatePresence>
        {showIntro && (
          <IntroScreen
            partner1={COUPLE_DATA.partner1}
            partner2={COUPLE_DATA.partner2}
            onEnter={() => setShowIntro(false)}
          />
        )}
      </AnimatePresence>

      {/* 3. Main Website Structure */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar
          partner1={COUPLE_DATA.partner1}
          partner2={COUPLE_DATA.partner2}
          onSecretClick={handleSecretClick}
          secretClickCount={secretClicks}
          onReplayIntro={() => setShowIntro(true)}
        />

        <main className="flex-grow">
          {/* Hero & Relationship Counter */}
          <HeroSection
            partner1={COUPLE_DATA.partner1}
            partner2={COUPLE_DATA.partner2}
            startDate={COUPLE_DATA.relationshipStartDate}
            tagline={COUPLE_DATA.tagline}
          />

          {/* Story Timeline */}
          <StoryTimeline milestones={COUPLE_DATA.timeline} />

          {/* Memory Archive & Chapter Medallions */}
          <MemoryArchive
            chapters={COUPLE_DATA.chapters}
            onSelectChapter={handleOpenChapter}
            onOpenAllMemories={handleOpenAllMemories}
            totalMemoriesCount={totalMemories}
          />

          {/* Our Soundtrack */}
          <SoundtrackSection songs={COUPLE_DATA.soundtrack} />

          {/* Things I Love About You */}
          <LoveReasonsSection reasons={COUPLE_DATA.loveReasons} />

          {/* Our Future / Someday */}
          <FutureSection dreams={COUPLE_DATA.futureDreams} />
        </main>

        {/* Footer */}
        <Footer
          partner1={COUPLE_DATA.partner1}
          partner2={COUPLE_DATA.partner2}
          onReplayIntro={() => setShowIntro(true)}
        />
      </div>

      {/* Photo Gallery Scrapbook Modal */}
      <PhotoGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        currentChapter={selectedChapter}
        allChapters={COUPLE_DATA.chapters}
        onSwitchChapter={(ch) => setSelectedChapter(ch)}
      />

      {/* Hidden Romantic Easter Egg Modal */}
      <SecretEasterEggModal
        isOpen={isSecretOpen}
        onClose={() => setIsSecretOpen(false)}
        secretData={COUPLE_DATA.secretEgg}
        partner1={COUPLE_DATA.partner1}
        partner2={COUPLE_DATA.partner2}
      />
    </div>
  );
}
