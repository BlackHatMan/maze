import { FC } from 'react';
import { IArea } from '../Area';
import { Cell } from './Cell';
import './gameField.css';

export const GameField: FC<{ area: IArea }> = ({ area }) => {
  const handler = () => {};
  return (
    <div className="field">
      {area.matrix.map((row, idxRow) => {
        return (
          <div className="row" key={idxRow}>
            {row.map((valueCell, idxCell) => {
              return (
                <Cell
                  key={idxCell + idxRow}
                  start={area.getStart}
                  finish={area.getFinish}
                  value={valueCell}
                  handlerCheck={handler}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
