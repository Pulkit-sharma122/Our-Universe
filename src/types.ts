export interface MemoryItem {
  id: string;
  image: string;
  caption: string;
  title?: string;
  photoNumber?: number;
  fileName?: string;
  category?: string;
  date?: string;
  location?: string;
  description?: string;
  chapterId: string;
  isSpecialHighlight?: boolean;
}

export interface Chapter {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'Sparkles' | 'Plane' | 'Coffee' | 'Heart' | 'Smile' | 'Gift' | 'Music' | 'Compass';
  description: string;
  memories: MemoryItem[];
}

export interface TimelineMilestone {
  id: string;
  era: string; // e.g. "THE BEGINNING", "THE FIRST DATE", "THE SPARK"
  title: string;
  date: string;
  location?: string;
  story: string;
  quote?: string;
  image?: string;
}

export interface SongItem {
  id: string;
  title: string;
  artist: string;
  note: string;
  year?: string;
  albumArt?: string;
  link?: string;
}

export interface FutureDreamItem {
  id: string;
  category: 'Travel' | 'Places to Visit' | 'Experience' | 'Things to Experience' | 'Home & Life' | 'Future Plans' | 'Little Moments' | 'Dreams & Goals' | string;
  title: string;
  description: string;
  target?: string;
  icon?: string;
}

export interface CoupleConfig {
  partner1: string;
  nickname1: string;
  partner2: string;
  nickname2: string;
  currentCity: string;
  relationshipStartDate: string; // ISO string: 'YYYY-MM-DDTHH:mm:ss'
  tagline: string;
  introTitle: string;
  introSubtitle: string;
  
  timeline: TimelineMilestone[];
  chapters: Chapter[];
  loveReasons: string[];
  soundtrack: SongItem[];
  futureDreams: FutureDreamItem[];
  
  secretEgg: {
    clickTargetCount: number;
    hintText: string;
    discoveryPrompt: string;
    title: string;
    subtitle: string;
    letterDate: string;
    letterGreeting: string;
    letterBody: string[];
    letterClosing: string;
    senderSign: string;
  };
}
