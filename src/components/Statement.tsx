"use client";

import { useEffect, useRef, useState } from "react";
import { Hand } from "./ui";

const text =
  "We help ambitious brands step out of the DMs and into websites that feel expensive, load fast and quietly turn visitors into enquiries, orders and bookings.";

/** Words sharpen from blurred grey to ink as the paragraph scrolls through the viewport. */
export function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const update = () => {
      if (reduced) return setProgress(1);
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.85 - r.top) / (r.height + vh * 0.35);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="statement" aria-label="What we do">
      <div className="wrap statement__inner">
        <Hand className="statement__hand">What we do</Hand>
        <p ref={ref} className="statement__text">
          <span className="sr-only">{text}</span>
          {words.map((w, i) => {
            const local = Math.min(1, Math.max(0, progress * words.length * 1.15 - i));
            return (
              <span key={i} aria-hidden="true" className="statement__word" style={{ opacity: 0.18 + local * 0.82, filter: `blur(${(1 - local) * 4}px)` }}>
                {w}{" "}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
