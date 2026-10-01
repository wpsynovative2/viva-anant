// Server-only lead delivery channels used by /api/enquiry.

export type Lead = {
  timestamp: string;
  name: string;
  mobile: string; // +91XXXXXXXXXX
  email: string;
  configuration: string;
  source: string;
  page: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  gclid: string;
  fbclid: string;
  recaptcha_score: number | "";
  ip: string;
  user_agent: string;
};

const TIMEOUT_MS = 12000;

/** Sell.do CRM — https://app.sell.do/api/leads/create, project tagged via campaign SRD. */
export async function pushToSellDo(lead: Lead): Promise<void> {
  const apiKey = process.env.SELLDO_API_KEY;
  const srd = process.env.SELLDO_SRD;
  if (!apiKey || !srd) throw new Error("SELLDO_API_KEY / SELLDO_SRD not configured");

  const note = [
    lead.configuration && `Interested in: ${lead.configuration}`,
    `Form: ${lead.source || "Website"}`,
    lead.page && `Page: ${lead.page}`,
    [lead.utm_source, lead.utm_medium, lead.utm_campaign].some(Boolean) &&
      `UTM: ${lead.utm_source || "-"} / ${lead.utm_medium || "-"} / ${lead.utm_campaign || "-"}${
        lead.utm_term ? ` / term: ${lead.utm_term}` : ""
      }${lead.utm_content ? ` / content: ${lead.utm_content}` : ""}`,
    lead.gclid && `GCLID: ${lead.gclid}`,
    lead.fbclid && `FBCLID: ${lead.fbclid}`,
  ]
    .filter(Boolean)
    .join(" | ");

  const params = new URLSearchParams({
    "sell_do[form][lead][name]": lead.name,
    "sell_do[form][lead][phone]": lead.mobile,
    "sell_do[form][note][content]": note,
    "sell_do[campaign][srd]": srd,
    api_key: apiKey,
  });
  if (lead.email) params.set("sell_do[form][lead][email]", lead.email);

  const endpoint = process.env.SELLDO_ENDPOINT || "https://app.sell.do/api/leads/create";
  const res = await fetch(`${endpoint}?${params.toString()}`, {
    method: "POST",
    cache: "no-store",
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`Sell.do HTTP ${res.status}: ${text.slice(0, 300)}`);
  try {
    const data = JSON.parse(text) as { error?: unknown; errors?: unknown };
    if (data.error || data.errors) throw new Error(`Sell.do rejected lead: ${text.slice(0, 300)}`);
  } catch (err) {
    if (err instanceof SyntaxError) return; // non-JSON 2xx: treat as accepted
    throw err;
  }
}

/** Google Apps Script web app — appends to the Sheet and emails the sales team. */
export async function pushToGoogleSheet(lead: Lead): Promise<void> {
  const url = process.env.GOOGLE_SCRIPT_URL;
  if (!url) throw new Error("GOOGLE_SCRIPT_URL not configured");
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ token: process.env.GOOGLE_SCRIPT_TOKEN || "", ...lead }),
    redirect: "follow",
    cache: "no-store",
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  const text = await res.text();
  let result: { ok?: boolean; error?: string };
  try {
    result = JSON.parse(text);
  } catch {
    throw new Error(`Apps Script returned non-JSON (HTTP ${res.status})`);
  }
  if (!result.ok) throw new Error(result.error || "Apps Script rejected the lead");
}

export const channels = [
  { name: "Sell.do", enabled: () => !!(process.env.SELLDO_API_KEY && process.env.SELLDO_SRD), push: pushToSellDo },
  {
    name: "Google Sheet",
    // Ignore the .env.example placeholder until a real /exec URL is set.
    enabled: () => !!process.env.GOOGLE_SCRIPT_URL && !process.env.GOOGLE_SCRIPT_URL.includes("XXXXXXXX"),
    push: pushToGoogleSheet,
  },
];
