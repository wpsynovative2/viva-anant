import Image from "next/image";
import EnquiryButton from "../EnquiryButton";
import Icon from "../Icon";
import { Container, Wave } from "../ui";
import { heroPoints } from "@/lib/content";

const quickFacts = [
  { k: "Configurations", v: "1, 2 & 3 BHK" },
  { k: "Amenities", v: "15+ Rooftop" },
  { k: "Location", v: "Virar (West)" },
  { k: "Price", v: "On Request" },
];

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-plum-950">
      <Image
        src="/images/building-sunset-view.webp"
        alt="Viva Anant high-rise tower at sunset, Y K Nagar, Virar West"
        fill
        preload
        fetchPriority="high"
        sizes="100vw"
        quality={75}
        className="-z-20 object-cover object-[70%_center] md:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-plum-950/90 via-plum-900/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-plum-950/80 to-transparent" />


      <Container className="flex flex-1 flex-col justify-center pb-72 pt-32 sm:pb-60">
        <div className="max-w-2xl text-white">
          <p className="eyebrow flex items-center gap-3 text-blush-300" style={{ animation: "dialog-in 0.9s 0.2s both" }}>
            <span className="h-px w-10 bg-blush-300" /> Y K Nagar · Virar (West)
          </p>
          <div className="relative mt-6 w-64 sm:w-96" style={{ animation: "dialog-in 1s 0.35s both" }}>
            <Image src="/images/logo-viva-anant-white.webp" alt="" width={1412} height={640} sizes="384px" loading="eager" className="h-auto w-full drop-shadow-[0_8px_30px_rgba(10,4,40,0.5)]" />
          </div>
          <p className="font-serif mt-5 text-base uppercase tracking-[0.3em] text-white/85 sm:text-xl" style={{ animation: "dialog-in 1s 0.4s both" }}>
            Made for every stage of life
          </p>
          <h1 id="hero-title" className="mt-8 max-w-xl text-lg font-semibold leading-snug text-white sm:text-2xl" style={{ animation: "dialog-in 1s 0.45s both" }}>
            Step Into A Life Of Possibilities With 1, 2 &amp; 3 BHK Homes in Virar West
          </h1>
          <ul className="mt-4 max-w-lg space-y-1.5 text-sm leading-relaxed text-white/80 sm:text-base" style={{ animation: "dialog-in 1s 0.5s both" }}>
            {heroPoints.map((p) => (
              <li key={p} className="flex gap-2.5">
                <Icon name="check" className="mt-1 shrink-0 text-blush-300" /> {p}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3" style={{ animation: "dialog-in 1s 0.65s both" }}>
            <EnquiryButton source="Hero - Enquire" title="Get Exclusive Price Details" variant="blush">
              Enquire Now <Icon name="arrow" />
            </EnquiryButton>
            <EnquiryButton source="Brochure" title="Download E-Brochure" variant="ghost">
              <Icon name="download" /> Download Brochure
            </EnquiryButton>
          </div>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-0">
        <Container className="relative z-10 pb-16 sm:pb-6">
          <dl className="grid grid-cols-2 overflow-hidden rounded-3xl border border-white/15 bg-white/10 text-white backdrop-blur-md md:grid-cols-4">
            {quickFacts.map((f, i) => (
              <div key={f.k} className={`px-5 py-4 sm:px-7 sm:py-5 ${i % 2 ? "border-l" : ""} ${i > 1 ? "border-t md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""} border-white/15`}>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-blush-300/90">{f.k}</dt>
                <dd className="font-display mt-1 text-lg sm:text-2xl">{f.v}</dd>
              </div>
            ))}
          </dl>
        </Container>
        <Wave fill="var(--color-cream)" />
      </div>
    </section>
  );
}
