/* eslint-disable array-callback-return */
import data from '../data';

export const initialData = data as ToyItemInterface[];

const LS_SUFFIX = 'Saved';

const YEAR_RANGE_KEY: keyof ToyItemInterface = 'year';
const COUNT_RANGE_KEY: keyof ToyItemInterface = 'count';
const FAVOURITE_KEY: keyof ToyItemInterface = 'favorite';
const NUM_KEY: keyof ToyItemInterface = 'num';
const NAME_KEY: keyof ToyItemInterface = 'name';

const FAVOURITE_STORAGE_NAME = 'favourite' + LS_SUFFIX;
const [
  LS_FORM_KEY,
  LS_COLOR_KEY,
  LS_SIZE_KEY,
  LS_COUNT_KEY,
  LS_YEAR_KEY,
  LS_IS_FAVOURITE_KEY,
  LS_FAVOURITES_KEY,
  LS_SORT_KEY,
] = [
  'formFilters' + LS_SUFFIX,
  'colorFilters' + LS_SUFFIX,
  'sizeFilters' + LS_SUFFIX,
  'conutRange' + LS_SUFFIX,
  'yearRange' + LS_SUFFIX,
  'isFavourite' + LS_SUFFIX,
  'favourite' + LS_SUFFIX,
  'sort' + LS_SUFFIX,
];

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

export const DEFAULT_FILTERS: LSDataInterface = {
  formFilters: [],
  colorFilters: [],
  sizeFilters: [],
  conutRange: [itemCountMin, itemCountMax],
  yearRange: [itemYearMin, itemYearMax],
  isFavourite: false,
  favourite: getFavouriteState(),
  sort: '',
};

export const getData = (
  formFilters: ToyForm[],
  colorFilters: ToyColor[],
  sizeFilters: ToySize[],
  conutRange: number[],
  yearRange: number[],
  isFavourite: boolean,
  favourites: number[]
) => {
  const valuesArr: (ToyForm | ToyColor | ToySize)[] = [];

  const isInRange = (range: number[], value: number) =>
    value >= range[0] && value <= range[1];

  // const data = prepareData(initialData, favourites);

  formFilters.length
    ? valuesArr.push(...formFilters)
    : valuesArr.push(...possibleForms);
  colorFilters.length
    ? valuesArr.push(...colorFilters)
    : valuesArr.push(...possibleColors);
  sizeFilters.length
    ? valuesArr.push(...sizeFilters)
    : valuesArr.push(...possibleSizes);

  return initialData.filter((item, dIndex) =>
    (Object.keys(item) as Array<keyof ToyItemInterface>).every((key) => {
      if (key === NUM_KEY || key === NAME_KEY) {
        return true;
      } else if (key === YEAR_RANGE_KEY) {
        return isInRange(yearRange, +item[key]);
      } else if (key === COUNT_RANGE_KEY) {
        return isInRange(conutRange, +item[key]);
      } else if (key === FAVOURITE_KEY) {
        return isFavourite ? favourites.includes(dIndex) : true;
      } else return valuesArr.includes(item[key]);
    })
  );
};

export const saveToLocalStorage: SaveToLSFunc = (statesObj) => {
  (Object.keys(statesObj) as (keyof LSDataInterface)[]).map((key) => {
    localStorage[key + LS_SUFFIX] = JSON.stringify(statesObj[key]);
  });
};
export const getSavedFilters = (): LSDataInterface => {
  const isAnySaved = localStorage.getItem(FAVOURITE_STORAGE_NAME);
  if (!isAnySaved) {
    return DEFAULT_FILTERS;
  } else {
    return {
      formFilters: JSON.parse(localStorage[LS_FORM_KEY]),
      colorFilters: JSON.parse(localStorage[LS_COLOR_KEY]),
      sizeFilters: JSON.parse(localStorage[LS_SIZE_KEY]),
      conutRange: JSON.parse(localStorage[LS_COUNT_KEY]),
      yearRange: JSON.parse(localStorage[LS_YEAR_KEY]),
      isFavourite: JSON.parse(localStorage[LS_IS_FAVOURITE_KEY]),
      favourite: JSON.parse(localStorage[LS_FAVOURITES_KEY]),
      sort: JSON.parse(localStorage[LS_SORT_KEY]),
    };
  }
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

export function importAll(r: __WebpackModuleApi.RequireContext) {
  let images: ContextImageInterface = {};
  r.keys().map((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

export function getFavouriteState() {
  // debugger;
  const lsFavourite = localStorage.getItem(FAVOURITE_STORAGE_NAME);

  if (!lsFavourite) {
    const favouriteState: number[] = [];
    initialData.map((toy, indx) => {
      if (toy.favorite) {
        favouriteState.push(indx);
      }
    });
    return favouriteState;
  } else {
    return JSON.parse(lsFavourite) as number[];
  }
}

export const sortData = (data: ToyItemInterface[], sort: SortValue) => {
  switch (sort) {
    case 'yearAscending':
      return data.sort((a, b) => +a.year - +b.year);
    case 'yearDescending':
      return data.sort((a, b) => +b.year - +a.year);
    case 'nameAscending':
      return data.sort((a, b) => a.name.localeCompare(b.name));
    case 'nameDescending':
      return data.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return data;
  }
};

export const searchData = (data: ToyItemInterface[], activeSearch: string) => {
  if (activeSearch.length) {
    return data.filter((i) =>
      i.name.toLowerCase().includes(activeSearch.toLowerCase())
    );
  } else {
    return data;
  }
};
