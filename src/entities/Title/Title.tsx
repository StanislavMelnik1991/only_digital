import styles from "./Title.module.scss";

interface Props {
  text: string;
}

export const Title = ({ text }: Props) => {
  return <h1 className={styles.wrapper}>{text}</h1>;
};
