import { FaFlagCheckered } from 'react-icons/fa';
import { FC } from 'react';

export const Cell: FC<{
  value: number[];
  handlerCheck: (value: number[]) => void;
  start: number[];
  finish: number[];
}> = ({ value, start, finish, handlerCheck }) => {
  const flagStart = value.toString() === start.toString();
  const flagFinish = value.toString() === finish.toString();

  return (
    <div className="cell" onClick={() => handlerCheck(value)}>
      {flagStart && <FaFlagCheckered size={40} color="green" />}
      {flagFinish && <FaFlagCheckered size={40} color="red" />}
      {value.toString()}
    </div>
  );
};
