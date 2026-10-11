import { site } from "../../content/site";
import { SectionShell } from "../../components/SectionShell/SectionShell";
import { PlaceholderPhoto } from "../../components/PlaceholderPhoto/PlaceholderPhoto";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Pets.module.css";

export function Pets() {
  const c = site.pets;

  return (
    <SectionShell
      id="pets"
      kicker={c.kicker}
      title={c.title}
      scriptAccent={c.scriptAccent}
      intro={c.intro}
      tone="cream"
    >
      <div className={styles.grid}>
        {c.cards.map((pet, i) => (
          <Reveal key={pet.name} delayMs={i * 90} className={styles.item}>
            <article className={styles.card}>
              <div className={styles.photo}>
                <PlaceholderPhoto
                  src={pet.image}
                  alt={pet.imageAlt}
                  label={`Fotografia: ${pet.name} — em breve aqui`}
                  className={styles.photoFrame}
                />
              </div>
              <div className={styles.body}>
                <h3 className={styles.name}>
                  {pet.name}{" "}
                  <span className={styles.role}>{pet.role}</span>
                </h3>
                <p className={styles.message}>{pet.message}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <aside className={styles.birthday} aria-label="Mensagem de aniversário dos pets">
          <span className={styles.paws} aria-hidden="true">
            🐾
          </span>
          <p className={styles.birthdayText}>{c.birthdayMessage}</p>
          <p className={styles.signature}>{c.birthdaySignature}</p>
        </aside>
      </Reveal>
    </SectionShell>
  );
}
