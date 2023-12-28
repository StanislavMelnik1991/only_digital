import styles from "./DatesSlide.module.scss";

interface Props {
  year: number;
  title: string;
}

export const DatesSlide = ({ title, year }: Props) => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.year}>{year}</h4>
      <p className={styles.text}>{title}</p>
    </div>
  );
};
