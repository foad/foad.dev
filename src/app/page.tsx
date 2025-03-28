import { RandomisedPanel } from "./components/panel/randomised_panel";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.sidePanels}>
        <RandomisedPanel />
        <RandomisedPanel />
        <RandomisedPanel />
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>Dan Foad</h1>
        hello :)
      </main>
      <div className={styles.sidePanels}>
        <RandomisedPanel />
        <RandomisedPanel />
        <RandomisedPanel />
      </div>
    </div>
  );
}
