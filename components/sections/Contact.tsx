import EnquiryForm from "../EnquiryForm";
import Icon from "../Icon";
import { Butterfly, Container, Wave } from "../ui";
import { mapsHref, site, telHref, whatsappHref } from "@/lib/site";

export default function Contact() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&z=15&output=embed`;
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative">
      <Wave fill="var(--color-plum-700)" />
      <div className="bg-brand-gradient-v relative overflow-hidden pb-20 pt-10 text-white sm:pb-28">
        <Butterfly className="right-[6%] top-16 hidden h-14 w-14 lg:block" />
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <div data-reveal>
              <p className="eyebrow flex items-center gap-3 text-blush-300">
                <span className="h-px w-8 bg-blush-300" /> Contact Us
              </p>
              <h2 id="contact-title" className="mt-4 leading-none">
                <span className="font-serif block text-lg uppercase tracking-[0.28em] text-white/85 sm:text-2xl">The journey from house to</span>
                <span className="font-display mt-2 block text-5xl font-semibold italic sm:text-7xl">Home</span>
                <span className="font-serif mt-3 block text-lg uppercase tracking-[0.28em] text-white/85 sm:text-2xl">begins here</span>
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-white/70">
                Get the price sheet, e-brochure and floor plans, or book a guided site visit. Our relationship manager will get in
                touch shortly.
              </p>
            </div>

            <ul data-reveal className="mt-10 space-y-4">
              <li>
                <a href={telHref} className="group flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-blush-300 text-xl text-plum-900 transition group-hover:scale-110">
                    <Icon name="phone" />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.2em] text-white/55">Call us</span>
                    <span className="font-display text-2xl sm:text-3xl">{site.phoneDisplay}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-white/25 text-xl transition group-hover:bg-white group-hover:text-plum-800">
                    <Icon name="whatsapp" />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.2em] text-white/55">WhatsApp</span>
                    <span className="font-semibold">Chat with our sales team</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/25 text-xl transition group-hover:bg-white group-hover:text-plum-800">
                    <Icon name="pin" />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.2em] text-white/55">Site address</span>
                    <span className="font-semibold">{site.addressLine}</span>
                  </span>
                </a>
              </li>
            </ul>

            <div data-reveal className="mt-10 overflow-hidden rounded-3xl border border-white/10">
              <iframe
                title="Viva Anant location on Google Maps"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full grayscale-[30%]"
              />
            </div>
          </div>

          <div data-reveal className="self-start rounded-[2rem] bg-white/[0.07] p-6 ring-1 ring-white/15 backdrop-blur-md sm:p-10 lg:sticky lg:top-28">
            <h3 className="font-display text-3xl">Register your interest</h3>
            <p className="mb-7 mt-2 text-sm text-white/65">Fields marked * are required.</p>
            <EnquiryForm source="Contact Section" tone="dark" />
            <p className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-xs text-white/60">
              <Icon name="rera" className="text-base text-blush-300" /> MahaRERA Reg. No. {site.rera}
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
