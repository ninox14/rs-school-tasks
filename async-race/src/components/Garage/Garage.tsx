import './Garage.scss';

import { observer } from 'mobx-react-lite';
import garageS from '../../state/GarageState';
import debounce from 'lodash.debounce';
import { Button } from '../Button/Button';
import { Car } from '../Car/Car';
import { FC, useMemo, useRef } from 'react';
// import { deletAll } from '../../utility/api';

export const Garage: FC<Record<string, unknown>> = observer(() => {
  const updateColorInputRef = useRef<HTMLInputElement>(null);

  const debouncedCreateColorChangeHandler = useMemo(
    () =>
      debounce((e: React.FormEvent<HTMLInputElement>) => {
        garageS.handleCreateColorChange(e);
      }, 100),
    []
  );
  const debouncedUpdateColorChangeHandler = useMemo(
    () =>
      debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        garageS.handleUpdateColorChange(
          // updateColorInputRef.current as unknown as HTMLInputElement
          e.target
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
            pattern="[a-zA-Z а-яА-Я0-9]{1,16}"
            value={garageS.createName || ''}
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
            pattern="[a-zA-Z а-яА-Я0-9]{1,16}"
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
          <Button
            label="race"
            onClick={() => garageS.handleStartRace()}
            disabled={garageS.isRaceInProgress}
          />
          <Button
            label="reset"
            onClick={() => garageS.handleResetRace()}
            disabled={!garageS.isRaceInProgress}
          />
          <Button
            label="generate cars"
            onClick={() => garageS.generateCars()}
          />
          {/* <Button
            label="delete almost all cars"
            onClick={async () => {
              await deletAll();
              garageS.getCars();
            }}
          /> */}
        </div>
      </div>
      <div className="garage">
        <h2 className="garage-title">Garage ({garageS.totalCount})</h2>
        <h3 className="garage-page">Page #{garageS.currentPage}</h3>
        <div className="garage-cars">
          {garageS.cars.map((i, idx) => {
            return (
              <Car
                key={i.id}
                name={i.name}
                id={i.id}
                color={i.color}
                objIndex={idx}
                animationTime={i.animationTime}
                isInPause={i.isInPause}
              />
            );
          })}
        </div>
        <div className="pagination">
          <Button
            label="< prev"
            className="pagination_btn"
            onClick={() => garageS.handlePagePrevChange()}
            disabled={garageS.maxPages === 1}
          />
          <Button
            label="Next >"
            className="pagination_btn"
            onClick={() => garageS.handlePageNextChange()}
            disabled={garageS.maxPages === 1}
          />
        </div>
      </div>
    </>
  );
});
