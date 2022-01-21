import { makeAutoObservable } from 'mobx';
import { getWinner, updateWinner } from '../utility/api';

class Winners {
  winners: WinnerResponseInterface[] = [];

  currentPage = 1;

  maxPages = 1;

  constructor() {
    makeAutoObservable(this);
  }

  async handleNewWinner(id: number, time: number) {
    const winnerObj = await getWinner(id);
    const updatedWinner: WinnerResponseInterface = {
      id,
      time: winnerObj.time < time ? winnerObj.time : time,
      wins: winnerObj.wins + 1,
    };
    await updateWinner(updatedWinner);
  }
}

export default new Winners();
