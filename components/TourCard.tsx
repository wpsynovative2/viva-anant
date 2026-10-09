"use client";

import Image from "next/image";
import Icon from "./Icon";
import { hasSubmittedEnquiry, openEnquiry } from "./EnquiryButton";

/** Virtual-tour card: asks for an enquiry first, then opens the tour on later clicks. */
export default function TourCard({ id, type, image, href }: { id: string; type: string; image: string; href: string }) {
  function onClick() {
    if (hasSubmittedEnquiry()) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      openEnquiry({ source: `Virtual Tour - ${type}`, title: `Unlock the ${type} Virtual Tour`, tour: id });
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="group block w-full cursor-pointer overflow-hidden rounded-[2rem] bg-white/5 text-left ring-1 ring-white/10 transition hover:bg-white/10"
    >
      <div className="bg-bokeh relative aspect-[16/10]">
        <Image
          src={image}
          alt={`${type} virtual tour preview, Viva Anant Virar West`}
          fill
          sizes="(min-width: 768px) 30vw, 90vw"
          className="object-contain p-4 transition duration-700 group-hover:scale-105"
        />
        <span className="absolute inset-0 grid place-items-center bg-plum-950/30 transition group-hover:bg-plum-950/50">
          <span className="flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 text-sm font-semibold text-plum-800 shadow-lg transition group-hover:scale-105">
            <Icon name="expand" /> 360° Tour
          </span>
        </span>
      </div>
      <div className="flex items-center justify-between gap-4 p-6">
        <div>
          <h3 className="font-display text-3xl text-white">{type}</h3>
          <p className="text-sm text-white/65">Virtual tour</p>
        </div>
        <span className="flex items-center gap-2 rounded-full bg-blush-300 px-5 py-2.5 text-sm font-semibold text-plum-900 transition group-hover:gap-3">
          Start Tour <Icon name="arrow" />
        </span>
      </div>
    </button>
  );
}
