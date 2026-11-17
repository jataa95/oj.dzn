import Image from "next/image";
import { projects } from "@/content/site";
import { Arrow, Hand } from "./ui";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <div className="section-head section-head--center">
          <Hand>Selected work</Hand>
          <Reveal as="h2" className="h2">
            <span id="work-title">Real brands. Live sites.</span>
          </Reveal>
          <Reveal as="p" className="lede" delay={100}>
            Recent launches across real estate, fashion, fine art, interiors and church. Click through and try them — they&apos;re all live.
          </Reveal>
        </div>

        <ol className="stack">
          {projects.map((p, i) => (
            <li key={p.slug} className="stack__item" style={{ "--i": i } as React.CSSProperties}>
              <article className="case">
                <div className="case__info">
                  <p className="case__index">
                    {i + 1}/{projects.length}
                  </p>
                  <p className="case__meta">
                    <span className="pill">{p.industry}</span>
                    <span className="case__loc">{p.location}</span>
                  </p>
                  <h3 className="case__name">{p.name}</h3>
                  <p className="case__headline">{p.headline}</p>
                  <p className="case__summary">{p.summary}</p>
                  <ul className="case__scope">
                    {p.scope.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <a className="case__link" href={p.url} target="_blank" rel="noopener noreferrer">
                    Visit live site <Arrow />
                  </a>
                </div>
                <a className="case__visual" href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.name} live site`}>
                  <Image src={`/work/${p.slug}-mockup.webp`} alt={`${p.name} website on desktop and mobile`} fill sizes="(max-width: 900px) 92vw, 680px" />
                </a>
              </article>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}
