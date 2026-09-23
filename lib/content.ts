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

export const evolutionLines = [
  "It begins as four walls,",
  "then becomes a beginning,",
  "then a family,",
  "then a thousand little worlds within it.",
];

export const aboutPoints = [
  { title: "Modern architecture", text: "Planned smartly for the way you live." },
  { title: "15+ lifestyle amenities", text: "With something for every age and interest." },
  { title: "Wide balconies", text: "That give your home a dedicated outdoor extension." },
  {
    title: "A location in Virar West",
    text: "With strong infrastructure and development around it.",
  },
  {
    title: "Easy connectivity",
    text: "To the railway station, highways and the places you visit every day.",
  },
];

export const legacyStats = [
  { value: 35, suffix: "+", label: "Years", sub: "of legacy" },
  { value: 7000, suffix: "+", label: "Homes", sub: "delivered" },
  { text: "Diverse", label: "Business", sub: "presence" },
  { text: "Strong", label: "Vasai–Virar", sub: "presence" },
];

export const highlights = [
  { icon: "building", title: "Modern Architecture", text: "A striking high-rise elevation planned smartly for the way you live." },
  { icon: "sparkle", title: "15+ Lifestyle Amenities", text: "A landscaped rooftop with something for every age and interest." },
  { icon: "balcony", title: "Wide Balcony Decks", text: "Glass-railed balconies with spotlight provisions in every home." },
  { icon: "lobby", title: "Grand Entrance Lobby", text: "A hotel-style reception that gives you the first feeling of home." },
  { icon: "shield", title: "Safety & Convenience", text: "Visitor management system, fire sprinklers and ELCB protection." },
  { icon: "bolt", title: "Generator Backup", text: "Power backup for every apartment, so life never pauses." },
  { icon: "store", title: "Retail Frontage", text: "Everyday conveniences right at the ground-floor retail podium." },
  { icon: "train", title: "Close to Virar Station", text: "Easy access to the railway station, highways and daily needs." },
] as const;

export const lifestyle = [
  {
    image: img("entrance-lobby-reception"),
    eyebrow: "Grand Entrance",
    title: "Lobby",
    text: "That gives you the first feeling of home.",
  },
  {
    image: img("family-living-room"),
    eyebrow: "Living Room Diaries",
    title: "Home",
    text: "From little gatherings to growing traditions, this is where family life finds its wings.",
  },
  {
    image: img("lifestyle-kitchen-mother-daughter"),
    eyebrow: "The Heart of Home",
    title: "Kitchen",
    text: "Granite platform, stainless-steel sink and 7 ft wall tiles for everyday joy.",
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
  { image: img("amenity-box-cricket"), title: "Box Cricket Turf", text: "A netted rooftop pitch for weekend matches and coaching sessions." },
  { image: img("amenity-jogging-track"), title: "Jogging Pathway", text: "A landscaped loop to start every morning on the right foot." },
  { image: img("amenity-kids-play-area"), title: "Kids' Play Area", text: "Safe, soft-floored play zones with swings and activity walls." },
  { image: img("amenity-open-gym"), title: "Open-Air Gym", text: "Fitness stations under the open sky." },
  { image: img("amenity-senior-citizen-sitting-area"), title: "Senior Citizens' Area", text: "Quiet, green seating corners for calm conversations." },
];

export const moreAmenities = [
  "Landscaped rooftop garden",
  "Pergola seating alcoves",
  "Lawn with sit-out lounges",
  "Outdoor party & dining deck",
  "Reflexology / stepping-stone path",
  "Gazebo lounge",
  "Grand entrance lobby",
  "Reception & visitor management",
  "Generator power backup",
];

export type Room = { name: string; size: string };

export const configurations = [
  {
    id: "1bhk",
    type: "1 BHK",
    title: "1 BHK Residences",
    blurb: "Thoughtfully designed 1 BHK with a 5 ft balcony deck — the perfect first home.",
    image: img("floor-plan-1bhk-3d"),
    features: ["Living with 5' wide balcony deck", "Attached master toilet", "Separate kitchen"],
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
    blurb: "Spacious 2 BHK homes with wide balcony decks in every room.",
    image: img("floor-plan-2bhk-3d"),
    features: ["Balcony deck in every room", "Separate dining space", "2 bedrooms with 2 toilets"],
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
    blurb: "Generous 3 BHK homes with up to 6'9\" wide balcony decks and walk-in wardrobe space.",
    image: img("floor-plan-3bhk-3d"),
    features: ["Up to 6'9\" wide balcony decks", "Two master suites", "Wardrobe passage"],
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
    group: "Education",
    icon: "school",
    places: [
      "Gurukul International School",
      "Expert International School",
      "John XXIII School",
      "Utkarsha Vidyalaya School",
      "New Viva College",
    ],
  },
  { group: "Healthcare", icon: "health", places: ["Global Hospital"] },
  {
    group: "Shopping & Dining",
    icon: "bag",
    places: ["D-Mart", "Westside", "Zudio", "Croma", "Reliance Digital", "Starbucks", "BBQ Nation", "KFC · McDonald's · Pizza Hut"],
  },
  {
    group: "Transit & Leisure",
    icon: "train",
    places: ["Virar Railway Station", "Narangi Bypass Road", "Club One", "Towards Jivdani Temple", "Towards Highway"],
  },
] as const;

export const infrastructure = [
  { image: img("infra-coastal-road"), title: "Virar–Versova Coastal Road", text: "Enhanced Mumbai connectivity & faster commutes." },
  { image: img("infra-bullet-train"), title: "Mumbai–Ahmedabad Bullet Train", text: "High-speed rail connectivity via the Virar station." },
  { image: img("infra-virar-delhi-expressway"), title: "Virar–Delhi Expressway", text: "Stronger Mumbai–Delhi road connectivity." },
  { image: img("infra-vadhavan-port"), title: "Vadhavan Port", text: "One of Asia's largest upcoming ports." },
  { image: img("infra-metro"), title: "Metro Connectivity", text: "Proposed metro links for seamless city travel." },
  { image: img("infra-airport"), title: "Airport Access", text: "Improving access to the region's airports." },
  { image: img("infra-dahanu-railway"), title: "Virar–Dahanu Rail Expansion", text: "Added suburban rail capacity on the western line." },
  { image: img("infra-urban-transit-corridor"), title: "Multimodal Transit Corridor", text: "Proposed Virar–Alibaug corridor across the MMR." },
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
