import styles from "./LilyDivider.module.css";

export function LilyDivider() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <span className={styles.line} />
      <svg className={styles.mark} viewBox="0 0 120 40" fill="none">
        <g
          stroke="var(--gold-500)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 20 H44" opacity="0.7" />
          <path d="M76 20 H110" opacity="0.7" />
          <path d="M60 34 V16" />
          <path d="M60 16 C55 13 53 8 54 3 C59 4 61 9 60 16 Z" />
          <path d="M60 16 C65 13 67 8 66 3 C61 4 59 9 60 16 Z" />
          <path d="M60 22 C56 21 52 21 48 23 C52 26 58 26 60 22 Z" />
          <path d="M60 22 C64 21 68 21 72 23 C68 26 62 26 60 22 Z" />
        </g>
        <circle cx="60" cy="8" r="4" fill="url(#pearl)" />
        <circle cx="58.6" cy="6.6" r="1.2" fill="#fff" opacity="0.9" />
        <defs>
          <radialGradient id="pearl" cx="0.35" cy="0.35" r="0.9">
            <stop offset="0%" stopColor="#FFFEFA" />
            <stop offset="55%" stopColor="#F1E7D2" />
            <stop offset="100%" stopColor="#C2A164" />
          </radialGradient>
        </defs>
      </svg>
      <span className={styles.line} />
    </div>
  );
}
