import Image from "next/image";
import { services, tiles, wa } from "@/content/site";
import { Arrow } from "./Mark";
import { Reveal } from "./Reveal";

function TileRow({ reverse = false, offset = 0 }: { reverse?: boolean; offset?: number }) {
  const row = [...tiles.slice(offset), ...tiles.slice(0, offset)];
  return (
    <div className={`tiles ${reverse ? "tiles--reverse" : ""}`} aria-hidden="true">
      <div className="tiles__track">
        {[...row, ...row].map((t, i) => (
          <div className="tile" key={`${t}-${i}`}>
            <Image src={`/media/${t}.webp`} alt="" width={160} height={160} sizes="160px" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Beyond() {
  return (
    <section className="beyond" aria-labelledby="beyond-title">
      <TileRow />
      <div className="beyond__copy">
        <Reveal as="h2" id="beyond-title" className="h-wide">
          Beyond the seam
        </Reveal>
        <Reveal as="p" className="muted" delay={80}>
          We are not a tailor and we are not a mass factory. We are the room in between — where a brand’s first sample gets
          made with the same care as its five-hundredth piece.
        </Reveal>
        <Reveal delay={140}>
          <a className="link-caps" href={wa("Hello CHRIST Manufacturing, I'd like to talk about producing my collection.")} target="_blank" rel="noopener noreferrer">
            Talk to the floor <Arrow />
          </a>
        </Reveal>
      </div>
      <TileRow reverse offset={4} />

      <ol className="services" aria-label="What we do">
        {services.map((s, i) => (
          <Reveal as="li" key={s.n} className="service" delay={i * 70}>
            <span className="service__n">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
