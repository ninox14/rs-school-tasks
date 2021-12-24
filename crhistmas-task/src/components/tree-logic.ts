import { importAll } from './logic';

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
