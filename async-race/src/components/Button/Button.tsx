import { FC } from 'react';
import './Button.scss';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
  // onClick: () => void;
}

export const Button: FC<ButtonProps> = ({
  className,
  onClick,
  label,
  ...props
}) => (
  <button className={`${className} button`} onClick={onClick} {...props}>
    {label}
  </button>
);
