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
  const [hugIndex, setHugIndex] = useState(0);
  const reduced = useReducedMotion();

  const messages = c.hugMessages.length > 0 ? c.hugMessages : [c.hugMessage];
  const currentMessage = messages[hugIndex % messages.length];

  function handleHug() {
    setHugged(true);
  }

  function handleAnother() {
    setHugIndex((i) => (i + 1) % messages.length);
  }

  function handleReset() {
    setHugged(false);
  }

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
              {c.badge}
            </p>
          </Reveal>

          <Reveal>
            {!hugged ? (
              <button
                type="button"
                className="btn btn-wine"
                onClick={handleHug}
                aria-expanded={hugged}
              >
                {c.hugButton}
              </button>
            ) : (
              <div
                key={hugIndex}
                className={`${styles.hug} ${reduced ? "" : styles.hugAnimate}`}
                role="status"
              >
                <p className={styles.hugText}>{currentMessage}</p>
                <div className={styles.hugActions}>
                  {messages.length > 1 ? (
                    <button
                      type="button"
                      className="btn btn-wine"
                      onClick={handleAnother}
                    >
                      {c.hugAnother}
                    </button>
                  ) : null}
                  <button
                    type="button"
                    className={`btn btn-outline-wine ${styles.smallBtn}`}
                    onClick={handleReset}
                  >
                    {c.hugReset}
                  </button>
                </div>
              </div>
            )}
          </Reveal>
        </div>

        <Reveal className={styles.photoWrap}>
          <PlaceholderPhoto
            src={c.image}
            alt={c.imageAlt}
            label={c.imageCaption}
          />
        </Reveal>
      </div>
    </SectionShell>
  );
}
