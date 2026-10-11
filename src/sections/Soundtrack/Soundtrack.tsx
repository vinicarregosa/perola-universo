import { site } from "../../content/site";
import { SectionShell } from "../../components/SectionShell/SectionShell";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Soundtrack.module.css";

export function Soundtrack() {
  const c = site.soundtrack;
  const tracks = c.tracks.length > 0
    ? c.tracks
    : [{ src: c.audioSrc, title: c.trackTitle, artist: c.trackArtist }];

  return (
    <SectionShell
      id="trilha"
      kicker={c.kicker}
      title={c.title}
      scriptAccent={c.scriptAccent}
      intro={c.intro}
      tone="cream"
    >
      <Reveal>
        <div className={styles.wrap}>
          <div className={styles.vinyl} aria-hidden="true">
            <span className={styles.vinylCore} />
          </div>
          <div className={styles.playerWrap}>
            <div className={styles.tracks}>
              {tracks.map((t) => (
                <AudioPlayer
                  key={t.src + t.title}
                  src={t.src}
                  title={t.title}
                  artist={t.artist}
                  transcript={c.transcript}
                  missingNote={c.fallbackNote}
                />
              ))}
            </div>
            {c.links.length > 0 ? (
              <ul className={styles.links}>
                {c.links.map((l) => (
                  <li key={l.href + l.label}>
                    <a
                      className={styles.link}
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {l.label} <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
