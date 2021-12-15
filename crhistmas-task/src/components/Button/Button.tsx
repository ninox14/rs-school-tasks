import { FC } from 'react';

export const Button: FC<ButtonPropsInterface> = ({
  className,
  InnerSvg,
  onClick = () => {},
}) => (
  <button className={className} onClick={onClick}>
    {InnerSvg ? <InnerSvg /> : null}
  </button>
);
