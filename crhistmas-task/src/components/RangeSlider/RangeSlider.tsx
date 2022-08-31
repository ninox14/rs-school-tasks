import Slider, { Range, RangeProps } from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './RangeSlider.module.scss';

const RangeWith = Slider.createSliderWithTooltip(Range);
interface RangeSliderProps extends RangeProps {
  filterState: number[];
}

export const RangeSlider = (props: RangeSliderProps) => {
  return (
    <div className={styles['range-wrapper']}>
      <div className={styles.output}>{props.filterState[0]}</div>
      <RangeWith
        {...props}
        tipFormatter={(value) => <span className={styles.tip}>{value}</span>}
        railStyle={{
          backgroundColor: '#ffffffc5',
        }}
        trackStyle={[
          {
            background: '#24C5DB',
          },
        ]}
        handleStyle={[{ backgroundColor: '#19331a', borderColor: '#7eb19b' }]}
      />
      <div className={styles.output}>{props.filterState[1]}</div>
    </div>
  );
};
