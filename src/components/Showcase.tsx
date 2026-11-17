"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { projects } from "@/content/site";
import { CtaButton } from "./ui";
import { Reveal } from "./Reveal";

/** A browser frame that cycles through live projects, sitting on colour blocks. */
export function Showcase() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % projects.length), 3200);
    return () => clearInterval(t);
  }, []);
  const p = projects[i];

  return (
    <section className="showcase gridbg" aria-labelledby="showcase-title">
      <div className="wrap">
        <Reveal as="h2" className="showcase__title" >
          <span id="showcase-title">That&apos;s why OJ.DZN exists.</span>
        </Reveal>
        <Reveal className="showcase__sub" delay={120}>
          Sites designed around one job: making your brand look as good as it really is, then making the next step obvious.
        </Reveal>

        <div className="showcase__stage">
          <span className="showcase__block tone-sky" />
          <span className="showcase__block tone-volt" />
          <span className="showcase__block tone-coral" />
          <span className="showcase__block tone-sage" />
          <span className="showcase__block tone-sand" />

          <div className="browser">
            <div className="browser__bar">
              <span className="browser__dots">
                <i />
                <i />
                <i />
              </span>
              <span className="browser__url">{p.url.replace("https://", "").replace(/\/$/, "")}</span>
              <a className="browser__open" href={p.url} target="_blank" rel="noopener noreferrer">
                Visit ↗
              </a>
            </div>
            <div className="browser__view">
              {projects.map((x, n) => (
                <Image
                  key={x.slug}
                  src={`/work/${x.slug}-desktop.webp`}
                  alt={`${x.name} website homepage`}
                  fill
                  sizes="(max-width: 900px) 92vw, 1100px"
                  className={n === i ? "is-active" : ""}
                  priority={n === 0}
                />
              ))}
            </div>
          </div>

          <div className="showcase__toast">
            <span className="showcase__toast-ico">✓</span>
            <span>
              <strong>{p.name}</strong>
              <em>{p.industry} · Live</em>
            </span>
          </div>

          <div className="showcase__cta">
            <CtaButton>Get a site like this</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
