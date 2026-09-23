import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { Butterfly, Swash } from "@/components/ui";
import ConversionPing from "./ConversionPing";
import { site, telHref, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for your interest in Viva Anant, Virar West.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you" },
};

const steps = [
  { title: "We call you", text: "Our relationship manager will reach out shortly." },
  { title: "Get the details", text: "Receive the price sheet, e-brochure & floor plans." },
  { title: "Visit the site", text: "Experience Viva Anant in person at Y K Nagar, Virar West." },
];

export default async function ThankYouPage({ searchParams }: PageProps<"/thank-you">) {
  const { name } = await searchParams;
  const first = typeof name === "string" ? name.replace(/[^\p{L} .'-]/gu, "").slice(0, 30) : "";

  return (
    <section className="bg-brand-gradient relative isolate flex min-h-[100svh] items-center overflow-hidden px-4 pb-28 pt-32 text-white">
      <Image src="/images/hero-butterfly-transformation.webp" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-15 mix-blend-screen" />
      <Butterfly className="right-[10%] top-[16%] hidden h-16 w-16 md:block" />
      <Butterfly className="bottom-[20%] left-[8%] h-10 w-10" style={{ animationDelay: "-2s" }} />
      <ConversionPing />

      <div className="mx-auto w-full max-w-3xl text-center">
        <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-blush-300 text-4xl text-plum-900 shadow-[0_0_0_12px_rgba(244,190,206,0.18)]" style={{ animation: "dialog-in 0.8s both" }}>
          <Icon name="check" />
        </span>
        <h1 className="mt-8 leading-none" style={{ animation: "dialog-in 0.9s 0.1s both" }}>
          <span className="font-serif block text-lg uppercase tracking-[0.3em] text-white/80 sm:text-2xl">
            {first ? `Thank you, ${first}` : "Thank you"}
          </span>
          <span className="font-display mt-3 block text-5xl font-semibold italic sm:text-7xl">Your journey begins</span>
        </h1>
        <Swash className="mx-auto mt-5 h-5 w-40 text-blush-300" />
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/75">
          We&apos;ve received your enquiry for <strong className="text-white">{site.name}</strong>. Our team will get in touch with you
          shortly with everything you need.
        </p>

        <ol className="mt-12 grid gap-4 text-left sm:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur" style={{ animation: `dialog-in 0.8s ${0.2 + i * 0.1}s both` }}>
              <span className="font-display text-3xl text-blush-300">0{i + 1}</span>
              <h2 className="mt-2 font-semibold">{s.title}</h2>
              <p className="mt-1 text-sm text-white/65">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <a href={telHref} className="inline-flex items-center gap-2 rounded-full bg-blush-300 px-6 py-3 text-sm font-semibold text-plum-900 transition hover:bg-white">
            <Icon name="phone" /> Call {site.phoneDisplay}
          </a>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-plum-800">
            <Icon name="whatsapp" /> WhatsApp Us
          </a>
          <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-plum-800">
            Back to Home <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
