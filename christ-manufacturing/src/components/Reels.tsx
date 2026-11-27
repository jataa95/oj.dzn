"use client";

import { useEffect, useRef, useState } from "react";
import { reels, site } from "@/content/site";
import { Arrow } from "./Mark";
import { Reveal } from "./Reveal";

function Reel({ r, playing, onPlay }: { r: (typeof reels)[number]; playing: boolean; onPlay: () => void }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (playing) {
      v.muted = false;
      void v.play();
    } else {
      v.muted = true;
      if (!v.matches(":hover")) v.pause();
    }
  }, [playing]);

  // Stop audio when the card scrolls out of view.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) {
        v.pause();
        v.muted = true;
      }
    });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const preview = (on: boolean) => {
    const v = ref.current;
    if (!v || playing) return;
    if (on) void v.play();
    else v.pause();
  };

  return (
    <article className={`reel ${playing ? "reel--playing" : ""}`} onMouseEnter={() => preview(true)} onMouseLeave={() => preview(false)}>
      <div className="reel__media">
        <video ref={ref} src={r.src} poster={r.poster} muted loop playsInline preload="none" />
        <button className="reel__play" onClick={onPlay} aria-label={playing ? `Pause: ${r.title}` : `Play with sound: ${r.title}`}>
          <span aria-hidden="true">{playing ? "❚❚" : "▶"}</span>
        </button>
        {r.views && <span className="reel__views">{r.views}</span>}
      </div>
      <span className="chip">{r.tag}</span>
      <h3>{r.title}</h3>
    </article>
  );
}

export function Reels() {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section id="floor" className="reels" aria-labelledby="reels-title">
      <Reveal as="h2" id="reels-title" className="h-wide h-wide--sm">
        From the floor
      </Reveal>
      <Reveal as="p" className="muted reels__sub" delay={80}>
        Real orders, filmed as they happen. Hover to preview, press play for sound.
      </Reveal>
      <div className="reels__grid">
        {reels.map((r, i) => (
          <Reel key={r.src} r={r} playing={playing === i} onPlay={() => setPlaying((p) => (p === i ? null : i))} />
        ))}
      </div>
      <Reveal className="reels__more">
        <a className="link-caps" href={site.tiktok} target="_blank" rel="noopener noreferrer">
          Follow {site.tiktokHandle} <Arrow />
        </a>
      </Reveal>
    </section>
  );
}
