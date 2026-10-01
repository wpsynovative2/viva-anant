import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const images = [
  "building-sunset-view",
  "building-road-view-night",
  "building-road-view-day",
  "entrance-lobby-reception",
  "rooftop-amenities-aerial-view",
  "amenity-box-cricket",
  "amenity-jogging-track",
  "amenity-kids-play-area",
  "amenity-open-gym",
  "amenity-senior-citizen-sitting-area",
  "family-living-room",
  "floor-plan-1bhk-3d",
  "floor-plan-2bhk-3d",
  "floor-plan-3bhk-3d",
  "location-map",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: images.map((i) => `${site.url}/images/${i}.webp`),
    },
    { url: `${site.url}/privacy-policy`, lastModified: new Date("2026-10-01"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/terms-and-conditions`, lastModified: new Date("2026-10-01"), changeFrequency: "yearly", priority: 0.3 },
  ];
}
