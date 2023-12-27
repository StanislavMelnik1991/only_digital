import mockData from '@shared/mock/mockData.json'
import { type IHistoricalData } from '@shared/interfaces/data.interface'
import { type Swiper } from 'swiper/types'
import { useCallback, useState } from 'react'

export const useBranchSelection = () => {
  const historyData = [...(mockData as IHistoricalData[])]
  const lastIndex = historyData.length - 1
  const branches = historyData.map((val) => val.title)
  const periods: Array<[number, number]> = historyData.map((val) => {
    const years = [...val.data.map((obj) => obj.year)]
    const minYear = Math.min(...years)
    const maxYear = Math.max(...years)
    return [minYear, maxYear]
  })
  const [active, setActive] = useState<number>(lastIndex)
  const [swiperRef, setSwipeRef] = useState<Swiper>()
  const [data, setData] = useState<
  Array<{
    year: number
    title: string
  }>
  >(historyData[lastIndex].data)
  const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(false)
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false)

  const selectBranch = useCallback(
    (index: number) => {
      setActive(index)
      setData(historyData[index].data)
      swiperRef?.slideTo(index, 0, false)
    },
    [historyData, swiperRef]
  )

  const onChange = useCallback((slider: Swiper) => {
    setIsPrevDisabled(slider.isBeginning)
    setIsNextDisabled(slider.isEnd)
  }, [])

  const onSwiper = useCallback(
    (slider: Swiper) => {
      onChange(slider)
      setSwipeRef(slider)
    },
    [onChange]
  )
  const handleNext = useCallback(
    () => {
      swiperRef?.slideNext()
    },
    [swiperRef]
  )
  const handlePrev = useCallback(
    () => {
      swiperRef?.slidePrev()
    },
    [swiperRef]
  )

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
    isPrevDisabled,
    isNextDisabled
  }
}
