import './Winners.scss';

import winnersS from '../../state/WinnersState';

import { Winner } from '../Winner/Winner';
import { WINNERS_PAGE_LIMIT } from '../../utility/api';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { Button } from '../Button/Button';

export const Winners: FC<Record<string, unknown>> = observer(() => {
  return (
    <div className="winners">
      <h2 className="winners-title">Winners {winnersS.totalCount}</h2>
      <h3 className="winners-page">Page #{winnersS.currentPage}</h3>
      <table className="winners-table">
        <tbody>
          <tr>
            <th>№</th>
            <th>Car</th>
            <th>Name</th>
            <th
              className="clickable"
              onClick={() => winnersS.handleWinsSortChange()}
            >
              Wins{' '}
              {winnersS.sortBy === 'wins'
                ? winnersS.sortOrder === 'ASC'
                  ? '👇'
                  : '☝'
                : ''}
            </th>
            <th
              className="clickable"
              onClick={() => winnersS.handleTimeSortChange()}
            >
              Best time (s){' '}
              {winnersS.sortBy === 'time'
                ? winnersS.sortOrder === 'ASC'
                  ? '☝'
                  : '👇'
                : ''}
            </th>
          </tr>
          {winnersS.winners.map((i, idx) => {
            const numberInTable =
              (winnersS.maxPages - 1) * WINNERS_PAGE_LIMIT + idx + 1;
            return (
              <Winner
                key={i.id}
                id={i.id}
                number={numberInTable}
                wins={i.wins}
                time={i.time}
              />
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <Button
          label="< prev"
          className="pagination_btn"
          onClick={() => winnersS.handlePagePrevChange()}
          disabled={winnersS.maxPages === 1}
        />
        <Button
          label="Next >"
          className="pagination_btn"
          onClick={() => winnersS.handlePageNextChange()}
          disabled={winnersS.maxPages === 1}
        />
      </div>
    </div>
  );
});
