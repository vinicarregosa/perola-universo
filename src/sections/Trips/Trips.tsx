import { site } from "../../content/site";
import { SectionShell } from "../../components/SectionShell/SectionShell";
import { PlaceholderPhoto } from "../../components/PlaceholderPhoto/PlaceholderPhoto";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Trips.module.css";

export function Trips() {
  const c = site.trips;

  return (
    <SectionShell
      id="viagens"
      kicker={c.kicker}
      title={c.title}
      scriptAccent={c.scriptAccent}
      intro={c.intro}
      tone="floral"
    >
      {/* Trio fixo: 3 colunas lado a lado em qualquer largura, sem wrap */}
      <div className={styles.trio}>
        {c.items.map((item, i) => (
          <Reveal
            key={item.id}
            delayMs={Math.min(i * 60, 120)}
            className={styles.cell}
          >
            <article className={styles.comp}>
              <PlaceholderPhoto
                src={item.photo}
                alt={item.photoAlt}
                label={`Fotografia de ${item.name} — em breve aqui`}
                className={styles.frame}
              />
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.captionText}>{item.caption}</p>
              {item.text ? <p className={styles.extra}>{item.text}</p> : null}
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
