import { useCallback, useState } from 'react'
import { type Swiper } from 'swiper/types'

export const useDatesSlider = () => {
  const [sliderRef, setSliderRef] = useState<Swiper>()
  const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(false)
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false)

  const next = useCallback(() => {
    sliderRef?.slideNext()
  }, [sliderRef])
  const prev = useCallback(() => {
    sliderRef?.slidePrev()
  }, [sliderRef])

  const onChange = useCallback((slider: Swiper) => {
    setIsPrevDisabled(slider.isBeginning)
    setIsNextDisabled(slider.isEnd)
  }, [])

  const onSwiper = useCallback(
    (slider: Swiper) => {
      onChange(slider)
      setSliderRef(slider)
    },
    [onChange]
  )

  return {
    onSwiper,
    next,
    prev,
    onChange,
    isPrevDisabled,
    isNextDisabled
  }
}
