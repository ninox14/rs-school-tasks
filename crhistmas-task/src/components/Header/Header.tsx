import { FC } from 'react';
import './Header.scss';

export const Header: FC<HeaderPropsInterface> = ({
  setIsOnTree,
  isOnStart,
  isOnTree,
  favourites,
  setIsOnStart,
}) => (
  <header className="header">
    <nav className="nav">
      <button
        className={`nav__btn ${!isOnStart && !isOnTree ? 'active' : null}`}
        onClick={() => {
          setIsOnTree(false);
          setIsOnStart(false);
        }}
      >
        Игрушки
      </button>
      <button
        className={`nav__btn  ${isOnTree && 'active'}`}
        onClick={() => setIsOnTree(true)}
      >
        Ёлка
      </button>
    </nav>
    <div className="fav-count">
      <span>{favourites.length}</span>
    </div>
  </header>
);
