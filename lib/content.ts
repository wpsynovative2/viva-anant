// Page content, transcribed from the VIVA ANANT coffee-table brochure.

export const img = (name: string) => `/images/${name}.webp`;

export const overviewFacts = [
  { label: "Configurations", value: "1, 2 & 3 BHK" },
  { label: "Location", value: "Y K Nagar, Virar (W)" },
  { label: "Lifestyle Amenities", value: "15+" },
  { label: "Amenity Deck", value: "Rooftop" },
  { label: "Developer", value: "Viva Group" },
  { label: "MahaRERA No.", value: "PM1240002600876" },
] as const;

export const heroPoints = [
  "Modern architecture, planned smartly for the way you live",
  "15+ lifestyle amenities, with something for every age and interest",
  "Wide balconies that give your home a dedicated outdoor extension",
  "Easy connectivity to the railway station, highways, and the places you visit every day",
];

export const evolutionLines = [
  "Thoughtfully Planned Homes",
  "Everyday Convenience",
  "Built With Experience",
  "Open-Air Living",
  "Growing Neighbourhood",
];

export const aboutPoints = [
  { title: "Intelligent Planning", text: "Well-considered spaces that adapt to everyday needs." },
  { title: "Emerging Address", text: "Positioned in a developing part of Virar West." },
  { title: "Evolving Layouts", text: "Efficient spaces planned around everyday needs." },
  { title: "Rooftop Amenities", text: "Open-air spaces for recreation and relaxation." },
  { title: "Community Living", text: "A thoughtfully planned environment for everyday interaction." },
];

export const legacyStats = [
  { value: 35, suffix: "+", label: "Years", sub: "of legacy" },
  { value: 7000, suffix: "+", label: "Homes", sub: "delivered" },
  { text: "Diverse", label: "Business", sub: "presence" },
  { text: "Strong", label: "Vasai–Virar", sub: "presence" },
];

export const highlights = [
  { icon: "sparkle", title: "Sky Deck Amenities", text: "Rooftop spaces designed for recreation, relaxation and open-air living." },
  { icon: "balcony", title: "Private Balcony Decks", text: "A 5 FT private deck that extends your living space outdoors." },
  { icon: "building", title: "Efficient Home Planning", text: "Well-planned layouts created around comfortable everyday living." },
  { icon: "store", title: "Everyday Essentials", text: "Schools, shopping, dining and daily conveniences close to home." },
  { icon: "users", title: "Designed For Every Age", text: "A lifestyle environment with spaces catering to different interests." },
  { icon: "shield", title: "Secure By Design", text: "CCTV surveillance, 24×7 security and visitor management add everyday reassurance." },
  { icon: "bolt", title: "Generator Backup", text: "Power backup for every apartment, so life never pauses." },
  { icon: "train", title: "Close to Virar Station", text: "Easy access to the railway station, highways and daily needs." },
] as const;

export const lifestyle = [
  {
    image: img("entrance-lobby-reception"),
    eyebrow: "Lobby",
    title: "The First Reveal",
    text: "A welcoming space that offers the first glimpse of the life waiting beyond.",
  },
  {
    image: img("family-living-room"),
    eyebrow: "Living Room Diaries",
    title: "The Gathering Chapter",
    text: "From little gatherings to growing traditions, this is where family life finds its wings.",
  },
  {
    image: img("lifestyle-kitchen-mother-daughter"),
    eyebrow: "Kitchen Stories",
    title: "A Table Full of Tomorrows",
    text: "From the first recipe to the ones everyone knows by heart, flavours evolve here.",
  },
  {
    image: img("lifestyle-bedroom-family"),
    eyebrow: "Bedroom Comfort",
    title: "The Dreaming Hour",
    text: "A private world that changes with you, holding every dream along the way.",
  },
];

export const balconyImages = [
  { image: img("balcony-father-daughter-play"), alt: "Father and daughter playing on a wide balcony deck at Viva Anant" },
  { image: img("balcony-couple-sunrise"), alt: "Couple enjoying the sunrise from a Viva Anant balcony" },
  { image: img("balcony-woman-reading"), alt: "Woman reading on a glass-railed balcony at Viva Anant" },
];

export const specifications = [
  {
    title: "Windows & Doors",
    items: [
      "Anti-rust French sliding windows",
      "Quality door hardware",
      "Attractive fire-resistant main door with laminated finish on both sides",
      "Both-side laminated bedroom doors",
      "Water-resistant UPVC doors for bathrooms & WCs",
    ],
  },
  {
    title: "Electrical & Safety",
    items: [
      "Polycab FRLS fire-resistant concealed copper wiring",
      "ELCB electrical safety protection",
      "Branded modular electrical switches",
      "Fire sprinklers in individual rooms",
      "AC points in living room & bedrooms",
      "Generator backup for every apartment",
      "D2H & internet provisions",
      "Washing machine electrical & plumbing provision in the dry bed area",
    ],
  },
  {
    title: "Kitchen",
    items: [
      '12" × 18" kitchen wall tiles up to 7 ft',
      "Granite kitchen platform",
      "Stainless steel sink",
      "Kitchen & WC exhaust fan / chimney provisions",
    ],
  },
  {
    title: "Bathrooms",
    items: [
      "Branded sanitaryware & CP fittings",
      "Water-resistant UPVC bathroom doors",
      "Exhaust fan provision",
      'Full-wall 12" × 18" dado tiles in bathrooms & WCs',
    ],
  },
  {
    title: "Flooring & Finishes",
    items: [
      "2' × 2' high-gloss vitrified flooring from reputed brands",
      "Asian Paints internal wall finish",
    ],
  },
  {
    title: "Balcony, Safety & Convenience",
    items: [
      "Glass railing with provision for spotlights in every balcony",
      "Visitor management system",
    ],
  },
];

export const amenities = [
  { image: img("amenity-box-cricket"), title: "Box Cricket Arena", text: "Where every match brings out a little more spirit." },
  { image: img("amenity-jogging-track"), title: "Fitness Track", text: "A better way to keep your day moving." },
  { image: img("amenity-kids-play-area"), title: "Kids' Play Area", text: "Little feet, big adventures, endless play." },
  { image: img("amenity-open-gym"), title: "Open-Air Gym", text: "Step out, work out, feel the difference." },
  { image: img("amenity-senior-citizen-sitting-area"), title: "Senior Citizen Corner", text: "A relaxed corner for conversations that matter." },
];

export const moreAmenities = [
  "Chit-Chat Corner",
  "Adult's Swing",
  "Hopscotch Zone",
  "Mini Football",
  "Subsoccer Area",
  "Reader's Lounge",
  "Stargazing Deck",
  "Green Walkway",
  "Multifunctional Party Lawn",
  "Party Lounge & Gazebo",
  "Open Pantry",
];

export type Room = { name: string; size: string };

export const configurations = [
  {
    id: "1bhk",
    type: "1 BHK",
    title: "1 BHK Residences",
    blurb: "Smartly designed 1 BHK for a new beginning.",
    image: img("floor-plan-1bhk-3d"),
    features: [
      "Welcoming Living Space",
      "Well-Planned Kitchen",
      "Comfortable Master Bedroom",
      "Attached Master Toilet",
      "Conveniently Planned Toilet",
    ],
    rooms: [
      { name: "Living", size: `9'0" × 15'6"` },
      { name: "Kitchen", size: `7'0" × 10'6"` },
      { name: "Master Bedroom", size: `9'0" × 10'6"` },
      { name: "Master Toilet", size: `7'0" × 4'0"` },
      { name: "Toilet", size: `4'0" × 6'9"` },
      { name: "Balcony Decks", size: `5'0" & 2'6" wide` },
    ] as Room[],
  },
  {
    id: "2bhk",
    type: "2 BHK",
    title: "2 BHK Residences",
    blurb: "Spacious 2 BHK planned to give you more room for the way you live.",
    image: img("floor-plan-2bhk-3d"),
    features: [
      "Spacious Living Room",
      "Dedicated Dining Space",
      "Efficient Kitchen Space",
      "Comfortable Master Bedroom",
      "Cozy Bedroom",
      "Well-Planned Toilet",
    ],
    rooms: [
      { name: "Living", size: `17'6" × 9'0"` },
      { name: "Dining", size: `5'6" × 7'6"` },
      { name: "Kitchen", size: `12'0" × 7'0"` },
      { name: "Master Bedroom", size: `10'0" × 10'3"` },
      { name: "Bedroom", size: `10'0" × 10'0"` },
      { name: "Toilets (2)", size: `4'0" × 7'0"` },
      { name: "Balcony Decks", size: `3'3" & 4'3" wide` },
    ] as Room[],
  },
  {
    id: "3bhk",
    type: "3 BHK",
    title: "3 BHK Residences",
    blurb: "Generous 3 BHK created for a fuller lifestyle with room to grow.",
    image: img("floor-plan-3bhk-3d"),
    features: [
      "Expansive Living Room",
      "Generous Kitchen Space",
      "Spacious Master Bedroom",
      "Serene Master Bedroom",
      "Comfortable Bedroom",
      "Private Master Bathroom",
      "Attached Master Bathroom",
      "Well-Planned Common Bathroom",
    ],
    rooms: [
      { name: "Living", size: `14'9" × 9'0"` },
      { name: "Dining", size: `4'6" × 7'6"` },
      { name: "Kitchen", size: `10'3" × 7'0"` },
      { name: "Master Bedroom 1", size: `11'3" × 9'6"` },
      { name: "Master Bedroom 2", size: `10'3" × 9'0"` },
      { name: "Bedroom", size: `10'3" × 9'0"` },
      { name: "Wardrobe Passage", size: `9'3" × 2'0"` },
      { name: "Balcony Decks", size: `3'3" – 6'9" wide` },
    ] as Room[],
  },
];

export const floorPlans = [
  ...configurations.map((c) => ({ id: c.id, label: `${c.type} Isometric`, image: c.image, rooms: c.rooms, ratio: "wide" as const })),
  {
    id: "typical",
    label: "Typical Floor Plan",
    image: img("floor-plan-typical-floor"),
    rooms: [
      { name: "Common Passage", size: `5'0" wide` },
      { name: "Lifts", size: "2 lifts" },
    ] as Room[],
    ratio: "wide" as const,
  },
  {
    id: "first",
    label: "First Floor Plan",
    image: img("floor-plan-first-floor"),
    rooms: [
      { name: "Use", size: "Multi-purpose rooms" },
      { name: "Common Passage", size: `5'0" wide` },
    ] as Room[],
    ratio: "wide" as const,
  },
];

export const nearby = [
  {
    group: "Shopping & Retail",
    icon: "bag",
    places: [
      "Reliance Digital — 02 mins",
      "D-Mart — 04 mins",
      "Westside — 03 mins",
      "Zudio — 04 mins",
      "Croma — 04 mins",
      "Skechers — 03 mins",
      "Club One — 04 mins",
    ],
  },
  {
    group: "Food & Dining",
    icon: "food",
    places: ["McDonald's — 04 mins", "BBQ Nation — 02 mins", "Starbucks — 02 mins", "KFC — 02 mins", "Pizza Hut — 01 min"],
  },
  { group: "Connectivity", icon: "train", places: ["Virar Railway Station — 06 mins"] },
  {
    group: "Education",
    icon: "school",
    places: [
      "Viva College — 04 mins",
      "Gurukul School — 03 mins",
      "Samarth School — 05 mins",
      "Rustomjee School — 07 mins",
      "Expert International School — 02 mins",
      "John XXIII — 02 mins",
      "Utkarsha Vidyalaya School — 03 mins",
    ],
  },
  {
    group: "Spiritual Destinations",
    icon: "temple",
    places: ["Jain Temple — 02 mins", "Siddhivinayak Temple — 08 mins", "Dwarkadish Temple — 20 mins"],
  },
  {
    group: "Weekend Escapes",
    icon: "beach",
    places: ["Arnala Beach — 27 mins", "Navapur Beach — 26 mins", "Kalamb Beach — 33 mins", "Rajodi Beach — 28 mins"],
  },
  { group: "Healthcare", icon: "health", places: ["Global Hospital"] },
] as const;

export const infrastructure = [
  { image: img("infra-bullet-train"), title: "Virar–Ahmedabad Bullet Train", text: "High-speed rail connectivity." },
  { image: img("infra-coastal-road"), title: "Virar–Versova Coastal Road", text: "Enhanced Mumbai connectivity & faster commutes." },
  { image: img("infra-virar-delhi-expressway"), title: "Virar–Delhi Expressway", text: "Stronger Mumbai–Delhi connectivity." },
  { image: img("infra-metro"), title: "Virar–Bhayandar Metro Line 13", text: "Seamless urban connectivity across Mumbai." },
  { image: img("infra-airport"), title: "Mumbai's 3rd Proposed International Airport", text: "Proposed at Kore Beach, near Virar." },
  { image: img("infra-dahanu-railway"), title: "Virar–Dahanu Railway Line", text: "Strengthening connectivity & regional development." },
  { image: img("infra-vadhavan-port"), title: "Vadhavan Port", text: "One of Asia's largest ports." },
  { image: img("infra-urban-transit-corridor"), title: "Virar–Alibaug Multimodal Corridor", text: "Strengthening regional connectivity & accessibility." },
];

export const investReasons = [
  { image: img("infra-enhanced-connectivity"), title: "Enhanced Connectivity", text: "Faster & seamless travel." },
  { image: img("infra-economic-growth"), title: "Economic Growth", text: "Boost to real estate & business." },
  { image: img("infra-better-infrastructure"), title: "Better Infrastructure", text: "Modern, efficient & future-ready." },
  { image: img("balcony-couple-sunrise"), title: "Higher Quality of Life", text: "Better access, better living." },
];

export const faqs = [
  {
    q: "Where is Viva Anant located?",
    a: "Viva Anant is located at Y K Nagar, NX Road, Virar (West), Vasai-Virar, Maharashtra 401303 — close to Virar railway station, Narangi Bypass Road, reputed schools, Global Hospital and daily shopping destinations.",
  },
  {
    q: "What configurations are available at Viva Anant?",
    a: "Viva Anant offers thoughtfully planned 1 BHK, 2 BHK and 3 BHK residences, each with wide balcony decks. Share your details to receive carpet areas and the latest price sheet.",
  },
  {
    q: "Is Viva Anant registered under MahaRERA?",
    a: "Yes. Viva Anant is registered under MahaRERA with registration number PM1240002600876, available on the MahaRERA website.",
  },
  {
    q: "What amenities does Viva Anant offer?",
    a: "Viva Anant offers 15+ lifestyle amenities on a landscaped rooftop, including a box cricket turf, jogging pathway, open-air gym, kids' play area, senior citizens' seating, pergola alcoves and lawn lounges, along with a grand entrance lobby.",
  },
  {
    q: "Who is the developer of Viva Anant?",
    a: "Viva Anant is a project by Viva Group, with a legacy of 35+ years and 7,000+ homes delivered, and a strong presence across Vasai-Virar.",
  },
  {
    q: "How can I get the price and brochure for Viva Anant?",
    a: "Click any 'Enquire Now' or 'Download Brochure' button, or call +91 91588 22478. Our relationship manager will share the price sheet, brochure and arrange a site visit.",
  },
];
