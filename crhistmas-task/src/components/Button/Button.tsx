import { FC } from 'react';

export const Button: FC<ButtonPropsInterface> = ({
  className,
  InnerSvg,
  onClick = () => {},
  InnerElem,
}) => (
  <button className={className} onClick={onClick}>
    {InnerSvg ? <InnerSvg /> : null}
    {InnerElem ? <InnerElem /> : null}
  </button>
);
