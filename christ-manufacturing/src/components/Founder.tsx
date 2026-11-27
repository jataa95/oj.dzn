"use client";

import { useRef, useState } from "react";
import { site, wa } from "@/content/site";
import { Reveal } from "./Reveal";

export function Founder() {
  const video = useRef<HTMLVideoElement>(null);
  const [sound, setSound] = useState(false);

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    const next = !sound;
    v.muted = !next;
    if (next) {
      v.currentTime = 0;
      void v.play();
    }
    setSound(next);
  };

  return (
    <section className="founder" aria-labelledby="founder-title">
      <div className="founder__film">
        <video
          ref={video}
          src="/media/reel-founder.mp4"
          poster="/media/reel-founder-poster.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-label={`${site.founder} introducing CHRIST Manufacturing`}
        />
        <button className="founder__sound" onClick={toggle} aria-pressed={sound}>
          <span className={`eq ${sound ? "eq--on" : ""}`} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          {sound ? "Sound on" : "Hear it from Victor"}
        </button>
      </div>

      <div className="founder__copy">
        <Reveal as="p" className="eyebrow eyebrow--light">
          Who is in the room
        </Reveal>
        <Reveal as="h2" id="founder-title" className="founder__title" delay={60}>
          One floor.
          <br />
          Many pairs of hands.
        </Reveal>
        <Reveal as="p" className="founder__text" delay={120}>
          {site.founder} built CHRIST Manufacturing so that Nigerian brands would not have to choose between small runs and
          serious quality. Pattern cutters, machinists, printers and finishers work side by side, and every order passes
          through the same hands before it leaves.
        </Reveal>
        <Reveal as="p" className="founder__sign" delay={160}>
          “You’re gonna love it.”
        </Reveal>
        <Reveal delay={200}>
          <a className="btn btn--light" href={wa()} target="_blank" rel="noopener noreferrer">
            Bring us your idea
          </a>
        </Reveal>
      </div>
    </section>
  );
}
