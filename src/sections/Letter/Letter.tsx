import { useState } from "react";
import { site } from "../../content/site";
import { SectionShell } from "../../components/SectionShell/SectionShell";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Letter.module.css";

export function Letter() {
  const c = site.letter;
  const [saved, setSaved] = useState(false);

  return (
    <SectionShell
      id="carta"
      kicker={c.kicker}
      title={c.title}
      scriptAccent={c.scriptAccent}
      intro={c.intro}
      tone="floral"
    >
      <Reveal>
        <article className={styles.paper} aria-labelledby="carta-texto-titulo">
          <div className={styles.paperInner}>
            <p className={styles.drop} aria-hidden="true">
              P
            </p>
            <p className={styles.preview}>{c.preview}</p>
            <h3 id="carta-texto-titulo" className={styles.fullTitle}>
              A carta completa
            </h3>
            <div className={styles.full}>
              {c.full.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className={styles.signature}>{c.signature}</p>
            <div className={styles.saveWrap}>
              {!saved ? (
                <button
                  type="button"
                  className="btn btn-wine"
                  onClick={() => setSaved(true)}
                  aria-expanded={saved}
                >
                  {c.saveButton}
                </button>
              ) : (
                <p className={styles.saved} role="status">
                  {c.savedMessage}
                </p>
              )}
            </div>
          </div>
        </article>
      </Reveal>
    </SectionShell>
  );
}
