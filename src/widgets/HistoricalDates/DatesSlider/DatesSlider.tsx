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
  isMobile: boolean;
  setIsMobile: (val: boolean) => void;
}

export const DatesSlider = ({ data, isMobile, setIsMobile }: Props) => {
  const { next, onSwiper, prev, isNextDisabled, isPrevDisabled, onChange } =
    useDatesSlider({ setIsMobile });
  return (
    <div className={styles.wrapper}>
      <ArrowIcon
        orientation="left"
        color="rgba(56, 119, 238, 1)"
        isHideBorder
        width={40}
        backgroundColor="white"
        className={styles.prev}
        disabled={isPrevDisabled}
        onClick={prev}
      />
      <Swiper
        slidesPerView={isMobile ? 1.5 : 3}
        spaceBetween={isMobile ? 25 : 80}
        grabCursor
        height={isMobile ? 80 : 135}
        onActiveIndexChange={onChange}
        slideNextClass={isMobile ? styles.nextSlide : undefined}
        slidePrevClass={isMobile ? styles.nextSlide : undefined}
        onSwiper={onSwiper}
        onResize={onSwiper}
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
        width={40}
        className={styles.next}
        disabled={isNextDisabled}
        onClick={next}
      />
    </div>
  );
};
