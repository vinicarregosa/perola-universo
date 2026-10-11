import { site } from "../../content/site";
import { PortalNav } from "../../components/PortalNav/PortalNav";
import { PlaceholderPhoto } from "../../components/PlaceholderPhoto/PlaceholderPhoto";
import { LilyDivider } from "../../components/LilyDivider/LilyDivider";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Portal.module.css";

export function Portal() {
  const c = site.portal;
  return (
    <section
      id="portal"
      aria-labelledby="portal-titulo"
      className={styles.portal}
    >
      <div className="container">
        <Reveal>
          <p className={styles.kicker}>Portal</p>
          <h2 id="portal-titulo" className={styles.title}>
            {c.title}
          </h2>
          <p className={styles.intro}>{c.intro}</p>
        </Reveal>
        <LilyDivider />
        <PortalNav items={c.items} />
        {c.featuredPhotos.length > 0 ? (
          <Reveal>
            <aside
              className={styles.featured}
              aria-label="Prévia das nossas fotografias"
            >
              <h3 className={styles.featuredTitle}>{c.featuredTitle}</h3>
              <div className={styles.thumbs}>
                {c.featuredPhotos.map((p) => (
                  <PlaceholderPhoto
                    key={p.src + p.alt}
                    src={p.src}
                    alt={p.alt}
                    label="Fotografia em breve"
                    className={styles.thumb}
                  />
                ))}
              </div>
              <a className={styles.galleryLink} href="#galeria">
                {c.galleryLinkLabel} <span aria-hidden="true">→</span>
              </a>
            </aside>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
