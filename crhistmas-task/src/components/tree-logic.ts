import { importAll, initialData } from './logic';
import { images } from './Shop/Shop';

export const ItemType = {
  TOY: 'toy',
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

export const createDataForDnd = (favs: number[]) => {
  const shape: DragItemDataInterface = {};
  favs.map((i) => {
    shape[`${i + 1}.png`] = {
      link: images[`${i + 1}.png`].default,
      used: 0,
      available: +initialData[i].count,
      coords: {},
    };
  });
  return shape;
};
