import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";

/** Section heading in the brochure style: spaced serif lead-in + large display word with a swash. */
export function SectionHeading({
  eyebrow,
  lead,
  title,
  align = "left",
  tone = "light",
  as: Tag = "h2",
  id,
  className = "",
}: {
  eyebrow?: string;
  lead?: string;
  title: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  id?: string;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div data-reveal className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && (
        <p className={`eyebrow mb-4 flex items-center gap-3 ${align === "center" ? "justify-center" : ""} ${dark ? "text-blush-300" : "text-plum-500"}`}>
          <span className={`h-px w-8 ${dark ? "bg-blush-300" : "bg-plum-500"}`} />
          {eyebrow}
          {align === "center" && <span className={`h-px w-8 ${dark ? "bg-blush-300" : "bg-plum-500"}`} />}
        </p>
      )}
      <Tag id={id} className="leading-none">
        {lead && (
          <span
            className={`font-serif block text-lg font-medium uppercase tracking-[0.28em] sm:text-2xl ${dark ? "text-white/85" : "text-plum-700"}`}
          >
            {lead}
          </span>
        )}
        <span className={`font-display mt-2 block text-[2.6rem] font-semibold leading-[1.05] sm:text-6xl lg:text-7xl ${dark ? "text-white" : "text-plum-800"}`}>
          {title}
        </span>
      </Tag>
      <Swash className={`mt-4 h-5 w-40 ${align === "center" ? "mx-auto" : ""} ${dark ? "text-blush-300" : "text-plum-400"}`} />
    </div>
  );
}

/** Decorative flourish echoing the brochure's calligraphic swashes. */
export function Swash({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 12c18-10 34-10 46 0s26 8 36-2 22-10 30 0 22 10 44-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="4" cy="12" r="3" fill="currentColor" />
      <circle cx="156" cy="10" r="2" fill="currentColor" />
    </svg>
  );
}

/** Organic wave used to join sections, like the hand-drawn edges in the references. */
export function Wave({ fill, flip = false, className = "" }: { fill: string; flip?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className={`block h-10 w-full sm:h-16 lg:h-20 ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0 48c120-30 240-42 380-26s250 50 420 42 290-58 420-54 170 22 220 34V90H0Z"
        style={{ fill }}
      />
    </svg>
  );
}

export function Butterfly({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <div className={`pointer-events-none absolute animate-float ${className}`} style={style} aria-hidden="true">
      <Image src="/images/butterfly-pink.webp" alt="" width={200} height={200} className="h-full w-full object-contain drop-shadow-xl" />
    </div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}
