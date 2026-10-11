import { useState } from "react";
import { site } from "../../content/site";
import { SectionShell } from "../../components/SectionShell/SectionShell";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Universe.module.css";

export function Universe() {
  const c = site.universe;
  const [open, setOpen] = useState<number | null>(null);

  function toggle(i: number) {
    setOpen((prev) => (prev === i ? null : i));
  }

  return (
    <SectionShell
      id="universo"
      kicker={c.kicker}
      title={c.title}
      scriptAccent={c.scriptAccent}
      intro={c.intro}
      tone="cream"
    >
      <div className={styles.grid}>
        {c.qualities.map((q, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={q.title} delayMs={Math.min(i * 70, 210)}>
              <article className={`${styles.card} ${isOpen ? styles.open : ""}`}>
                <div className={styles.orb} aria-hidden="true">
                  {["✦", "❧", "✎", "⚕"][i % 4]}
                </div>
                <h3 className={styles.cardTitle}>{q.title}</h3>
                <p className={styles.short}>{q.short}</p>
                <div
                  className={styles.revealWrap}
                  hidden={!isOpen}
                  id={`universo-detalhe-${i}`}
                >
                  <p className={styles.revealed}>{q.revealed}</p>
                </div>
                <button
                  type="button"
                  className={styles.toggle}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`universo-detalhe-${i}`}
                >
                  {isOpen ? "Recolher" : "Revelar"}
                  <span aria-hidden="true">{isOpen ? " ↑" : " ↓"}</span>
                </button>
              </article>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
