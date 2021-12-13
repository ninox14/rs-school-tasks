import { FC } from 'react';

export const Button: FC<ButtonPropsInterface> = ({
  className,
  InnerSvg,
  callback,
}) => (
  <button className={className} onClick={callback}>
    {InnerSvg ? <InnerSvg /> : null}
  </button>
);
