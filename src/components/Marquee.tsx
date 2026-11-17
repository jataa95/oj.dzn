import { industries } from "@/content/site";
import { BoltMark } from "./Logo";

export function Marquee() {
  const items = [...industries, ...industries];
  return (
    <div className="marquee-clip">
    <div className="marquee" aria-label={`Built for ${industries.join(", ")}`}>
      <div className="marquee__track" aria-hidden="true">
        {items.map((x, i) => (
          <span key={i}>
            {x} <BoltMark size={22} />
          </span>
        ))}
      </div>
    </div>
    </div>
  );
}
