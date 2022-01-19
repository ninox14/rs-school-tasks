import './Garage.scss';

import { observer } from 'mobx-react-lite';
import garageS from '../../state/GarageState';
import debounce from 'lodash.debounce';
import { Button } from '../Button/Button';
import { Car } from '../Car/Car';
import { useMemo, useRef } from 'react';

export const Garage = observer(() => {
  const updateColorInputRef = useRef(null);

  const debouncedCreateColorChangeHandler = useMemo(
    () =>
      debounce((e: React.FormEvent<HTMLInputElement>) => {
        garageS.handleCreateColorChange(e);
      }, 100),
    []
  );
  const debouncedUpdateColorChangeHandler = useMemo(
    () =>
      debounce((e: React.FormEvent<HTMLInputElement>) => {
        garageS.handleUpdateColorChange(
          // updateColorInputRef.current as unknown as HTMLInputElement
          e.target as HTMLInputElement
        );
      }, 100),
    []
  );

  return (
    <>
      <div className="controls">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            garageS.createCar();
          }}
          className="controls-inputs"
        >
          <input
            type="text"
            minLength={1}
            maxLength={16}
            pattern="[a-zA-Zа-яА-Я 0-9]{1,16}"
            value={garageS.createName}
            onInput={(e) => {
              garageS.handleCreateNameChange(e.currentTarget.value);
            }}
          />
          <input
            type="color"
            name="create_color"
            id="create_color"
            onChange={debouncedCreateColorChangeHandler}
          />
          <Button type="submit" label="create" />
        </form>
        <form
          className="controls-inputs"
          onSubmit={(e) => {
            e.preventDefault();
            garageS.updateCar();
          }}
        >
          <input
            type="text"
            minLength={1}
            maxLength={16}
            pattern="[a-zA-Z 0-9]{1,16}"
            value={garageS.updateName || ''}
            onInput={(e) => {
              garageS.handleUpdateNameChange(e.currentTarget.value);
            }}
            disabled={!garageS.updateName ? true : false}
          />
          <input
            type="color"
            ref={updateColorInputRef}
            name="create_color"
            id="create_color"
            // value={garageS.updateColor || ''}
            // defaultValue={garageS.updateColor}
            onInput={debouncedUpdateColorChangeHandler}
            disabled={!garageS.updateColor ? true : false}
          />
          <Button label="update" type="submit" />
        </form>
        <div className="controls-btns">
          <Button label="race" />
          <Button label="reset" />
          <Button
            label="generate cars"
            onClick={() => garageS.generateCars()}
          />
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
        <div className="garage-pagination">
          <Button
            label="< prev"
            className="garage-pagination_btn"
            onClick={() => garageS.handlePagePrevChange()}
          />
          <Button
            label="Next >"
            className="garage-pagination_btn"
            onClick={() => garageS.handlePageNextChange()}
          />
        </div>
      </div>
    </>
  );
});
