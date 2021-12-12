import { useState } from 'react';
import Slider, { Range, RangeProps } from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './RangeSlider.module.scss';

// interface SliderRangePropsExtInterface extends RangeProps {
//   classPrefix?: string;
// }

const RangeWith = Slider.createSliderWithTooltip(Range);

export const RangeSlider = (props: RangeProps) => {
  const defautlValues = props?.defaultValue
    ? props.defaultValue
    : [props.min || 0, props.max || 100];
  // (props.value as number[]);

  const [lesser, setLesser] = useState(defautlValues[0]);
  const [bigger, setBigger] = useState(defautlValues[1]);

  const updateSideIndicators = (data: number[]) => {
    setLesser(data[0]);
    setBigger(data[1]);
  };

  return (
    <div className={styles['range-wrapper']}>
      <div
        className={styles.output}
        dangerouslySetInnerHTML={{ __html: lesser.toString() }}
      ></div>
      <RangeWith
        {...props}
        onChange={updateSideIndicators}
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
      <div
        className={styles.output}
        dangerouslySetInnerHTML={{ __html: bigger.toString() }}
      ></div>
    </div>
  );
};
