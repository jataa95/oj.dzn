"use client";

import { useEffect, useRef, useState } from "react";

const MIN_MS = 1500;
const MAX_MS = 4500;

/**
 * Full-screen intro: the bolt fills with cream while a counter runs to 100,
 * then the curtain lifts. An inline script in <head> adds `html.preloading`
 * (once per session, skipped for reduced motion), so without JS nothing hides the page.
 */
export function Preloader() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"loading" | "leaving" | "done">("loading");
  const loaded = useRef(false);

  useEffect(() => {
    const html = document.documentElement;
    if (!html.classList.contains("preloading")) {
      const t = setTimeout(() => setPhase("done"), 0);
      return () => clearTimeout(t);
    }
    const onLoad = () => (loaded.current = true);
    if (document.readyState === "complete") loaded.current = true;
    else window.addEventListener("load", onLoad, { once: true });

    const start = performance.now();
    let raf = 0;
    let shown = 0;
    const step = (now: number) => {
      const t = now - start;
      const ready = (loaded.current && t > MIN_MS) || t > MAX_MS;
      const target = ready ? 100 : Math.min(90, (t / MIN_MS) * 90);
      shown += (target - shown) * (ready ? 0.18 : 0.08);
      if (ready && shown > 99.5) shown = 100;
      setCount(Math.round(shown));
      if (shown < 100) raf = requestAnimationFrame(step);
      else {
        setPhase("leaving");
        setTimeout(() => {
          html.classList.remove("preloading");
          try {
            sessionStorage.setItem("ojdzn-intro", "1");
          } catch {}
        }, 450);
        setTimeout(() => setPhase("done"), 1500);
      }
    };
    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`preloader ${phase === "leaving" ? "is-leaving" : ""}`} aria-hidden="true" style={{ "--fill": `${count}%` } as React.CSSProperties}>
      <div className="preloader__mark">
        <svg viewBox="0 0 440 440" className="preloader__ghost">
          <circle cx="220" cy="220" r="218" fill="none" stroke="rgba(239,225,206,.25)" strokeWidth="2" />
          <path d="M265 15 98 243h114l-40 172 166-228H232z" fill="none" stroke="rgba(239,225,206,.25)" strokeWidth="3" />
        </svg>
        <svg viewBox="0 0 440 440" className="preloader__fill">
          <circle cx="220" cy="220" r="220" fill="#EFE1CE" />
          <path fill="#333333" d="M265 15 98 243h114l-40 172 166-228H232z" />
        </svg>
      </div>
      <p className="preloader__brand">
        oj.dzn <span>Web design &amp; development studio</span>
      </p>
      <p className="preloader__count">
        {String(count).padStart(3, "0")}
        <span>%</span>
      </p>
    </div>
  );
}
