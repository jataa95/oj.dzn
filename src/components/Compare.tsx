import { comparison } from "@/content/site";
import { BoltMark } from "./Logo";
import { Hand } from "./ui";
import { Reveal } from "./Reveal";

function Mark({ ok }: { ok: boolean }) {
  return ok ? (
    <span className="mark mark--yes" aria-label="Yes">
      ✓
    </span>
  ) : (
    <span className="mark mark--no" aria-label="No">
      —
    </span>
  );
}

export function Compare() {
  const last = comparison.columns.length - 1;
  return (
    <section className="compare" aria-labelledby="compare-title">
      <div className="wrap">
        <div className="section-head section-head--center">
          <Hand>The template tax</Hand>
          <Reveal as="h2" className="h2">
            <span id="compare-title">
              A cheap website
              <br /> costs more than you think.
            </span>
          </Reveal>
        </div>
        <Reveal className="compare__table" delay={100}>
          <table>
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr-only">Feature</span>
                </th>
                {comparison.columns.map((c, i) => (
                  <th key={c} scope="col" className={i === last ? "is-us" : ""}>
                    {i === last ? (
                      <span className="compare__us">
                        <BoltMark size={22} /> {c}
                      </span>
                    ) : (
                      c
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((r) => (
                <tr key={r.label}>
                  <th scope="row">{r.label}</th>
                  {r.values.map((v, i) => (
                    <td key={i} className={i === last ? "is-us" : ""}>
                      <Mark ok={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
