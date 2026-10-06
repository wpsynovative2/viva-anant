import Image from "next/image";
import EnquiryButton from "../EnquiryButton";
import Icon from "../Icon";
import { Butterfly, Container, SectionHeading, Wave } from "../ui";
import { aboutPoints, legacyStats } from "@/lib/content";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative">
      <Wave fill="#f1e6fb" />
      <div className="bg-bokeh relative overflow-hidden pb-24 pt-10 sm:pb-32">
        <Butterfly className="right-[8%] top-10 hidden h-14 w-14 sm:block" />
        <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div data-reveal className="relative order-2 lg:order-1">
            <div className="arch relative mx-auto aspect-[3/4] max-w-md overflow-hidden shadow-2xl shadow-plum-900/30">
              <Image
                src="/images/building-road-view-night.webp"
                alt="Viva Anant tower lit up at night with its landscaped entrance, Virar West"
                fill
                sizes="(min-width: 1024px) 36vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 right-0 w-56 overflow-hidden rounded-3xl border-8 border-white shadow-xl sm:right-6 sm:w-64">
              <Image
                src="/images/retail-shops-facade-evening.webp"
                alt="Porte-cochère and retail frontage at the Viva Anant entrance"
                width={2560}
                height={1280}
                sizes="256px"
                className="aspect-[4/3] object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow="About the Project" lead="A beautiful evolution" id="about-title" title={<span className="italic">Begins Here</span>} />
            <p data-reveal className="mt-8 inline-block rounded-3xl bg-plum-800 px-5 py-2 text-xs font-semibold uppercase leading-relaxed tracking-[0.2em] text-white">
              Designed around the many chapters of everyday life
            </p>
            <ul className="mt-8 space-y-5">
              {aboutPoints.map((p, i) => (
                <li key={p.title} data-reveal style={{ ["--reveal-delay" as string]: `${i * 80}ms` }} className="flex gap-4">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-plum-700 text-white">
                    <Icon name="check" className="text-sm" />
                  </span>
                  <p className="leading-relaxed text-ink/75">
                    <strong className="block text-sm font-semibold uppercase tracking-[0.15em] text-plum-800">{p.title}</strong>
                    {p.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>

        {/* Legacy of Viva Group */}
        <Container className="mt-28">
          <div data-reveal className="bg-brand-gradient relative overflow-hidden rounded-[2.5rem] text-white shadow-2xl shadow-plum-900/30">
            <Image
              src="/images/viva-group-legacy-construction.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20 mix-blend-screen"
            />
            <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:p-16">
              <div>
                <p className="eyebrow text-blush-300">Viva Group</p>
                <h3 className="mt-4 leading-none">
                  <span className="font-serif block text-lg uppercase tracking-[0.28em] text-white/85 sm:text-2xl">The legacy behind</span>
                  <span className="font-display mt-2 block text-5xl font-semibold italic sm:text-6xl">The Wings</span>
                </h3>
                <p className="mt-6 max-w-md leading-relaxed text-white/75">
                  Backed by decades of real estate experience and a strong record of delivered projects, Viva Group brings its
                  expertise to every new chapter.
                </p>
                <EnquiryButton source="About - Developer" title="Talk to Our Sales Team" variant="blush" className="mt-8">
                  Talk to Us <Icon name="arrow" />
                </EnquiryButton>
              </div>
              <div>
                <dl className="grid grid-cols-2 gap-4">
                  {legacyStats.map((s) => (
                    <div key={s.label} className="flex flex-col-reverse rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                      <dt className="mt-2 text-sm font-semibold uppercase tracking-[0.15em]">
                        {s.label} <span className="block text-[11px] font-normal tracking-[0.2em] text-white/60">{s.sub}</span>
                      </dt>
                      <dd className="font-display text-4xl text-blush-300 sm:text-5xl">
                        {"value" in s && s.value !== undefined ? `${s.value.toLocaleString("en-IN")}${s.suffix}` : s.text}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Wave fill="var(--color-cream)" className="-mt-px bg-[#f1e6fb]" />
    </section>
  );
}
