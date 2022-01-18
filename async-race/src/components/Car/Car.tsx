import './Car.scss';
import { FC } from 'react';

import { ReactComponent as CarSvg } from '../../assets/car.svg';
import { Button } from '../Button/Button';

import garageS from '../../state/GarageState';

interface CarPropsInterface {
  name: string;
  id: number;
  color: string;
}

export const Car: FC<CarPropsInterface> = ({ color, name, id }) => {
  return (
    <div className="car">
      <div className="car-top">
        <Button
          label="select"
          onClick={() => {
            garageS.handleSelectCar({ id, color, name });
          }}
        />
        <Button
          label="delete"
          onClick={() => {
            garageS.deleteCar(id);
          }}
        />
        <h4 className="car-name">{name}</h4>
      </div>
      <div className="car-track">
        <Button label="S" className="car-btn car-btn__start secondary" />
        <Button label="R" className="car-btn car-btn__reset secondary" />
        <CarSvg fill={color} width={100} height={50} />
      </div>
    </div>
  );
};
