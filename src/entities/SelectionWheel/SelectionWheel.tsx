import styles from "./SelectionWheel.module.scss";
import { WheelItem } from "./WheelItem/WheelItem";

interface Props {
  items: string[];
  onClick: (index: number) => void;
  active: number;
}

export const SelectionWheel = ({ items, onClick, active }: Props) => {
  return (
    <div className={styles.wrapper}>
      {items.map((el, index) => {
        const angle =
          (360 / items.length) * (index + (items.length - active - 1));
        return (
          <WheelItem
            angle={angle}
            onClick={() => {
              onClick(index);
            }}
            index={index}
            title={el}
            key={el}
            isActive={active === index}
          />
        );
      })}
    </div>
  );
};
