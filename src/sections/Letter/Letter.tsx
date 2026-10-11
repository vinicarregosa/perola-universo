import { useState } from "react";
import { site } from "../../content/site";
import { SectionShell } from "../../components/SectionShell/SectionShell";
import { Modal } from "../../components/Modal/Modal";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Letter.module.css";

export function Letter() {
  const c = site.letter;
  const [open, setOpen] = useState(false);

  return (
    <SectionShell
      id="carta"
      kicker={c.kicker}
      title={c.title}
      scriptAccent={c.scriptAccent}
      intro={c.intro}
      tone="floral"
    >
      <Reveal>
        <article className={styles.paper}>
          <div className={styles.paperInner}>
            <p className={styles.drop} aria-hidden="true">
              P
            </p>
            <p className={styles.preview}>{c.preview}</p>
            <button
              type="button"
              className="btn btn-wine"
              onClick={() => setOpen(true)}
              aria-haspopup="dialog"
            >
              {c.openButton}
            </button>
          </div>
        </article>
      </Reveal>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        labelledBy="carta-modal-titulo"
        closeLabel={c.closeButton}
      >
        <p className={styles.modalKicker}>{c.kicker}</p>
        <h3 id="carta-modal-titulo" className={styles.modalTitle}>
          {c.title}
        </h3>
        <div className={styles.full}>
          {c.full.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <p className={styles.signature}>{c.signature}</p>
        <button type="button" className="btn btn-wine" onClick={() => setOpen(false)}>
          {c.closeButton}
        </button>
      </Modal>
    </SectionShell>
  );
}
