import { site } from "../../content/site";
import { SectionShell } from "../../components/SectionShell/SectionShell";
import { PlaceholderPhoto } from "../../components/PlaceholderPhoto/PlaceholderPhoto";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Universe.module.css";

export function Universe() {
  const c = site.universe;
  if (!c) return null;
  const [makeup, lilies, booksBlock, nursing] = c.qualities;

  return (
    <SectionShell
      id="universo"
      kicker={c.kicker}
      title={c.title}
      scriptAccent={c.scriptAccent}
      intro={c.intro}
      tone="cream"
    >
      {/* 1 — Maquiagem: faixa dividida texto + foto */}
      {makeup ? (
        <Reveal>
          <article className={`${styles.block} ${styles.makeup}`} aria-label={makeup.title}>
            <div className={styles.makeupText}>
              <p className={styles.blockKicker}>💄 {makeup.title}</p>
              <p className={styles.blockShort}>{makeup.short}</p>
              <p className={styles.blockText}>{makeup.revealed}</p>
            </div>
            <div className={styles.makeupPhoto}>
              <PlaceholderPhoto
                src={makeup.photo}
                alt={makeup.photoAlt ?? makeup.title}
                label={makeup.photoCaption ?? "Fotografia em breve"}
              />
              {makeup.photoCaption ? (
                <p className={styles.caption}>{makeup.photoCaption}</p>
              ) : null}
            </div>
          </article>
        </Reveal>
      ) : null}

      {/* 2 — Lírios: foto em destaque + legenda curta */}
      {lilies ? (
        <Reveal>
          <article className={`${styles.block} ${styles.lilies}`} aria-label={lilies.title}>
            <PlaceholderPhoto
              src={lilies.photo}
              alt={lilies.photoAlt ?? lilies.title}
              label="Lírios — fotografia em breve"
              className={styles.liliesPhoto}
            />
            <div className={styles.liliesBody}>
              <h3 className={styles.blockTitle}>
                {lilies.title} <span className={styles.liliesShort}>— {lilies.short}</span>
              </h3>
              <p className={styles.blockText}>{lilies.revealed}</p>
              {lilies.photoCaption ? (
                <p className={styles.caption}>{lilies.photoCaption}</p>
              ) : null}
            </div>
          </article>
        </Reveal>
      ) : null}

      {/* 3 — Livros: duas capas lado a lado */}
      {booksBlock ? (
        <Reveal>
          <article className={`${styles.block} ${styles.booksBlock}`} aria-label={booksBlock.title}>
            <div className={styles.booksHead}>
              <p className={styles.blockKicker}>📚 {booksBlock.title}</p>
              <p className={styles.blockShort}>{booksBlock.short}</p>
              <p className={styles.blockText}>{booksBlock.revealed}</p>
            </div>
            {c.books.length > 0 ? (
              <div className={styles.booksMini}>
                <h4 className={styles.booksTitle}>{c.booksTitle}</h4>
                <p className={styles.booksIntro}>{c.booksIntro}</p>
                <div className={styles.booksGrid}>
                  {c.books.map((b) => (
                    <article className={styles.book} key={b.title}>
                      <PlaceholderPhoto
                        src={b.cover}
                        alt={b.coverAlt}
                        label={`Capa de “${b.title}” — em breve aqui`}
                        className={styles.bookCover}
                      />
                      <h5 className={styles.bookTitle}>{b.title}</h5>
                      <p className={styles.bookAuthor}>{b.author}</p>
                      <p className={styles.bookNote}>{b.note}</p>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}
          </article>
        </Reveal>
      ) : null}

      {/* 4 — Enfermagem: tira compacta, sem motivacional */}
      {nursing ? (
        <Reveal>
          <article className={`${styles.block} ${styles.nursingStrip}`} aria-label={nursing.title}>
            <span className={styles.stripBadge} aria-hidden="true">
              ⚕
            </span>
            <div>
              <h3 className={styles.blockTitle}>{nursing.title}</h3>
              <p className={styles.blockShort}>{nursing.short}</p>
              <p className={styles.blockText}>{nursing.revealed}</p>
            </div>
          </article>
        </Reveal>
      ) : null}
    </SectionShell>
  );
}
