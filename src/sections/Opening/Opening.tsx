import { useEffect, useState } from "react";
import { site } from "../../content/site";
import { PlaceholderPhoto } from "../../components/PlaceholderPhoto/PlaceholderPhoto";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Opening.module.css";

export function Opening() {
  const c = site.opening;
  const [bgReady, setBgReady] = useState(false);

  // HEAD antes do <img>: evita 404 no console quando hero.jpg ainda não existe.
  useEffect(() => {
    if (!c.bgImage) return;
    let cancelled = false;
    fetch(c.bgImage, { method: "HEAD" })
      .then((res) => {
        if (!cancelled && res.ok) setBgReady(true);
      })
      .catch(() => {
        /* sem foto real → placeholder elegante continua; nada quebra */
      });
    return () => {
      cancelled = true;
    };
  }, [c.bgImage]);

  const showBg = Boolean(c.bgImage) && bgReady;

  return (
    <header id="abertura" className={styles.hero} aria-labelledby="abertura-titulo">
      {showBg ? (
        <img
          className={styles.bg}
          src={c.bgImage}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          onError={() => setBgReady(false)}
        />
      ) : null}
      {/* Foto decorativa de fundo — PlaceholderPhoto visível garante layout elegante sem arquivo real */}
      <div className={styles.bgFallback} aria-hidden="true">
        <PlaceholderPhoto
          src=""
          alt=""
          label=""
          aspect="16 / 9"
          eager
          className={styles.bgPlaceholder}
        />
      </div>
      <div className={styles.scrim} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <Reveal>
          <p className={styles.eyebrow}>{c.eyebrow}</p>
          <h1 id="abertura-titulo" className={styles.title}>
            Um universo <span className={styles.script}>só nosso</span>
          </h1>
          <p className={styles.subtitle}>{c.subtitle}</p>
          <div className={styles.ctas}>
            <a className="btn btn-gold" href="#portal">
              {c.ctaPortal}
            </a>
            <a className="btn btn-ghost" href="#carta">
              {c.ctaLetter}
            </a>
          </div>
        </Reveal>
        <a
          className={styles.scrollHint}
          href="#portal"
          aria-label="Rolar para o portal"
        >
          <span aria-hidden="true">↓</span>
          <span className={styles.scrollText}>rolar</span>
        </a>
      </div>
    </header>
  );
}
