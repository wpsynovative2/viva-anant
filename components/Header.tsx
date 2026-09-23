"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { openEnquiry } from "./EnquiryButton";
import { navLinks, site, telHref } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen ? "bg-plum-950/85 py-2.5 shadow-lg shadow-plum-950/20 backdrop-blur-xl" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:w-[max(80%,1200px)] lg:max-w-full lg:px-8">
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0" onClick={() => setMenuOpen(false)}>
          <Image
            src="/images/logo-viva-anant-white.webp"
            alt={`${site.name} logo`}
            width={1412}
            height={640}
            loading="eager"
            className={`h-auto transition-all duration-500 ${scrolled ? "w-24" : "w-[7.2rem] sm:w-[8.4rem]"}`}
          />
        </Link>

        {/* Everything except the logo sits together on the right. */}
        <div className="flex items-center gap-2 sm:gap-3 xl:gap-5">
          <nav aria-label="Primary" className="hidden self-center xl:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={`/${l.href}`}
                    className={`relative flex items-center whitespace-nowrap rounded-full px-3 py-2 text-[13px] leading-none font-medium tracking-wide transition hover:text-blush-300 ${
                      active === l.href ? "text-blush-300" : "text-white/85"
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-blush-300 transition-transform duration-300 ${
                        active === l.href ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={telHref}
              aria-label={`Call ${site.phoneDisplay}`}
              className="hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-white transition hover:text-blush-300 md:inline-flex"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full border border-white/25">
                <Icon name="phone" />
              </span>
              <span className="xl:hidden 2xl:inline">{site.phoneDisplay}</span>
            </a>
            <button
              type="button"
              onClick={() => openEnquiry({ source: "Header", title: "Book a Site Visit" })}
              className="cursor-pointer whitespace-nowrap rounded-full bg-blush-300 px-5 py-3 text-xs font-bold uppercase tracking-wider text-plum-900 transition hover:bg-white sm:px-6 sm:text-[13px]"
            >
              Enquire Now
            </button>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((o) => !o)}
              className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-white/25 text-xl text-white xl:hidden"
            >
              <Icon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="h-[calc(100dvh-5rem)] overflow-y-auto px-6 pb-10 pt-6 xl:hidden"
      >
        <ul className="space-y-1">
          {navLinks.map((l, i) => (
            <li key={l.href} style={{ animation: `dialog-in 0.5s ${i * 40}ms both` }}>
              <a
                href={`/${l.href}`}
                onClick={() => setMenuOpen(false)}
                className="font-display flex items-center justify-between border-b border-white/10 py-4 text-2xl text-white"
              >
                {l.label}
                <Icon name="arrow" className="text-base text-blush-300" />
              </a>
            </li>
          ))}
        </ul>
        <a href={telHref} className="mt-8 flex items-center gap-3 text-lg font-semibold text-blush-300">
          <Icon name="phone" /> {site.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
