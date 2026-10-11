import { Opening } from "./sections/Opening/Opening";
import { Portal } from "./sections/Portal/Portal";
import { Distance } from "./sections/Distance/Distance";
import { Referencias } from "./sections/Referencias/Referencias";
import { Cinema } from "./sections/Cinema/Cinema";
import { Trips } from "./sections/Trips/Trips";
import { Gallery } from "./sections/Gallery/Gallery";
import { Diva } from "./sections/Diva/Diva";
import { Nursing } from "./sections/Nursing/Nursing";
import { Pets } from "./sections/Pets/Pets";
import { Letter } from "./sections/Letter/Letter";
import { Soundtrack } from "./sections/Soundtrack/Soundtrack";
import { Finale } from "./sections/Finale/Finale";
import { site } from "./content/site";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <a className="skip-link" href="#portal">
        Pular para o portal
      </a>
      <Opening />
      <main>
        <Portal />
        <Distance />
        <Referencias />
        <Cinema />
        <Trips />
        <Gallery />
        <Diva />
        <Nursing />
        <Pets />
        <Letter />
        <Soundtrack />
        <Finale />
      </main>
      <footer className={styles.footer}>
        <div className="container">
          <p className={styles.line}>{site.footer.line}</p>
          <a className={styles.top} href="#abertura">
            <span aria-hidden="true">↑</span> {site.footer.backToTop}
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
