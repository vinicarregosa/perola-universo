import { site } from "../../content/site";
import { SectionShell } from "../../components/SectionShell/SectionShell";
import { PlaceholderPhoto } from "../../components/PlaceholderPhoto/PlaceholderPhoto";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Referencias.module.css";

export function Referencias() {
  const c = site.referencias;

  return (
    <SectionShell
      id="referencias"
      kicker={c.kicker}
      title={c.title}
      scriptAccent={c.scriptAccent}
      intro={c.intro}
      tone="wine"
    >
      <div className={styles.mural}>
        {c.items.map((item, i) => (
          <Reveal
            key={item.id}
            delayMs={Math.min(i * 60, 180)}
            className={styles.cell}
          >
            <figure className={styles.item}>
              <PlaceholderPhoto
                src={item.photo}
                alt={item.photoAlt}
                label="Fotografia"
                className={styles.frame}
              />
              {item.photoCaption ? (
                <figcaption className={styles.legend}>
                  {item.photoCaption}
                </figcaption>
              ) : null}
            </figure>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
