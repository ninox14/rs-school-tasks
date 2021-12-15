/// <reference types="react-scripts" />

// import { SVGProps } from 'react';

interface SelectOptionInterface {
  value: string;
  label: string;
}

interface ButtonPropsInterface {
  className: string;
  InnerSvg?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  value?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

interface FormTypeButtonsInterface extends ButtonPropsInterface {
  className?: string;
  activeFormFilters: string[];
  handleAddFormFilter: (typeForm: string) => void;
  handleDeleteFormFilter: (typeForm: string) => void;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

interface SvgComponentsInterface {
  [svgKey: string]: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

/* enum ToyFormEnum {
  SvgBall = 'ball',
  SvgBell = 'bell',
  SvgCone = 'cone',
  SvgToy = 'toy',
  SvgSnowflake = 'snow',
} */

type ToyForm = 'SvgBall' | 'SvgBell' | 'SvgCone' | 'SvgToy' | 'SvgSnowflake';

interface ToyItemInterface {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
}
