/// <reference types="react-scripts" />

// import { SVGProps } from 'react';

interface SelectOptionInterface {
  value: string;
  label: string;
}

interface ButtonPropsInterface {
  className: string;
  InnerSvg?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value?: string;
}

interface FormTypeButtonsInterface extends ButtonPropsInterface {
  className?: string;
  callback: (e: React.MouseEvent<HTMLButtonElement>, key: string) => void;
}

interface SvgComponentsInterface {
  [svgKey: string]: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

enum ToyFormEnum {
  SvgBall = 'ball',
  SvgBell = 'bell',
  SvgCone = 'cone',
  SvgToy = 'toy',
  SvgSnowflake = 'snow',
}

type ToyForm = 'SvgBall' | 'SvgBell' | 'SvgCone' | 'SvgToy' | 'SvgSnowflake';
