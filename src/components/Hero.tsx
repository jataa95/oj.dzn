"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { heroWords, projects } from "@/content/site";
import { CtaButton, GhostButton } from "./ui";
import { LagosTime } from "./Nav";

function useCycle(length: number, ms: number) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % length), ms);
    return () => clearInterval(t);
  }, [length, ms]);
  return i;
}

export function Hero() {
  const w = useCycle(heroWords.length, 2800);
  const s = useCycle(projects.length, 3400);
  const p = projects[s];
  const stageRef = useRef<HTMLDivElement>(null);

  // The showcase starts tilted back and flattens as it scrolls into view.
  useEffect(() => {
    const el = stageRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const t = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.9)));
      el.style.setProperty("--tilt", `${(1 - t) * 16}deg`);
      el.style.setProperty("--lift", `${(1 - t) * 40}px`);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__guides wrap" aria-hidden="true">
        <i />
        <i />
      </div>

      <div className="wrap hero__inner">
        <p className="badge enter" style={{ "--e": 0 } as React.CSSProperties}>
          <span className="badge__dot" /> Taking new projects
          <span className="badge__sep" />
          <LagosTime />
        </p>

        <h1 className="hero__title">
          <span className="line">
            <span className="line__in" style={{ "--e": 1 } as React.CSSProperties}>
              Websites that
            </span>
          </span>
          <span className="line">
            <span className="line__in" style={{ "--e": 2 } as React.CSSProperties}>
              <span className="rotator">
                <span className="sr-only">{heroWords[0]}</span>
                <span className="rotator__track" aria-hidden="true">
                  {heroWords.map((word, n) => (
                    <span key={word} className={`rotator__word ${n === w ? "is-active" : ""} ${n === (w - 1 + heroWords.length) % heroWords.length ? "is-leaving" : ""}`}>
                      {word}.
                    </span>
                  ))}
                </span>
              </span>
            </span>
          </span>
        </h1>

        <div className="hero__row">
          <p className="hero__lede enter" style={{ "--e": 3 } as React.CSSProperties}>
            <strong>oj.dzn</strong> is a web design and development studio in Lagos. We design and build fast, editorial websites for brands,
            artists and businesses, made to turn visitors into enquiries, orders and bookings.
          </p>
          <div className="hero__ctas enter" style={{ "--e": 4 } as React.CSSProperties}>
            <CtaButton>Book a free 30-min call</CtaButton>
            <GhostButton href="#work">See the work</GhostButton>
          </div>
          <ul className="hero__meta enter" style={{ "--e": 5 } as React.CSSProperties}>
            <li>Design</li>
            <li>Development</li>
            <li>SEO &amp; speed</li>
            <li>Brand visuals</li>
          </ul>
        </div>

        <div ref={stageRef} className="stage enter" style={{ "--e": 6 } as React.CSSProperties}>
          <div className="browser">
            <div className="browser__bar">
              <span className="browser__dots">
                <i />
                <i />
                <i />
              </span>
              <span className="browser__url">
                <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                  <path d="M2.5 4.5V3a2.5 2.5 0 0 1 5 0v1.5M2 4.5h6v4.5H2z" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
                {p.url.replace("https://", "").replace(/\/$/, "")}
              </span>
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
                  sizes="(max-width: 1300px) 94vw, 1220px"
                  className={n === s ? "is-active" : ""}
                  priority={n === 0}
                />
              ))}
            </div>
          </div>

          <div className="stage__phone" aria-hidden="true">
            {projects.map((x, n) => (
              <Image key={x.slug} src={`/work/${x.slug}-mobile.webp`} alt="" fill sizes="200px" className={n === s ? "is-active" : ""} />
            ))}
          </div>

          <div className="stage__chip">
            <span className="stage__live" /> Live
            <strong>{p.name}</strong>
            <em>{p.industry}</em>
          </div>

          <div className="stage__progress" aria-hidden="true">
            {projects.map((x, n) => (
              <i key={x.slug} className={n === s ? "is-active" : n < s ? "is-past" : ""} />
            ))}
          </div>
        </div>

        <div className="clients">
          <p>Recent launches</p>
          <ul>
            {projects.map((x) => (
              <li key={x.slug}>
                <a href={x.url} target="_blank" rel="noopener noreferrer">
                  {x.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
