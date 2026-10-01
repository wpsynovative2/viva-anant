"use client";

import { useId, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Loader from "./Loader";
import Icon from "./Icon";
import {
  CONFIG_OPTIONS,
  normalizeIndianMobile,
  validateEmail,
  validateName,
  type EnquiryPayload,
} from "@/lib/validation";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];

async function getRecaptchaToken(): Promise<string | undefined> {
  if (!SITE_KEY) return undefined;
  // Script loads lazily; wait up to ~6s for it.
  for (let i = 0; i < 30 && !window.grecaptcha?.execute; i++) {
    await new Promise((r) => setTimeout(r, 200));
  }
  const g = window.grecaptcha;
  if (!g) return undefined;
  return new Promise((resolve) => {
    g.ready(() => {
      g.execute(SITE_KEY, { action: "enquiry" }).then(resolve, () => resolve(undefined));
    });
  });
}

function readUtm(): Record<string, string> {
  const out: Record<string, string> = {};
  try {
    const stored = JSON.parse(sessionStorage.getItem("va-utm") || "{}") as Record<string, string>;
    Object.assign(out, stored);
    const params = new URLSearchParams(window.location.search);
    UTM_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v) out[k] = v.slice(0, 120);
    });
    sessionStorage.setItem("va-utm", JSON.stringify(out));
  } catch {}
  return out;
}

type Errors = Partial<Record<"name" | "mobile" | "email" | "form", string>>;

export default function EnquiryForm({
  source,
  tone = "light",
  compact = false,
}: {
  source: string;
  tone?: "light" | "dark";
  compact?: boolean;
}) {
  const router = useRouter();
  const uid = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const dark = tone === "dark";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const mobileRaw = String(fd.get("mobile") || "");
    const email = String(fd.get("email") || "");

    const next: Errors = {};
    const nameErr = validateName(name);
    if (nameErr) next.name = nameErr;
    const mobile = normalizeIndianMobile(mobileRaw);
    if (!mobileRaw.trim()) next.mobile = "Mobile number is required";
    else if (!mobile) next.mobile = "Enter a valid 10-digit Indian mobile number";
    const emailErr = validateEmail(email);
    if (emailErr) next.email = emailErr;
    setErrors(next);
    if (Object.keys(next).length) {
      const first = e.currentTarget.querySelector<HTMLElement>(`[aria-invalid="true"]`);
      first?.focus();
      return;
    }

    setSubmitting(true);
    try {
      const payload: EnquiryPayload = {
        name: name.trim().replace(/\s+/g, " "),
        mobile: mobile!,
        email: email.trim() || undefined,
        configuration: String(fd.get("configuration") || "") || undefined,
        source,
        page: window.location.href,
        utm: readUtm(),
        website: String(fd.get("website") || ""),
        recaptchaToken: await getRecaptchaToken(),
      };
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      try {
        sessionStorage.setItem("va-lead", "1");
      } catch {}
      router.push(`/thank-you?name=${encodeURIComponent(payload.name.split(" ")[0])}`);
    } catch (err) {
      setErrors({ form: err instanceof Error ? err.message : "Something went wrong. Please try again." });
      setSubmitting(false);
    }
  }

  const field = `w-full rounded-xl border px-4 py-3 text-[15px] outline-none transition placeholder:text-current/45 focus:ring-4 ${
    dark
      ? "border-white/20 bg-white/10 text-white focus:border-blush-300 focus:ring-blush-300/20"
      : "border-plum-200 bg-white text-ink focus:border-plum-500 focus:ring-plum-500/15"
  }`;
  const label = `mb-1.5 block text-xs font-semibold tracking-wide ${dark ? "text-white/80" : "text-plum-800"}`;
  const errCls = `mt-1.5 text-xs font-medium ${dark ? "text-blush-300" : "text-rose-600"}`;

  return (
    <form onSubmit={onSubmit} noValidate className="relative" aria-busy={submitting}>
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor={`${uid}-name`} className={label}>
            Full Name <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            maxLength={80}
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${uid}-name-err` : undefined}
            className={field}
          />
          {errors.name && (
            <p id={`${uid}-name-err`} className={errCls}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${uid}-mobile`} className={label}>
            Mobile Number <span aria-hidden="true">*</span>
          </label>
          <div className="flex">
            <span
              className={`flex items-center rounded-l-xl border border-r-0 px-3 text-sm font-semibold ${
                dark ? "border-white/20 bg-white/5 text-white/80" : "border-plum-200 bg-plum-50 text-plum-700"
              }`}
            >
              +91
            </span>
            <input
              id={`${uid}-mobile`}
              name="mobile"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="10-digit mobile"
              maxLength={14}
              required
              onInput={(e) => {
                const el = e.currentTarget;
                el.value = el.value.replace(/[^\d+ ]/g, "");
              }}
              aria-invalid={!!errors.mobile}
              aria-describedby={errors.mobile ? `${uid}-mobile-err` : undefined}
              className={`${field} rounded-l-none`}
            />
          </div>
          {errors.mobile && (
            <p id={`${uid}-mobile-err`} className={errCls}>
              {errors.mobile}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${uid}-email`} className={label}>
            Email <span className="font-normal opacity-60">(optional)</span>
          </label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            maxLength={120}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${uid}-email-err` : undefined}
            className={field}
          />
          {errors.email && (
            <p id={`${uid}-email-err`} className={errCls}>
              {errors.email}
            </p>
          )}
        </div>

        <div className={compact ? "" : "sm:col-span-2"}>
          <span className={label} id={`${uid}-cfg`}>
            Interested in
          </span>
          <div role="radiogroup" aria-labelledby={`${uid}-cfg`} className="flex flex-wrap gap-2">
            {CONFIG_OPTIONS.map((opt, i) => (
              <label key={opt} className="cursor-pointer">
                <input type="radio" name="configuration" value={opt} defaultChecked={i === 1} className="peer sr-only" />
                <span
                  className={`inline-block rounded-full border px-4 py-2 text-xs font-semibold transition peer-focus-visible:ring-2 ${
                    dark
                      ? "border-white/25 text-white/80 peer-checked:border-blush-300 peer-checked:bg-blush-300 peer-checked:text-plum-900 peer-focus-visible:ring-blush-300"
                      : "border-plum-200 text-plum-700 peer-checked:border-plum-700 peer-checked:bg-plum-700 peer-checked:text-white peer-focus-visible:ring-plum-400"
                  }`}
                >
                  {opt}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Honeypot — hidden from people, tempting to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {errors.form && (
        <p role="alert" className={`mt-4 rounded-lg px-3 py-2 text-sm ${dark ? "bg-white/10 text-blush-200" : "bg-rose-50 text-rose-700"}`}>
          {errors.form}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className={`mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition disabled:cursor-wait disabled:opacity-70 ${
          dark ? "bg-blush-300 text-plum-900 hover:bg-white" : "bg-plum-700 text-white hover:bg-plum-600"
        }`}
      >
        {submitting ? "Submitting…" : "Get Price & Brochure"}
        <Icon name="arrow" className="text-base" />
      </button>

      <p className={`mt-4 text-[11px] leading-relaxed ${dark ? "text-white/55" : "text-ink/55"}`}>
        By submitting, you agree to our{" "}
        {/* New tab, so a half-filled form isn't lost. */}
        <a href="/terms-and-conditions" target="_blank" className="underline">
          Terms &amp; Conditions
        </a>{" "}
        and{" "}
        <a href="/privacy-policy" target="_blank" className="underline">
          Privacy Policy
        </a>
        , and authorise Viva Group and its representatives to contact you via call, SMS, email or WhatsApp, overriding
        DND/NDNC.
      </p>

      {submitting && (
        <div className="bg-brand-gradient absolute -inset-2 z-10 grid place-items-center overflow-hidden rounded-2xl">
          <Loader scale="clamp(11px, 3vw, 14px)" label="Sending" />
        </div>
      )}
    </form>
  );
}
