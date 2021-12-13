import './Shop.scss';
import { Filters } from '../Filters/Filters';
export const Shop = () => (
  <main className="content">
    <Filters />

    <div className="shop-itmes">
      <h2 className="shop-itmes__title">Игрушки</h2>
      <div className="shop-itmes__wrapper cards">
        <div className="cards__item">123123123123</div>
      </div>
    </div>
  </main>
);
