import { useEffect, useState } from "react";
import { site } from "../../content/site";
import { SectionShell } from "../../components/SectionShell/SectionShell";
import { Modal } from "../../components/Modal/Modal";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Diva.module.css";

export function Diva() {
  const c = site.diva;
  const [open, setOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  // Detecta public/video/diva.mp4 sem quebrar quando ausente (HEAD silencioso)
  useEffect(() => {
    let cancelled = false;
    fetch("/video/diva.mp4", { method: "HEAD" })
      .then((res) => {
        if (!cancelled && res.ok) setVideoSrc("/video/diva.mp4");
      })
      .catch(() => {
        /* ausência de vídeo é estado válido — mantém placeholder elegante */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <SectionShell
      id="diva"
      kicker={c.kicker}
      title={c.title}
      scriptAccent={c.scriptAccent}
      intro={c.intro}
      tone="cream"
    >
      <Reveal>
        <div className={styles.sealed}>
          <div className={styles.seal} aria-hidden="true">
            ✦
          </div>
          <blockquote className={styles.quote}>
            <p>{c.letterPreview}</p>
          </blockquote>
          <button
            type="button"
            className="btn btn-wine"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
          >
            {c.openButton}
          </button>
        </div>
      </Reveal>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        labelledBy="diva-modal-titulo"
        closeLabel={c.closeButton}
      >
        <p className={styles.modalKicker}>{c.kicker}</p>
        <h3 id="diva-modal-titulo" className={styles.modalTitle}>
          {c.modalTitle}
        </h3>
        <p className={styles.modalBody}>{c.modalBody}</p>
        {videoSrc ? (
          <video
            className={styles.video}
            src={videoSrc}
            controls
            preload="none"
            playsInline
            aria-label="Vídeo da diva misteriosa"
          />
        ) : (
          <div className={styles.videoPlaceholder} role="img" aria-label="Espaço reservado para o vídeo da diva misteriosa">
            <span className={styles.videoIcon} aria-hidden="true">
              ♡
            </span>
            <p>O vídeo mora aqui — em breve.</p>
          </div>
        )}
        <p className={styles.hint}>{c.videoHint}</p>
        <button type="button" className="btn btn-wine" onClick={() => setOpen(false)}>
          {c.closeButton}
        </button>
      </Modal>
    </SectionShell>
  );
}
