import mockData from "@shared/mock/mockData.json";
import { type IHistoricalData } from "@shared/interfaces/data.interface";
import { type Swiper } from "swiper/types";
import { useCallback, useState } from "react";

export const useBranchSelection = () => {
  const [historyData] = useState([...(mockData as IHistoricalData[])]);
  const lastIndex = historyData.length - 1;
  const branches = historyData.map((val) => val.title);
  const periods: Array<[number, number]> = historyData.map((val) => {
    const years = [...val.data.map((obj) => obj.year)];
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);
    return [minYear, maxYear];
  });
  const [active, setActive] = useState<number>(lastIndex);
  const [swiperRef, setSwipeRef] = useState<Swiper>();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [data, setData] = useState<
    Array<{
      year: number;
      title: string;
    }>
  >(historyData[lastIndex].data);
  const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(false);
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);

  const changeData = useCallback(
    (index: number) => {
      setActive(index);
      setData(historyData[index].data);
    },
    [historyData],
  );
  const selectBranch = useCallback(
    (index: number) => {
      changeData(index);
      swiperRef?.slideTo(index);
    },
    [changeData, swiperRef],
  );

  const onChange = useCallback(
    (slider: Swiper) => {
      const { activeIndex } = slider;
      changeData(activeIndex);
      setIsPrevDisabled(slider.isBeginning);
      setIsNextDisabled(slider.isEnd);
      const { innerWidth } = window;

      setIsMobile(innerWidth <= 1200);
    },
    [changeData],
  );

  const onSwiper = useCallback(
    (slider: Swiper) => {
      onChange(slider);
      setSwipeRef(slider);
    },
    [onChange],
  );
  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);
  const handlePrev = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  return {
    active,
    branches,
    periods,
    data,
    selectBranch,
    onSwiper,
    onChange,
    handleNext,
    handlePrev,
    setIsMobile,
    isPrevDisabled,
    isNextDisabled,
    isMobile,
  };
};
