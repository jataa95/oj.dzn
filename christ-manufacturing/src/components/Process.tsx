"use client";

import Image from "next/image";
import { useState } from "react";
import { steps } from "@/content/site";
import { Reveal } from "./Reveal";

export function Process() {
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="process" aria-labelledby="process-title">
      <Reveal as="h2" id="process-title" className="process__title">
        From sketch <br />
        to shelf
      </Reveal>

      <div className="process__body">
        <ol className="process__list">
          {steps.map((s, i) => (
            <li key={s.n} className={`step ${active === i ? "step--active" : ""}`}>
              <button
                className="step__btn"
                aria-expanded={active === i}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <span className="step__label">
                  {s.n}&nbsp;&nbsp;.&nbsp;&nbsp;{s.title}
                </span>
                <span className="step__body">{s.body}</span>
              </button>
            </li>
          ))}
        </ol>

        <div className="process__visual" aria-hidden="true">
          {steps.map((s, i) => (
            <div key={s.n} className={`process__img ${active === i ? "is-active" : ""}`}>
              <Image src={s.img} alt="" fill sizes="(max-width: 900px) 90vw, 40vw" />
            </div>
          ))}
          <span className="process__count">
            {steps[active].n} / {steps[steps.length - 1].n}
          </span>
        </div>
      </div>

      <Reveal as="p" className="process__note muted">
        Every phase is handled on one floor — so the person who drafted your pattern is in the room when it is sewn.
      </Reveal>
    </section>
  );
}
