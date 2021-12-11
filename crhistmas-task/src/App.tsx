import React from 'react';

//components
import { CustomSelect } from './components/Select';
// imgs
import { ReactComponent as SoundSvg } from './assets/svg/audio.svg';
import { ReactComponent as SnowSvg } from './assets/svg/snow.svg';
import SearchSvg from './assets/svg/search.svg';

const sortOptions: SelectOptionInterface[] = [
  { value: 'nameAscending', label: 'По названию от «А» до «Я»' },
  { value: 'nameDescending', label: 'По названию от «Я» до «А»' },
  { value: 'yearAscending', label: 'По году производства по возрастанию' },
  { value: 'yearDescending', label: 'По году производства по убыванию' },
];

function App() {
  return (
    <>
      {/* <div className="welcome text-center clear d-flex flex-column justify-center align-center">
        <h1 className="welcome__title blur-bg text-uppercase ">
          Помогите бабушке нарядить елку
        </h1>
        <button className="welcome__button blur-bg">Начать</button>
      </div> */}
      <main className="content">
        <div className="filters">
          <div className="filters__item top-panel">
            <button className="top-panel__btn">
              <SoundSvg className="top-panel__sound" width={36} height={36} />
            </button>
            <button className="top-panel__btn">
              <SnowSvg className="top-panel__snow" width={36} height={36} />
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
        </div>

        <div className="shop-itmes">
          <h2 className="shop-itmes__title">Игрушки</h2>
          <div className="shop-itmes__wrapper cards">
            <div className="cards__item">123123123123</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
