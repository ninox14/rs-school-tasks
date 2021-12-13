import { FC } from 'react';
import { ButtonPropsInterface } from '../../react-app-env';

export const Button: FC<ButtonPropsInterface> = ({ className, InnerSvg }) => (
  <button className={className}>{InnerSvg ? <InnerSvg /> : null}</button>
);
