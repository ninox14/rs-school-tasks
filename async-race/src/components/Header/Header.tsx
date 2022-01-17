import './Header.scss';
import { observer } from 'mobx-react-lite';
import { Button } from '../Button/Button';
import { FC } from 'react';
import navigation from '../../state/Navigation';

const HeaderComponent: FC<{}> = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Button
          className={`nav-button ${navigation.isOnWinners && 'secondary'}`}
          label="Garage"
          onClick={() => navigation.goToGarage()}
        ></Button>
        <Button
          className={`nav-button ${navigation.isOnGarage && 'secondary'}`}
          label="Winners"
          onClick={() => navigation.goToWinners()}
        ></Button>
      </nav>
    </header>
  );
};

const Header = observer(HeaderComponent);

export { Header };
