import { site } from "../../content/site";
import { SectionShell } from "../../components/SectionShell/SectionShell";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Nursing.module.css";

export function Nursing() {
  const c = site.nursing;
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
        <article className={styles.chart}>
          <header className={styles.chartHead}>
            <div>
              <p className={styles.hospital}>Hospital do Coração · Plantão da Pérola</p>
              <h3 className={styles.chartTitle}>Prontuário afetivo nº 12-10</h3>
            </div>
            <span className={styles.stamp} aria-hidden="true">
              ♥ carimbado
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
    </SectionShell>
  );
}
