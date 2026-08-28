import { MemoryItem } from '../types';

export interface PhotoItem extends MemoryItem {
  photoNumber: number;
  fileName: string;
  path: string;
  category: string;
}

/**
 * Authoritative mapping of all 74 photographs for Pulkit & Swati's digital archive.
 * Files: 01.jpeg through 74.jpeg
 */
export const PHOTO_COLLECTION: PhotoItem[] = [
  // ==========================================================================
  // CHAPTER 1: OUR FIRSTS (01 - 10)
  // ==========================================================================
  {
    id: "photo-01",
    photoNumber: 1,
    fileName: "01.jpeg",
    path: "/photos/01.jpeg",
    image: "/photos/01.jpeg",
    chapterId: "firsts",
    category: "Our Firsts",
    caption: "First Meeting at NIMS College",
    date: "NIMS Noida Days",
    location: "NIMS College Campus, Noida",
    description: "Where our universe began. Swati was in class, talking continuously and loudly, catching Pulkit's attention from the very first moment."
  },
  {
    id: "photo-02",
    photoNumber: 2,
    fileName: "02.jpeg",
    path: "/photos/02.jpeg",
    image: "/photos/02.jpeg",
    chapterId: "firsts",
    category: "Our Firsts",
    caption: "First Real Conversation After Fresher's",
    date: "Post Fresher's Party",
    location: "NIMS College, Noida",
    description: "Our very first proper one-on-one conversation right after the Fresher's Party where the spark first became undeniable."
  },
  {
    id: "photo-03",
    photoNumber: 3,
    fileName: "03.jpeg",
    path: "/photos/03.jpeg",
    image: "/photos/03.jpeg",
    chapterId: "firsts",
    category: "Our Firsts",
    caption: "First Photo Together at Diwali",
    date: "Diwali Campus Night",
    location: "NIMS Campus, Noida",
    description: "Our very first photograph together under the festive Diwali lights at NIMS college."
  },
  {
    id: "photo-04",
    photoNumber: 4,
    fileName: "04.jpeg",
    path: "/photos/04.jpeg",
    image: "/photos/04.jpeg",
    chapterId: "firsts",
    category: "Our Firsts",
    caption: "Pulkit's First Gift to Swati",
    date: "Early Days",
    location: "Noida",
    description: "Delicious chocolates paired with coffee-themed bathing and skincare treats gifted by Pulkit."
  },
  {
    id: "photo-05",
    photoNumber: 5,
    fileName: "05.jpeg",
    path: "/photos/05.jpeg",
    image: "/photos/05.jpeg",
    chapterId: "firsts",
    category: "Our Firsts",
    caption: "Swati's First Gift to Pulkit",
    date: "Early Days",
    location: "Noida",
    description: "A beautiful personalised engraved pen that Pulkit kept close and cherished."
  },
  {
    id: "photo-06",
    photoNumber: 6,
    fileName: "06.jpeg",
    path: "/photos/06.jpeg",
    image: "/photos/06.jpeg",
    chapterId: "firsts",
    category: "Our Firsts",
    caption: "First Video Call & The Black Dress",
    date: "Jaipur & Delhi Calls",
    location: "Jaipur — Delhi",
    description: "Our very first video call after Pulkit moved to Jaipur, where Swati wore the unforgettable black dress."
  },
  {
    id: "photo-07",
    photoNumber: 7,
    fileName: "07.jpeg",
    path: "/photos/07.jpeg",
    image: "/photos/07.jpeg",
    chapterId: "firsts",
    category: "Our Firsts",
    caption: "The Proposal: 'Mujhe Yaad Karogi?'",
    date: "December 6, 2023",
    location: "Post Animal Movie",
    description: "December 6, 2023 — Pulkit proposed with 'Mujhe yaad karogi?', leading to Swati's answer in Alwar: 'Mujhe shaadi karni hai.'"
  },
  {
    id: "photo-08",
    photoNumber: 8,
    fileName: "08.jpeg",
    path: "/photos/08.jpeg",
    image: "/photos/08.jpeg",
    chapterId: "firsts",
    category: "Our Firsts",
    caption: "First Trip & Holding Hands in Alwar",
    date: "Alwar Trip",
    location: "Alwar, Rajasthan",
    description: "Our first official trip, first date, and the very first time we held hands while exploring the historic streets of Alwar."
  },
  {
    id: "photo-09",
    photoNumber: 9,
    fileName: "09.jpeg",
    path: "/photos/09.jpeg",
    image: "/photos/09.jpeg",
    chapterId: "firsts",
    category: "Our Firsts",
    caption: "The First Kiss ('Monkey Jump')",
    date: "Alwar Memories",
    location: "Alwar",
    description: "Swati suddenly jumped into Pulkit's arms like a monkey before our magical and funny first kiss!"
  },
  {
    id: "photo-10",
    photoNumber: 10,
    fileName: "10.jpeg",
    path: "/photos/10.jpeg",
    image: "/photos/10.jpeg",
    chapterId: "firsts",
    category: "Our Firsts",
    caption: "Alwar Heritage Fort Walk",
    date: "Alwar Getaway",
    location: "Alwar Fort",
    description: "Exploring ancient courtyards together on our unforgettable first journey."
  },

  // ==========================================================================
  // CHAPTER 2: TRAVELS & JOURNEYS (11 - 24)
  // ==========================================================================
  {
    id: "photo-11",
    photoNumber: 11,
    fileName: "11.jpeg",
    path: "/photos/11.jpeg",
    image: "/photos/11.jpeg",
    chapterId: "travels",
    category: "Travels & Journeys",
    caption: "Mahakal Darshan in Ujjain",
    date: "Sacred Pilgrimage",
    location: "Mahakaleshwar Temple, Ujjain",
    isSpecialHighlight: true,
    description: "The most memorable trip of our lives together. Seeking divine blessings at Mahakal Darshan in sacred peace."
  },
  {
    id: "photo-12",
    photoNumber: 12,
    fileName: "12.jpeg",
    path: "/photos/12.jpeg",
    image: "/photos/12.jpeg",
    chapterId: "travels",
    category: "Travels & Journeys",
    caption: "Morning Aarti on Shipra River",
    date: "Ujjain Morning",
    location: "Shipra Ghats, Ujjain",
    description: "Early morning calm and spiritual reflection along the sacred riverbanks of Ujjain."
  },
  {
    id: "photo-13",
    photoNumber: 13,
    fileName: "13.jpeg",
    path: "/photos/13.jpeg",
    image: "/photos/13.jpeg",
    chapterId: "travels",
    category: "Travels & Journeys",
    caption: "Ujjain Temple Streets & Prasadam",
    date: "Ujjain Journey",
    location: "Ujjain, Madhya Pradesh",
    description: "Walking hand-in-hand through temple bazaars and sharing sweet temple offerings."
  },
  {
    id: "photo-14",
    photoNumber: 14,
    fileName: "14.jpeg",
    path: "/photos/14.jpeg",
    image: "/photos/14.jpeg",
    chapterId: "travels",
    category: "Travels & Journeys",
    caption: "Alwar Palace & Moosi Maharani Chhatri",
    date: "First Vacation",
    location: "Alwar, Rajasthan",
    description: "Admiration of royal marble architecture and serene cenotaphs in Alwar."
  },
  {
    id: "photo-15",
    photoNumber: 15,
    fileName: "15.jpeg",
    path: "/photos/15.jpeg",
    image: "/photos/15.jpeg",
    chapterId: "travels",
    category: "Travels & Journeys",
    caption: "Siliserh Lake Sunset Reflections",
    date: "Alwar Evening",
    location: "Siliserh Lake, Alwar",
    description: "Sitting peacefully by the waters of Siliserh Lake as the golden hour bathed everything in gold."
  },
  {
    id: "photo-16",
    photoNumber: 16,
    fileName: "16.jpeg",
    path: "/photos/16.jpeg",
    image: "/photos/16.jpeg",
    chapterId: "travels",
    category: "Travels & Journeys",
    caption: "Udaipur — Arriving in the City of Lakes",
    date: "Udaipur Journey",
    location: "Udaipur, Rajasthan",
    description: "Stepping into Udaipur's romantic atmosphere of palace walls and shimmering water."
  },
  {
    id: "photo-17",
    photoNumber: 17,
    fileName: "17.jpeg",
    path: "/photos/17.jpeg",
    image: "/photos/17.jpeg",
    chapterId: "travels",
    category: "Travels & Journeys",
    caption: "Lake Pichola Boat Ride",
    date: "Udaipur Sunset",
    location: "Lake Pichola, Udaipur",
    description: "Cruising over calm waters with stunning panoramic views of the Lake Palace."
  },
  {
    id: "photo-18",
    photoNumber: 18,
    fileName: "18.jpeg",
    path: "/photos/18.jpeg",
    image: "/photos/18.jpeg",
    chapterId: "travels",
    category: "Travels & Journeys",
    caption: "Fateh Sagar Lakeside Promenade",
    date: "Udaipur Night",
    location: "Fateh Sagar, Udaipur",
    description: "Chilled cold coffee and breezy evening chats along the famous promenade."
  },
  {
    id: "photo-19",
    photoNumber: 19,
    fileName: "19.jpeg",
    path: "/photos/19.jpeg",
    image: "/photos/19.jpeg",
    chapterId: "travels",
    category: "Travels & Journeys",
    caption: "Udaipur City Palace Heritage Walk",
    date: "Royal Exploration",
    location: "City Palace, Udaipur",
    description: "Walking through colored glass corridors and royal terraces in Udaipur."
  },
  {
    id: "photo-20",
    photoNumber: 20,
    fileName: "20.jpeg",
    path: "/photos/20.jpeg",
    image: "/photos/20.jpeg",
    chapterId: "travels",
    category: "Travels & Journeys",
    caption: "Agra Heritage Stroll",
    date: "Heritage Trip",
    location: "Agra, Uttar Pradesh",
    description: "Taking in timeless historic architecture and marble landmarks together in Agra."
  },
  {
    id: "photo-21",
    photoNumber: 21,
    fileName: "21.jpeg",
    path: "/photos/21.jpeg",
    image: "/photos/21.jpeg",
    chapterId: "travels",
    category: "Travels & Journeys",
    caption: "Street Flavors & Petha in Agra",
    date: "Agra Food Walk",
    location: "Agra Bazaars",
    description: "Sampling local street delicacies and sweets along the bustling lanes of Agra."
  },
  {
    id: "photo-22",
    photoNumber: 22,
    fileName: "22.jpeg",
    path: "/photos/22.jpeg",
    image: "/photos/22.jpeg",
    chapterId: "travels",
    category: "Travels & Journeys",
    caption: "Delhi NCR College Nostalgia",
    date: "Delhi Days",
    location: "Delhi NCR",
    description: "Revisiting favourite cafes and college haunts across the capital."
  },
  {
    id: "photo-23",
    photoNumber: 23,
    fileName: "23.jpeg",
    path: "/photos/23.jpeg",
    image: "/photos/23.jpeg",
    chapterId: "travels",
    category: "Travels & Journeys",
    caption: "Night Drives Through Jaipur",
    date: "Jaipur Evenings",
    location: "Jaipur, Rajasthan",
    description: "Cruising under the illuminated gateways and starry skies of the Pink City."
  },
  {
    id: "photo-24",
    photoNumber: 24,
    fileName: "24.jpeg",
    path: "/photos/24.jpeg",
    image: "/photos/24.jpeg",
    chapterId: "travels",
    category: "Travels & Journeys",
    caption: "Amer Fort Scenic Overlook",
    date: "Jaipur Weekend",
    location: "Amer Fort, Jaipur",
    description: "Watching the sun illuminate the Aravalli hills from the Amer Fort viewpoint."
  },

  // ==========================================================================
  // CHAPTER 3: DATES & OUTINGS (25 - 36)
  // ==========================================================================
  {
    id: "photo-25",
    photoNumber: 25,
    fileName: "25.jpeg",
    path: "/photos/25.jpeg",
    image: "/photos/25.jpeg",
    chapterId: "dates",
    category: "Dates",
    caption: "The 1-Day-Before-Exam Movie Date",
    date: "Exam Season Special",
    location: "Cinema Hall",
    description: "Pulkit traveled all the way from Jaipur just one single day before his exam just for a movie date with Swati!"
  },
  {
    id: "photo-26",
    photoNumber: 26,
    fileName: "26.jpeg",
    path: "/photos/26.jpeg",
    image: "/photos/26.jpeg",
    chapterId: "dates",
    category: "Dates",
    caption: "Cozy Dinner Date in Jaipur",
    date: "Dinner Evening",
    location: "Jaipur Bistro",
    description: "Sharing pasta and laughter across a candlelit table after a busy week."
  },
  {
    id: "photo-27",
    photoNumber: 27,
    fileName: "27.jpeg",
    path: "/photos/27.jpeg",
    image: "/photos/27.jpeg",
    chapterId: "dates",
    category: "Dates",
    caption: "Midnight Ice Cream Runs",
    date: "Late Night Date",
    location: "Jaipur Ice Cream Parlor",
    description: "Midnight ice cream runs, quiet roads, and deep late-night heart-to-hearts."
  },
  {
    id: "photo-28",
    photoNumber: 28,
    fileName: "28.jpeg",
    path: "/photos/28.jpeg",
    image: "/photos/28.jpeg",
    chapterId: "dates",
    category: "Dates",
    caption: "Live Storytelling Event Date",
    date: "Cultural Night",
    location: "Live Event Venue",
    description: "Immersed in beautiful stories side-by-side during an intimate live acoustic storytelling session."
  },
  {
    id: "photo-29",
    photoNumber: 29,
    fileName: "29.jpeg",
    path: "/photos/29.jpeg",
    image: "/photos/29.jpeg",
    chapterId: "dates",
    category: "Dates",
    caption: "Weekend Cafe & Coffee Chitchat",
    date: "Lazy Afternoon",
    location: "Artisan Cafe",
    description: "Hours slipping by unnoticed over warm cappuccino and endless conversations."
  },
  {
    id: "photo-30",
    photoNumber: 30,
    fileName: "30.jpeg",
    path: "/photos/30.jpeg",
    image: "/photos/30.jpeg",
    chapterId: "dates",
    category: "Dates",
    caption: "Popcorn Fights at the Cinema",
    date: "Movie Night",
    location: "PVR Cinemas",
    description: "Stealing snacks and giggling during the latest Ranbir Kapoor film."
  },
  {
    id: "photo-31",
    photoNumber: 31,
    fileName: "31.jpeg",
    path: "/photos/31.jpeg",
    image: "/photos/31.jpeg",
    chapterId: "dates",
    category: "Dates",
    caption: "Sunset Rooftop View Date",
    date: "Golden Hour",
    location: "Jaipur Rooftop Lounge",
    description: "Watching the skyline turn pink and golden from our favorite open terrace."
  },
  {
    id: "photo-32",
    photoNumber: 32,
    fileName: "32.jpeg",
    path: "/photos/32.jpeg",
    image: "/photos/32.jpeg",
    chapterId: "dates",
    category: "Dates",
    caption: "Street Food Adventure in Old City",
    date: "Bazaar Walk",
    location: "Jaipur Bazaars",
    description: "Exploring spicy chaat, kachoris, and street food stalls together."
  },
  {
    id: "photo-33",
    photoNumber: 33,
    fileName: "33.jpeg",
    path: "/photos/33.jpeg",
    image: "/photos/33.jpeg",
    chapterId: "dates",
    category: "Dates",
    caption: "Bookstore & Cute Stationery Date",
    date: "Weekend Stroll",
    location: "Book & Stationery Shop",
    description: "Hunting for quirky pens and journals while sharing laughs."
  },
  {
    id: "photo-34",
    photoNumber: 34,
    fileName: "34.jpeg",
    path: "/photos/34.jpeg",
    image: "/photos/34.jpeg",
    chapterId: "dates",
    category: "Dates",
    caption: "Highway Long Drive & Music",
    date: "Road Trip Date",
    location: "Jaipur Highway",
    description: "Windows down, gentle breeze, and singing along to our favourite Animal tracks."
  },
  {
    id: "photo-35",
    photoNumber: 35,
    fileName: "35.jpeg",
    path: "/photos/35.jpeg",
    image: "/photos/35.jpeg",
    chapterId: "dates",
    category: "Dates",
    caption: "Sunday Sunshine Brunch",
    date: "Sunny Morning",
    location: "Garden Restaurant",
    description: "Enjoying waffles, hot tea, and sunny morning vibes together."
  },
  {
    id: "photo-36",
    photoNumber: 36,
    fileName: "36.jpeg",
    path: "/photos/36.jpeg",
    image: "/photos/36.jpeg",
    chapterId: "dates",
    category: "Dates",
    caption: "Shopping & Outfit Verdicts",
    date: "Mall Outing",
    location: "City Mall",
    description: "Testing out outfits and giving each other humorous fashion ratings."
  },

  // ==========================================================================
  // CHAPTER 4: SILLY & CANDID MOMENTS (37 - 46)
  // ==========================================================================
  {
    id: "photo-37",
    photoNumber: 37,
    fileName: "37.jpeg",
    path: "/photos/37.jpeg",
    image: "/photos/37.jpeg",
    chapterId: "silly",
    category: "Silly Moments",
    caption: "Mid-Argument Grammar Police",
    date: "Classic Recurring Moment",
    location: "Noida / Jaipur",
    description: "Pulkit abruptly pausing a heated argument just to correct Swati's grammar and spelling!"
  },
  {
    id: "photo-38",
    photoNumber: 38,
    fileName: "38.jpeg",
    path: "/photos/38.jpeg",
    image: "/photos/38.jpeg",
    chapterId: "silly",
    category: "Silly Moments",
    caption: "The Great Egg Negotiation",
    date: "Every Day at Home",
    location: "Kitchen & Dining",
    description: "Pulkit negotiating for permission to eat an egg while Swati strongly disapproves."
  },
  {
    id: "photo-39",
    photoNumber: 39,
    fileName: "39.jpeg",
    path: "/photos/39.jpeg",
    image: "/photos/39.jpeg",
    chapterId: "silly",
    category: "Silly Moments",
    caption: "Jumping From the Moving Train",
    date: "Wild Train Memory",
    location: "Railway Journey",
    description: "That one impulsive, slightly crazy time we actually jumped from a moving train together!"
  },
  {
    id: "photo-40",
    photoNumber: 40,
    fileName: "40.jpeg",
    path: "/photos/40.jpeg",
    image: "/photos/40.jpeg",
    chapterId: "silly",
    category: "Silly Moments",
    caption: "Goofy Traffic Jam Selfies",
    date: "Traffic Hour",
    location: "Car in Jaipur",
    description: "Making ridiculously goofy faces to kill time during evening Jaipur traffic."
  },
  {
    id: "photo-41",
    photoNumber: 41,
    fileName: "41.jpeg",
    path: "/photos/41.jpeg",
    image: "/photos/41.jpeg",
    chapterId: "silly",
    category: "Silly Moments",
    caption: "Photobombing the Serious Portrait",
    date: "Candid Shot",
    location: "Cafe",
    description: "Swati ruining a perfectly serious portrait with silly bunny ears and a mischievous smile."
  },
  {
    id: "photo-42",
    photoNumber: 42,
    fileName: "42.jpeg",
    path: "/photos/42.jpeg",
    image: "/photos/42.jpeg",
    chapterId: "silly",
    category: "Silly Moments",
    caption: "The Sleepy Road-Trip Co-Pilot",
    date: "Road Trip",
    location: "Passenger Seat",
    description: "Swati fast asleep five minutes into the drive after promising to keep the driver company!"
  },
  {
    id: "photo-43",
    photoNumber: 43,
    fileName: "43.jpeg",
    path: "/photos/43.jpeg",
    image: "/photos/43.jpeg",
    chapterId: "silly",
    category: "Silly Moments",
    caption: "Loud Voice Demonstration",
    date: "Everyday Energy",
    location: "Jaipur",
    description: "Swati passionately storytelling at maximum volume with animated hand gestures."
  },
  {
    id: "photo-44",
    photoNumber: 44,
    fileName: "44.jpeg",
    path: "/photos/44.jpeg",
    image: "/photos/44.jpeg",
    chapterId: "silly",
    category: "Silly Moments",
    caption: "Stealing Pulkit's Oversized Hoodie",
    date: "Winter Chill",
    location: "Home",
    description: "Swati permanently claiming Pulkit's warmest oversized hoodie as her own."
  },
  {
    id: "photo-45",
    photoNumber: 45,
    fileName: "45.jpeg",
    path: "/photos/45.jpeg",
    image: "/photos/45.jpeg",
    chapterId: "silly",
    category: "Silly Moments",
    caption: "The Trademark Dramatic Eye-Roll",
    date: "Dinner Banter",
    location: "Restaurant",
    description: "Swati's iconic expressive eye-roll whenever Pulkit delivers a terrible dad joke."
  },
  {
    id: "photo-46",
    photoNumber: 46,
    fileName: "46.jpeg",
    path: "/photos/46.jpeg",
    image: "/photos/46.jpeg",
    chapterId: "silly",
    category: "Silly Moments",
    caption: "Unstoppable Giggles Attack",
    date: "Living Room",
    location: "Home",
    description: "Laughing uncontrollably until our stomachs ached over a silly inside joke."
  },

  // ==========================================================================
  // CHAPTER 5: CELEBRATIONS & BIRTHDAYS (47 - 56)
  // ==========================================================================
  {
    id: "photo-47",
    photoNumber: 47,
    fileName: "47.jpeg",
    path: "/photos/47.jpeg",
    image: "/photos/47.jpeg",
    chapterId: "celebrations",
    category: "Celebrations & Birthdays",
    caption: "1st Birthday — 4 National Radio Stations",
    date: "First Birthday Celebration",
    location: "Jaipur & Delhi Airwaves",
    description: "Pulkit surprising Swati by broadcasting birthday wishes across 4 national radio stations across India."
  },
  {
    id: "photo-48",
    photoNumber: 48,
    fileName: "48.jpeg",
    path: "/photos/48.jpeg",
    image: "/photos/48.jpeg",
    chapterId: "celebrations",
    category: "Celebrations & Birthdays",
    caption: "2nd Birthday — Reflection & Sincere Apology",
    date: "Second Birthday",
    location: "Heartfelt Reflection",
    description: "A birthday marked by heartfelt reflections, sincere apologies, and deepened commitment to each other."
  },
  {
    id: "photo-49",
    photoNumber: 49,
    fileName: "49.jpeg",
    path: "/photos/49.jpeg",
    image: "/photos/49.jpeg",
    chapterId: "celebrations",
    category: "Celebrations & Birthdays",
    caption: "3rd Birthday — Kanchan Kesari Resort",
    date: "Third Birthday",
    location: "Kanchan Kesari Resort, Jaipur",
    description: "Celebrating Swati's 3rd birthday in royal style with cultural festivities at Kanchan Kesari Resort."
  },
  {
    id: "photo-50",
    photoNumber: 50,
    fileName: "50.jpeg",
    path: "/photos/50.jpeg",
    image: "/photos/50.jpeg",
    chapterId: "celebrations",
    category: "Celebrations & Birthdays",
    caption: "The Silver Watch Birthday Gift",
    date: "Birthday Milestone",
    location: "Jaipur",
    description: "Pulkit gifting Swati the classic silver watch to mark timeless memories."
  },
  {
    id: "photo-51",
    photoNumber: 51,
    fileName: "51.jpeg",
    path: "/photos/51.jpeg",
    image: "/photos/51.jpeg",
    chapterId: "celebrations",
    category: "Celebrations & Birthdays",
    caption: "Pulkit's Birthday — Swati's Sister Surprise",
    date: "Pulkit's Birthday",
    location: "Jaipur Celebration",
    description: "Swati thoughtfully inviting Pulkit's sister to celebrate together — a gesture that meant the world to him."
  },
  {
    id: "photo-52",
    photoNumber: 52,
    fileName: "52.jpeg",
    path: "/photos/52.jpeg",
    image: "/photos/52.jpeg",
    chapterId: "celebrations",
    category: "Celebrations & Birthdays",
    caption: "The Birthday Black Dress Elegance",
    date: "Birthday Evening",
    location: "Jaipur",
    description: "Swati looking breathtaking in Pulkit's favourite black dress for his special celebration."
  },
  {
    id: "photo-53",
    photoNumber: 53,
    fileName: "53.jpeg",
    path: "/photos/53.jpeg",
    image: "/photos/53.jpeg",
    chapterId: "celebrations",
    category: "Celebrations & Birthdays",
    caption: "Diwali Sparkles & Warm Diyas",
    date: "Diwali Festival",
    location: "Jaipur",
    description: "Lighting oil lamps and celebrating the festival of lights with warmth and love."
  },
  {
    id: "photo-54",
    photoNumber: 54,
    fileName: "54.jpeg",
    path: "/photos/54.jpeg",
    image: "/photos/54.jpeg",
    chapterId: "celebrations",
    category: "Celebrations & Birthdays",
    caption: "New Year Midnight Toast",
    date: "New Year Eve",
    location: "Celebration Night",
    description: "Counting down to midnight together and stepping into another chapter side by side."
  },
  {
    id: "photo-55",
    photoNumber: 55,
    fileName: "55.jpeg",
    path: "/photos/55.jpeg",
    image: "/photos/55.jpeg",
    chapterId: "celebrations",
    category: "Celebrations & Birthdays",
    caption: "December 6 Anniversary Celebration",
    date: "December 6",
    location: "Jaipur",
    description: "Commemorating our official beginning date with gratitude and cherished memories."
  },
  {
    id: "photo-56",
    photoNumber: 56,
    fileName: "56.jpeg",
    path: "/photos/56.jpeg",
    image: "/photos/56.jpeg",
    chapterId: "celebrations",
    category: "Celebrations & Birthdays",
    caption: "Midnight Cake & Surprise Bouquet",
    date: "Midnight Birthday Surprise",
    location: "Home",
    description: "Sneaking in candles, sweet cake, and fresh flowers right at the strike of midnight."
  },

  // ==========================================================================
  // CHAPTER 6: US — BUBU & GUDDA (57 - 64)
  // ==========================================================================
  {
    id: "photo-57",
    photoNumber: 57,
    fileName: "57.jpeg",
    path: "/photos/57.jpeg",
    image: "/photos/57.jpeg",
    chapterId: "us",
    category: "Us (Bubu & Gudda)",
    caption: "Quiet Jaipur Evenings at Home",
    date: "Daily Life",
    location: "Jaipur Sanctuary",
    description: "Relaxing together after long days, feeling complete peace in each other's quiet presence."
  },
  {
    id: "photo-58",
    photoNumber: 58,
    fileName: "58.jpeg",
    path: "/photos/58.jpeg",
    image: "/photos/58.jpeg",
    chapterId: "us",
    category: "Us (Bubu & Gudda)",
    caption: "Her Endless Animated Stories",
    date: "Every Day",
    location: "Jaipur",
    description: "Watching Swati tell dramatic tales with full enthusiasm and bright eyes."
  },
  {
    id: "photo-59",
    photoNumber: 59,
    fileName: "59.jpeg",
    path: "/photos/59.jpeg",
    image: "/photos/59.jpeg",
    chapterId: "us",
    category: "Us (Bubu & Gudda)",
    caption: "Forehead Leans & Safe Sanctuary",
    date: "Tender Moments",
    location: "Sanctuary",
    description: "A gentle forehead lean that instantly dissolves all stress and heavy days."
  },
  {
    id: "photo-60",
    photoNumber: 60,
    fileName: "60.jpeg",
    path: "/photos/60.jpeg",
    image: "/photos/60.jpeg",
    chapterId: "us",
    category: "Us (Bubu & Gudda)",
    caption: "Intertwined Hands on Evening Walks",
    date: "Evening Strolls",
    location: "Jaipur Streets",
    description: "Our fingers naturally finding each other whenever we walk together."
  },
  {
    id: "photo-61",
    photoNumber: 61,
    fileName: "61.jpeg",
    path: "/photos/61.jpeg",
    image: "/photos/61.jpeg",
    chapterId: "us",
    category: "Us (Bubu & Gudda)",
    caption: "Accidental Color Matching",
    date: "Weekend Outing",
    location: "Jaipur",
    description: "Unintentionally showing up in matching tones and pretending we coordinated."
  },
  {
    id: "photo-62",
    photoNumber: 62,
    fileName: "62.jpeg",
    path: "/photos/62.jpeg",
    image: "/photos/62.jpeg",
    chapterId: "us",
    category: "Us (Bubu & Gudda)",
    caption: "The Candid Glance of Pure Devotion",
    date: "Candid Moment",
    location: "Sanctuary",
    description: "A stolen glance that says more than words ever could."
  },
  {
    id: "photo-63",
    photoNumber: 63,
    fileName: "63.jpeg",
    path: "/photos/63.jpeg",
    image: "/photos/63.jpeg",
    chapterId: "us",
    category: "Us (Bubu & Gudda)",
    caption: "Morning Balcony Chai Ritual",
    date: "Early Mornings",
    location: "Jaipur Balcony",
    description: "Sipping steaming hot tea together in the cool morning breeze."
  },
  {
    id: "photo-64",
    photoNumber: 64,
    fileName: "64.jpeg",
    path: "/photos/64.jpeg",
    image: "/photos/64.jpeg",
    chapterId: "us",
    category: "Us (Bubu & Gudda)",
    caption: "Bubu & Gudda — Forever Anchored",
    date: "Present & Always",
    location: "Jaipur",
    description: "Through every storm and sunshine, choosing each other unconditionally every single day."
  },

  // ==========================================================================
  // CHAPTER 7: OUR SONGS (65 - 68)
  // ==========================================================================
  {
    id: "photo-65",
    photoNumber: 65,
    fileName: "65.jpeg",
    path: "/photos/65.jpeg",
    image: "/photos/65.jpeg",
    chapterId: "songs",
    category: "Our Songs",
    caption: "Pehle Bhi Main — Proposal Melodies",
    date: "Animal Soundtrack",
    location: "December 6 Memories",
    description: "The song playing when 'Mujhe yaad karogi?' became our promise forever."
  },
  {
    id: "photo-66",
    photoNumber: 66,
    fileName: "66.jpeg",
    path: "/photos/66.jpeg",
    image: "/photos/66.jpeg",
    chapterId: "songs",
    category: "Our Songs",
    caption: "Hua Main — Alwar Romance",
    date: "Road Trip Anthems",
    location: "Highway Drives",
    description: "Belting out our favourite lyrics with full energy on highway road trips."
  },
  {
    id: "photo-67",
    photoNumber: 67,
    fileName: "67.jpeg",
    path: "/photos/67.jpeg",
    image: "/photos/67.jpeg",
    chapterId: "songs",
    category: "Our Songs",
    caption: "Satranga — Every Shade of Our Story",
    date: "Soundtrack",
    location: "Jaipur Nights",
    description: "Embracing every shade of our journey — the laughter, fights, apologies, and devotion."
  },
  {
    id: "photo-68",
    photoNumber: 68,
    fileName: "68.jpeg",
    path: "/photos/68.jpeg",
    image: "/photos/68.jpeg",
    chapterId: "songs",
    category: "Our Songs",
    caption: "Tum Se Hi & Raataan Lambiyan",
    date: "Late Night Melodies",
    location: "Night Drives",
    description: "The calming melodies of our long night drives and phone calls across cities."
  },

  // ==========================================================================
  // CHAPTER 8: SOMEDAY & FUTURE DREAMS (69 - 74)
  // ==========================================================================
  {
    id: "photo-69",
    photoNumber: 69,
    fileName: "69.jpeg",
    path: "/photos/69.jpeg",
    image: "/photos/69.jpeg",
    chapterId: "someday",
    category: "Someday",
    caption: "Kedarnath & Badrinath Spiritual Yatra",
    date: "Future Pilgrimage",
    location: "Himalayan Shrines",
    description: "Our dream spiritual pilgrimage through snow-capped mountains and sacred bells."
  },
  {
    id: "photo-70",
    photoNumber: 70,
    fileName: "70.jpeg",
    path: "/photos/70.jpeg",
    image: "/photos/70.jpeg",
    chapterId: "someday",
    category: "Someday",
    caption: "Spiti & Ladakh High Pass Road Trip",
    date: "Mountain Dream",
    location: "Himalayan Passes",
    description: "Driving winding mountain roads with roadside chai in cold winds."
  },
  {
    id: "photo-71",
    photoNumber: 71,
    fileName: "71.jpeg",
    path: "/photos/71.jpeg",
    image: "/photos/71.jpeg",
    chapterId: "someday",
    category: "Someday",
    caption: "Building Our Beautiful Jaipur Home",
    date: "Forever Dream",
    location: "Jaipur Sanctuary",
    description: "A sunlit sanctuary filled with laughter, endless stories, and peaceful love."
  },
  {
    id: "photo-72",
    photoNumber: 72,
    fileName: "72.jpeg",
    path: "/photos/72.jpeg",
    image: "/photos/72.jpeg",
    chapterId: "someday",
    category: "Someday",
    caption: "South Goa & Gokarna Coastal Sunset",
    date: "Beach Dream",
    location: "Coastal Shores",
    description: "Barefoot sunset walks along quiet shores listening to waves crash."
  },
  {
    id: "photo-73",
    photoNumber: 73,
    fileName: "73.jpeg",
    path: "/photos/73.jpeg",
    image: "/photos/73.jpeg",
    chapterId: "someday",
    category: "Someday",
    caption: "Live Sufi & Acoustic Concert Night",
    date: "Concert Dream",
    location: "Under Fairy Lights",
    description: "Singing soulful ballads together under twinkling lights and open skies."
  },
  {
    id: "photo-74",
    photoNumber: 74,
    fileName: "74.jpeg",
    path: "/photos/74.jpeg",
    image: "/photos/74.jpeg",
    chapterId: "someday",
    category: "Someday",
    caption: "Growing Old Side by Side (Bubu & Gudda)",
    date: "Lifetime Promise",
    location: "Every Step of the Way",
    description: "Walking hand-in-hand through every twist, storm, and joy of life forever."
  }
];

/**
 * Helper functions to query the photo collection.
 */
export const getPhotosByChapter = (chapterId: string): PhotoItem[] => {
  return PHOTO_COLLECTION.filter((p) => p.chapterId === chapterId);
};

export const getPhotoByNumber = (num: number): PhotoItem | undefined => {
  return PHOTO_COLLECTION.find((p) => p.photoNumber === num);
};

export const getTotalPhotosCount = (): number => {
  return PHOTO_COLLECTION.length;
};
