import { JSX } from "preact/jsx-runtime";
import styles from "./app.module.css";

export function App(): JSX.Element {
  return <div className={styles.app}>Hello world</div>;
}
