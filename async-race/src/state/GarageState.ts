import { runInAction, makeAutoObservable } from 'mobx';

import winnerS from './WinnersState';

import {
  getCarsOnPage,
  addNewCar,
  deleteCar,
  updateCar,
  generateCars,
  PAGE_LIMIT,
  patchEngineRequest,
} from '../utility/api';
class Garage {
  cars: GarageCarInterface[] = [];
  currentPage = 1;
  totalCount: string = '';
  maxPages = 1;

  createName: string = '';
  createColor: string = '';

  updateCarId: number | null = null;
  updateName: string = '';
  updateColor: string = '';

  isGenerationInProgress = false;

  isRaceInProgress = false;

  currentWinner: WinnerDTO | null = null;

  constructor() {
    makeAutoObservable(this);
    this.getCars();
  }

  handleCreateNameChange(name: string) {
    this.createName = name;
  }

  handleCreateColorChange(e: React.FormEvent<HTMLInputElement>) {
    this.createColor = (e.target as HTMLInputElement).value;
  }

  handleUpdateNameChange(name: string) {
    this.updateName = name;
  }

  handleUpdateColorChange(ref: HTMLInputElement) {
    // console.log(ref);
    // this.updateColor = e.currentTarget.value;
    // this.updateColor = (e.target as HTMLInputElement).value;
    this.updateColor = ref.value;
    console.log('Changed to ', this.updateColor);
  }

  handleSelectCar({ id, name, color }: CarInterface) {
    this.updateCarId = id;
    this.updateName = name;
    this.updateColor = color;
  }

  handlePageNextChange() {
    const nextPage = this.currentPage + 1;
    this.currentPage = nextPage > this.maxPages ? 1 : nextPage;
    this.getCars();
  }

  handlePagePrevChange() {
    const nextPage = this.currentPage - 1;
    this.currentPage = !nextPage ? this.maxPages : nextPage;
    this.getCars();
  }

  handleStartRace() {
    this.isRaceInProgress = true;
    this.cars.forEach(async (i) => {
      await patchEngineRequest(i.id, 'started').then((resp) => {
        if (resp.data) {
          runInAction(
            () => (i.animationTime = resp.data.distance / resp.data.velocity)
          );
        }
      });
      try {
        const resp = await patchEngineRequest(i.id, 'drive', i.animationTime);
        if (!this.currentWinner && this.isRaceInProgress) {
          runInAction(() => {
            this.currentWinner = { id: i.id, time: i.animationTime as number };
          });
          await winnerS.handleNewWinner(
            i.id,
            (i.animationTime as number) / 1000
          );
        }
      } catch (err) {
        runInAction(() => (i.isInPause = true));
      }
    });
  }

  handleResetRace() {
    if (this.isRaceInProgress) {
      this.cars.forEach(async (i) => {
        runInAction(() => (i.isInPause = true));
        const response = await patchEngineRequest(i.id, 'stopped');
        console.log(response);
        runInAction(() => {
          i.animationTime = undefined;
          i.isInPause = false;
        });
      });
      runInAction(() => {
        this.isRaceInProgress = false;
        this.currentWinner = null;
      });
    }
  }

  getCars() {
    getCarsOnPage(this.currentPage)
      .then((data) => {
        if (data?.cars && data?.totalCars) {
          runInAction(() => {
            this.cars = data.cars;
            this.totalCount = data.totalCars;
            this.maxPages = Math.ceil(+data.totalCars / PAGE_LIMIT);
          });
        } else {
          throw new Error('There is no data in response');
        }
      })
      .catch((err) => console.error(err));
  }

  async createCar() {
    await addNewCar({ name: this.createName, color: this.createColor });
    this.getCars();
  }

  async deleteCar(id: number) {
    await deleteCar(id);
    this.getCars();
  }

  async updateCar() {
    if (!this.updateCarId) {
      throw new Error('There is no car selected!');
    }
    await updateCar({
      id: this.updateCarId,
      name: this.updateName,
      color: this.updateColor,
    });
    this.updateCarId = null;
    this.updateColor = '';
    this.updateName = '';
    this.getCars();
  }

  async generateCars() {
    this.isGenerationInProgress = true;
    await generateCars();
    this.getCars();
    this.isGenerationInProgress = false;
  }
}

export default new Garage();
