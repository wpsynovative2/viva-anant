"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

// Brand splash on first paint. Hides on window load (capped at 2s) and falls back
// to a CSS auto-hide so content is never trapped behind it if JS fails.
export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("va-preloaded") === "1";
      sessionStorage.setItem("va-preloaded", "1");
    } catch {}
    const finish = () => setDone(true);
    if (seen || document.readyState === "complete") {
      const t = setTimeout(finish, seen ? 0 : 400);
      return () => clearTimeout(t);
    }
    const cap = setTimeout(finish, 2000);
    window.addEventListener("load", finish, { once: true });
    return () => {
      clearTimeout(cap);
      window.removeEventListener("load", finish);
    };
  }, []);

  return (
    <div
      aria-hidden={done}
      className={`preloader bg-brand-gradient fixed inset-0 z-[100] grid place-items-center overflow-hidden ${done ? "is-done" : ""}`}
      style={{ animation: "preloader-auto 0.6s ease 4s forwards" }}
    >
      <div className="flex flex-col items-center gap-8">
        <Loader scale="clamp(12px, 3.4vw, 18px)" />
        <p className="eyebrow text-blush-300/80">Viva Anant · Virar West</p>
      </div>
    </div>
  );
}
