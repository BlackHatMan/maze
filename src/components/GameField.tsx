import { FC } from 'react';
import { IArea } from '../Area';
import { Cell } from './Cell';
import './GameField.css';

export const GameField: FC<{ area: IArea; checked: boolean; onCheck: (value: number[]) => void }> = ({
  area,
  onCheck,
  checked,
}) => {
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
                  finish={checked ? area.getFinish : []}
                  value={valueCell}
                  onCheck={onCheck}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
