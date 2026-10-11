import { useEffect, useState } from "react";
import styles from "./PlaceholderPhoto.module.css";

interface PlaceholderPhotoProps {
  src?: string;
  alt: string;
  label?: string;
  aspect?: string;
  eager?: boolean;
  className?: string;
}

export function PlaceholderPhoto({
  src,
  alt,
  label = "Espaço para fotografia — ver public/images/README.md",
  aspect = "4 / 3",
  eager = false,
  className = "",
}: PlaceholderPhotoProps) {
  const [failed, setFailed] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  // Evita <img> 404 no console: só renderiza o <img> após HEAD confirmar
  // que o arquivo existe. fetch 404 não polui o console; <img> 404 sim.
  // Sem src ou sem arquivo → placeholder marfim elegante (estado válido).
  useEffect(() => {
    if (!src) {
      setConfirmed(false);
      setFailed(false);
      return;
    }
    // URLs remotas/data: renderiza direto com onError como rede de segurança.
    if (!src.startsWith("/")) {
      setConfirmed(true);
      return;
    }
    let cancelled = false;
    setConfirmed(false);
    setFailed(false);
    fetch(src, { method: "HEAD" })
      .then((res) => {
        if (cancelled) return;
        if (res.ok) setConfirmed(true);
        else setFailed(true);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [src]);

  const showPlaceholder = !src || failed || !confirmed;

  return (
    <figure
      className={`${styles.frame} ${className}`}
      style={{ aspectRatio: aspect }}
      role={showPlaceholder ? "img" : undefined}
      aria-label={showPlaceholder ? `${alt}. ${label}` : undefined}
    >
      {!showPlaceholder ? (
        <img
          className={styles.img}
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className={styles.placeholder} aria-hidden="true">
          <svg
            className={styles.lily}
            viewBox="0 0 64 64"
            fill="none"
            role="presentation"
          >
            <g
              stroke="var(--gold-500)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M32 52 V28" />
              <path d="M32 28 C24 24 20 16 22 8 C30 10 34 18 32 28 Z" />
              <path d="M32 28 C40 24 44 16 42 8 C34 10 30 18 32 28 Z" />
              <path d="M32 38 C26 36 20 36 14 40 C20 44 28 44 32 38 Z" />
              <path d="M32 38 C38 36 44 36 50 40 C44 44 36 44 32 38 Z" />
              <path d="M22 52 H42" />
            </g>
            <circle cx="32" cy="14" r="3.5" fill="var(--rose-old-300)" />
            <circle
              cx="32"
              cy="14"
              r="5.5"
              fill="none"
              stroke="var(--gold-500)"
              strokeWidth="1"
              opacity="0.5"
            />
          </svg>
          <p className={styles.label}>{label}</p>
        </div>
      )}
    </figure>
  );
}
