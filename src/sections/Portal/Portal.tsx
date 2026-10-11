import { site } from "../../content/site";
import { PortalNav } from "../../components/PortalNav/PortalNav";
import { LilyDivider } from "../../components/LilyDivider/LilyDivider";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Portal.module.css";

export function Portal() {
  const c = site.portal;
  return (
    <section
      id="portal"
      aria-labelledby="portal-titulo"
      className={styles.portal}
    >
      <div className="container">
        <Reveal>
          <p className={styles.kicker}>O portal</p>
          <h2 id="portal-titulo" className={styles.title}>
            Escolha o seu <span className={styles.script}>capítulo</span>
          </h2>
          <p className={styles.intro}>{c.intro}</p>
        </Reveal>
        <LilyDivider />
        <PortalNav items={c.items} />
      </div>
    </section>
  );
}
