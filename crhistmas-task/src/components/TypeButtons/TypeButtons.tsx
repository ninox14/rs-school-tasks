import { FC } from 'react';
import { Button } from '../Button/Button';
import { toys } from '../../assets/svg-comps';
import './TypeButtons.scss';
export const TypeButtons: FC<FormTypeButtonsInterface> = ({
  activeFormFilters,
  handleAddFormFilter,
  handleDeleteFormFilter,
}) => (
  <>
    {Object.keys(toys).map((key) => {
      const isActive = activeFormFilters.includes(key);
      const onClick = isActive
        ? () => handleDeleteFormFilter(key)
        : () => handleAddFormFilter(key);
      return (
        <Button
          className={`form-type-button ${isActive && 'active'}`}
          InnerSvg={toys[key]}
          key={key}
          onClick={onClick}
        />
      );
    })}
  </>
);
