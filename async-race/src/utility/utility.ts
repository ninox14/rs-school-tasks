import { brandsCars } from '../assets/carBrands';
import { modelsCars } from '../assets/carModels';

const MAX_COLOR_NUM = 16777214;
const HEX_RADIX = 16;

export const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const getRandomCarName = () => {
  return `${brandsCars[getRandomNumber(brandsCars.length)]} ${
    modelsCars[getRandomNumber(modelsCars.length)]
  }`;
};

export const getRandomCarColor = () => {
  const color = `#${getRandomNumber(MAX_COLOR_NUM).toString(HEX_RADIX)}`;
  return color.length < 7 ? color.padEnd(7, '0') : color;
};

export const generateRandomCar = (): CreateCarDTO => {
  return {
    name: getRandomCarName(),
    color: getRandomCarColor(),
  };
};
