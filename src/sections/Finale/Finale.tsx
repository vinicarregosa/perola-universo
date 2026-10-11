import { site } from "../../content/site";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Finale.module.css";

export function Finale() {
  const c = site.finale;

  return (
    <section id="final" aria-labelledby="final-titulo" className={styles.finale}>
      <div className="container-narrow">
        <Reveal>
          <div className={styles.inner}>
            <p className={styles.pearl} aria-hidden="true">
              ◯
            </p>
            <h2 id="final-titulo" className={styles.title}>
              A distância não nos{" "}
              <span className={styles.script}>{c.scriptAccent}</span>
            </h2>
            <p className={styles.message}>{c.message}</p>
            <div className={styles.ctas}>
              <a className="btn btn-gold" href="#portal">
                {c.ctaPortal}
              </a>
              <a className="btn btn-ghost" href="#abertura">
                Recomeçar do início
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
