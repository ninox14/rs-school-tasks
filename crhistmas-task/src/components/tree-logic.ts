import { importAll, initialData } from './logic';
import { images } from './Shop/Shop';

export const ItemType = {
  TOY: 'toy',
};
export const POSSIBLE_LIGHTS: PossibleLights[] = [
  'multicolor',
  'red',
  'blue',
  'green',
  'yellow',
];
const LS_TREE_DATA_KEY = 'TreeSaved';
export const DEFAULT_TREE_DATA: TreeLSDataInterface = {
  isLights: false,
  isPlaying: false,
  isSnow: false,
  lightsColor: 'multicolor',
  treeBgIndx: 0,
  treePngIndx: 0,
};
const treeBgsImport = importAll(
  require.context('../assets/bg', false, /\.(png|jpe?g|svg)$/)
);
const treePngsImport = importAll(
  require.context('../assets/tree', false, /\.(png|jpe?g|svg)$/)
);
export const treeBgsArr = Object.keys(treeBgsImport).map((i, indx) => {
  return {
    id: indx,
    link: treeBgsImport[i].default,
  };
});
export const treePngArr = Object.keys(treePngsImport).map((i, indx) => {
  return {
    id: indx,
    link: treePngsImport[i].default,
  };
});

const fillEmptyFavs = (favs: number[]) => {
  const result = [...favs];
  let idx = 0;
  while (result.length < 20) {
    if (!result.includes(idx)) {
      result.push(idx);
    } else {
      idx++;
    }
  }
  return result;
};

export const createDataForDnd = (favs: number[]) => {
  const favourites = favs.length < 20 ? fillEmptyFavs(favs) : favs;
  console.log(favourites);
  const shape: DragItemDataInterface = {};
  // eslint-disable-next-line array-callback-return
  favourites.map((i) => {
    shape[`${i + 1}.png`] = {
      link: images[`${i + 1}.png`].default,
      used: 0,
      available: +initialData[i].count,
      coords: {},
    };
  });
  console.log(shape);
  return shape;
};

export const saveTreeDataToLs: SaveToLSTreeData = (obj) => {
  localStorage.setItem(LS_TREE_DATA_KEY, JSON.stringify(obj));
};

export const retrieveTreeDataFromLS = () => {
  const data = localStorage.getItem(LS_TREE_DATA_KEY);
  return data ? (JSON.parse(data) as TreeLSDataInterface) : DEFAULT_TREE_DATA;
};
