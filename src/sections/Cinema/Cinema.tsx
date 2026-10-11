import { useState } from "react";
import { site } from "../../content/site";
import { SectionShell } from "../../components/SectionShell/SectionShell";
import { PlaceholderPhoto } from "../../components/PlaceholderPhoto/PlaceholderPhoto";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Cinema.module.css";

export function Cinema() {
  const c = site.cinema;
  const [open, setOpen] = useState<number | null>(0);

  if (!c) return null;

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
            <Reveal key={item.id} delayMs={Math.min(i * 60, 240)}>
              <article className={`${styles.item} ${isOpen ? styles.open : ""}`}>
                <button
                  type="button"
                  className={styles.head}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`cinema-painel-${item.id}`}
                  id={`cinema-botao-${item.id}`}
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
                  id={`cinema-painel-${item.id}`}
                  role="region"
                  aria-labelledby={`cinema-botao-${item.id}`}
                  hidden={!isOpen}
                  className={styles.panel}
                >
                  <div className={styles.panelContent}>
                    <div className={styles.thumb}>
                      <PlaceholderPhoto
                        src={item.image}
                        alt={item.imageAlt}
                        label="Fotografia"
                      />
                    </div>
                    <p className={styles.revealed}>{item.revealed}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
