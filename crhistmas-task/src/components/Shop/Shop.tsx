import { FC } from 'react';
import './Shop.scss';
import { Filters } from '../Filters/Filters';

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
  isFavourite,
  setIsFavourite,
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
      isFavourite={isFavourite}
      setIsFavourite={setIsFavourite}
    />

    <div className="shop-itmes">
      <h2 className="shop-itmes__title">Игрушки</h2>
      <div className="shop-itmes__wrapper cards">
        <div className="cards__item">123123123123</div>
      </div>
    </div>
  </main>
);
