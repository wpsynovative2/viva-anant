"use client";

import { useState } from "react";
import Image from "next/image";
import EnquiryButton from "../EnquiryButton";
import Icon from "../Icon";
import { Container, SectionHeading, Wave } from "../ui";
import { floorPlans, homeDetails } from "@/lib/content";

export default function FloorPlans() {
  const [active, setActive] = useState(floorPlans[0].id);
  const [zoom, setZoom] = useState(false);
  const plan = floorPlans.find((p) => p.id === active) ?? floorPlans[0];

  return (
    <section id="floor-plans" aria-labelledby="floor-plans-title" className="relative">
      <Wave fill="#f1e6fb" />
      <div className="bg-bokeh relative pb-24 pt-10 sm:pb-32">
        <Container>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Floor Plans" lead="Isometric view of spaces with" id="floor-plans-title" title={<span className="italic">More To Offer</span>} />
            <p data-reveal className="max-w-md leading-relaxed text-ink/70">
              A closer look at spaces planned around the way life unfolds.
            </p>
          </div>

          <div role="tablist" aria-label="Floor plans" className="mt-10 flex gap-2 overflow-x-auto pb-2">
            {floorPlans.map((p) => (
              <button
                key={p.id}
                role="tab"
                type="button"
                id={`tab-${p.id}`}
                aria-selected={active === p.id}
                aria-controls="floor-plan-panel"
                onClick={() => setActive(p.id)}
                className={`shrink-0 cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  active === p.id ? "bg-plum-700 text-white shadow-lg shadow-plum-700/30" : "bg-white/80 text-plum-700 hover:bg-white"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div
            id="floor-plan-panel"
            role="tabpanel"
            aria-labelledby={`tab-${plan.id}`}
            className="mt-6 grid gap-6 rounded-[2.5rem] bg-white/85 p-4 shadow-xl shadow-plum-900/10 backdrop-blur sm:p-8 lg:grid-cols-[1.6fr_1fr]"
          >
            <button
              type="button"
              onClick={() => setZoom(true)}
              aria-label={`Enlarge ${plan.label}`}
              className="group relative aspect-[16/11] cursor-zoom-in overflow-hidden rounded-3xl bg-plum-50"
            >
              <Image
                key={plan.image}
                src={plan.image}
                alt={`${plan.label} of Viva Anant, Virar West`}
                fill
                sizes="(min-width: 1024px) 60vw, 95vw"
                className="object-contain p-3 transition duration-500 [animation:dialog-in_0.5s_both]"
              />
              <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-plum-700 text-white shadow-lg transition group-hover:scale-110">
                <Icon name="expand" />
              </span>
            </button>

            <div className="flex flex-col">
              <h3 className="font-display text-3xl text-plum-800">{plan.label}</h3>
              <dl className="mt-5 divide-y divide-plum-100">
                {plan.rooms.map((r) => (
                  <div key={r.name} className="flex items-center justify-between gap-4 py-3 text-sm">
                    <dt className="text-ink/70">
                      {r.label ? (
                        <>
                          <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-plum-500">{r.name}</span>
                          {r.label}
                        </>
                      ) : (
                        r.name
                      )}
                    </dt>
                    <dd className="font-semibold text-plum-800">{r.size}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-[11px] leading-relaxed text-ink/50">
                Plan shown for representation only. Refer to approved plans for actual dimensions and carpet area.
              </p>
              <div className="mt-auto grid gap-2 pt-6 sm:grid-cols-2 lg:grid-cols-1">
                <EnquiryButton source={`Floor Plan - ${plan.label}`} title={`Download ${plan.label}`}>
                  <Icon name="download" /> Download Plan
                </EnquiryButton>
                <EnquiryButton source={`Floor Plan - ${plan.label} Price`} title="Get Price Details" variant="outline">
                  Get Price Details
                </EnquiryButton>
              </div>
            </div>
          </div>

          {/* Specifications common to every configuration */}
          <div data-reveal className="bg-brand-gradient mt-8 overflow-hidden rounded-[2.5rem] p-6 text-white shadow-xl shadow-plum-900/20 sm:p-10">
            <div className="text-center">
              <h3 className="font-display text-3xl sm:text-4xl">1 BHK, 2 BHK &amp; 3 BHK</h3>
              <p className="eyebrow mt-3 text-blush-300">The details that make a home complete</p>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 border-t border-white/15 pt-8 sm:grid-cols-4 lg:grid-cols-7">
              {homeDetails.map((d) => (
                <li key={d.text} className="flex flex-col items-center gap-3 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/20 bg-white/5 text-3xl">
                    <Icon name={d.icon} strokeWidth={1.3} />
                  </span>
                  <span className="text-xs font-medium uppercase leading-relaxed tracking-[0.15em] text-white/85">{d.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
      <Wave fill="var(--color-cream)" className="-mt-px bg-[#f1e6fb]" />

      {zoom && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={plan.label}
          onClick={() => setZoom(false)}
          onKeyDown={(e) => e.key === "Escape" && setZoom(false)}
          className="fixed inset-0 z-[60] grid place-items-center bg-plum-950/90 p-4 backdrop-blur"
        >
          <button
            type="button"
            autoFocus
            onClick={() => setZoom(false)}
            aria-label="Close enlarged plan"
            className="absolute right-4 top-4 grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-white text-xl text-plum-800"
          >
            <Icon name="close" />
          </button>
          <div className="relative h-[85vh] w-full max-w-6xl">
            <Image src={plan.image} alt={`${plan.label} of Viva Anant, enlarged`} fill sizes="100vw" className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
