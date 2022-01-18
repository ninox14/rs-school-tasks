import React from 'react';
import './App.scss';

import { observer } from 'mobx-react-lite';
import navigation from './state/Navigation';
import garageS from './state/GarageState';

import { Garage } from './components/Garage/Garage';
import { Header } from './components/Header/Header';
import { Winners } from './components/Winners/Winners';
import { Modal } from './components/Modal/Modal';

const App = observer(() => {
  return (
    <>
      {garageS.isGenerationInProgress ? <Modal /> : null}
      <Header />
      <main className="main">
        {navigation.isOnGarage ? <Garage /> : null}
        {navigation.isOnWinners ? <Winners /> : null}
      </main>
    </>
  );
});

export default App;
