import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Cross } from "./Mark";

const stats = [
  { v: "50K", l: "Likes from the floor" },
  { v: "6.3K", l: "Followers watching us work" },
  { v: "302K", l: "Views on a single client drop" },
];

export function Statement() {
  return (
    <section id="studio" className="statement">
      <Reveal className="statement__mark">
        <Cross />
      </Reveal>
      <Reveal as="p" className="eyebrow">
        The studio
      </Reveal>
      <Reveal as="blockquote" className="statement__quote" delay={80}>
        <p>
          “If you have a brand, if you have a clothing idea — something in mind you really want to execute — bring it on. We’ll
          produce it in large quantities or small, with <em>good finishing</em> and <em>good quality</em>.”
        </p>
        <footer>
          {site.founder} <span>· Founder</span>
        </footer>
      </Reveal>
      <dl className="statement__stats">
        {stats.map((s, i) => (
          <Reveal key={s.l} className="stat" delay={120 + i * 90}>
            <dt>{s.l}</dt>
            <dd>{s.v}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
