import { FC } from 'react';
import { Button } from '../Button/Button';
import './ColorButtons.scss';

export const possibleColors = ['white', 'yellow', 'red', 'blue', 'green'];

type ColorButtonsProps = {
  activeColorFilters: string[];
  handleAddColorFilter: (color: string) => void;
  handleDeleteColorFilter: (color: string) => void;
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
          className={`color-button ${color} ${isActive && 'active'}`}
          key={color}
          onClick={onClick}
        />
      );
    })}
  </>
);
