import { useState } from "react";
import { site } from "../../content/site";
import { SectionShell } from "../../components/SectionShell/SectionShell";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Cinema.module.css";

export function Cinema() {
  const c = site.cinema;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionShell
      id="cinema"
      kicker={c.kicker}
      title={c.title}
      scriptAccent={c.scriptAccent}
      intro={c.intro}
      tone="wine"
    >
      <div className={styles.list}>
        {c.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.title} delayMs={Math.min(i * 60, 240)}>
              <article className={`${styles.item} ${isOpen ? styles.open : ""}`}>
                <button
                  type="button"
                  className={styles.head}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`cinema-painel-${i}`}
                  id={`cinema-botao-${i}`}
                >
                  <span className={styles.num} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.headText}>
                    <span className={styles.itemTitle}>{item.title}</span>
                    <span className={styles.tag}>{item.tag}</span>
                    <span className={styles.teaser}>{item.teaser}</span>
                  </span>
                  <span className={styles.icon} aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={`cinema-painel-${i}`}
                  role="region"
                  aria-labelledby={`cinema-botao-${i}`}
                  hidden={!isOpen}
                  className={styles.panel}
                >
                  <p className={styles.revealed}>{item.revealed}</p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
