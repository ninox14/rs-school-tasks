import { FC } from 'react';
import { Button } from '../Button/Button';
import { toys } from '../../assets/svg-comps';
import './TypeButtons.scss';

export const possibleForms: PossibleFormsInterface = {
  SvgBall: 'шар',
  SvgBell: 'колокольчик',
  SvgCone: 'шишка',
  SvgToy: 'фигурка',
  SvgSnowflake: 'снежинка',
};

export const TypeButtons: FC<FormTypeButtonsInterface> = ({
  activeFormFilters,
  handleAddFormFilter,
  handleDeleteFormFilter,
}) => (
  <>
    {(Object.keys(toys) as ToyFormEng[]).map((key) => {
      const isActive = activeFormFilters.includes(possibleForms[key]);
      const onClick = isActive
        ? () => handleDeleteFormFilter(possibleForms[key])
        : () => handleAddFormFilter(possibleForms[key]);
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
