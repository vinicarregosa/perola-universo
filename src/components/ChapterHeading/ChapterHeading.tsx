import styles from "./ChapterHeading.module.css";

interface ChapterHeadingProps {
  id: string;
  kicker?: string;
  title: string;
  scriptAccent?: string;
  intro?: string;
  tone?: "cream" | "floral" | "wine";
  align?: "left" | "center";
}

function withAccent(title: string, accent?: string) {
  if (!accent) return <>{title}</>;
  const idx = title.toLowerCase().indexOf(accent.toLowerCase());
  if (idx === -1) return <>{title}</>;
  const before = title.slice(0, idx);
  const match = title.slice(idx, idx + accent.length);
  const after = title.slice(idx + accent.length);
  return (
    <>
      {before}
      <span className={styles.script}>{match}</span>
      {after}
    </>
  );
}

export function ChapterHeading({
  id,
  kicker,
  title,
  scriptAccent,
  intro,
  tone = "cream",
  align = "left",
}: ChapterHeadingProps) {
  return (
    <div
      className={`${styles.wrap} ${styles[`align-${align}`]} ${styles[`tone-${tone}`]}`}
    >
      {kicker ? <p className={styles.kicker}>{kicker}</p> : null}
      <h2 id={id} className={styles.title}>
        {withAccent(title, scriptAccent)}
      </h2>
      {intro ? <p className={styles.intro}>{intro}</p> : null}
    </div>
  );
}
