# Viva Anant — Landing Page

The landing page for **Viva Anant** (Viva Group), a project with 1, 2 & 3 BHK homes at Y K Nagar, Virar West. It uses Next.js 16 (App Router), TypeScript and Tailwind CSS v4. Leads go to a Google Sheet and are emailed to the sales team through Google Apps Script. reCAPTCHA v3 protects the form.

## Run locally

```bash
cp .env.example .env.local   # fill in the keys (see below)
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Lead pipeline setup

1. **Google Sheet + Apps Script**: open a new Google Sheet, go to *Extensions → Apps Script* and paste [google-apps-script/Code.gs](google-apps-script/Code.gs).
   Under *Project Settings → Script Properties*, add `TOKEN` (a long random string), `NOTIFY_EMAILS` (a comma-separated list) and, optionally, `AUTO_REPLY=true`.
   Then deploy it: *Deploy → New deployment → Web app*, with *Execute as: Me* and *Who has access: Anyone*. Copy the `/exec` URL.
2. **reCAPTCHA v3**: create a key at <https://www.google.com/recaptcha/admin> (score based) and add your domain.
3. Fill in `.env.local` / the hosting env vars:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (default `https://www.vivaanant.in`) |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY` | reCAPTCHA v3 keys |
| `RECAPTCHA_MIN_SCORE` | Minimum score to accept (default `0.5`) |
| `SELLDO_API_KEY` / `SELLDO_SRD` | Sell.do CRM API key and the VIVA ANANT campaign SRD |
| `GOOGLE_SCRIPT_URL` | Apps Script web-app `/exec` URL |
| `GOOGLE_SCRIPT_TOKEN` | Must equal the `TOKEN` script property |
| `NEXT_PUBLIC_GTM_ID` | Optional Google Tag Manager container. Pushes `generate_lead` on /thank-you |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional Search Console verification |

Flow: form (client validation) → `POST /api/enquiry`. The route re-validates, checks the honeypot, applies a rate limit and verifies reCAPTCHA. It then pushes the lead, in parallel, to **Sell.do** (name, phone, email, a note with configuration/source/UTM, tagged to the project via the SRD) and, if configured, to **Apps Script**, which appends a row and emails sales. If at least one channel accepts the lead, the page redirects to `/thank-you`. Delivery code lives in `lib/leads.ts`.

## Structure

- `lib/site.ts`: project facts (name, phone, RERA, address). Change the project name here.
- `lib/content.ts`: all copy, amenities, floor-plan dimensions and connectivity, transcribed from the brochure.
- `components/sections/*`: Hero, Overview, About, Highlights, Amenities, Configuration, Floor Plans, Connectivity, FAQ, Contact.
- `components/EnquiryButton.tsx`: any button that opens the popup form (`openEnquiry({ source, title })`).
- `components/Loader.tsx`: the loader from `loading.txt`. It is used for the first-visit preloader, route loading and form submission.

## SEO

Metadata, Open Graph and Twitter cards, canonical URL, robots, sitemap (with images), web manifest and icons are all set. The page carries JSON-LD for Organization, WebSite, WebPage, ApartmentComplex and FAQPage, and `public/llms.txt` covers AI search. /thank-you is noindex.

After you deploy, submit the sitemap in Google Search Console. Create a Google Business Profile for the site office and use the same name, address and phone number as the site.

## Fonts

The brand heading font **Mozarela** is commercial, so the site uses Playfair Display, with Cormorant Garamond standing in for Sitka. To use the real fonts, add them with `next/font/local` in `app/layout.tsx` and point `--font-playfair` / `--font-cormorant` at them.
