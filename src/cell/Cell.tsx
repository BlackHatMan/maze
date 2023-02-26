import { FC } from 'react';
import './cell.css';

export const Cell: FC<{ children: any }> = ({ children }) => {
  return <div className="cell">{children}</div>;
};
