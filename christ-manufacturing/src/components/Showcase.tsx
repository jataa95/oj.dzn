import Image from "next/image";
import { showcase, site } from "@/content/site";
import { Arrow } from "./Mark";
import { Reveal } from "./Reveal";

export function Showcase() {
  return (
    <section className="showcase" aria-labelledby="showcase-title">
      <header className="showcase__head">
        <Reveal as="h2" id="showcase-title" className="showcase__title">
          The Best <span className="script">of</span> CHRIST
        </Reveal>
        <Reveal as="p" className="showcase__sub" delay={80}>
          Drops we have cut, printed and sewn — for our clients and for ourselves.
        </Reveal>
        <Reveal delay={140}>
          <a className="pill-link" href={site.tiktok} target="_blank" rel="noopener noreferrer">
            <span className="pill-link__icon">
              <Arrow />
            </span>
            See more on TikTok
          </a>
        </Reveal>
      </header>

      <ul className="showcase__grid">
        {showcase.map((s, i) => (
          <li key={s.title} className={`work work--${i}`}>
            <Reveal className="work__inner">
              <div className="work__img">
                <Image src={s.img} alt={s.alt} fill sizes="(max-width: 720px) 86vw, 360px" />
              </div>
              <div className="work__cap">
                <h3>{s.title}</h3>
                <p>
                  {s.meta} <span>·</span> {s.by}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
