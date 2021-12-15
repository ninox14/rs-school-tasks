import { Button } from '../Button/Button';
import SvgBall from '../../assets/svg-comps/toys/Ball';
import './SizeButtons.scss';
import { FC } from 'react';

export const possibleSizes: ToySize[] = ['большой', 'средний', 'малый'];

const possibleSizesEng = {
  большой: 'big',
  средний: 'medium',
  малый: 'small',
};

export const SizeButtons: FC<SizeButtonsPropsInterface> = ({
  activeSizeFilters,
  handleAddSizeFilter,
  handleDeleteSizeFilter,
}) => (
  <>
    {possibleSizes.map((size) => {
      const isActive = activeSizeFilters.includes(size);
      const onClick = isActive
        ? () => handleDeleteSizeFilter(size)
        : () => handleAddSizeFilter(size);
      return (
        <Button
          className={`size-button ${possibleSizesEng[size]} ${
            isActive && 'active'
          }`}
          key={size}
          InnerElem={() => <span className="size-button__caption">{size}</span>}
          InnerSvg={SvgBall}
          onClick={onClick}
        />
      );
    })}
  </>
);
