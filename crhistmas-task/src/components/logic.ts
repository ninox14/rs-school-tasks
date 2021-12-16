// import React from 'react';
import data from '../data';

const initialData = data as ToyItemInterface[];

const LS_SUFFIX = 'Saved';

export const [itemCountMin, itemCountMax] = getItemsRanges('count');
export const [itemYearMin, itemYearMax] = getItemsRanges('year');

export const getData = () => {
  return initialData;
};
console.log([itemCountMin, itemCountMax]);
console.log([itemYearMin, itemYearMax]);
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
