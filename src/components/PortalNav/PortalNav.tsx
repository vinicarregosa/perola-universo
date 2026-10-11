import type { PortalItem } from "../../content/types";
import { Reveal } from "../Reveal/Reveal";
import styles from "./PortalNav.module.css";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"] as const;

interface PortalNavProps {
  items: PortalItem[];
}

function Icon({ icon }: { icon?: string }) {
  if (!icon) return null;
  return (
    <span className={styles.icon} aria-hidden="true">
      {icon}
    </span>
  );
}

export function PortalNav({ items }: PortalNavProps) {
  const [feature, ...rest] = items;
  const medium = rest.slice(0, 2);
  const list = rest.slice(2);

  return (
    <nav className={styles.nav} aria-label="Seções do site">
      {feature ? (
        <Reveal>
          <a
            href={feature.href}
            className={`${styles.card} ${styles.feature} ${styles.variantFeature}`}
          >
            <span className={styles.eyebrow}>
              {feature.icon ? `${feature.icon} ` : null}Comece por aqui
            </span>
            <span className={styles.cardTitle}>{feature.title}</span>
            <span className={styles.cardDesc}>{feature.description}</span>
            <span className={styles.cta}>
              Abrir <span aria-hidden="true">→</span>
            </span>
          </a>
        </Reveal>
      ) : null}

      {medium.length > 0 ? (
        <div className={styles.mediumGrid}>
          {medium.map((item, i) => (
            <Reveal key={item.href}>
              <a
                href={item.href}
                className={`${styles.card} ${styles.medium} ${i === 0 ? styles.variantA : styles.variantB}`}
              >
                <span className={styles.mediumTop}>
                  <Icon icon={item.icon} />
                  <span className={styles.cardTitle}>{item.title}</span>
                </span>
                <span className={styles.cardDesc}>{item.description}</span>
                <span className={styles.cta}>
                  Visitar <span aria-hidden="true">→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      ) : null}

      {list.length > 0 ? (
        <ol className={styles.editorial}>
          {list.map((item, i) => (
            <Reveal as="li" key={item.href} delayMs={Math.min(i * 60, 240)}>
              <a
                href={item.href}
                className={`${styles.row} ${styles[`tint${i % 5}`] ?? ""}`}
              >
                <span className={styles.numeral} aria-hidden="true">
                  {ROMAN[i % ROMAN.length]}
                </span>
                <span className={styles.rowIcon} aria-hidden="true">
                  {item.icon ?? "·"}
                </span>
                <span className={styles.rowText}>
                  <span className={styles.rowTitle}>{item.title}</span>
                  <span className={styles.rowDesc}>{item.description}</span>
                </span>
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </ol>
      ) : null}
    </nav>
  );
}
