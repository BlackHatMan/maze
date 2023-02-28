import { useState, MouseEvent } from 'react';
import { Area, direction } from './Area';
import { Modal } from './modal/Modal';
import { Cell } from './cell/Cell';

import { FaRegHandPointUp } from 'react-icons/fa';
import { FaRegHandPointDown } from 'react-icons/fa';
import { FaRegHandPointLeft } from 'react-icons/fa';
import { FaRegHandPointRight } from 'react-icons/fa';

import './App.css';

function App() {
  const area = new Area(3);
  const [isOpen, setOpen] = useState(false);
  console.log('App.tsx:26', area);

  const handlerModalClose = () => {
    setOpen((prev) => !prev);
  };

  const renderImage = (direction: direction) => {
    switch (direction) {
      case 'up':
        return <FaRegHandPointUp />;
      case 'down':
        return <FaRegHandPointDown />;
      case 'left':
        return <FaRegHandPointLeft />;
      case 'right':
        return <FaRegHandPointRight />;
    }
  };
  const handler = (value: number[]): void => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="App">
      <div className="container">
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
      <div className="path">
        {area.path.map((el, i) => {
          return <span key={el + i}>{renderImage(el)}</span>;
        })}
      </div>
      <Modal isOpen={isOpen} onClose={handlerModalClose}>
        <p>Goof</p>
      </Modal>
    </div>
  );
}

export default App;
