import Image from "next/image";
import { wa } from "@/content/site";
import { Reveal } from "./Reveal";

export function Cta() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <Image src="/media/studio-racks.webp" alt="" fill sizes="100vw" className="cta__bg" />
      <div className="cta__shade" aria-hidden="true" />
      <div className="cta__content">
        <Reveal as="h2" id="cta-title" className="cta__title">
          Because your brand is personal
        </Reveal>
        <Reveal as="p" className="cta__text" delay={80}>
          If something inside you says “this could be a collection”, it is time to start. A rough sketch or a full tech pack —
          send it over and we will tell you how we would make it.
        </Reveal>
        <Reveal delay={140}>
          <a className="btn btn--light" href={wa()} target="_blank" rel="noopener noreferrer">
            Start on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
