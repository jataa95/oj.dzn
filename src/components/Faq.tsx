import { faqs } from "@/content/site";
import { Hand } from "./ui";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <section className="faq gridbg" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq__inner">
        <div className="faq__head">
          <Hand>FAQ</Hand>
          <Reveal as="h2" className="h2">
            <span id="faq-title">
              Good questions,
              <br /> straight answers.
            </span>
          </Reveal>
        </div>
        <div className="faq__list">
          {faqs.map((f, i) => (
            <details key={f.q} name="faq" open={i === 0}>
              <summary>
                {f.q}
                <span className="faq__icon" aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
