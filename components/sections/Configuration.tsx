import Image from "next/image";
import EnquiryButton from "../EnquiryButton";
import Icon from "../Icon";
import { Container, SectionHeading } from "../ui";
import { configurations } from "@/lib/content";

export default function Configuration() {
  return (
    <section id="configuration" aria-labelledby="configuration-title" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-plum-200/50 blur-3xl" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading
          align="center"
          eyebrow="Configurations"
          lead="1, 2 & 3 BHK homes for"
          id="configuration-title"
          title={<span className="italic">Every Version Of Life</span>}
        />
        <p data-reveal className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-ink/70">
          Whether life is just taking shape or taking a new turn, choose the space that fits along the way.
        </p>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {configurations.map((c, i) => (
            <article
              key={c.id}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
              className={`group relative flex flex-col overflow-hidden rounded-[2rem] border bg-white transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-plum-900/15 ${
                i === 1 ? "border-plum-300 shadow-xl shadow-plum-900/10" : "border-plum-100"
              }`}
            >
              {i === 1 && (
                <span className="absolute right-5 top-5 z-10 rounded-full bg-blush-300 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-plum-900">
                  Most Enquired
                </span>
              )}
              <div className="bg-bokeh relative aspect-[16/10]">
                <Image
                  src={c.image}
                  alt={`${c.type} isometric floor plan at Viva Anant, Virar West`}
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-contain p-4 transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-4xl text-plum-800">{c.type}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{c.blurb}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink/80">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <Icon name="check" className="shrink-0 text-plum-500" /> {f}
                    </li>
                  ))}
                </ul>
                <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-plum-100 pt-5">
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-plum-500">Carpet Area</dt>
                    <dd className="mt-1 text-sm font-semibold text-ink">On Request</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-plum-500">Price</dt>
                    <dd className="mt-1 text-sm font-semibold text-ink">On Request</dd>
                  </div>
                </dl>
                <div className="mt-auto grid gap-2 pt-7 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <EnquiryButton source={`Configuration - ${c.type} Price`} title={`Get ${c.type} Price`}>
                    Get Price
                  </EnquiryButton>
                  <EnquiryButton source={`Configuration - ${c.type} Plan`} title={`Download ${c.type} Floor Plan`} variant="outline">
                    <Icon name="download" /> Floor Plan
                  </EnquiryButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
