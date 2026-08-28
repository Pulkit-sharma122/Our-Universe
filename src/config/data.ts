import { CoupleConfig } from '../types';
import { PHOTO_COLLECTION, getPhotosByChapter } from './photos';

// ========================================
// PULKIT & SWATI — PERSONAL CONTENT
// ========================================
// Centralized configuration file for Pulkit & Swati's website.
// Uses the authoritative PHOTO_COLLECTION from photos.ts as the single
// source of truth for all 74 photographs (01.jpeg - 74.jpeg).
// ========================================

export const COUPLE_DATA: CoupleConfig = {
  // --------------------------------------------------------------------------
  // 1. NAMES, NICKNAMES & HERO CONFIGURATION
  // --------------------------------------------------------------------------
  partner1: "Pulkit",
  nickname1: "Bubu",
  partner2: "Swati",
  nickname2: "Gudda",
  currentCity: "Jaipur",

  // Relationship began on December 6, 2023
  relationshipStartDate: "2023-12-06T00:00:00",

  // Header and Hero taglines
  introTitle: "Our Little Universe",
  introSubtitle: "The digital archive of Pulkit & Swati • Written in starlight & memory",
  tagline: "From NIMS classrooms to late-night Jaipur talks, every loud laugh, every journey, and every quiet promise — all in our private sanctuary.",

  // --------------------------------------------------------------------------
  // 2. THE BEGINNING — OUR STORY (MILESTONES TIMELINE)
  // --------------------------------------------------------------------------
  timeline: [
    {
      id: "the-meeting",
      era: "THE FIRST GLANCE",
      title: "Classrooms & Loud Voices",
      date: "NIMS College, Noida",
      location: "NIMS College Campus, Noida",
      story: "We first met at NIMS College in Noida, where Swati was my student. The very first thing I noticed was how much she talked — and how delightfully loud she talked! Instead of being put off by it, I found myself completely captivated by her energy.",
      quote: "She talked constantly and loudly, and right then, I knew I was in trouble.",
      image: "/photos/01.jpeg"
    },
    {
      id: "freshers-party",
      era: "THE FIRST CONVERSATION",
      title: "After the Fresher's Party",
      date: "Post Fresher's Party",
      location: "NIMS College, Noida",
      story: "Our first proper conversation happened right after the Fresher's Party. Once we actually started talking, the conversation flowed naturally without a single dull second.",
      quote: "The noise of the party faded, and it was just her voice.",
      image: "/photos/02.jpeg"
    },
    {
      id: "the-spark",
      era: "THE CONFIRMATION",
      title: "Fighting with the Junior",
      date: "NIMS Campus",
      location: "Noida",
      story: "One of the defining moments that confirmed everything for me was watching Swati fiercely fight with her junior. Seeing that feisty, fiery spark in her, my exact thought was: 'I want her.'",
      quote: "'I want her.' Simple as that.",
      image: "/photos/03.jpeg"
    },
    {
      id: "calls-and-black-dress",
      era: "THE DISTANCE & CALLS",
      title: "From Jaipur Calls to the Black Dress",
      date: "Jaipur & Video Calls",
      location: "Jaipur — Delhi",
      story: "After I moved to Jaipur, our long calls began. About a month later came our first video call — Swati was wearing a black dress, and she looked so breathtakingly attractive that I couldn't take my eyes off the screen.",
      quote: "That black dress on our first video call was unforgettable.",
      image: "/photos/06.jpeg"
    },
    {
      id: "the-proposal",
      era: "DECEMBER 6, 2023",
      title: "Animal, 'Mujhe Yaad Karogi?' & The Proposal",
      date: "December 6, 2023",
      location: "After watching Animal",
      story: "We watched the movie Animal (starring Swati's absolute favourite actor Ranbir Kapoor). Right after the movie, with my heart racing, I asked her: 'Mujhe yaad karogi?' and proposed. About a month later during our unforgettable time in Alwar, she looked at me and replied: 'Mujhe shaadi karni hai.'",
      quote: "'Mujhe yaad karogi?' followed a month later by 'Mujhe shaadi karni hai.'",
      image: "/photos/07.jpeg"
    },
    {
      id: "alwar-and-beyond",
      era: "OUR JOURNEY TODAY",
      title: "From Alwar to Jaipur — Bubu & Gudda",
      date: "Present Day",
      location: "Jaipur",
      story: "From holding hands in Alwar to seeking blessings at Mahakal Darshan in Ujjain, through endless grammar corrections, egg debates, storytelling evenings, and building our life in Jaipur — every day with Gudda is my favourite adventure.",
      quote: "Bubu & Gudda, choosing each other through every chapter.",
      image: "/photos/11.jpeg"
    }
  ],

  // --------------------------------------------------------------------------
  // 3. MEMORY ARCHIVE CHAPTERS & POLAROIDS (POWERED BY PHOTO_COLLECTION)
  // --------------------------------------------------------------------------
  chapters: [
    {
      id: "firsts",
      title: "Our Firsts",
      subtitle: "The sparks, the gifts & the monkey jump",
      iconName: "Sparkles",
      description: "From our first glance at NIMS to the coffee-scented gift, the personalised pen, and our first kiss in Alwar.",
      memories: getPhotosByChapter("firsts")
    },
    {
      id: "travels",
      title: "Travels & Journeys",
      subtitle: "Alwar, Ujjain, Udaipur, Agra, Delhi & Jaipur",
      iconName: "Plane",
      description: "From our first escape in Alwar to the sacred Mahakal Darshan in Ujjain and the lakes of Udaipur.",
      memories: getPhotosByChapter("travels")
    },
    {
      id: "dates",
      title: "Dates",
      subtitle: "Swati claims we don't go on dates — the archive disagrees!",
      iconName: "Coffee",
      description: "Swati's official claim: 'We hardly ever go on dates.' Here is the photographic and documented counter-evidence.",
      memories: getPhotosByChapter("dates")
    },
    {
      id: "silly",
      title: "Silly Moments",
      subtitle: "Grammar police, egg bans & train jumps",
      iconName: "Smile",
      description: "The unfiltered, chaotic, and hilarious memories that make our bond one of a kind.",
      memories: getPhotosByChapter("silly")
    },
    {
      id: "celebrations",
      title: "Celebrations & Birthdays",
      subtitle: "Radio wishes, silver watches & black dresses",
      iconName: "Gift",
      description: "From 4 national radio station surprises to Kanchan Kesari Resort and thoughtful family moments.",
      memories: getPhotosByChapter("celebrations")
    },
    {
      id: "us",
      title: "Us (Bubu & Gudda)",
      subtitle: "The quiet, beautiful ordinary",
      iconName: "Heart",
      description: "Forehead leans, everyday laughter in Jaipur, inside jokes, and being each other's safe haven.",
      memories: getPhotosByChapter("us")
    },
    {
      id: "songs",
      title: "Our Songs",
      subtitle: "Melodies of Animal, road trips & quiet dances",
      iconName: "Music",
      description: "The soundtrack to our movie nights, long Jaipur drives, and our proposal.",
      memories: getPhotosByChapter("songs")
    },
    {
      id: "someday",
      title: "Someday",
      subtitle: "Our future journeys & unwritten chapters",
      iconName: "Compass",
      description: "More temples, mountain roads, quiet vacations, and building our peaceful dream life.",
      memories: getPhotosByChapter("someday")
    }
  ],

  // --------------------------------------------------------------------------
  // 4. OUR SOUNDTRACK
  // --------------------------------------------------------------------------
  soundtrack: [
    {
      id: "song-1",
      title: "Pehle Bhi Main",
      artist: "Vishal Mishra, Raj Shekhar (Animal)",
      year: "2023",
      note: "From Animal (Ranbir Kapoor) — the soundtrack of our proposal night on December 6, 2023, when 'Mujhe yaad karogi?' changed everything.",
      link: "https://open.spotify.com/search/Pehle%20Bhi%20Main"
    },
    {
      id: "song-2",
      title: "Hua Main",
      artist: "Raghav Chaitanya, Manoj Muntashir (Animal)",
      year: "2023",
      note: "Reminiscent of our wild, adventurous start and our Alwar trip where Swati said 'Mujhe shaadi karni hai.'",
      link: "https://open.spotify.com/search/Hua%20Main%20Animal"
    },
    {
      id: "song-3",
      title: "Satranga",
      artist: "Arijit Singh, Shreyas Puranik (Animal)",
      year: "2023",
      note: "Capturing all the shades of our story — the laughter, the arguments, the apologies, and the unwavering devotion.",
      link: "https://open.spotify.com/search/Satranga%20Animal"
    },
    {
      id: "song-4",
      title: "Tum Se Hi",
      artist: "Mohit Chauhan (Jab We Met)",
      year: "2007",
      note: "For all the late night drives across Jaipur and the long calls when we were in different cities.",
      link: "https://open.spotify.com/search/Tum%20Se%20Hi"
    },
    {
      id: "song-5",
      title: "Raataan Lambiyan",
      artist: "Jubin Nautiyal, Asees Kaur",
      year: "2021",
      note: "Remembering our very first long phone calls after Pulkit moved to Jaipur.",
      link: "https://open.spotify.com/search/Raataan%20Lambiyan"
    }
  ],

  // --------------------------------------------------------------------------
  // 5. THINGS I LOVE ABOUT YOU (PULKIT'S REAL REASONS FOR SWATI)
  // --------------------------------------------------------------------------
  loveReasons: [
    "Your communication — the way you speak your mind with raw honesty and passion.",
    "The fact that you talk so much, and so loudly! It was the very first thing that made me fall for you.",
    "Your incredible skills, intelligence, and the natural confidence you carry.",
    "Your expressions — especially when you get animated, excited, or try to be mad at me.",
    "The way you handled my seizure with so much calm, strength, and unconditional care when I was at my most vulnerable.",
    "When you wear that stunning black dress — you look so breathtakingly gorgeous it stops time.",
    "The way you suddenly jumped into my arms like a monkey in Alwar before our first kiss.",
    "Your brilliant personality and the sheer warmth you bring into every room.",
    "How you make even ordinary grocery runs, car rides, and dinners in Jaipur feel like an unforgettable adventure.",
    "The thoughtful way you invited my sister to celebrate my birthday.",
    "Your fiery spirit — the exact same spark that made me say 'I want her' when I saw you at NIMS.",
    "How you listen to my endless grammar corrections (even though you secretly want to punch me for it!).",
    "Your presence — when you are around, the entire chaotic world feels peaceful and grounded.",
    "Every single little bit of you, exactly as you are. Gudda, you are my home."
  ],

  // --------------------------------------------------------------------------
  // 6. OUR FUTURE / SOMEDAY PLANS
  // --------------------------------------------------------------------------
  futureDreams: [
    {
      id: "dream-1",
      category: "Places to Visit",
      title: "Spiritual Yatra to Kedarnath & Badrinath",
      description: "Journey through the high mountains together, seeking peace and blessings just like our sacred trip to Mahakal in Ujjain.",
      target: "Spiritual Dream"
    },
    {
      id: "dream-2",
      category: "Things to Experience",
      title: "Road Trip Across the Spiti & Ladakh Circuit",
      description: "Driving through winding Himalayan passes, drinking roadside chai in the cold breeze, with our favorite playlist on repeat.",
      target: "Mountain Adventure"
    },
    {
      id: "dream-3",
      category: "Future Plans",
      title: "Building Our Beautiful Sanctuary in Jaipur",
      description: "A cozy, sunlit home with a terrace for evening chai, space for endless storytelling, and all the quiet comfort we deserve.",
      target: "Forever Home"
    },
    {
      id: "dream-4",
      category: "Places to Visit",
      title: "Beach Vacation in South Goa & Gokarna",
      description: "Walking barefoot by the sunset tide, exploring quiet coastal cafes, and watching the waves crash in peace.",
      target: "Coastal Escape"
    },
    {
      id: "dream-5",
      category: "Things to Experience",
      title: "Attending a Live Sufi & Acoustic Concert",
      description: "An evening under fairy lights, singing along to our favourite ballads hand in hand.",
      target: "Music Night"
    },
    {
      id: "dream-6",
      category: "Dreams & Goals",
      title: "Growing Together Through Every Storm & Sunshine",
      description: "No matter how tough life gets, standing side by side as Bubu & Gudda, choosing each other every single day.",
      target: "A Lifetime Promise"
    }
  ],

  // --------------------------------------------------------------------------
  // 7. THE DIFFICULT CHAPTER — PRIVATE ONLY (SECRET EASTER EGG)
  // --------------------------------------------------------------------------
  // SENSITIVE NOTE: This heartfelt letter from Pulkit to Swati is strictly hidden
  // behind the subtle celestial trigger and will never appear on the public pages.
  // --------------------------------------------------------------------------
  secretEgg: {
    clickTargetCount: 5,
    hintText: "A celestial secret is hidden within the night sky...",
    discoveryPrompt: "You found the chapter I couldn't put anywhere else.",
    title: "The Chapter I Couldn't Put Anywhere Else",
    subtitle: "A private, truthful letter from Pulkit to Swati (Bubu to Gudda)",
    letterDate: "Written from the deepest corner of my heart",
    letterGreeting: "Dear Swati (My Gudda),",
    letterBody: [
      "If you're reading this, you found the private corner of our universe that I couldn't put anywhere else on this website.",
      "The last eight months have been some of the most difficult and exhausting days of my life. Dealing regularly with fits and seizures has been terrifying in ways I don't always say out loud. Waking up in confusion with my tongue cut, body aching, and only then realizing that another seizure happened is a heavy, quiet battle.",
      "You were there to witness one of those seizures in person. Seeing someone in that vulnerable state isn't easy, but the way you stayed by my side, held your ground, and handled everything with such immense care, maturity, and calm... I don't think I have ever told you enough how deeply, profoundly grateful I am for that. You showed me what true love and standing by someone actually looks like.",
      "At the same time, life outside has been overwhelming. For the past eight months, communication with almost everyone in my family except my mother has been completely shut. With my parents' health suffering repeatedly and my brother meeting with an accident, the weight, stress, and loneliness have felt suffocating at times. There are days when I feel the sheer absence of someone right next to me with whom I can just chill, talk normally, laugh, and breathe without carrying the weight of the whole world.",
      "Yet, through every single wave of stress, fear, health issues, and isolation, there is one thing that has never shaken: I have not thought for a single second about leaving you.",
      "I have no one by my side at present, and I still want you, any how. I want your loud voice, your wild expressions, your endless talking, and your warmth. Even when life broke down around me, my heart continued to choose you.",
      "Thank you for being my anchor, my Gudda, and my person. No matter how hard things get, I am with you — today, tomorrow, and always."
    ],
    letterClosing: "Forever yours, through every storm,",
    senderSign: "Pulkit (Your Bubu)"
  }
};
