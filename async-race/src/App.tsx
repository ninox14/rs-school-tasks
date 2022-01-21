import React, { useEffect } from 'react';
import './App.scss';

import { observer } from 'mobx-react-lite';
import navigation from './state/Navigation';
import garageS from './state/GarageState';

import { Garage } from './components/Garage/Garage';
import { Header } from './components/Header/Header';
import { Winners } from './components/Winners/Winners';
import { Modal } from './components/Modal/Modal';
import { autorun, runInAction } from 'mobx';

const App = observer(() => {
  useEffect(
    () =>
      autorun(() => {
        if (garageS.isShowWinnerNotif) {
          setTimeout(() => {
            runInAction(() => {
              garageS.isShowWinnerNotif = false;
            });
          }, 3000);
        }
      }),
    []
  );
  return (
    <>
      {garageS.isGenerationInProgress ? <Modal /> : null}
      {garageS.isShowWinnerNotif ? (
        <div className="notif">
          {`${garageS.currentWinner?.name} came first in ${(
            (garageS.currentWinner?.time as number) / 1000
          ).toFixed(2)}s`}
        </div>
      ) : null}
      <Header />
      <main className="main">
        {navigation.isOnGarage ? <Garage /> : null}
        {navigation.isOnWinners ? <Winners /> : null}
      </main>
    </>
  );
});

export default App;
