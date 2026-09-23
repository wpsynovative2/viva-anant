import Image from "next/image";
import EnquiryButton from "../EnquiryButton";
import Icon from "../Icon";
import { Butterfly, Container, SectionHeading, Wave } from "../ui";
import { amenities, moreAmenities } from "@/lib/content";

export default function Amenities() {
  return (
    <section id="amenities" aria-labelledby="amenities-title" className="relative">
      <Wave fill="var(--color-plum-700)" />
      <div className="bg-brand-gradient-v relative overflow-hidden pb-24 pt-10 text-white sm:pb-32">
        <Butterfly className="left-[6%] top-24 hidden h-12 w-12 opacity-80 lg:block" />
        <Butterfly className="right-[10%] top-[45%] h-10 w-10 opacity-70" style={{ animationDelay: "-3s" }} />
        <Container>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              tone="dark"
              eyebrow="15+ Lifestyle Amenities"
              lead="Amenities that let life take"
              id="amenities-title"
              title={<span className="italic">Wings</span>}
            />
            <p data-reveal className="max-w-md leading-relaxed text-white/70">
              A landscaped rooftop designed for every age — play, fitness, calm and celebration, all a lift ride away.
            </p>
          </div>

          <figure data-reveal className="relative mt-14 overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/40">
            <div className="relative aspect-[4/3] sm:aspect-[16/8]">
              <Image
                src="/images/rooftop-amenities-aerial-view.webp"
                alt="Aerial view of the Viva Anant rooftop amenities — box cricket, kids' play area, gym, lawns and pergola seating"
                fill
                sizes="(min-width: 1280px) 1216px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-plum-950/70 px-4 py-2 text-xs text-white/80 backdrop-blur">
              Rooftop amenity deck · Artist&apos;s impression
            </figcaption>
          </figure>
        </Container>

        <div className="mt-10 snap-x snap-mandatory overflow-x-auto pb-6 [scrollbar-width:thin] sm:mt-14">
          <ul className="mx-auto flex w-max gap-5 px-4 sm:px-6 lg:px-8 xl:w-auto xl:max-w-7xl xl:grid xl:grid-cols-5">
            {amenities.map((a, i) => (
              <li
                key={a.title}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                className="group w-72 shrink-0 snap-start overflow-hidden rounded-[1.75rem] bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 xl:w-auto"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={a.image}
                    alt={`${a.title} at Viva Anant, Virar West`}
                    fill
                    sizes="(min-width: 1280px) 20vw, 288px"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-white">{a.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">{a.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Container className="mt-10">
          <div data-reveal className="flex flex-col items-start justify-between gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-10 lg:flex-row lg:items-center">
            <ul className="flex flex-wrap gap-2.5">
              {moreAmenities.map((m) => (
                <li key={m} className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/85">
                  <Icon name="sparkle" className="text-blush-300" />
                  {m}
                </li>
              ))}
            </ul>
            <EnquiryButton source="Amenities" title="Get the Complete Amenities List" variant="blush" className="shrink-0">
              All Amenities <Icon name="arrow" />
            </EnquiryButton>
          </div>
        </Container>
      </div>
      <Wave fill="var(--color-cream)" className="-mt-px bg-plum-950" />
    </section>
  );
}
