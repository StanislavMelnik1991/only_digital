import { HistoricalDates } from "../widgets/HistoricalDates/HistoricalDates";
import styles from "./App.module.scss";

export const App = () => {
  return (
    <div className={styles.App}>
      <HistoricalDates />
    </div>
  );
};
