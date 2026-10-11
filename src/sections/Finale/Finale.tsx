import { site } from "../../content/site";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Finale.module.css";

function withAccent(title: string, accent: string) {
  const idx = title.toLowerCase().indexOf(accent.toLowerCase());
  if (!accent || idx === -1) return <>{title}</>;
  return (
    <>
      {title.slice(0, idx)}
      <span className={styles.script}>{title.slice(idx, idx + accent.length)}</span>
      {title.slice(idx + accent.length)}
    </>
  );
}

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
              {withAccent(c.title, c.scriptAccent)}
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
