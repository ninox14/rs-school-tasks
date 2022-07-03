import { FC } from 'react';

interface LightsProps {
  widthL: number;
  amount: number;
  color: string;
}

export const TreeLights: FC<LightsProps> = ({ widthL, amount, color }) => {
  let radius = 64;
  return (
    <ul className="lightrope" style={{ width: widthL, height: widthL }}>
      {[...Array(amount)].map((_, i) => {
        const translate = `rotate(${radius}deg) translate(${
          widthL / 2
        }px) rotate(-${radius}deg)`;
        radius += Math.round(60 / amount);
        return (
          <li className={color} style={{ transform: translate }} key={i}></li>
        );
      })}
    </ul>
  );
};
