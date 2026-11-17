import { steps } from "@/content/site";
import { Hand } from "./ui";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section className="process gridbg" id="process" aria-labelledby="process-title">
      <div className="wrap">
        <div className="section-head section-head--center">
          <Hand>The process</Hand>
          <Reveal as="h2" className="h2">
            <span id="process-title">
              No guesswork. Just
              <br /> a clear plan.
            </span>
          </Reveal>
          <Reveal as="p" className="lede" delay={100}>
            One point of contact from the first call to launch day. You always know what&apos;s happening and what comes next.
          </Reveal>
        </div>
        <div className="process__arc" aria-hidden="true" />
        <ol className="process__cards">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 120} className="pcard" style={{ "--r": `${(i - 1.5) * 4}deg` } as React.CSSProperties}>
              <div className={`pcard__top tone-${s.tone}`}>
                <span className="pcard__n">{s.n}</span>
                <Hand className="pcard__step">{s.title}</Hand>
              </div>
              <ul>
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
