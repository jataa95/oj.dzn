"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroWords, projects, site } from "@/content/site";
import { BoltMark } from "./Logo";
import { CtaButton, GhostButton } from "./ui";

type Tile =
  | { c: number; r: number; kind: "shape"; shape: "sq" | "circle" | "tri" | "tri2" | "archUp" | "archDown" | "diamond"; tone: string; hide?: boolean }
  | { c: number; r: number; kind: "img"; slug: string; hide?: boolean }
  | { c: number; r: number; kind: "bolt"; hide?: boolean };

const tiles: Tile[] = [
  { c: 1, r: 1, kind: "shape", shape: "sq", tone: "sage" },
  { c: 2, r: 2, kind: "shape", shape: "circle", tone: "pale" },
  { c: 1, r: 3, kind: "shape", shape: "circle", tone: "sage" },
  { c: 3, r: 1, kind: "shape", shape: "tri", tone: "coral" },
  { c: 3, r: 2, kind: "shape", shape: "sq", tone: "sand" },
  { c: 4, r: 2, kind: "shape", shape: "tri2", tone: "coral" },
  { c: 3, r: 3, kind: "img", slug: "oseyi" },
  { c: 4, r: 3, kind: "shape", shape: "sq", tone: "coral" },
  { c: 5, r: 1, kind: "img", slug: "blocsmith" },
  { c: 6, r: 1, kind: "shape", shape: "sq", tone: "sage" },
  { c: 6, r: 2, kind: "bolt" },
  { c: 5, r: 3, kind: "shape", shape: "archUp", tone: "sage" },
  { c: 7, r: 2, kind: "shape", shape: "sq", tone: "sky", hide: true },
  { c: 7, r: 3, kind: "img", slug: "fourdtruth", hide: true },
  { c: 8, r: 1, kind: "shape", shape: "diamond", tone: "coral", hide: true },
  { c: 8, r: 2, kind: "shape", shape: "archDown", tone: "sage", hide: true },
  { c: 9, r: 1, kind: "shape", shape: "sq", tone: "sand", hide: true },
  { c: 9, r: 2, kind: "img", slug: "celesta", hide: true },
  { c: 10, r: 3, kind: "shape", shape: "sq", tone: "pale", hide: true },
  { c: 10, r: 2, kind: "shape", shape: "archDown", tone: "sky", hide: true },
  { c: 11, r: 1, kind: "img", slug: "ibase", hide: true },
  { c: 11, r: 2, kind: "shape", shape: "sq", tone: "sky", hide: true },
  { c: 12, r: 2, kind: "shape", shape: "archUp", tone: "sky", hide: true },
  { c: 12, r: 3, kind: "shape", shape: "circle", tone: "pale", hide: true },
  { c: 9, r: 3, kind: "shape", shape: "tri", tone: "sand", hide: true },
];

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % heroWords.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="rotator" aria-live="off">
      <span className="sr-only">{heroWords[0]}</span>
      <span className="rotator__track" aria-hidden="true">
        {heroWords.map((w, n) => (
          <span key={w} className={`rotator__word ${n === i ? "is-active" : ""} ${n === (i - 1 + heroWords.length) % heroWords.length ? "is-leaving" : ""}`}>
            {w}
          </span>
        ))}
      </span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner wrap">
        <div className="hero__copy">
          <p className="badge">
            <span className="badge__dot" /> Taking new projects · {site.location}
          </p>
          <h1 className="hero__title">
            Websites that
            <br />
            <RotatingWord />
          </h1>
        </div>
        <div className="hero__aside">
          <p>
            I&apos;m <strong>Ohjay</strong>, a web designer and developer. I design and build fast, editorial websites for brands, artists and
            businesses — made to turn visitors into enquiries, orders and bookings.
          </p>
          <div className="hero__ctas">
            <CtaButton>Book a free 30-min call</CtaButton>
            <GhostButton href="#work">See the work</GhostButton>
          </div>
        </div>
      </div>

      <div className="band" aria-hidden="true">
        <div className="band__grid">
          <span className="band__label band__label--tl">Strategy</span>
          <span className="band__label band__label--tr">Design</span>
          <span className="band__label band__label--br">Launch</span>
          {tiles.map((t, n) => {
            const style = { gridColumn: t.c, gridRow: t.r, animationDelay: `${200 + n * 45}ms` };
            const cls = `tile ${t.hide ? "tile--wide" : ""}`;
            if (t.kind === "img") {
              const p = projects.find((x) => x.slug === t.slug)!;
              return (
                <span key={n} className={`${cls} tile--img`} style={style}>
                  <Image src={`/work/${p.slug}-mobile.webp`} alt="" fill sizes="(max-width: 800px) 16vw, 8vw" priority={n < 10} />
                </span>
              );
            }
            if (t.kind === "bolt")
              return (
                <span key={n} className={`${cls} tile--bolt`} style={style}>
                  <BoltMark size={64} />
                </span>
              );
            return <span key={n} className={`${cls} tile--${t.shape} tone-${t.tone}`} style={style} />;
          })}
        </div>
      </div>

      <div className="hero__proof wrap">
        <p>
          <strong>{projects.length} brands launched</strong> recently across
        </p>
        <ul>
          {["Real estate", "Fashion", "Fine art", "Interiors", "Church"].map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
