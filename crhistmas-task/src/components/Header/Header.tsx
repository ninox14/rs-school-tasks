import { FC } from 'react';
import './Header.scss';
import { Tree } from '../../assets/svg-comps';
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
        className="nav__svg-btn"
        onClick={() => {
          setIsOnTree(false);
          setIsOnStart(true);
        }}
      >
        <Tree className="nav__svg" width={44} height={44} />
      </button>
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
