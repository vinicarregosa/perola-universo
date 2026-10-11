import type { ReactNode } from "react";
import { ChapterHeading } from "../ChapterHeading/ChapterHeading";
import styles from "./SectionShell.module.css";

interface SectionShellProps {
  id: string;
  kicker?: string;
  title: string;
  scriptAccent?: string;
  intro?: string;
  tone?: "cream" | "floral" | "wine";
  children: ReactNode;
}

export function SectionShell({
  id,
  kicker,
  title,
  scriptAccent,
  intro,
  tone = "cream",
  children,
}: SectionShellProps) {
  const headingId = `${id}-titulo`;
  const wine = tone === "wine";
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`${styles.shell} ${styles[`tone-${tone}`]}${wine ? " on-wine" : ""}`}
    >
      <div className="container">
        <ChapterHeading
          id={headingId}
          kicker={kicker}
          title={title}
          scriptAccent={scriptAccent}
          intro={intro}
          tone={tone}
        />
        <div className={styles.body}>{children}</div>
        <a className={`back-to-portal ${styles.back}`} href="#portal">
          <span aria-hidden="true">←</span> Voltar ao portal
        </a>
      </div>
    </section>
  );
}
