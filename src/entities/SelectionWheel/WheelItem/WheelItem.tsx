import { type MouseEventHandler } from "react";
import styles from "./WheelItem.module.scss";

interface Props {
  angle: number;
  onClick: MouseEventHandler<HTMLDivElement>;
  index: number;
  title: string;
  isActive: boolean;
}

export const WheelItem = ({
  angle,
  onClick,
  index,
  title,
  isActive,
}: Props) => {
  const style = {
    transform: `rotate(${angle}deg) translate(265px) rotate(-${angle}deg)`,
  };
  return (
    <div className={styles.wrapper} style={style}>
      <div
        className={`${styles.content} ${isActive ? styles.active : ""}`}
        onClick={onClick}
      >
        {index + 1}
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
};
