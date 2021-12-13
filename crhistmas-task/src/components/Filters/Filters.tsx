import './Filters.scss';

import { CustomSelect } from '../Select';
import { RangeSlider } from '../RangeSlider/RangeSlider';

// Assets
import SearchSvg from '../../assets/svg/search.svg';
import { Audio, Snow } from '../../assets/svg-comps/index';
import { TypeButtons } from '../TypeButtons/TypeButtons';
import React from 'react';

const sortOptions: SelectOptionInterface[] = [
  { value: 'nameAscending', label: 'По названию от «А» до «Я»' },
  { value: 'nameDescending', label: 'По названию от «Я» до «А»' },
  { value: 'yearAscending', label: 'По году производства по возрастанию' },
  { value: 'yearDescending', label: 'По году производства по убыванию' },
];

const formButtonCallback = (
  e: React.MouseEvent<HTMLButtonElement>,
  key: string
) => {
  console.log(e, key);
};

export const Filters = () => (
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
      />
    </div>
    <div className="filters__item range-wrap">
      <p className="filters__item_type">Количество экземпляров</p>
      <div className="range-wrap__slider">
        <RangeSlider max={100} />
      </div>
    </div>
    <div className="filters__item range-wrap">
      <p className="filters__item_type">Год преобретения</p>
      <div className="range-wrap__slider">
        <RangeSlider max={100} />
      </div>
    </div>
    <div className="filters__item form-wrap">
      <p className="filters__item_type">Форма</p>
      <div className="form-wrap__btns">
        {<TypeButtons callback={formButtonCallback} />}
      </div>
    </div>

    {/* string */}
  </div>
);
