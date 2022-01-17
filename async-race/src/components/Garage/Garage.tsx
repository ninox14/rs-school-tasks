import './Garage.scss';

import { observer } from 'mobx-react-lite';
import garageS from '../../state/GarageState';
import debounce from 'lodash.debounce';
import { Button } from '../Button/Button';
import { Car } from '../Car/Car';
import { useMemo } from 'react';

export const Garage = observer(() => {
  const debouncedCreateColorChangeHandler = useMemo(
    () =>
      debounce((e: React.FormEvent<HTMLInputElement>) => {
        garageS.handleColorChange(e);
      }, 100),
    []
  );
  return (
    <>
      <div className="controls">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="controls-inputs"
        >
          <input
            type="text"
            minLength={1}
            maxLength={16}
            pattern="[a-zA-Zа-яА-Я 0-9]{1,16}"
            onInput={(e) => {
              garageS.handleNameChange(e.currentTarget.value);
            }}
          />
          <input
            type="color"
            name="create_color"
            id="create_color"
            onChange={debouncedCreateColorChangeHandler}
          />
          <Button
            type="submit"
            label="create"
            onClick={() => {
              garageS.createCar();
            }}
          />
        </form>
        <form
          className="controls-inputs"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            minLength={1}
            maxLength={16}
            pattern="[a-zA-Z 1-9]"
          />
          <input type="color" name="create_color" id="create_color" />
          <Button label="update" type="submit" />
        </form>
        <div className="controls-btns">
          <Button label="race" />
          <Button label="reset" />
          <Button label="generate cars" />
        </div>
      </div>
      <div className="garage">
        <h2 className="garage-title">Garage ({garageS.totalCount})</h2>
        <h3 className="garage-page">Page #{garageS.currentPage}</h3>
        <div className="garage-cars">
          {garageS.cars.map((i) => {
            return <Car key={i.id} name={i.name} id={i.id} color={i.color} />;
          })}
        </div>
      </div>
    </>
  );
});
