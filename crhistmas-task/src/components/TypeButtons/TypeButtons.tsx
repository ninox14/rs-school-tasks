import { FC } from 'react';
import { Button } from '../Button/Button';
import { toys } from '../../assets/svg-comps';

export const TypeButtons: FC<{ callback: () => void; className: string }> = ({
  callback,
  className,
}) => (
  <>
    {Object.keys(toys).map((key) => {
      return (
        // <Button className="form-type-button" InnerSvg={toys[key]} value={key} />
        <button></button>
      );
    })}
  </>
);
