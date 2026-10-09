// Single source of truth for project facts used across the page, metadata and schema.
// All details are taken from the VIVA ANANT coffee-table brochure.

export const site = {
  name: "Viva Anant",
  developer: "Viva Group",
  tagline: "1, 2 & 3 BHK Homes, Made for Every Stage of Life",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.vivaanant.in").replace(/\/$/, ""),
  phoneDisplay: "+91 80950 50929",
  phoneE164: "+918095050929",
  whatsapp: "918095050929",
  rera: "PM1240002600876",
  reraUrl: "https://maharera.maharashtra.gov.in/",
  address: {
    street: "Y K Nagar, NX Road",
    locality: "Virar (West)",
    city: "Vasai-Virar",
    region: "Maharashtra",
    postalCode: "401303",
    country: "IN",
  },
  addressLine: "Y K Nagar NX Rd, Virar (West), Vasai-Virar, 401303, Maharashtra",
  mapsQuery: "Y K Nagar, Virar West, Vasai-Virar, Maharashtra 401303",
  description:
    "Viva Anant by Viva Group — premium 1, 2 & 3 BHK flats in Y K Nagar NX, Virar West. 16+ rooftop lifestyle amenities, wide balcony decks, grand entrance lobby and easy access to Virar station. MahaRERA No. PM1240002600876.",
  keywords: [
    "Viva Anant",
    "Viva Anant Virar",
    "Viva Group Virar",
    "1 BHK flats in Virar West",
    "2 BHK flats in Virar West",
    "3 BHK flats in Virar West",
    "new projects in Virar West",
    "flats near Virar station",
    "Y K Nagar NX Virar",
    "Y K Nagar Virar",
    "residential projects Vasai-Virar",
    "MahaRERA PM1240002600876",
    "flats with balcony in Virar",
  ],
} as const;

export const telHref = `tel:${site.phoneE164}`;
export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hi, I'm interested in Viva Anant, Virar West. Please share details."
)}`;
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.mapsQuery
)}`;

export const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#about", label: "About" },
  { href: "#highlights", label: "Highlights" },
  { href: "#amenities", label: "Amenities" },
  { href: "#configuration", label: "Configuration" },
  { href: "#floor-plans", label: "Floor Plans" },
  { href: "#connectivity", label: "Location" },
  { href: "#contact", label: "Contact" },
] as const;

export const disclaimer =
  "This website is for general information and promotional purposes only. Images, illustrations, specifications, amenities, layouts, plans, landscaping, furniture, fixtures and other details shown are indicative/artist's impressions and may vary subject to approvals, final design and execution. Actual project details shall be as per the approved plans and registered MahaRERA project documents. Distances, travel times and information regarding proposed/planned infrastructure are indicative and subject to change. Purchasers are advised to independently verify all project details, approvals, specifications, carpet areas, timelines and other particulars before making any decision or payment. The registered project documents and applicable law shall prevail.";
