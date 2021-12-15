import React, { FC } from 'react';
import './Filters.scss';

// Components
import { CustomSelect } from '../Select';
import { RangeSlider } from '../RangeSlider/RangeSlider';
import { TypeButtons } from '../TypeButtons/TypeButtons';

// Logic
// import { formButtonCallback } from '../logic';

// Assets
import SearchSvg from '../../assets/svg/search.svg';
import { Audio, Snow } from '../../assets/svg-comps/index';
import { ColorButtons } from '../ColorButtons/ColorButtons';

const sortOptions: SelectOptionInterface[] = [
  { value: 'nameAscending', label: 'По названию от «А» до «Я»' },
  { value: 'nameDescending', label: 'По названию от «Я» до «А»' },
  { value: 'yearAscending', label: 'По году производства по возрастанию' },
  { value: 'yearDescending', label: 'По году производства по убыванию' },
];

type OwnPropsFilter = {
  activeFormFilters: string[];
  handleAddFormFilter: (typeForm: string) => void;
  handleDeleteFormFilter: (typeForm: string) => void;
  activeColorFilters: string[];
  handleAddColorFilter: (color: string) => void;
  handleDeleteColorFilter: (color: string) => void;
};

export const Filters: FC<OwnPropsFilter> = ({
  activeFormFilters,
  handleAddFormFilter,
  handleDeleteFormFilter,
  activeColorFilters,
  handleAddColorFilter,
  handleDeleteColorFilter,
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
          {
            <TypeButtons
              activeFormFilters={activeFormFilters}
              handleAddFormFilter={handleAddFormFilter}
              handleDeleteFormFilter={handleDeleteFormFilter}
            />
          }
        </div>
      </div>
      <div className="filters__item form-wrap">
        <p className="filters__item_type">Цвет</p>

        <div className="form-wrap__btns">
          {
            <ColorButtons
              activeColorFilters={activeColorFilters}
              handleAddColorFilter={handleAddColorFilter}
              handleDeleteColorFilter={handleDeleteColorFilter}
            />
          }
        </div>
      </div>
      {/* string */}
    </div>
  );
};
