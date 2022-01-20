import './Car.scss';
import { FC } from 'react';

import { ReactComponent as CarSvg } from '../../assets/car.svg';
import { Button } from '../Button/Button';

import garageS from '../../state/GarageState';
import { patchEngineRequest } from '../../utility/api';
import { runInAction } from 'mobx';
interface CarPropsInterface {
  name: string;
  id: number;
  color: string;
  objIndex: number;
  animationTime?: number;
  isInPause?: boolean;
}

export const Car: FC<CarPropsInterface> = ({
  color,
  name,
  id,
  objIndex,
  animationTime,
  isInPause,
}) => {
  const handleStartCar = async () => {
    await patchEngineRequest(id, 'started').then((response) => {
      if (response.data) {
        runInAction(
          () =>
            (garageS.cars[objIndex].animationTime =
              response.data.distance / response.data.velocity)
        );
      }
    });

    try {
      await await patchEngineRequest(
        id,
        'drive',
        garageS.cars[objIndex].animationTime
      );
    } catch (err) {
      runInAction(() => (garageS.cars[objIndex].isInPause = true));
    }
  };
  const handleResetCar = async () => {
    const currCar = garageS.cars[objIndex];
    runInAction(() => (currCar.isInPause = true));
    const response = await patchEngineRequest(id, 'stopped');
    console.log(response);
    runInAction(() => {
      currCar.animationTime = undefined;
      currCar.isInPause = false;
    });
  };

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
        <Button
          label="S"
          className="car-btn car-btn__start secondary"
          onClick={() => handleStartCar()}
          disabled={!!animationTime}
        />
        <Button
          label="R"
          className="car-btn car-btn__reset secondary"
          onClick={() => handleResetCar()}
          disabled={!animationTime}
        />
        <div className="car-wrapp">
          <div className="car-road">
            <CarSvg
              className={`car-svg ${animationTime ? 'animation' : ''}`}
              fill={color}
              width={100}
              height={50}
              style={{
                animationPlayState: isInPause ? 'paused' : 'running',
                animationDuration: animationTime
                  ? `${animationTime / 1000}s`
                  : 'inherit',
              }}
            />
          </div>
          <div className="car-flag">
            <div className="car-flag_img"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
