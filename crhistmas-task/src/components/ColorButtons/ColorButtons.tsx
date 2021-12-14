import { FC } from 'react';
import { Button } from '../Button/Button';
import { colorButtonCallback } from '../logic';
import './ColorButtons.scss';

export const possibleColors = ['white', 'yellow', 'red', 'blue', 'green'];

export const ColorButtons: FC<{}> = ({}) => (
  <>
    {possibleColors.map((color) => {
      return (
        <Button
          className={'color-button ' + color}
          key={color}
          callback={(e) => {
            colorButtonCallback(e);
          }}
        />
      );
    })}
  </>
);
