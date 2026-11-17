"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { projects } from "@/content/site";
import { CtaButton } from "./ui";
import { LagosTime } from "./Nav";

/** Columns for the background wall: alternate desktop and mobile shots, offset per column. */
const columns = Array.from({ length: 6 }, (_, c) =>
  Array.from({ length: 5 }, (_, r) => {
    const p = projects[(c * 2 + r * 3) % projects.length];
    const mobile = (c + r) % 3 === 1;
    return { slug: p.slug, name: p.name, mobile };
  }),
);

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Pointer parallax for the wall + a soft spotlight that follows the cursor.
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        el.style.setProperty("--mx", (x - 0.5).toFixed(3));
        el.style.setProperty("--my", (y - 0.5).toFixed(3));
        el.style.setProperty("--sx", `${(x * 100).toFixed(1)}%`);
        el.style.setProperty("--sy", `${(y * 100).toFixed(1)}%`);
      });
    };
    el.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <section ref={ref} className="hero" id="top">
      <div className="wall" aria-hidden="true">
        <div className="wall__plane">
          {columns.map((col, c) => (
            <div key={c} className={`wall__col ${c % 2 ? "wall__col--down" : ""}`} style={{ "--dur": `${46 + c * 7}s` } as React.CSSProperties}>
              {[...col, ...col].map((t, i) => (
                <div key={i} className={`wall__card ${t.mobile ? "wall__card--m" : ""}`}>
                  <Image src={`/work/${t.slug}-${t.mobile ? "mobile" : "desktop"}.webp`} alt="" fill sizes={t.mobile ? "160px" : "360px"} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__spot" aria-hidden="true" />

      <div className="wrap hero__inner">

        <h1 className="hero__title">
          <span className="line">
            <span className="line__in" style={{ "--e": 0 } as React.CSSProperties}>
              Stand out.
            </span>
          </span>
          <span className="line">
            <span className="line__in" style={{ "--e": 1 } as React.CSSProperties}>
              <span className="hero__soft">Get chosen.</span>
            </span>
          </span>
        </h1>

        <p className="hero__lede enter" style={{ "--e": 3 } as React.CSSProperties}>
          In a market full of templates, we design and build premium websites that make your brand the obvious choice, then make it easy to
          say yes.
        </p>
        <div className="hero__ctas enter" style={{ "--e": 4 } as React.CSSProperties}>
          <CtaButton>Start your project</CtaButton>
        </div>

        <div className="trusted enter" style={{ "--e": 5 } as React.CSSProperties}>
          <p className="trusted__label">Trusted by</p>
          <div className="trusted__viewport">
            <ul className="trusted__track">
              {[...projects, ...projects].map((x, i) => (
                <li key={i} aria-hidden={i >= projects.length}>
                  {x.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="hero__bar wrap enter" style={{ "--e": 6 } as React.CSSProperties}>
        <p className="hero__status">
          <span className="badge__dot" /> Taking new projects · <LagosTime />
        </p>
        <p className="hero__count">
          <strong>{String(projects.length).padStart(2, "0")}</strong> live launches · 2026
        </p>
      </div>
    </section>
  );
}
