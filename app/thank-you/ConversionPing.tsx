"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Fires a single conversion event for GTM / Google Ads / Meta when a lead lands here. */
export default function ConversionPing() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem("va-lead") !== "1") return;
      sessionStorage.setItem("va-lead", "reported");
    } catch {
      return;
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "generate_lead", form_name: "viva_anant_enquiry" });
  }, []);
  return null;
}
