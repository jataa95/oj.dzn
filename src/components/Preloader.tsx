"use client";

import { useEffect, useRef, useState } from "react";

const MIN_MS = 1700;
const MAX_MS = 5000;
const WORDS = ["Strategy", "Design", "Development", "Launch"];
const PANELS = 5;

type Phase = "loading" | "complete" | "leaving" | "done";

/**
 * Intro: the bolt mark draws itself in cream while the studio's process words tick
 * by and a hairline bar fills. At 100% the mark fills solid, then five panels lift
 * away in a stagger to reveal the hero. An inline script in <head> adds
 * `html.preloading` (once per session, skipped for reduced motion), so without JS
 * nothing ever hides the page.
 */
export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<Phase>("loading");
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

    const timers: ReturnType<typeof setTimeout>[] = [];
    const start = performance.now();
    let raf = 0;
    let shown = 0;
    const step = (now: number) => {
      const t = now - start;
      const ready = (loaded.current && t > MIN_MS) || t > MAX_MS;
      const target = ready ? 1 : Math.min(0.9, (t / MIN_MS) * 0.9);
      shown += (target - shown) * (ready ? 0.14 : 0.07);
      if (ready && shown > 0.996) shown = 1;
      setProgress(shown);
      if (shown < 1) {
        raf = requestAnimationFrame(step);
        return;
      }
      setPhase("complete");
      timers.push(setTimeout(() => setPhase("leaving"), 650));
      timers.push(
        setTimeout(() => {
          html.classList.remove("preloading");
          try {
            sessionStorage.setItem("ojdzn-intro", "1");
          } catch {}
        }, 1050),
      );
      timers.push(setTimeout(() => setPhase("done"), 2300));
    };
    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  if (phase === "done") return null;

  const word = Math.min(WORDS.length - 1, Math.floor(progress * WORDS.length));
  const pct = Math.round(progress * 100);

  return (
    <div className={`preloader is-${phase}`} aria-hidden="true" style={{ "--p": progress } as React.CSSProperties}>
      <div className="preloader__panels">
        {Array.from({ length: PANELS }, (_, i) => (
          <i key={i} style={{ "--i": i } as React.CSSProperties} />
        ))}
      </div>

      <div className="preloader__content">
        <div className="preloader__mark">
          <svg viewBox="0 0 440 440">
            <circle className="preloader__fillc" cx="220" cy="220" r="219" />
            <circle className="preloader__ring" cx="220" cy="220" r="218" pathLength={1} />
            <path className="preloader__bolt" d="M265 15 98 243h114l-40 172 166-228H232z" pathLength={1} />
          </svg>
        </div>
        <div className="preloader__words">
          {WORDS.map((w, i) => (
            <span key={w} className={i === word ? "is-active" : i < word ? "is-past" : ""}>
              {w}
            </span>
          ))}
        </div>
      </div>

      <div className="preloader__foot">
        <p className="preloader__brand">oj.dzn</p>
        <p className="preloader__count">{String(pct).padStart(3, "0")}</p>
      </div>
      <div className="preloader__bar">
        <span />
      </div>
    </div>
  );
}
