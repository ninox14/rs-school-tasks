import axios from 'axios';
import { generateRandomCar } from './utility';

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.timeout = 5000;

const PAGE_LIMIT = 7;
const TOTAL_COUNT_KEY = 'x-total-count';
const GARAGE_ENDPOINT = '/garage';

export const getCarsOnPage = async (page: number) => {
  try {
    const data = await axios.get<CarInterface[]>(GARAGE_ENDPOINT, {
      params: {
        _page: page,
        _limit: PAGE_LIMIT,
      },
    });

    return {
      cars: data.data,
      totalCars: data.headers[TOTAL_COUNT_KEY],
    };
  } catch (err) {
    console.error(err);
  }
};

export const addNewCar = async (carDto: CreateCarDTO) => {
  try {
    const response = await axios.post<CarInterface>(GARAGE_ENDPOINT, carDto);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const deleteCar = async (id: number) => {
  try {
    const endpoint = `${GARAGE_ENDPOINT}/${id}`;
    const response = await axios.delete<{}>(endpoint);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const updateCar = async ({ id, name, color }: CarInterface) => {
  try {
    const endpoint = `${GARAGE_ENDPOINT}/${id}`;
    const response = await axios.put(endpoint, { name, color });
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const generateCars = async () => {
  try {
    const promises = [];
    for (let i = 0; i < 100; i += 1) {
      const car = generateRandomCar();
      promises.push(addNewCar(car));
    }
    const response = await Promise.all(promises);
    return response;
  } catch (err) {
    console.error(err);
  }
};
