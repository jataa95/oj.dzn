import { packages, site } from "@/content/site";
import { CtaButton, Hand } from "./ui";
import { Reveal } from "./Reveal";

export function Packages() {
  return (
    <section className="packages" id="packages" aria-labelledby="packages-title">
      <div className="wrap">
        <div className="section-head section-head--center">
          <Hand>Packages</Hand>
          <Reveal as="h2" className="h2">
            <span id="packages-title">Pick a starting point.</span>
          </Reveal>
          <Reveal as="p" className="lede" delay={100}>
            Every project is quoted to fit your goals. These are the usual shapes they take.
          </Reveal>
        </div>
        <div className="packages__grid">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 100} className={`pkg ${p.featured ? "pkg--featured" : ""}`}>
              <div className="pkg__head">
                {p.featured && <span className="pkg__flag">Most popular</span>}
                <h3>{p.name}</h3>
                <p>{p.for}</p>
              </div>
              <div className="pkg__body">
                {p.price && <p className="pkg__price">{p.price}</p>}
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <CtaButton href={`${site.calendly}`} variant={p.featured ? "dark" : "light"}>
                  Book a call
                </CtaButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
