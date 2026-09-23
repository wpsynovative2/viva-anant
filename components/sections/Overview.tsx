import Image from "next/image";
import EnquiryButton from "../EnquiryButton";
import Icon from "../Icon";
import { Container, SectionHeading } from "../ui";
import { evolutionLines, overviewFacts } from "@/lib/content";

export default function Overview() {
  return (
    <section id="overview" aria-labelledby="overview-title" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-40 top-10 h-[28rem] w-[28rem] rounded-full bg-blush-200/60 blur-3xl" aria-hidden="true" />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="Project Overview" lead="The dream of something beautiful taking" id="overview-title" title={<span className="italic">Shape</span>} />

          <p data-reveal className="mt-8 inline-block rounded-full bg-plum-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white">
            A home has its own evolution
          </p>
          <div data-reveal className="font-serif mt-6 space-y-1 text-xl uppercase tracking-[0.12em] text-plum-800/90 sm:text-2xl">
            {evolutionLines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>
          <p data-reveal className="mt-6 max-w-xl leading-relaxed text-ink/75">
            As life transforms, home transforms with it. Life keeps evolving, and home evolves right along with it. Viva Anant brings
            thoughtfully planned <strong className="text-plum-700">1, 2 &amp; 3 BHK homes in Virar West</strong> — designed by Viva
            Group for every stage of life, with wide balcony decks, a grand entrance lobby and 15+ lifestyle amenities on a
            landscaped rooftop.
          </p>

          <dl data-reveal className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-plum-200/70 sm:grid-cols-3">
            {overviewFacts.map((f) => (
              <div key={f.label} className="bg-white p-5">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-plum-500">{f.label}</dt>
                <dd className="font-display mt-1.5 text-lg leading-tight text-plum-800 sm:text-xl">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div data-reveal className="mt-8 flex flex-wrap gap-3">
            <EnquiryButton source="Overview - Brochure" title="Download E-Brochure">
              <Icon name="download" /> Download Brochure
            </EnquiryButton>
            <EnquiryButton source="Overview - Site Visit" title="Book a Site Visit" variant="outline">
              Book a Site Visit
            </EnquiryButton>
          </div>
        </div>

        <div data-reveal className="relative mx-auto w-full max-w-lg">
          <div className="blob relative aspect-[4/5] overflow-hidden shadow-2xl shadow-plum-900/25">
            <Image
              src="/images/building-road-view-day.webp"
              alt="Viva Anant tower elevation seen from the road in daylight, Virar West"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="blob-2 absolute -bottom-10 -left-6 w-44 overflow-hidden border-8 border-cream shadow-xl sm:w-56">
            <Image
              src="/images/hero-caterpillar-butterfly-shadow.webp"
              alt="Caterpillar casting a butterfly shadow — the Viva Anant evolution motif"
              width={2560}
              height={1280}
              sizes="224px"
              className="aspect-square object-cover object-[80%_60%]"
            />
          </div>
          <div className="absolute -right-2 top-8 rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur sm:-right-6">
            <p className="font-display text-3xl text-plum-700">15+</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/60">Lifestyle amenities</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
