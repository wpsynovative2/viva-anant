/**
 * Viva Anant — lead capture web app (Google Apps Script).
 *
 * Receives leads from the Next.js route /api/enquiry, appends them to a Google Sheet
 * and emails the sales team (plus an optional thank-you mail to the customer).
 *
 * SETUP
 * 1. Create a Google Sheet → Extensions → Apps Script → paste this file.
 * 2. Project Settings → Script Properties, add:
 *      TOKEN          a long random string (same value as GOOGLE_SCRIPT_TOKEN in .env)
 *      NOTIFY_EMAILS  comma-separated sales emails, e.g. sales@vivaanant.in,manager@vivagroup.in
 *      SHEET_NAME     (optional) tab name, default "Leads"
 *      AUTO_REPLY     (optional) "true" to send a thank-you email to leads who give an email
 * 3. Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone.
 * 4. Copy the /exec URL into GOOGLE_SCRIPT_URL in .env.local and redeploy the site.
 *    After editing this script, create a NEW deployment version (Manage deployments → Edit → New version).
 */

var HEADERS = [
  "Timestamp", "Name", "Mobile", "Email", "Configuration", "Source", "Page",
  "UTM Source", "UTM Medium", "UTM Campaign", "UTM Term", "UTM Content", "GCLID", "FBCLID",
  "reCAPTCHA Score", "IP", "User Agent",
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    var props = PropertiesService.getScriptProperties();
    var data = JSON.parse((e && e.postData && e.postData.contents) || "{}");

    var expected = props.getProperty("TOKEN");
    if (!expected || data.token !== expected) return respond({ ok: false, error: "Unauthorized" });
    if (!data.name || !data.mobile) return respond({ ok: false, error: "Missing name or mobile" });

    lock.waitLock(20000);
    var sheet = getSheet(props.getProperty("SHEET_NAME") || "Leads");
    var tz = Session.getScriptTimeZone() || "Asia/Kolkata";
    var when = Utilities.formatDate(new Date(data.timestamp || new Date()), tz, "dd-MMM-yyyy HH:mm:ss");

    sheet.appendRow([
      when, safe(data.name), safe(data.mobile), safe(data.email), safe(data.configuration), safe(data.source), safe(data.page),
      safe(data.utm_source), safe(data.utm_medium), safe(data.utm_campaign), safe(data.utm_term), safe(data.utm_content),
      safe(data.gclid), safe(data.fbclid), data.recaptcha_score, safe(data.ip), safe(data.user_agent),
    ]);
    lock.releaseLock();

    // The lead is already saved; a mail quota/format error must not fail the submission.
    try {
      notifyTeam(props.getProperty("NOTIFY_EMAILS"), data, when);
      if (props.getProperty("AUTO_REPLY") === "true" && data.email) sendAutoReply(data);
    } catch (mailErr) {
      console.error("Email failed", mailErr);
    }

    return respond({ ok: true });
  } catch (err) {
    try { lock.releaseLock(); } catch (ignored) {}
    console.error(err);
    return respond({ ok: false, error: String(err) });
  }
}

function doGet() {
  return respond({ ok: true, service: "viva-anant-leads" });
}

function getSheet(name) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name) || ss.insertSheet(name);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold").setBackground("#581074").setFontColor("#ffffff");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function notifyTeam(recipients, d, when) {
  if (!recipients) return;
  var rows = [
    ["Name", d.name], ["Mobile", d.mobile], ["Email", d.email || "—"], ["Interested in", d.configuration || "—"],
    ["Source", d.source || "—"], ["Page", d.page || "—"], ["Campaign", [d.utm_source, d.utm_medium, d.utm_campaign].filter(String).join(" / ") || "—"],
    ["Received", when],
  ];
  var html =
    '<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;border:1px solid #eee;border-radius:12px;overflow:hidden">' +
    '<div style="background:linear-gradient(100deg,#6b1f8a,#0a0428);color:#fff;padding:20px 24px">' +
    '<div style="font-size:12px;letter-spacing:3px;color:#f4bece">NEW LEAD</div>' +
    '<div style="font-size:22px;margin-top:4px">Viva Anant — Virar West</div></div>' +
    '<table style="width:100%;border-collapse:collapse;font-size:14px">' +
    rows.map(function (r) {
      return '<tr><td style="padding:10px 24px;color:#777;width:140px;border-bottom:1px solid #f3f3f3">' + r[0] +
        '</td><td style="padding:10px 24px;color:#26143a;font-weight:600;border-bottom:1px solid #f3f3f3">' + escapeHtml(String(r[1])) + "</td></tr>";
    }).join("") +
    '</table><div style="padding:16px 24px"><a href="tel:' + escapeHtml(d.mobile) +
    '" style="background:#581074;color:#fff;padding:10px 18px;border-radius:999px;text-decoration:none;font-size:13px">Call ' +
    escapeHtml(d.name) + "</a></div></div>";

  var mail = {
    to: recipients,
    subject: "New Lead: " + d.name + " (" + d.mobile + ") — Viva Anant",
    htmlBody: html,
    name: "Viva Anant Website",
  };
  if (d.email) mail.replyTo = d.email;
  MailApp.sendEmail(mail);
}

function sendAutoReply(d) {
  var html =
    '<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;color:#26143a">' +
    '<div style="background:linear-gradient(100deg,#6b1f8a,#0a0428);color:#fff;padding:28px;border-radius:12px 12px 0 0;text-align:center">' +
    '<div style="font-size:26px;letter-spacing:4px">VIVA ANANT</div>' +
    '<div style="font-size:11px;letter-spacing:3px;color:#f4bece;margin-top:6px">1, 2 &amp; 3 BHK HOMES · VIRAR WEST</div></div>' +
    '<div style="padding:24px;border:1px solid #eee;border-top:0;border-radius:0 0 12px 12px">' +
    "<p>Dear " + escapeHtml(d.name) + ",</p>" +
    "<p>Thank you for your interest in <b>Viva Anant</b>. Our relationship manager will call you shortly with the price sheet, brochure and floor plans.</p>" +
    '<p>Need us sooner? Call <a href="tel:+918095050929">+91 80950 50929</a>.</p>' +
    '<p style="font-size:11px;color:#888">MahaRERA Reg. No. PM1240002600876 · Y K Nagar NX Rd, Virar (West), Vasai-Virar 401303</p></div></div>';
  MailApp.sendEmail({ to: d.email, subject: "Thank you for your interest in Viva Anant", htmlBody: html, name: "Viva Anant" });
}

// Prevent spreadsheet formula injection and trim long values.
function safe(v) {
  var s = v == null ? "" : String(v).slice(0, 500);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function respond(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
