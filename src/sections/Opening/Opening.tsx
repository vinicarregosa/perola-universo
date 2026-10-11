import { useEffect, useState } from "react";
import { site } from "../../content/site";
import { PlaceholderPhoto } from "../../components/PlaceholderPhoto/PlaceholderPhoto";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Opening.module.css";

export function Opening() {
  const c = site.opening;
  const [bgReady, setBgReady] = useState(false);

  // HEAD antes do <img>: evita 404 no console quando a foto ainda não existe.
  useEffect(() => {
    if (!c.bgImage) return;
    let cancelled = false;
    fetch(c.bgImage, { method: "HEAD" })
      .then((res) => {
        if (!cancelled && res.ok) setBgReady(true);
      })
      .catch(() => {
        /* sem foto real → fundo liso continua; nada quebra */
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
      <div className={styles.scrim} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.text}>
          <p className={styles.eyebrow}>{c.eyebrow}</p>
          <h1 id="abertura-titulo" className={styles.title}>
            {c.title}
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
        <Reveal className={styles.photoWrap} delayMs={120}>
          <figure className={styles.photoCard}>
            <PlaceholderPhoto
              src={c.photo}
              alt={c.photoAlt}
              label="Nossa fotografia principal — em breve aqui"
              eager
              className={styles.photo}
            />
            <figcaption className={styles.caption}>{c.photoCaption}</figcaption>
          </figure>
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
