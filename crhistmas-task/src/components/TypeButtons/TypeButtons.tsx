import { FC } from 'react';
import { Button } from '../Button/Button';
import { toys } from '../../assets/svg-comps';
import './TypeButtons.scss';
export const TypeButtons: FC<FormTypeButtonsInterface> = ({ callback }) => (
  <>
    {Object.keys(toys).map((key) => {
      return (
        <Button
          className="form-type-button"
          InnerSvg={toys[key]}
          callback={(e) => {
            callback(e, key);
          }}
        />
      );
    })}
  </>
);
