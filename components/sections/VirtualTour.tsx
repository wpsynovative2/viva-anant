import Image from "next/image";
import Icon from "../Icon";
import { Butterfly, Container, SectionHeading, Wave } from "../ui";
import { virtualTours, vrPoints } from "@/lib/content";

export default function VirtualTour() {
  return (
    <section id="virtual-tour" aria-labelledby="virtual-tour-title" className="relative">
      <Wave fill="var(--color-plum-700)" />
      <div className="bg-brand-gradient-v relative overflow-hidden pb-24 pt-10 text-white sm:pb-32">
        <Butterfly className="right-[8%] top-16 hidden h-12 w-12 opacity-80 lg:block" />
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="VR Experience"
            lead="A virtual first look at"
            id="virtual-tour-title"
            title={<span className="italic">Your Next Chapter</span>}
          />

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {vrPoints.map((p, i) => (
              <li
                key={p.title}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                className="rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-blush-300">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{p.text}</p>
              </li>
            ))}
          </ul>

          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {virtualTours.map((t, i) => (
              <li key={t.id} data-reveal style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}>
                <a
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-[2rem] bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  <div className="bg-bokeh relative aspect-[16/10]">
                    <Image
                      src={t.image}
                      alt={`${t.type} virtual tour preview, Viva Anant Virar West`}
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
                      <h3 className="font-display text-3xl">{t.type}</h3>
                      <p className="text-sm text-white/65">Virtual tour</p>
                    </div>
                    <span className="flex items-center gap-2 rounded-full bg-blush-300 px-5 py-2.5 text-sm font-semibold text-plum-900 transition group-hover:gap-3">
                      Start Tour <Icon name="arrow" />
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <Wave fill="var(--color-cream)" className="-mt-px bg-plum-950" />
    </section>
  );
}
