import { makeAutoObservable } from 'mobx';
import { getCarsOnPage, addNewCar, deleteCar, updateCar } from '../utility/api';

class Garage {
  cars: CarInterface[] = [];
  currentPage = 1;
  totalCount: string = '';

  createName: string = '';
  createColor: string = '';

  updateCarId: number | null = null;
  updateName: string = '';
  updateColor: string = '';

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
    console.log('selected ', this.updateColor);
  }

  getCars() {
    getCarsOnPage(this.currentPage).then((data) => {
      if (data?.cars && data?.totalCars) {
        this.cars = data.cars;
        this.totalCount = data.totalCars;
      } else {
        throw new Error('There is no data in response');
      }
    });
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
}

export default new Garage();
