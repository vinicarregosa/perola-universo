import { useState } from "react";
import { site } from "../../content/site";
import { SectionShell } from "../../components/SectionShell/SectionShell";
import { PlaceholderPhoto } from "../../components/PlaceholderPhoto/PlaceholderPhoto";
import { Reveal } from "../../components/Reveal/Reveal";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import styles from "./Distance.module.css";

export function Distance() {
  const c = site.distance;
  const [hugged, setHugged] = useState(false);
  const reduced = useReducedMotion();

  return (
    <SectionShell
      id="distancia"
      kicker={c.kicker}
      title={c.title}
      scriptAccent={c.scriptAccent}
      intro={c.intro}
      tone="floral"
    >
      <div className={styles.grid}>
        <div className={styles.text}>
          {c.paragraphs.map((p, i) => (
            <Reveal key={i} delayMs={i * 80}>
              <p className={styles.para}>{p}</p>
            </Reveal>
          ))}

          <Reveal>
            <p className={styles.badge} role="note">
              <span aria-hidden="true">🧸</span> {c.badge}
            </p>
          </Reveal>

          <Reveal>
            {!hugged ? (
              <button
                type="button"
                className="btn btn-wine"
                onClick={() => setHugged(true)}
                aria-expanded={hugged}
              >
                {c.hugButton}
              </button>
            ) : (
              <div
                className={`${styles.hug} ${reduced ? "" : styles.hugAnimate}`}
                role="status"
              >
                <p className={styles.hugText}>{c.hugMessage}</p>
                <button
                  type="button"
                  className={`btn btn-outline-wine ${styles.smallBtn}`}
                  onClick={() => setHugged(false)}
                >
                  Guardar para depois
                </button>
              </div>
            )}
          </Reveal>
        </div>

        <Reveal className={styles.photoWrap}>
          <PlaceholderPhoto
            src={c.image}
            alt={c.imageAlt}
            aspect="4 / 5"
          />
        </Reveal>
      </div>
    </SectionShell>
  );
}
