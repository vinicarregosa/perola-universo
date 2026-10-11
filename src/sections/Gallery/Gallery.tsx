import { useCallback, useEffect, useState } from "react";
import { site } from "../../content/site";
import { SectionShell } from "../../components/SectionShell/SectionShell";
import { PlaceholderPhoto } from "../../components/PlaceholderPhoto/PlaceholderPhoto";
import { Modal } from "../../components/Modal/Modal";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Gallery.module.css";

export function Gallery() {
  const c = site.gallery;
  const [selected, setSelected] = useState<number | null>(null);
  const [imgOk, setImgOk] = useState(true);

  const close = useCallback(() => setSelected(null), []);
  const step = useCallback(
    (dir: 1 | -1) => {
      setSelected((prev) => {
        if (prev === null || c.images.length === 0) return prev;
        const n = c.images.length;
        return (prev + dir + n) % n;
      });
    },
    [c.images.length],
  );

  // Setas do teclado quando o lightbox está aberto (Escape já tratado pelo Modal)
  useEffect(() => {
    if (selected === null) return;
    setImgOk(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selected, step]);

  const current = selected !== null ? c.images[selected] : null;

  return (
    <SectionShell
      id="galeria"
      kicker={c.kicker}
      title={c.title}
      scriptAccent={c.scriptAccent}
      intro={c.intro}
      tone="cream"
    >
      {c.images.length === 0 ? (
        <p className={styles.empty} role="status">
          {c.emptyNote}
        </p>
      ) : (
        <div className={styles.mural}>
          {c.images.map((img, i) => (
            <Reveal
              key={img.src + i}
              delayMs={Math.min(i * 60, 240)}
              className={styles.cell}
            >
              <figure className={styles.item}>
                <button
                  type="button"
                  className={styles.thumbBtn}
                  onClick={() => setSelected(i)}
                  aria-label={`${c.openLabel}: ${img.alt}`}
                  aria-haspopup="dialog"
                >
                  <PlaceholderPhoto
                    src={img.src}
                    alt={img.alt}
                    label="Fotografia em breve"
                    className={styles.thumb}
                  />
                </button>
                {(img.caption || img.location) && (
                  <figcaption className={styles.legend}>
                    {img.caption ? <span>{img.caption}</span> : null}
                    {img.caption && img.location ? (
                      <span aria-hidden="true"> · </span>
                    ) : null}
                    {img.location ? (
                      <span className={styles.loc}>{img.location}</span>
                    ) : null}
                  </figcaption>
                )}
              </figure>
            </Reveal>
          ))}
        </div>
      )}

      <Modal
        open={selected !== null}
        onClose={close}
        labelledBy="galeria-modal-titulo"
        closeLabel={c.closeLabel}
      >
        {current ? (
          <div className={styles.lightbox}>
            <h3 id="galeria-modal-titulo" className={styles.lbTitle}>
              {current.caption ?? current.alt}
            </h3>
            {imgOk ? (
              <img
                className={styles.lbImg}
                src={current.src}
                alt={current.alt}
                decoding="async"
                onError={() => setImgOk(false)}
              />
            ) : (
              <p className={styles.lbMissing} role="status">
                Esta fotografia ainda não foi publicada.
              </p>
            )}
            {(current.caption || current.location) && (
              <p className={styles.lbLegend}>
                {current.caption ? <span>{current.caption}</span> : null}
                {current.caption && current.location ? (
                  <span aria-hidden="true"> · </span>
                ) : null}
                {current.location ? <span>{current.location}</span> : null}
              </p>
            )}
            <p className={styles.lbCount} role="status">
              {(selected ?? 0) + 1} de {c.images.length}
            </p>
            <div className={styles.lbControls}>
              <button
                type="button"
                className="btn btn-outline-wine"
                onClick={() => step(-1)}
                aria-label={c.prevLabel}
              >
                <span aria-hidden="true">←</span> Anterior
              </button>
              <button
                type="button"
                className="btn btn-outline-wine"
                onClick={() => step(1)}
                aria-label={c.nextLabel}
              >
                Próxima <span aria-hidden="true">→</span>
              </button>
              <button
                type="button"
                className="btn btn-wine"
                onClick={close}
              >
                {c.closeLabel}
              </button>
            </div>
          </div>
        ) : null}
      </Modal>
    </SectionShell>
  );
}
