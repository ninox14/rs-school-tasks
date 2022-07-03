import { makeAutoObservable, runInAction } from 'mobx';
import {
  deleteWinner,
  getWinner,
  getWinnersOnPage,
  updateWinner,
  WINNERS_PAGE_LIMIT,
} from '../utility/api';

class Winners {
  winners: WinnerResponseInterface[] = [];
  totalCount = '';
  currentPage = 1;
  maxPages = 1;

  sortBy: Sort = 'id';
  sortOrder: Order = 'ASC';

  constructor() {
    makeAutoObservable(this);
    this.getWinners();
  }

  getWinners() {
    getWinnersOnPage({
      page: this.currentPage,
      sortBy: this.sortBy,
      order: this.sortOrder,
    }).then((data) => {
      if (data?.totalWinners && data.winners) {
        runInAction(() => {
          this.winners = data.winners;
          this.totalCount = data.totalWinners;
          this.maxPages = Math.ceil(+data.totalWinners / WINNERS_PAGE_LIMIT);
        });
      } else {
        throw new Error('There is no data in response');
      }
    });
  }

  async handleNewWinner(id: number, time: number) {
    const winnerObj = await getWinner(id);
    const updatedWinner: WinnerResponseInterface = {
      id,
      time: winnerObj.time < time ? winnerObj.time : time,
      wins: winnerObj.wins + 1,
    };
    await updateWinner(updatedWinner);
    this.getWinners();
  }

  async deleteWinner(id: number) {
    await deleteWinner(id);
    this.getWinners();
  }

  handleWinsSortChange() {
    this.sortBy = 'wins';
    this.sortOrder = this.sortOrder === 'ASC' ? 'DESC' : 'ASC';
    this.getWinners();
  }

  handleTimeSortChange() {
    this.sortBy = 'time';
    this.sortOrder = this.sortOrder === 'ASC' ? 'DESC' : 'ASC';
    this.getWinners();
  }

  handlePageNextChange() {
    const nextPage = this.currentPage + 1;
    this.currentPage = nextPage > this.maxPages ? 1 : nextPage;
    this.getWinners();
  }

  handlePagePrevChange() {
    const nextPage = this.currentPage - 1;
    this.currentPage = !nextPage ? this.maxPages : nextPage;
    this.getWinners();
  }
}

export default new Winners();
