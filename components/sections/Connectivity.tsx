import Image from "next/image";
import EnquiryButton from "../EnquiryButton";
import Icon from "../Icon";
import { Container, SectionHeading } from "../ui";
import { infrastructure, investReasons, nearby } from "@/lib/content";
import { mapsHref, site } from "@/lib/site";

export default function Connectivity() {
  return (
    <section id="connectivity" aria-labelledby="connectivity-title" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Location & Connectivity" lead="Everything you need," id="connectivity-title" title={<span className="italic">Close to Home</span>} />
          <p data-reveal className="max-w-md leading-relaxed text-ink/70">
            At Y K Nagar, Virar West — minutes from Virar station, Narangi Bypass Road, reputed schools, hospitals and the city&apos;s
            favourite shopping and dining.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <figure data-reveal className="relative overflow-hidden rounded-[2.5rem] border-8 border-white bg-white shadow-xl shadow-plum-900/10">
            <div className="relative aspect-square">
              <Image
                src="/images/location-map.webp"
                alt="Location map of Viva Anant, Y K Nagar, Virar West, showing nearby schools, hospital, shopping and Virar station"
                fill
                sizes="(min-width: 1024px) 45vw, 95vw"
                className="object-cover"
              />
            </div>
            <figcaption className="flex flex-wrap items-center justify-between gap-3 px-3 pt-4 text-sm text-ink/70">
              <span className="flex items-center gap-2">
                <Icon name="pin" className="text-plum-600" /> {site.addressLine}
              </span>
              <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-plum-700 underline-offset-4 hover:underline">
                Open in Google Maps →
              </a>
            </figcaption>
          </figure>

          <div className="grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {nearby.map((n, i) => (
              <div
                key={n.group}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                className="rounded-3xl border border-plum-100 bg-white p-6"
              >
                <h3 className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-plum-800">
                  <span className="blob grid h-10 w-10 place-items-center bg-blush-200 text-lg text-plum-700">
                    <Icon name={n.icon} />
                  </span>
                  {n.group}
                </h3>
                <ul className="mt-4 space-y-2">
                  {n.places.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-ink/75">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-plum-400" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div data-reveal className="bg-brand-gradient flex flex-col justify-between gap-4 rounded-3xl p-6 text-white sm:col-span-2 lg:col-span-1 xl:col-span-2">
              <p className="font-display text-2xl">Visit the site &amp; experience the neighbourhood.</p>
              <EnquiryButton source="Connectivity - Site Visit" title="Book a Site Visit" variant="blush" className="self-start">
                Book a Site Visit <Icon name="arrow" />
              </EnquiryButton>
            </div>
          </div>
        </div>

        {/* Upcoming infrastructure */}
        <div className="mt-24">
          <h3 data-reveal className="font-display text-3xl text-plum-800 sm:text-4xl">
            Infrastructure shaping <span className="italic text-plum-600">Virar&apos;s future</span>
          </h3>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {infrastructure.map((it, i) => (
              <li
                key={it.title}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 4) * 90}ms` }}
                className="group relative overflow-hidden rounded-[1.75rem] bg-plum-900"
              >
                <div className="relative aspect-[4/5] sm:aspect-square">
                  <Image
                    src={it.image}
                    alt={it.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover opacity-80 transition duration-700 group-hover:scale-110 group-hover:opacity-60"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-plum-950/95 via-plum-950/30 to-transparent p-4 text-white sm:p-6">
                  <h4 className="text-sm font-bold uppercase leading-snug tracking-wide sm:text-base">{it.title}</h4>
                  <p className="mt-1 text-xs text-white/70 sm:text-sm">{it.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[11px] text-ink/50">
            Proposed infrastructure and timelines are indicative, subject to change and beyond the Promoter&apos;s control. Please verify
            current status with relevant authorities.
          </p>
        </div>

        {/* Why invest now */}
        <div data-reveal className="bg-brand-gradient mt-20 overflow-hidden rounded-[2.5rem] p-6 text-white sm:p-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow text-blush-300">Infrastructure boom · Housing demand · Government investment</p>
              <h3 className="font-display mt-3 text-4xl sm:text-5xl">
                Why invest <span className="italic text-blush-300">now</span>
              </h3>
            </div>
            <EnquiryButton source="Why Invest" title="Get Investment Details" variant="blush" className="self-start lg:self-auto">
              Get Investment Details <Icon name="arrow" />
            </EnquiryButton>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {investReasons.map((r) => (
              <li key={r.title} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="blob relative h-16 w-16 shrink-0 overflow-hidden">
                  <Image src={r.image} alt="" fill sizes="64px" className="object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wide">{r.title}</h4>
                  <p className="text-sm text-white/65">{r.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
