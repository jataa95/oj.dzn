import { industries } from "@/content/site";

export function Marquee() {
  const items = [...industries, ...industries];
  return (
    <div className="marquee-clip">
    <div className="marquee" aria-label={`Built for ${industries.join(", ")}`}>
      <div className="marquee__track" aria-hidden="true">
        {items.map((x, i) => (
          <span key={i}>
            {x} <i className="marquee__sep" />
          </span>
        ))}
      </div>
    </div>
    </div>
  );
}
