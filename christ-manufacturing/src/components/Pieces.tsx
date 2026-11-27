"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { pieces } from "@/content/site";
import { Chevron } from "./Mark";
import { Reveal } from "./Reveal";

export function Pieces() {
  const track = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 });
  }, []);

  useEffect(() => {
    update();
    const el = track.current;
    el?.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + 24), behavior: "smooth" });
  };

  return (
    <section id="pieces" className="pieces" aria-labelledby="pieces-title">
      <Reveal as="h2" id="pieces-title" className="h-sans">
        Made by hand.
      </Reveal>
      <Reveal as="p" className="pieces__sub" delay={80}>
        A few pieces from the floor — our own and our clients’. Every one cut, sewn and finished in Abuja.
      </Reveal>

      <div className="pieces__wrap">
        <button className="round-btn pieces__prev" onClick={() => step(-1)} disabled={edge.start} aria-label="Previous pieces">
          <Chevron dir="left" />
        </button>
        <ul ref={track} className="pieces__track" tabIndex={0} aria-label="Pieces">
          {pieces.map((p, i) => (
            <li key={p.title} className="piece">
              <figure className="piece__frame">
                <div className="piece__img">
                  <Image src={p.img} alt={p.alt} fill sizes="(max-width: 720px) 70vw, 340px" loading={i < 3 ? "eager" : "lazy"} />
                </div>
              </figure>
              <div className="piece__meta">
                <h3>{p.title}</h3>
                <span>{p.detail}</span>
              </div>
              <p className="piece__kind">{p.kind}</p>
            </li>
          ))}
        </ul>
        <button className="round-btn pieces__next" onClick={() => step(1)} disabled={edge.end} aria-label="Next pieces">
          <Chevron />
        </button>
      </div>
    </section>
  );
}
