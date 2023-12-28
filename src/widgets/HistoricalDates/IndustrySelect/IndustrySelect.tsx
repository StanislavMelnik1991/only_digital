import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import styles from "./IndustrySelect.module.scss";
import { SelectionWheel } from "@entities/SelectionWheel/SelectionWheel";
import { type Swiper as SwiperType } from "swiper/types";

interface Props {
  periods: Array<[number, number]>;
  active: number;
  selectBranch: (index: number) => void;
  branches: string[];
  onActiveIndexChange: (swiper: SwiperType) => void;
  onSwiper: (swipe: SwiperType) => void;
}

export const IndustrySelect = ({
  active,
  branches,
  periods,
  selectBranch,
  onActiveIndexChange,
  onSwiper,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <SelectionWheel active={active} onClick={selectBranch} items={branches} />
      <div className={styles.swiper}>
        <Swiper
          modules={[Pagination]}
          longSwipes={false}
          mousewheel={false}
          initialSlide={active}
          direction="vertical"
          height={160}
          noSwipingClass={styles.text}
          onActiveIndexChange={onActiveIndexChange}
          onSwiper={onSwiper}
        >
          {periods.map((el, index) => {
            return (
              <SwiperSlide
                className={styles.text}
                key={`IndustrySelect-${el[0]}-${el[1]}-${index}`}
              >
                {el[0]}
                <div className={styles.secondary}>{el[1]}</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
