import { Arrow } from "@shared/icons/Arrow/Arrow";
import styles from "./ArrowIcon.module.scss";
import { type MouseEventHandler } from "react";

interface Props {
  width?: number;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color?: string;
  isHideBorder?: boolean;
  size?: number;
  className?: string;
  backgroundColor?: string;
  orientation?: OrientationType;
}

type OrientationType = "left" | "right" | "top" | "bottom";

export const ArrowIcon = ({
  width = 40,
  disabled,
  onClick,
  color = "rgba(66, 86, 122, 1)",
  isHideBorder = false,
  size = 1.5,
  className,
  backgroundColor = "transparent",
  orientation = "right",
}: Props) => {
  const rotate =
    orientation === "left"
      ? 180
      : orientation === "bottom"
        ? 90
        : orientation === "top"
          ? 270
          : 0;
  return (
    <button
      className={`${styles.wrapper} ${className}`}
      style={{
        width,
        height: width,
        borderColor: isHideBorder ? "transparent" : color,
        borderWidth: size,
        backgroundColor,
        rotate: `${rotate}deg`,
      }}
      disabled={disabled}
      onClick={onClick}
    >
      <Arrow stroke={color} />
    </button>
  );
};
