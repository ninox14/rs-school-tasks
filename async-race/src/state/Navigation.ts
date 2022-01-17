import { makeAutoObservable } from 'mobx';

class Navigation {
  isOnGarage = true;
  isOnWinners = false;
  constructor() {
    makeAutoObservable(this);
  }

  goToGarage() {
    this.isOnGarage = true;
    this.isOnWinners = false;
  }
  goToWinners() {
    this.isOnGarage = false;
    this.isOnWinners = true;
  }
}

export default new Navigation();
