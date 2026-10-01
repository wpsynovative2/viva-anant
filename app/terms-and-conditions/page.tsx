import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { site, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for using the ${site.name} website by ${site.developer}.`,
  alternates: { canonical: "/terms-and-conditions" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "1 October 2026";

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of these terms",
    body: (
      <p>
        This website is operated by <strong>{site.developer}</strong> to provide information about <strong>{site.name}</strong>, a
        residential project at {site.addressLine} (MahaRERA No. {site.rera}). By using this website or submitting an enquiry, you
        agree to these Terms &amp; Conditions and to our <Link href="/privacy-policy">Privacy Policy</Link>. If you do not agree,
        please do not use this website.
      </p>
    ),
  },
  {
    id: "information-only",
    title: "Information is indicative only",
    body: (
      <>
        <p>
          Everything on this website is for general information and promotional purposes only. This includes images, 3D views,
          floor plans, room dimensions, specifications, amenities, landscaping, furniture, fixtures and lifestyle depictions. These
          are artist&apos;s impressions or indicative, and may change because of approvals, final design and execution.
        </p>
        <p>
          The approved plans and the documents registered with MahaRERA are the only authoritative source of project details. If
          anything on this website differs from them, the registered documents prevail. Carpet areas are as defined under RERA and
          will be stated in the agreement for sale.
        </p>
      </>
    ),
  },
  {
    id: "no-offer",
    title: "Not an offer or contract",
    body: (
      <p>
        Nothing on this website is an offer, invitation to offer, or a binding commitment to sell any apartment. Submitting an
        enquiry does not create a booking, reservation or right to any unit. Prices, availability, payment plans and offers are
        shared only by our authorised sales team and may change without notice. Any sale is governed only by the agreement for sale
        executed between the purchaser and {site.developer}.
      </p>
    ),
  },
  {
    id: "rera",
    title: "MahaRERA registration",
    body: (
      <p>
        {site.name} is registered under MahaRERA with registration number <strong>{site.rera}</strong>. Purchasers are advised to
        verify project details, approvals, timelines and other particulars on the{" "}
        <a href={site.reraUrl} target="_blank" rel="noopener noreferrer">
          MahaRERA website
        </a>{" "}
        before making any decision or payment.
      </p>
    ),
  },
  {
    id: "infrastructure",
    title: "Location and infrastructure",
    body: (
      <p>
        Distances, travel times and nearby places are approximate. Information about proposed or upcoming infrastructure, such as
        roads, rail, metro, ports and airports, is based on publicly available information. It is indicative, subject to change,
        and outside our control. We do not guarantee that any such project will be completed, or when.
      </p>
    ),
  },
  {
    id: "enquiries",
    title: "Enquiries and communication",
    body: (
      <>
        <p>
          When you submit a form, you confirm that the details you provide are your own and are accurate. You authorise{" "}
          {site.developer} and its authorised representatives to contact you about {site.name} by phone call, SMS, email or
          WhatsApp, even if your number is registered on the DND/NDNC registry.
        </p>
        <p>
          You can withdraw this consent at any time by calling <a href={telHref}>{site.phoneDisplay}</a>. How we handle your
          information is described in our <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Submit false, misleading or someone else&apos;s information through our forms;</li>
          <li>Use automated tools to submit forms, scrape content or overload the website;</li>
          <li>Attempt to gain unauthorised access to the website, its servers or connected systems;</li>
          <li>Use the website for any unlawful purpose or in a way that harms {site.developer} or other users.</li>
        </ul>
        <p>We may block access or ignore submissions that break these rules.</p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: (
      <p>
        The {site.name} and {site.developer} names and logos, and the renders, photographs, text, designs and other content on this
        website, belong to {site.developer} or its licensors. You may view and share pages for personal, non-commercial purposes.
        You may not copy, reproduce, modify or use them commercially without our written permission.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-party links and services",
    body: (
      <p>
        This website may link to or embed third-party services, such as Google Maps, WhatsApp and the MahaRERA website. We do not
        control them and are not responsible for their content, availability or privacy practices. Your use of them is governed by
        their own terms.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        We try to keep this website accurate and available, but it is provided &ldquo;as is&rdquo;, without warranties of any kind. To
        the extent permitted by law, {site.developer} is not liable for any loss or damage arising from your use of, or reliance on,
        this website or its content. That includes any decision made without verifying details against the registered project
        documents.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these terms from time to time. The &ldquo;Last updated&rdquo; date at the top shows when they were last revised.
        Continuing to use the website after a change means you accept the updated terms.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of India. Any dispute arising from them or from your use of this website is subject to
        the exclusive jurisdiction of the competent courts in Maharashtra.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <address className="not-italic">
        <strong>{site.developer}</strong>
        <br />
        {site.addressLine}
        <br />
        Phone: <a href={telHref}>{site.phoneDisplay}</a>
      </address>
    ),
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms & Conditions" lastUpdated={LAST_UPDATED} sections={sections} />;
}
