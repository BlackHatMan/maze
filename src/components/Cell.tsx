import { FaFlagCheckered } from 'react-icons/fa';
import { FC } from 'react';

export const Cell: FC<{
  value: number[];
  onCheck: (value: number[]) => void;
  start: number[];
  finish: number[];
}> = ({ value, start, finish, onCheck }) => {
  const flagStart = value.toString() === start.toString();
  const flagFinish = value.toString() === finish.toString();

  return (
    <div className="cell" onClick={() => onCheck(value)}>
      {flagStart && <FaFlagCheckered size={40} color="green" />}
      {flagFinish && <FaFlagCheckered size={40} color="red" />}
    </div>
  );
};
