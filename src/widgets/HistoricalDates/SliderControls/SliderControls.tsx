import styles from './SliderControls.module.scss'
import { ArrowIcon } from '@entities/ArrowIcon/ArrowIcon'

interface Props {
  slides: number
  activeSlide: number
  isNextDisabled?: boolean
  isPrevDisabled?: boolean
  handleNext: () => void
  handlePrev: () => void
}

export const SliderControls = ({ activeSlide, slides, handleNext, handlePrev, isNextDisabled, isPrevDisabled }: Props) => {
  const legend = `${(activeSlide + 1).toString().padStart(2, '0')}/${slides.toString().padStart(2, '0')}`

  return (
    <div className={styles.wrapper}>
      <legend className={styles.legend}>{legend}</legend>
      <div className={styles.controls}>
        <ArrowIcon
          orientation="left"
          width={50}
          className={styles.prev}
          disabled={isPrevDisabled}
          onClick={handlePrev}
        />
        <ArrowIcon
          orientation="right"
          width={50}
          className={styles.prev}
          disabled={isNextDisabled}
          onClick={handleNext}
        />
      </div>
    </div>
  )
}
