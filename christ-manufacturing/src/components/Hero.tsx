import { site, wa } from "@/content/site";

const clips = [
  { src: "/media/hero-print.mp4", poster: "/media/hero-print-poster.webp" },
  { src: "/media/hero-floor.mp4", poster: "/media/hero-floor-poster.webp" },
  { src: "/media/hero-sew.mp4", poster: "/media/hero-sew-poster.webp" },
];

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        {clips.map((c, i) => (
          <div key={c.src} className={`hero__clip hero__clip--${i}`}>
            <video src={c.src} poster={c.poster} autoPlay muted loop playsInline preload={i === 1 ? "auto" : "metadata"} />
          </div>
        ))}
      </div>
      <div className="hero__shade" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__eyebrow">Premium clothing manufacturing</p>
        <h1 id="hero-title" className="hero__title">
          <span className="line"><span>Where ideas</span></span>
          <span className="line"><span>become clothing</span></span>
        </h1>
        <p className="hero__lede">
          Samples, bulk production and quality finishing for fashion brands, made by hand on our floor in {site.city}.
        </p>
        <a className="btn btn--ghost" href={wa()} target="_blank" rel="noopener noreferrer">
          Start a sample
        </a>
      </div>

      <div className="hero__foot">
        <span>
          {site.city}, {site.country}
        </span>
        <span className="hero__foot-mid">Samples &nbsp;|&nbsp; Bulk production &nbsp;|&nbsp; Quality finishing</span>
        <a href={site.tiktok} target="_blank" rel="noopener noreferrer">
          {site.tiktokHandle}
        </a>
      </div>
    </section>
  );
}
