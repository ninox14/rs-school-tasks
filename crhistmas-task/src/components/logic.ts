// import React from 'react';
import data from '../data';

const initialData = data as ToyItemInterface[];
// const initialData = setInitialData(data);
const LS_SUFFIX = 'Saved';

const YEAR_RANGE_KEY: keyof ToyItemInterface = 'year';
const COUNT_RANGE_KEY: keyof ToyItemInterface = 'count';
const FAVOURITE_KEY: keyof ToyItemInterface = 'favorite';
const NUM_KEY: keyof ToyItemInterface = 'num';
const NAME_KEY: keyof ToyItemInterface = 'name';

export const possibleColors: ToyColor[] = [
  'белый',
  'желтый',
  'красный',
  'синий',
  'зелёный',
];
const possibleForms: ToyForm[] = [
  'колокольчик',
  'снежинка',
  'фигурка',
  'шар',
  'шишка',
];
export const possibleSizes: ToySize[] = ['большой', 'средний', 'малый'];

export const [itemCountMin, itemCountMax] = getItemsRanges('count');
export const [itemYearMin, itemYearMax] = getItemsRanges('year');

export const getData = (
  formFilters: ToyForm[],
  colorFilters: ToyColor[],
  sizeFilters: ToySize[],
  conutRange: number[],
  yearRange: number[],
  isFavourite: boolean
) => {
  const valuesArr: (ToyForm | ToyColor | ToySize)[] = [];
  const isInRange = (range: number[], value: number) =>
    value > range[0] && value < range[1];

  formFilters.length
    ? valuesArr.push(...formFilters)
    : valuesArr.push(...possibleForms);
  colorFilters.length
    ? valuesArr.push(...colorFilters)
    : valuesArr.push(...possibleColors);
  sizeFilters.length
    ? valuesArr.push(...sizeFilters)
    : valuesArr.push(...possibleSizes);

  return initialData.filter((item) =>
    (Object.keys(item) as Array<keyof ToyItemInterface>).every((key) => {
      if (key === NUM_KEY || key === NAME_KEY) {
        return true;
      } else if (key === YEAR_RANGE_KEY) {
        return isInRange(yearRange, +item[key]);
      } else if (key === COUNT_RANGE_KEY) {
        return isInRange(conutRange, +item[key]);
      } else if (key === FAVOURITE_KEY) {
        return isFavourite ? item[key] : true;
      } else return valuesArr.includes(item[key]);
    })
  );
};

export function getItemsRanges(key: keyof ToyItemInterface): number[] {
  const lsItem = localStorage.getItem(key + LS_SUFFIX);
  if (!lsItem) {
    const [min, max] = [getMinByKey(key), getMaxByKey(key)];
    localStorage.setItem(key + LS_SUFFIX, JSON.stringify([min, max]));
    return [min, max];
  } else {
    return JSON.parse(lsItem);
  }
}

function getMinByKey(key: keyof ToyItemInterface) {
  let min = Infinity;
  for (let item of initialData) {
    if (+item[key] < min) {
      min = +item[key];
    }
  }
  return min;
}
function getMaxByKey(key: keyof ToyItemInterface) {
  let max = -Infinity;
  for (let item of initialData) {
    if (+item[key] > max) {
      max = +item[key];
    }
  }
  return max;
}
function setInitialData(data: ImpoertedDataInterface[]) {
  const morped = data.map((toy, indx) => {
    toy.id = indx;
    return toy;
  }) as ToyItemInterface[];
  return morped;
}

export function importAll(r: __WebpackModuleApi.RequireContext) {
  let images: ContextImageInterface = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}
