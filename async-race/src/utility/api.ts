import axios from 'axios';
import { generateRandomCar } from './utility';

// axios.defaults.baseURL = 'https://ninox-race-api.herokuapp.com/';
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.timeout = 5000;

export const CAR_PAGE_LIMIT = 7;
export const WINNERS_PAGE_LIMIT = 10;
const TOTAL_COUNT_KEY = 'x-total-count';
const GARAGE_ENDPOINT = '/garage';
const ENGINE_ENDPOINT = '/engine';
const WINNERS_ENDPOINT = '/winners';

export const getCarsOnPage = async (page: number) => {
  try {
    const data = await axios.get<CarInterface[]>(GARAGE_ENDPOINT, {
      params: {
        _page: page,
        _limit: CAR_PAGE_LIMIT,
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

export const getCar = async (id: number) => {
  try {
    const endpoint = `${GARAGE_ENDPOINT}/${id}`;
    const data = await axios
      .get<CarInterface>(endpoint)
      .then((resp) => resp.data);
    return data;
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
    const response = await axios.delete<Record<string, unknown>>(endpoint);
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

export const patchEngineRequest = async (
  id: number,
  query: EngineQuery,
  timeout?: number
) => {
  const response = await axios.patch<EngineResponseInterface>(
    ENGINE_ENDPOINT,
    undefined,
    {
      params: {
        id,
        status: query,
      },
      timeout: timeout ? timeout + 5000 : 10000,
    }
  );

  return response;
};

export const getWinner = async (
  id: number
): Promise<WinnerResponseInterface> => {
  try {
    const endpoint = `${WINNERS_ENDPOINT}/${id}`;
    const response = await axios
      .get<WinnerResponseInterface>(endpoint)
      .then((data) => data.data);
    return response;
  } catch (err) {
    return {
      id: id,
      wins: 0,
      time: Infinity,
    };
  }
};

export const updateWinner = async ({
  id,
  time,
  wins,
}: WinnerResponseInterface) => {
  try {
    const endpoint = `${WINNERS_ENDPOINT}/${id}`;
    const response = await axios.put(endpoint, { time, wins });
    return response;
  } catch (err) {
    const response = await axios.post(WINNERS_ENDPOINT, { id, time, wins });
    return response;
  }
};

export const getWinnersOnPage = async ({
  page,
  sortBy,
  order,
}: FetchWinnersArgumentsInterface) => {
  try {
    const data = await axios.get<WinnerResponseInterface[]>(WINNERS_ENDPOINT, {
      params: {
        _page: page,
        _limit: WINNERS_PAGE_LIMIT,
        _sort: sortBy,
        _order: order,
      },
    });

    return {
      winners: data.data,
      totalWinners: data.headers[TOTAL_COUNT_KEY],
    };
  } catch (err) {
    console.error(err);
  }
};

export const deleteWinner = async (id: number) => {
  try {
    const endpoint = `${WINNERS_ENDPOINT}/${id}`;
    const response = await axios.delete(endpoint);
    return response;
  } catch (err) {
    // console.error(err);
  }
};

export const deletAll = async () => {
  try {
    const endpoint = '/delete/all';
    const response = await axios.delete(endpoint);
    return response;
  } catch (err) {
    console.error(err);
  }
};
