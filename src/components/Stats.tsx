"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/content/site";

/** Counts each stat up from 0 once the hero is revealed (after the preloader, if any). */
export function Stats() {
  const ref = useRef<HTMLUListElement>(null);
  const [t, setT] = useState(0);

  useEffect(() => {
    const html = document.documentElement;
    let raf = 0;
    let timer: ReturnType<typeof setTimeout>;
    const run = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setT(1);
        return;
      }
      const start = performance.now();
      const dur = 1600;
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / dur);
        setT(1 - Math.pow(1 - p, 3));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const begin = () => (timer = setTimeout(run, 700));
    let mo: MutationObserver | undefined;
    if (html.classList.contains("preloading")) {
      mo = new MutationObserver(() => {
        if (!html.classList.contains("preloading")) {
          mo?.disconnect();
          begin();
        }
      });
      mo.observe(html, { attributes: true, attributeFilter: ["class"] });
    } else begin();
    return () => {
      mo?.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <ul ref={ref} className="stats">
      {stats.map((s) => (
        <li key={s.label}>
          <strong>
            <span className="sr-only">
              {s.value}
              {s.suffix}
            </span>
            <span aria-hidden="true">
              {Math.round(s.value * t)}
              <em>{s.suffix}</em>
            </span>
          </strong>
          <span>{s.label}</span>
        </li>
      ))}
    </ul>
  );
}
