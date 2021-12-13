/// <reference types="react-scripts" />
/// <reference types="../react-app-env.d.ts"/>
interface SelectOptionInterface {
  value: string;
  label: string;
}

interface ButtonPropsInterface {
  className: string;
  InnerSvg?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  // callback: (e: Mo
  value: ToyFormEnum[];
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
