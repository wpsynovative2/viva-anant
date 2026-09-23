"use client";

import type { ReactNode } from "react";

export const ENQUIRE_EVENT = "va:enquire";

export type EnquireDetail = { source: string; title?: string };

export function openEnquiry(detail: EnquireDetail) {
  window.dispatchEvent(new CustomEvent<EnquireDetail>(ENQUIRE_EVENT, { detail }));
}

const variants = {
  primary:
    "bg-plum-700 text-white hover:bg-plum-600 shadow-[0_10px_30px_-10px_rgba(88,16,116,0.7)]",
  blush: "bg-blush-300 text-plum-900 hover:bg-white shadow-[0_10px_30px_-12px_rgba(244,190,206,0.9)]",
  outline: "border border-plum-700/30 text-plum-700 hover:bg-plum-700 hover:text-white",
  ghost: "border border-white/40 text-white hover:bg-white hover:text-plum-800",
} as const;

/** Any button on the page that opens the popup enquiry form. */
export default function EnquiryButton({
  children,
  source,
  title,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  source: string;
  title?: string;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => openEnquiry({ source, title })}
      className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blush-300 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
