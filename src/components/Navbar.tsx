import React from 'react';
import { Sparkles, Moon, RotateCcw } from 'lucide-react';

interface NavbarProps {
  partner1: string;
  partner2: string;
  onSecretClick: () => void;
  secretClickCount: number;
  onReplayIntro: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  partner1,
  partner2,
  onSecretClick,
  secretClickCount,
  onReplayIntro
}) => {
  const p1Initial = partner1.charAt(0).toUpperCase();
  const p2Initial = partner2.charAt(0).toUpperCase();

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Memories', href: '#memories' },
    { name: 'Soundtrack', href: '#soundtrack' },
    { name: 'Reasons', href: '#reasons' },
    { name: 'Our Future', href: '#someday' },
  ];

  return (
    <header
      id="main-navbar"
      className="fixed top-0 left-0 right-0 z-40 bg-[#0e0714]/80 backdrop-blur-md border-b border-[#c5a059]/15 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Monogram brand */}
        <a
          href="#home"
          id="nav-monogram"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#c5a059]/40 bg-[#200d2d] flex items-center justify-center shadow-[0_0_12px_rgba(197,160,89,0.15)] group-hover:border-[#dfbe76] group-hover:shadow-[0_0_16px_rgba(223,190,118,0.3)] transition-all">
            <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-wider text-[#dfbe76]">
              {p1Initial}&{p2Initial}
            </span>
          </div>
          <span className="font-serif text-lg sm:text-xl text-[#f5ebd9] tracking-wide group-hover:text-[#dfbe76] transition-colors hidden xs:inline-block">
            {partner1} & {partner2}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase font-cinzel tracking-[0.2em] text-[#d5c3aa]/80 hover:text-[#dfbe76] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#dfbe76] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls & Secret Egg */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Subtle replay intro button */}
          <button
            id="replay-intro-btn"
            onClick={onReplayIntro}
            title="Replay opening intro"
            className="p-2 rounded-full text-[#c5a059]/70 hover:text-[#dfbe76] hover:bg-[#2a1338]/60 transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Hidden Easter Egg Trigger */}
          <button
            id="celestial-easter-egg-btn"
            onClick={onSecretClick}
            title="A silent celestial marker..."
            className="relative p-2 rounded-full text-[#c5a059]/60 hover:text-[#dfbe76] hover:bg-[#2a1338]/60 transition-all cursor-pointer group"
          >
            <Moon className="w-4 h-4 transition-transform group-hover:rotate-12 text-[#dfbe76]" />
            {secretClickCount > 0 && secretClickCount < 5 && (
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#801c36] text-[9px] font-mono text-[#fbeeee] rounded-full flex items-center justify-center animate-ping">
                {secretClickCount}
              </span>
            )}
          </button>

          {/* Mobile direct scroll anchor */}
          <a
            href="#memories"
            id="nav-mobile-memories-btn"
            className="md:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2a1338] border border-[#c5a059]/30 text-[#f5ebd9] text-[11px] font-cinzel tracking-wider uppercase"
          >
            <Sparkles className="w-3 h-3 text-[#dfbe76]" />
            Archive
          </a>
        </div>
      </div>
    </header>
  );
};
