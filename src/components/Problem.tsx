"use client";

import Image from "next/image";
import { painPoints } from "@/content/site";
import { useInView } from "./Reveal";
import { Corners } from "./ui";

export function Problem() {
  const [ref, inView] = useInView<HTMLDivElement>(0.35);
  return (
    <section className="problem wrap" aria-labelledby="problem-title">
      <div ref={ref} className={`problem__card ${inView ? "is-in" : ""}`}>
        <Image className="problem__bg" src="/work/oseyi-desktop.webp" alt="" fill sizes="100vw" />
        <div className="problem__frame">
          <Corners />
        </div>
        <h2 id="problem-title" className="problem__left">
          Still doing business
        </h2>
        <div className="problem__pills">
          <span className="problem__paren">(</span>
          <ul>
            {painPoints.map((p, i) => (
              <li key={p} style={{ transitionDelay: `${300 + i * 90}ms` }}>
                {p}
              </li>
            ))}
          </ul>
          <span className="problem__paren">)</span>
        </div>
        <p className="problem__right" aria-hidden="false">
          without a website?
        </p>
      </div>
    </section>
  );
}
