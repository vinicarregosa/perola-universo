import { useEffect, useRef, useState } from "react";
import styles from "./AudioPlayer.module.css";

interface AudioPlayerProps {
  src: string;
  title: string;
  artist: string;
  transcript?: string;
}

function fmt(total: number): string {
  if (!Number.isFinite(total) || total < 0) return "–:––";
  const m = Math.floor(total / 60);
  const s = Math.floor(total % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function AudioPlayer({ src, title, artist, transcript }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState<number>(NaN);
  const [current, setCurrent] = useState(0);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onMeta = () => setDuration(el.duration);
    const onTime = () => setCurrent(el.currentTime);
    const onEnd = () => setPlaying(false);
    const onErr = () => setMissing(true);
    el.addEventListener("loadedmetadata", onMeta);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("ended", onEnd);
    el.addEventListener("error", onErr);
    return () => {
      el.removeEventListener("loadedmetadata", onMeta);
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("ended", onEnd);
      el.removeEventListener("error", onErr);
    };
  }, [src]);

  async function toggle() {
    const el = audioRef.current;
    if (!el) return;
    try {
      if (el.paused) {
        await el.play();
        setPlaying(true);
        setMissing(false);
      } else {
        el.pause();
        setPlaying(false);
      }
    } catch {
      setMissing(true);
      setPlaying(false);
    }
  }

  const progress = duration && Number.isFinite(duration) && duration > 0
    ? Math.min(100, (current / duration) * 100)
    : 0;

  return (
    <div className={styles.player}>
      <audio ref={audioRef} src={src} preload="none" />
      <div className={styles.row}>
        <button
          type="button"
          className={styles.play}
          onClick={toggle}
          aria-label={playing ? `Pausar ${title}` : `Tocar ${title}`}
          aria-pressed={playing}
        >
          <span aria-hidden="true">{playing ? "❚❚" : "▶"}</span>
        </button>
        <div className={styles.meta}>
          <p className={styles.track}>{title}</p>
          <p className={styles.artist}>{artist}</p>
          <div
            className={styles.bar}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
            aria-label="Progresso da faixa"
          >
            <div className={styles.fill} style={{ width: `${progress}%` }} />
          </div>
          <p className={styles.time}>
            <span>{fmt(current)}</span>
            <span aria-hidden="true"> / </span>
            <span>{fmt(duration)}</span>
          </p>
        </div>
      </div>
      {missing ? (
        <p className={styles.hint} role="status">
          [EDITAR] Áudio ainda não publicado — salve o MP3 como{" "}
          <code>public/audio/trilha.mp3</code> e ele tocará aqui. Nada quebra
          sem o arquivo.
        </p>
      ) : null}
      {transcript ? (
        <details className={styles.transcript}>
          <summary>Ver transcrição / clima da faixa</summary>
          <p>{transcript}</p>
        </details>
      ) : null}
    </div>
  );
}
