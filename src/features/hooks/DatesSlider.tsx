import { useCallback, useState } from "react";
import { type Swiper } from "swiper/types";

interface Props {
  setIsMobile: (val: boolean) => void;
}

export const useDatesSlider = ({ setIsMobile }: Props) => {
  const [sliderRef, setSliderRef] = useState<Swiper>();
  const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(false);
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);

  const next = useCallback(() => {
    sliderRef?.slideNext();
  }, [sliderRef]);
  const prev = useCallback(() => {
    sliderRef?.slidePrev();
  }, [sliderRef]);

  const onChange = useCallback(
    (slider: Swiper) => {
      setIsPrevDisabled(slider.isBeginning);
      setIsNextDisabled(slider.isEnd);
      const { innerWidth } = window;

      setIsMobile(innerWidth <= 1200);
    },
    [setIsMobile],
  );

  const onSwiper = useCallback(
    (slider: Swiper) => {
      onChange(slider);
      setSliderRef(slider);
    },
    [onChange],
  );

  return {
    onSwiper,
    next,
    prev,
    onChange,
    isPrevDisabled,
    isNextDisabled,
  };
};
