import { Title } from "@entities/Title/Title";
import styles from "./HistoricalDates.module.scss";
import { IndustrySelect } from "./IndustrySelect/IndustrySelect";
import { useBranchSelection } from "@features/hooks/BranchSelection";
import { DatesSlider } from "./DatesSlider/DatesSlider";
import { SliderControls } from "./SliderControls/SliderControls";

export const HistoricalDates = () => {
  const {
    active,
    branches,
    periods,
    data,
    isNextDisabled,
    isPrevDisabled,
    selectBranch,
    onChange,
    handleNext,
    handlePrev,
    onSwiper,
  } = useBranchSelection();

  return (
    <div className={styles.wrapper}>
      <Title text="Исторические даты" />
      <IndustrySelect
        active={active}
        selectBranch={selectBranch}
        onActiveIndexChange={onChange}
        onSwiper={onSwiper}
        branches={branches}
        periods={periods}
      />
      <SliderControls
        isNextDisabled={isNextDisabled}
        isPrevDisabled={isPrevDisabled}
        activeSlide={active}
        slides={periods.length}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
      <DatesSlider data={data} />
    </div>
  );
};
