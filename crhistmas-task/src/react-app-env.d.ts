/// <reference types="react-scripts" />

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

interface ShopPropsInterface extends FilterPropsInterface {}

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
  saveFilters: () => void;
  activeSort: SortValue;
  handleSortChange: (sort: SortValue) => void;
  itemCountRange: number[];
  handleCountRangeChange: (range: number[]) => void;
  itemYearRange: number[];
  handleYearRangeChange: (range: number[]) => void;
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
