import { useState } from "react";
import { site } from "../../content/site";
import { SectionShell } from "../../components/SectionShell/SectionShell";
import { Reveal } from "../../components/Reveal/Reveal";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import styles from "./Nursing.module.css";

export function Nursing() {
  const c = site.nursing;
  const [prescribed, setPrescribed] = useState(false);
  const reduced = useReducedMotion();

  const rows = [
    { label: "Paciente", value: c.patient },
    { label: "Diagnóstico", value: c.diagnosis },
    { label: "Tratamento", value: c.treatment },
    { label: "Prognóstico", value: c.prognosis },
  ];

  return (
    <SectionShell
      id="enfermagem"
      kicker={c.kicker}
      title={c.title}
      scriptAccent={c.scriptAccent}
      intro={c.intro}
      tone="floral"
    >
      <Reveal>
        <p className={styles.fiction} role="note">
          <span aria-hidden="true">⚕</span> {c.fictionBadge}
        </p>
      </Reveal>
      <Reveal>
        <article className={styles.chart}>
          <header className={styles.chartHead}>
            <div>
              <p className={styles.hospital}>Plantão da Pérola · nº 12-10</p>
              <h3 className={styles.chartTitle}>Prontuário de brincadeira</h3>
            </div>
            <span className={styles.stamp} aria-hidden="true">
              carimbado
            </span>
          </header>
          <dl className={styles.rows}>
            {rows.map((r) => (
              <div className={styles.row} key={r.label}>
                <dt className={styles.label}>{r.label}</dt>
                <dd className={styles.value}>{r.value}</dd>
              </div>
            ))}
          </dl>
          <footer className={styles.foot}>
            <p className={styles.note}>{c.note}</p>
          </footer>
        </article>
      </Reveal>

      <Reveal>
        <div className={styles.prescribeWrap}>
          {!prescribed ? (
            <button
              type="button"
              className="btn btn-wine"
              onClick={() => setPrescribed(true)}
              aria-expanded={prescribed}
            >
              {c.prescribeButton}
            </button>
          ) : (
            <div
              className={`${styles.prescription} ${reduced ? "" : styles.prescriptionAnimate}`}
              role="status"
            >
              <h3 className={styles.prescriptionTitle}>{c.prescriptionTitle}</h3>
              <p className={styles.prescriptionText}>{c.prescription}</p>
              <p className={styles.prescriptionNote}>{c.prescriptionNote}</p>
            </div>
          )}
        </div>
      </Reveal>
    </SectionShell>
  );
}
