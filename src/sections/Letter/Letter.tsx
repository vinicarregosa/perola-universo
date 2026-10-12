import { useState } from "react";
import { site } from "../../content/site";
import { SectionShell } from "../../components/SectionShell/SectionShell";
import { Modal } from "../../components/Modal/Modal";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Letter.module.css";

function Bouquet() {
  return (
    <svg
      className={styles.bouquet}
      viewBox="0 0 120 96"
      width="120"
      height="96"
      role="img"
      aria-label="Buquê de lírios e rosas em vinho, rosa-antigo, dourado e creme"
      focusable="false"
    >
      {/* hastes */}
      <g
        fill="none"
        stroke="#8c6e3e"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      >
        <path d="M60 86 C 58 68, 46 54, 34 40" />
        <path d="M60 86 C 60 68, 60 52, 60 30" />
        <path d="M60 86 C 62 68, 74 54, 86 40" />
      </g>
      {/* folhagens */}
      <g opacity="0.95">
        <ellipse
          cx="40"
          cy="66"
          rx="13"
          ry="5.5"
          transform="rotate(-28 40 66)"
          fill="#c2a164"
          opacity="0.55"
        />
        <ellipse
          cx="80"
          cy="66"
          rx="13"
          ry="5.5"
          transform="rotate(28 80 66)"
          fill="#c2a164"
          opacity="0.55"
        />
        <ellipse
          cx="48"
          cy="74"
          rx="10"
          ry="4.5"
          transform="rotate(-18 48 74)"
          fill="#7c4a53"
          opacity="0.42"
        />
        <ellipse
          cx="72"
          cy="74"
          rx="10"
          ry="4.5"
          transform="rotate(18 72 74)"
          fill="#7c4a53"
          opacity="0.42"
        />
        <ellipse
          cx="60"
          cy="62"
          rx="6"
          ry="11"
          fill="#8c6e3e"
          opacity="0.32"
        />
      </g>
      {/* lírio esquerda — pétalas creme com contorno dourado */}
      <g transform="rotate(-16 34 34)">
        <ellipse cx="34" cy="24" rx="7" ry="12" fill="#fffefa" stroke="#c2a164" strokeWidth="1.4" />
        <ellipse cx="25" cy="31" rx="6" ry="10" transform="rotate(-32 25 31)" fill="#faf5e9" stroke="#c2a164" strokeWidth="1.2" />
        <ellipse cx="43" cy="31" rx="6" ry="10" transform="rotate(32 43 31)" fill="#faf5e9" stroke="#c2a164" strokeWidth="1.2" />
        <circle cx="34" cy="34" r="2.2" fill="#c2a164" />
        <circle cx="30.5" cy="31.5" r="1.3" fill="#8c6e3e" />
        <circle cx="37.5" cy="31.5" r="1.3" fill="#8c6e3e" />
        <circle cx="34" cy="28.5" r="1.3" fill="#8c6e3e" />
      </g>
      {/* lírio direita */}
      <g transform="rotate(16 86 34)">
        <ellipse cx="86" cy="24" rx="7" ry="12" fill="#fffefa" stroke="#c2a164" strokeWidth="1.4" />
        <ellipse cx="77" cy="31" rx="6" ry="10" transform="rotate(-32 77 31)" fill="#faf5e9" stroke="#c2a164" strokeWidth="1.2" />
        <ellipse cx="95" cy="31" rx="6" ry="10" transform="rotate(32 95 31)" fill="#faf5e9" stroke="#c2a164" strokeWidth="1.2" />
        <circle cx="86" cy="34" r="2.2" fill="#c2a164" />
        <circle cx="82.5" cy="31.5" r="1.3" fill="#8c6e3e" />
        <circle cx="89.5" cy="31.5" r="1.3" fill="#8c6e3e" />
        <circle cx="86" cy="28.5" r="1.3" fill="#8c6e3e" />
      </g>
      {/* rosa central */}
      <g>
        <circle cx="60" cy="44" r="14" fill="#c1949a" />
        <circle cx="60" cy="44" r="10.5" fill="#d9b8bb" />
        <path
          d="M60 37.5 c 4 0 6.5 2.8 6.5 6 c 0 3.4 -2.8 5.8 -6 5.8 c -2.8 0 -5 -2 -5 -4.6 c 0 -2.3 1.8 -4 4 -4 c 1.9 0 3.2 1.3 3.2 2.9"
          fill="none"
          stroke="#68233c"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="60" cy="44" r="1.4" fill="#68233c" />
      </g>
      {/* rosas laterais menores */}
      <g>
        <circle cx="48" cy="50" r="8.5" fill="#c1949a" />
        <circle cx="48" cy="50" r="6" fill="#d9b8bb" />
        <path
          d="M48 46.5 c 2.4 0 3.8 1.6 3.8 3.5 c 0 2 -1.6 3.4 -3.5 3.4 c -1.6 0 -2.9 -1.2 -2.9 -2.7 c 0 -1.3 1 -2.3 2.3 -2.3"
          fill="none"
          stroke="#68233c"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </g>
      <g>
        <circle cx="72" cy="50" r="8.5" fill="#c1949a" />
        <circle cx="72" cy="50" r="6" fill="#d9b8bb" />
        <path
          d="M72 46.5 c 2.4 0 3.8 1.6 3.8 3.5 c 0 2 -1.6 3.4 -3.5 3.4 c -1.6 0 -2.9 -1.2 -2.9 -2.7 c 0 -1.3 1 -2.3 2.3 -2.3"
          fill="none"
          stroke="#68233c"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </g>
      {/* miolinhos dourados / luz */}
      <g fill="#c2a164">
        <circle cx="28" cy="48" r="1.6" opacity="0.9" />
        <circle cx="92" cy="48" r="1.6" opacity="0.9" />
        <circle cx="52" cy="28" r="1.4" opacity="0.8" />
        <circle cx="68" cy="28" r="1.4" opacity="0.8" />
      </g>
      {/* laço vinho */}
      <g>
        <path d="M60 86 L 50 80 L 52 90 Z" fill="#68233c" />
        <path d="M60 86 L 70 80 L 68 90 Z" fill="#68233c" />
        <circle cx="60" cy="86" r="3.4" fill="#3d0f22" stroke="#c2a164" strokeWidth="1.2" />
        <path d="M60 89 L 58 94 M60 89 L 62 94" stroke="#3d0f22" strokeWidth="1.6" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function Letter() {
  const c = site.letter;
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);

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
            <div className={styles.openWrap}>
              <button
                type="button"
                className="btn btn-wine"
                onClick={() => setOpen(true)}
                aria-haspopup="dialog"
              >
                {c.openButton}
              </button>
            </div>
          </div>
        </article>
      </Reveal>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        labelledBy="carta-modal-titulo"
        closeLabel={c.closeButton}
      >
        <div className={styles.bouquetWrap}>
          <Bouquet />
        </div>
        <p className={styles.modalKicker}>{c.kicker}</p>
        <h3 id="carta-modal-titulo" className={styles.fullTitle}>
          A carta completa
        </h3>
        <div className={styles.full}>
          {c.full.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <p className={styles.signature}>{c.signature}</p>
        <div className={styles.saveWrap}>
          {!saved ? (
            <button
              type="button"
              className="btn btn-wine"
              onClick={() => setSaved(true)}
            >
              {c.saveButton}
            </button>
          ) : (
            <p className={styles.saved} role="status">
              {c.savedMessage}
            </p>
          )}
        </div>
        <div className={styles.closeWrap}>
          <button
            type="button"
            className="btn btn-outline-wine"
            onClick={() => setOpen(false)}
          >
            {c.closeButton}
          </button>
        </div>
      </Modal>
    </SectionShell>
  );
}
