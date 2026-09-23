import Icon from "../Icon";
import EnquiryButton from "../EnquiryButton";
import { site, telHref } from "@/lib/site";
import { Container, SectionHeading } from "../ui";
import { faqs } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-cream pb-20 sm:pb-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow="FAQs" lead="Questions homebuyers" id="faq-title" title={<span className="italic">Ask Us</span>} />
          <div data-reveal className="bg-bokeh mt-10 rounded-[2rem] p-7">
            <p className="font-display text-2xl text-plum-800">Still have a question?</p>
            <p className="mt-2 text-sm text-ink/70">Our relationship managers are happy to help — pricing, plans, loans or site visits.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <EnquiryButton source="FAQ" title="Ask Our Team">Ask Our Team</EnquiryButton>
              <a href={telHref} className="inline-flex items-center gap-2 rounded-full border border-plum-700/30 px-6 py-3 text-sm font-semibold text-plum-700 transition hover:bg-plum-700 hover:text-white">
                <Icon name="phone" /> {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              data-reveal
              open={i === 0}
              className="group rounded-3xl border border-plum-100 bg-white px-6 py-5 transition open:shadow-lg open:shadow-plum-900/5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="font-semibold text-plum-800">{f.q}</h3>
                <Icon name="chevron" className="shrink-0 text-xl text-plum-500 transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 leading-relaxed text-ink/70">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
