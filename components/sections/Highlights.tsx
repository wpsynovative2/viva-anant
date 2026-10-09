import Image from "next/image";
import EnquiryButton from "../EnquiryButton";
import Icon from "../Icon";
import { Container, SectionHeading } from "../ui";
import { balconyImages, highlights, lifestyle, specifications } from "@/lib/content";

export default function Highlights() {
  return (
    <section id="highlights" aria-labelledby="highlights-title" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Project Highlights" lead="A home that grows" id="highlights-title" title={<span className="italic">With Life</span>} />
          <p data-reveal className="max-w-md leading-relaxed text-ink/70">
            From the planning of each home to the spaces beyond it, Viva Anant brings together practical design, open-air living,
            lifestyle amenities and thoughtful safety provisions.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <li
              key={h.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 4) * 90}ms` }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-plum-100 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:border-transparent hover:shadow-2xl hover:shadow-plum-900/15"
            >
              <span className="bg-brand-gradient absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" aria-hidden="true" />
              <span className="blob relative grid h-14 w-14 place-items-center bg-blush-200 text-2xl text-plum-700 transition duration-500 group-hover:bg-blush-300">
                <Icon name={h.icon} />
              </span>
              <h3 className="font-display relative mt-6 text-xl text-plum-800 transition group-hover:text-white">{h.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink/65 transition group-hover:text-white/75">{h.text}</p>
            </li>
          ))}
        </ul>
      </Container>

      {/* Lifestyle stories from the brochure */}
      <Container className="mt-24 sm:mt-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lifestyle.map((l, i) => (
            <figure
              key={l.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 2) * 120}ms` }}
              className={`group relative overflow-hidden rounded-[2rem] ${i === 0 ? "md:col-span-2 lg:col-span-3" : i === 3 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className={`relative ${i === 0 ? "aspect-[4/3] sm:aspect-[2/1]" : "aspect-[4/3]"}`}>
                <Image
                  src={l.image}
                  alt={`${l.eyebrow} at Viva Anant — ${l.text}`}
                  fill
                  sizes={i === 0 ? "(min-width: 1280px) 1216px, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
                  className="object-cover transition duration-[1.4s] group-hover:scale-105"
                />
              </div>
              <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-plum-950/95 via-plum-950/60 via-55% to-transparent p-6 text-white [text-shadow:0_2px_12px_rgba(10,4,40,0.6)] sm:p-10">
                <span className="eyebrow self-start rounded-full bg-plum-950/55 px-3 py-1.5 text-blush-200 backdrop-blur-sm">{l.eyebrow}</span>
                <span className={`font-display mt-2 italic leading-tight ${i === 0 ? "text-4xl sm:text-5xl" : "text-3xl"}`}>{l.title}</span>
                <span className="mt-2 max-w-md text-sm text-white/90 sm:text-base">{l.text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>

      {/* Balcony */}
      <Container className="mt-24 sm:mt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Wide Balcony Decks" lead="Your home, with more room" title={<span className="italic">To Breathe</span>} />
            <p data-reveal className="mt-6 leading-relaxed text-ink/70">
              Step outside into more openness with wide balcony decks that bring fresh air, open views, and a refreshing pause in
              everyday life.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-5">
            {balconyImages.map((b, i) => (
              <div
                key={b.image}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
                className={`arch relative aspect-[4/5] overflow-hidden shadow-xl shadow-plum-900/20 ${i === 1 ? "translate-y-8" : ""}`}
              >
                <Image src={b.image} alt={b.alt} fill sizes="(min-width: 1024px) 22vw, 33vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Specifications */}
      <Container className="mt-28 sm:mt-36">
        <div className="bg-bokeh rounded-[2.5rem] p-6 sm:p-12 lg:p-16">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Specifications" lead="Home features that" title={<span className="italic">Evolve With You</span>} />
            <EnquiryButton source="Specifications" title="Get Detailed Specifications" variant="outline" className="self-start lg:self-auto">
              <Icon name="download" /> Detailed Specifications
            </EnquiryButton>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {specifications.map((s, i) => (
              <details
                key={s.title}
                data-reveal
                open={i < 3}
                className="group rounded-3xl bg-white/80 p-6 shadow-sm backdrop-blur [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-plum-800">{s.title}</h3>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-plum-50 text-plum-700 transition group-open:rotate-45">
                    <Icon name="plus" />
                  </span>
                </summary>
                <ul className="mt-4 space-y-2.5">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-3 text-sm leading-relaxed text-ink/75">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blush-400" />
                      {it}
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
