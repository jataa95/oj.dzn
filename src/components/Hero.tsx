"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroWords, projects, site } from "@/content/site";
import { CtaButton, GhostButton } from "./ui";

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

  return (
    <section className="hero" id="top">
      <div className="wrap">
        <p className="badge">
          <span className="badge__dot" /> Taking new projects · {site.location}
        </p>
        <h1 className="hero__title">
          Websites that
          <br />
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
        </h1>
        <div className="hero__row">
          <p className="hero__lede">
            <strong>oj.dzn</strong> is a web design and development studio in Lagos. We design and build fast, editorial websites for brands,
            artists and businesses, made to turn visitors into enquiries, orders and bookings.
          </p>
          <div className="hero__ctas">
            <CtaButton>Book a free 30-min call</CtaButton>
            <GhostButton href="#work">See the work</GhostButton>
          </div>
        </div>

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
                sizes="(max-width: 1300px) 94vw, 1220px"
                className={n === s ? "is-active" : ""}
                priority={n === 0}
              />
            ))}
          </div>
          <p className="browser__caption">
            <strong>{p.name}</strong> · {p.industry}
          </p>
        </div>
      </div>
    </section>
  );
}
