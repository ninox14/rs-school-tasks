import { FC, useEffect, useState } from 'react';

import { ReactComponent as CarSvg } from '../../assets/car.svg';
import { getCar } from '../../utility/api';

interface WinnerPropsInterface extends WinnerResponseInterface {
  number: number;
}

export const Winner: FC<WinnerPropsInterface> = ({
  number,
  id,
  time,
  wins,
}) => {
  // {
  //   id: 0,
  //   name: '',
  //   color: '',
  // }
  const [carData, setCarData] = useState<CarInterface | null>(null);
  useEffect(() => {
    const getWinnerCarData = async () => {
      const data = await getCar(id);
      if (data) {
        setCarData(data);
      }
    };
    getWinnerCarData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <tr>
      <td>{number}</td>
      <td>
        <CarSvg width={40} height={15} fill={carData ? carData.color : ''} />
      </td>
      <td>{carData ? carData.name : ''}</td>
      <td>{wins}</td>
      <td>{time.toFixed(3)}</td>
    </tr>
  );
};
