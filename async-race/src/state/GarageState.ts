import { makeAutoObservable } from 'mobx';
import { getCarsOnPage, addNewCar, deleteCar } from '../utility/api';

class Garage {
  cars: CarInterface[] = [];
  currentPage = 1;
  totalCount: string = '';

  createName: string = '';
  createColor: string = '';

  updateName: string = '';
  updateColor: string = '';

  constructor() {
    makeAutoObservable(this);
    this.getCars();
  }

  getCars() {
    getCarsOnPage(this.currentPage).then((data) => {
      if (data?.cars && data?.totalCars) {
        this.cars = data.cars;
        this.totalCount = data.totalCars;
      }
    });
  }

  async createCar() {
    await addNewCar({ name: this.createName, color: this.createColor });
    this.getCars();
  }

  handleNameChange(name: string) {
    this.createName = name;
  }
  handleColorChange(e: React.FormEvent<HTMLInputElement>) {
    this.createColor = (e.target as HTMLInputElement).value;
  }

  async deleteCar(id: number) {
    await deleteCar(id);
    this.getCars();
  }
}

export default new Garage();
