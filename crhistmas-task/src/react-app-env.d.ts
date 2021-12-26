/// <reference types="react-scripts" />
/// <reference types="webpack-env" />
type ToyFormEng = 'SvgBall' | 'SvgBell' | 'SvgCone' | 'SvgToy' | 'SvgSnowflake';

type ToyForm = 'шар' | 'колокольчик' | 'шишка' | 'фигурка' | 'снежинка';
type ToySize = 'большой' | 'средний' | 'малый';
type ToyColor = 'белый' | 'желтый' | 'красный' | 'синий' | 'зелёный';
type SortValue =
  | 'nameAscending'
  | 'nameDescending'
  | 'yearAscending'
  | 'yearDescending'
  | '';

interface SvgComponentsInterface {
  [svgKey: string]: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

interface SelectOptionInterface {
  value: SortValue;
  label: string;
}
interface ToyItemInterface {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: ToyForm;
  color: ToyColor;
  size: ToySize;
  favorite: boolean;
  // id: number;
}
interface ButtonPropsInterface {
  className: string;
  InnerSvg?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  value?: string;
  InnerElem?: () => JSX.Element;
}

interface FormTypeButtonsInterface extends ButtonPropsInterface {
  className?: string;
  activeFormFilters: string[];
  handleAddFormFilter: (typeForm: ToyForm) => void;
  handleDeleteFormFilter: (typeForm: ToyForm) => void;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}
interface SizeButtonsPropsInterface {
  activeSizeFilters: ToySize[];
  handleAddSizeFilter: (size: ToySize) => void;
  handleDeleteSizeFilter: (size: ToySize) => void;
}

interface ColorButtonsProps {
  activeColorFilters: string[];
  handleAddColorFilter: (color: ToyColor) => void;
  handleDeleteColorFilter: (color: ToyColor) => void;
}

interface ShopPropsInterface extends FilterPropsInterface {
  favourites: number[];
  handleAddFavourite: (indx: number) => void;
  handleRemoveFavourite: (indx: number) => void;
  showFullNotif: boolean;
}

interface FilterPropsInterface {
  activeFormFilters: ToyForm[];
  handleAddFormFilter: (typeForm: ToyForm) => void;
  handleDeleteFormFilter: (typeForm: ToyForm) => void;
  activeColorFilters: ToyColor[];
  handleAddColorFilter: (color: ToyColor) => void;
  handleDeleteColorFilter: (color: ToyColor) => void;
  activeSizeFilters: ToySize[];
  handleAddSizeFilter: (size: ToySize) => void;
  handleDeleteSizeFilter: (size: ToySize) => void;
  onlyFavourite: boolean;
  setOnlyFavourite: React.Dispatch<React.SetStateAction<boolean>>;
  setDefaultFilters: () => void;
  activeSort: SortValue;
  handleSortChange: (sort: SortValue) => void;
  itemCountRange: number[];
  handleCountRangeChange: (range: number[]) => void;
  itemYearRange: number[];
  handleYearRangeChange: (range: number[]) => void;
  handleSearchChange: (search: string) => void;
  toyData: ToyItemInterface[];
}

interface HeaderPropsInterface {
  setIsOnTree: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOnStart: React.Dispatch<React.SetStateAction<boolean>>;
  isOnTree: boolean;
  isOnStart: boolean;
  favourites: number[];
}

interface TreePagePropsInterface {
  handleTreeBgChange: (num: number) => void;
  treeBgIndx: number;
  handleTreePngChange: (num: number) => void;
  treePngIndx: number;
  isSnow: boolean;
  handleSnowChange: () => void;
  favourites: number[];
}
interface CoordDataInterface {
  top: number;
  left: number;
}

interface DragItemInterface {
  link: string;
  used: number;
  available: number;
  coords: CoordinatesInterface;
}

interface DragItemDataInterface {
  [id: string]: DragItemInterface;
}
interface CoordinatesInterface {
  [idx: string]: CoordDataInterface;
}
interface PossibleFormsInterface {
  SvgBall: ToyForm;
  SvgBell: ToyForm;
  SvgCone: ToyForm;
  SvgToy: ToyForm;
  SvgSnowflake: ToyForm;
}
interface PossibleColorsInterface {
  белый: ToyColor;
  желтый: ToyColor;
  красный: ToyColor;
  синий: ToyColor;
  зелёный: ToyColor;
}

interface ContextImageInterface {
  [key: string]: esModuleInterface;
}

interface esModuleInterface {
  default: string;
}

interface ImpoertedDataInterface {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
  id?: number;
}

interface LSDataInterface {
  formFilters: ToyForm[];
  colorFilters: ToyColor[];
  sizeFilters: ToySize[];
  conutRange: number[];
  yearRange: number[];
  isFavourite: boolean;
  favourite: number[];
  sort: SortValue;
}
type DragItem = { name: string; coordIdx: string; isFromTree: boolean };
type SaveToLSFunc = (states: LSDataInterface) => void;
