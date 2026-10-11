import { site } from "../../content/site";
import { SectionShell } from "../../components/SectionShell/SectionShell";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Soundtrack.module.css";

export function Soundtrack() {
  const c = site.soundtrack;

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
            <AudioPlayer
              src={c.audioSrc}
              title={c.trackTitle}
              artist={c.trackArtist}
              transcript={c.transcript}
            />
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
