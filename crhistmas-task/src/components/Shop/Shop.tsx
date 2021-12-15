import { FC } from 'react';
import './Shop.scss';
import { Filters } from '../Filters/Filters';

type OwnProps = {
  activeFormFilters: string[];
  handleAddFormFilter: (typeForm: string) => void;
  handleDeleteFormFilter: (typeForm: string) => void;
  activeColorFilters: string[];
  handleAddColorFilter: (color: string) => void;
  handleDeleteColorFilter: (color: string) => void;
};

export const Shop: FC<OwnProps> = ({
  activeFormFilters,
  handleAddFormFilter,
  handleDeleteFormFilter,
  activeColorFilters,
  handleAddColorFilter,
  handleDeleteColorFilter,
}) => (
  <main className="content">
    <Filters
      activeFormFilters={activeFormFilters}
      handleAddFormFilter={handleAddFormFilter}
      handleDeleteFormFilter={handleDeleteFormFilter}
      activeColorFilters={activeColorFilters}
      handleAddColorFilter={handleAddColorFilter}
      handleDeleteColorFilter={handleDeleteColorFilter}
    />

    <div className="shop-itmes">
      <h2 className="shop-itmes__title">Игрушки</h2>
      <div className="shop-itmes__wrapper cards">
        <div className="cards__item">123123123123</div>
      </div>
    </div>
  </main>
);
