import styles from "./DatesSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { DatesSlide } from "@entities/DatesSlide/DatesSlide";
import { useDatesSlider } from "@features/hooks/DatesSlider";
import { ArrowIcon } from "@entities/ArrowIcon/ArrowIcon";

interface Props {
  data: Array<{
    year: number;
    title: string;
  }>;
}

export const DatesSlider = ({ data }: Props) => {
  const {
    next,
    onSwiper,
    prev,
    isNextDisabled,
    isPrevDisabled,
    onChange,
    onResize,
  } = useDatesSlider();
  return (
    <div className={styles.wrapper}>
      <ArrowIcon
        orientation="left"
        color="rgba(56, 119, 238, 1)"
        isHideBorder
        backgroundColor="white"
        className={styles.prev}
        disabled={isPrevDisabled}
        onClick={prev}
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={80}
        grabCursor
        height={135}
        onActiveIndexChange={onChange}
        onSwiper={onSwiper}
        onResize={onResize}
      >
        {data.map((el) => {
          return (
            <SwiperSlide className={styles.slide} key={el.year}>
              <DatesSlide {...el} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ArrowIcon
        color="rgba(56, 119, 238, 1)"
        isHideBorder
        backgroundColor="white"
        className={styles.next}
        disabled={isNextDisabled}
        onClick={next}
      />
    </div>
  );
};
