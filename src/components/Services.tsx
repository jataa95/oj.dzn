import { services } from "@/content/site";
import { Hand } from "./ui";
import { Reveal } from "./Reveal";
import { Shape } from "./Shapes";

export function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <div className="section-head">
          <Hand>What&apos;s included</Hand>
          <Reveal as="h2" className="h2">
            <span id="services-title">
              Everything your brand needs,
              <br /> at every stage.
            </span>
          </Reveal>
        </div>

        <div className="services__rows">
          {services.map((stage, i) => (
            <div key={stage.tag} className="services__row stack-card" style={{ "--i": i } as React.CSSProperties}>
              <div className="services__stage">
                <span className="tag">{stage.tag}</span>
                <p>{stage.title}</p>
              </div>
              <ul className="services__tiles">
                {stage.items.map((item, n) => (
                  <Reveal as="li" key={item.name} delay={n * 90} className="stile">
                    <span className="stile__name">{item.name}</span>
                    {item.note && <Hand className="stile__note">{item.note}</Hand>}
                    <Shape name={item.shape} className="stile__shape" />
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
