import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import EnquiryButton from "./EnquiryButton";
import { Container } from "./ui";
import { disclaimer, mapsHref, navLinks, site, telHref, whatsappHref } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-plum-950 pb-24 text-white/80 md:pb-0" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <svg className="pointer-events-none absolute -left-40 top-0 h-full w-[60rem] text-white/5" viewBox="0 0 600 600" fill="none" aria-hidden="true">
        <path d="M60 600C160 420 40 300 220 180S520 60 560 0" stroke="currentColor" strokeWidth="1.2" />
      </svg>

      <Container className="relative pt-16">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Image src="/images/logo-viva-anant-white.webp" alt={`${site.name} logo`} width={1412} height={640} className="h-auto w-36" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              1, 2 &amp; 3 BHK homes, made for every stage of life — at Y K Nagar, Virar West.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/50">
              A project by
              <span className="font-semibold tracking-[0.18em] text-blush-300">{site.developer}</span>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow mb-5 text-blush-300">Explore</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm lg:grid-cols-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={`/${l.href}`} className="transition hover:text-blush-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow mb-5 text-blush-300">Visit Us</p>
            <address className="space-y-4 text-sm not-italic">
              <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="flex gap-3 transition hover:text-blush-300">
                <Icon name="pin" className="mt-0.5 shrink-0 text-lg text-blush-300" />
                {site.addressLine}
              </a>
              <a href={telHref} className="flex items-center gap-3 transition hover:text-blush-300">
                <Icon name="phone" className="shrink-0 text-lg text-blush-300" />
                {site.phoneDisplay}
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition hover:text-blush-300">
                <Icon name="whatsapp" className="shrink-0 text-lg text-blush-300" />
                WhatsApp us
              </a>
            </address>
          </div>

          <div>
            <p className="eyebrow mb-5 text-blush-300">MahaRERA</p>
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
              <Icon name="rera" className="mt-0.5 shrink-0 text-xl text-blush-300" />
              <div>
                <p className="font-semibold text-white">{site.rera}</p>
                <a href={site.reraUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-white/60 underline-offset-4 hover:underline">
                  maharera.maharashtra.gov.in
                </a>
              </div>
            </div>
            <EnquiryButton source="Footer" title="Book a Site Visit" variant="blush" className="mt-5 w-full">
              Book a Site Visit <Icon name="arrow" />
            </EnquiryButton>
          </div>
        </div>

        <p className="py-8 text-[11px] leading-relaxed text-white/45">
          <strong className="font-semibold text-white/60">Disclaimer:</strong> {disclaimer}
        </p>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {site.developer}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link href="/privacy-policy" className="transition hover:text-blush-300">
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/terms-and-conditions" className="transition hover:text-blush-300">
              Terms &amp; Conditions
            </Link>
            <span aria-hidden="true">·</span>
            <span>MahaRERA Reg. No. {site.rera}</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
