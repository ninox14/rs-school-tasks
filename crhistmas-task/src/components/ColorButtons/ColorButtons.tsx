import { FC } from 'react';
import { Button } from '../Button/Button';

import './ColorButtons.scss';

import { possibleColors } from '../logic';

const possibleColorsEng = {
  белый: 'white',
  желтый: 'yellow',
  красный: 'red',
  синий: 'blue',
  зелёный: 'green',
};

export const ColorButtons: FC<ColorButtonsProps> = ({
  activeColorFilters,
  handleAddColorFilter,
  handleDeleteColorFilter,
}) => (
  <>
    {possibleColors.map((color) => {
      const isActive = activeColorFilters.includes(color);
      const onClick = isActive
        ? () => handleDeleteColorFilter(color)
        : () => handleAddColorFilter(color);
      return (
        <Button
          className={`color-button ${possibleColorsEng[color]} ${
            isActive && 'active'
          }`}
          key={color}
          onClick={onClick}
        />
      );
    })}
  </>
);
