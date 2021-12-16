import React, { FC } from 'react';
import './Filters.scss';

// Components
import { CustomSelect } from '../Select';
import { RangeSlider } from '../RangeSlider/RangeSlider';
import { TypeButtons } from '../TypeButtons/TypeButtons';
import { ColorButtons } from '../ColorButtons/ColorButtons';
import { SizeButtons } from '../SizeButtons/SizeButtons';
import { Checkbox } from '../CheckBox';
import { Button } from '../Button/Button';

// Logic
// import { formButtonCallback } from '../logic';

// Assets
import SearchSvg from '../../assets/svg/search.svg';
import { Audio, Snow } from '../../assets/svg-comps/index';
import { itemCountMax, itemCountMin, itemYearMin, itemYearMax } from '../logic';

const sortOptions: SelectOptionInterface[] = [
  { value: 'nameAscending', label: 'По названию от «А» до «Я»' },
  { value: 'nameDescending', label: 'По названию от «Я» до «А»' },
  { value: 'yearAscending', label: 'По году производства по возрастанию' },
  { value: 'yearDescending', label: 'По году производства по убыванию' },
];

export const Filters: FC<FilterPropsInterface> = ({
  activeFormFilters,
  handleAddFormFilter,
  handleDeleteFormFilter,
  activeColorFilters,
  handleAddColorFilter,
  handleDeleteColorFilter,
  activeSizeFilters,
  handleAddSizeFilter,
  handleDeleteSizeFilter,
  onlyFavourite,
  setOnlyFavourite,
  saveFilters,
  setDefaultFilters,
  activeSort,
  handleSortChange,
  itemCountRange,
  handleCountRangeChange,
  itemYearRange,
  handleYearRangeChange,
}) => {
  return (
    <div className="filters">
      <div className="filters__item top-panel">
        <button className="top-panel__btn">
          <Audio className="top-panel__sound" width={36} height={36} />
        </button>
        <button className="top-panel__btn">
          <Snow className="top-panel__snow" width={36} height={36} />
        </button>
        <div className="top-panel__search search-block blur-bg">
          <input
            className="search-block__search-input"
            type="search"
            name="search"
            id="search-input"
            placeholder="Поиск"
            onChange={(e) => {
              console.log(e.currentTarget.value);
            }}
          />
          <label className="search-block__label" htmlFor="search-input">
            <img
              className="search-block__img"
              src={SearchSvg}
              alt="Search"
              width={24}
              height={24}
            />
          </label>
        </div>
      </div>
      <div className="filters__item sort-wrap">
        <span className="filters__caption">Сортировать:</span>
        <CustomSelect
          className="sort-wrap__sort"
          classNamePrefix="select"
          options={sortOptions}
          // defaultValue={sortOptions[0]}
          placeholder="По ..."
          onChange={(e) => {
            const option = e as SelectOptionInterface;
            handleSortChange(option.value);
          }}
        />
      </div>
      <div className="filters__item range-wrap">
        <p className="filters__item_type">Количество экземпляров</p>
        <div className="range-wrap__slider">
          <RangeSlider
            max={itemCountMax}
            min={itemCountMin}
            defaultValue={itemCountRange}
            onAfterChange={handleCountRangeChange}
          />
        </div>
      </div>
      <div className="filters__item range-wrap">
        <p className="filters__item_type">Год преобретения</p>
        <div className="range-wrap__slider">
          <RangeSlider
            max={itemYearMax}
            min={itemYearMin}
            defaultValue={itemYearRange}
            onAfterChange={handleYearRangeChange}
          />
        </div>
      </div>
      <div className="filters__item filter-btns">
        <p className="filters__item_type">Форма</p>
        <div className="filter-btns__btns">
          {
            <TypeButtons
              activeFormFilters={activeFormFilters}
              handleAddFormFilter={handleAddFormFilter}
              handleDeleteFormFilter={handleDeleteFormFilter}
            />
          }
        </div>
      </div>
      <div className="filters__item filter-btns">
        <p className="filters__item_type">Цвет</p>

        <div className="filter-btns__btns">
          {
            <ColorButtons
              activeColorFilters={activeColorFilters}
              handleAddColorFilter={handleAddColorFilter}
              handleDeleteColorFilter={handleDeleteColorFilter}
            />
          }
        </div>
      </div>
      <div className="filters__item filter-btns">
        <p className="filters__item_type">Размер</p>

        <div className="filter-btns__btns">
          {
            <SizeButtons
              activeSizeFilters={activeSizeFilters}
              handleAddSizeFilter={handleAddSizeFilter}
              handleDeleteSizeFilter={handleDeleteSizeFilter}
            />
          }
        </div>
      </div>
      <div className="filters__item filter-btns">
        <Checkbox
          label="Tолько любимые"
          checked={onlyFavourite}
          value={onlyFavourite}
          onChange={() => setOnlyFavourite(!onlyFavourite)}
        />
      </div>
      <div className="filters__item setup">
        <Button
          className="setup__btn blur-bg"
          InnerElem={() => <>Сбросить фильты</>}
          onClick={setDefaultFilters}
        />
        <Button
          className="setup__btn blur-bg"
          InnerElem={() => <>Сохранить фильты</>}
          onClick={saveFilters}
        />
      </div>
    </div>
  );
};
