import { FC } from 'react';
import './Shop.scss';
import { importAll } from '../logic';
import { Filters } from '../Filters/Filters';

const images = importAll(
  require.context('../../assets/toys', false, /\.(png|jpe?g|svg)$/)
);

export const Shop: FC<ShopPropsInterface> = ({
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
  toyData,
}) => (
  <main className="content">
    <Filters
      activeFormFilters={activeFormFilters}
      handleAddFormFilter={handleAddFormFilter}
      handleDeleteFormFilter={handleDeleteFormFilter}
      activeColorFilters={activeColorFilters}
      handleAddColorFilter={handleAddColorFilter}
      handleDeleteColorFilter={handleDeleteColorFilter}
      activeSizeFilters={activeSizeFilters}
      handleAddSizeFilter={handleAddSizeFilter}
      handleDeleteSizeFilter={handleDeleteSizeFilter}
      onlyFavourite={onlyFavourite}
      setOnlyFavourite={setOnlyFavourite}
      saveFilters={saveFilters}
      setDefaultFilters={setDefaultFilters}
      activeSort={activeSort}
      handleSortChange={handleSortChange}
      itemCountRange={itemCountRange}
      handleCountRangeChange={handleCountRangeChange}
      itemYearRange={itemYearRange}
      handleYearRangeChange={handleYearRangeChange}
    />

    <div className="shop-items">
      <h2 className="shop-items__title">Игрушки</h2>
      <div className="shop-items__wrapper cards">
        {toyData.map(
          ({ year, color, count, size, favorite, num, name, shape }) => (
            <div className="cards__item card">
              <h3 className="card__name">{name}</h3>
              <img
                className="card__image"
                src={images[`${num}.png`].default}
                alt="dsasad"
              />
              <div className="card__description">
                <p className="card__caption">
                  Количество: <b>{count}</b>
                </p>
                <p className="card__caption">
                  Год покупки: <b>{year}</b>
                </p>
                <p className="card__caption">
                  Форма: <b>{shape}</b>
                </p>
                <p className="card__caption">
                  Цвет: <b>{color}</b>
                </p>
                <p className="card__caption">
                  Размер: <b>{size}</b>
                </p>
                <p className="card__caption">
                  Любимая: <b>{favorite ? 'да' : 'нет'}</b>
                </p>
              </div>
              <button className="card__btn">FAV</button>
            </div>
          )
        )}
      </div>
    </div>
  </main>
);
