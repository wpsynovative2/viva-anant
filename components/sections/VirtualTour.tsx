import EnquiryButton from "../EnquiryButton";
import Icon from "../Icon";
import TourCard from "../TourCard";
import { Butterfly, Container, SectionHeading, Wave } from "../ui";
import { virtualTours, vrPoints } from "@/lib/content";

export default function VirtualTour() {
  return (
    <section id="virtual-tour" aria-labelledby="virtual-tour-title" className="relative">
      <Wave fill="var(--color-plum-700)" />
      <div className="bg-brand-gradient-v relative overflow-hidden pb-24 pt-10 text-white sm:pb-32">
        <Butterfly className="right-[8%] top-16 hidden h-12 w-12 opacity-80 lg:block" />
        <Container>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              tone="dark"
              eyebrow="VR Experience"
              lead="A virtual first look at"
              id="virtual-tour-title"
              title={<span className="italic">Your Next Chapter</span>}
            />
            <div data-reveal className="flex flex-wrap gap-3">
              <EnquiryButton source="Virtual Tour - Site Visit" title="Book a Site Visit" variant="blush">
                Book a Site Visit <Icon name="arrow" />
              </EnquiryButton>
              <EnquiryButton source="Virtual Tour - Price" title="Get Price Details" variant="ghost">
                Get Price Details
              </EnquiryButton>
            </div>
          </div>

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
                <TourCard {...t} />
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <Wave fill="var(--color-cream)" className="-mt-px bg-plum-950" />
    </section>
  );
}
