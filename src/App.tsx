import { useState } from 'react';
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
  const onClose = () => {
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
  return (
    <div className="App">
      <div className="container" onClick={() => setOpen((prev) => !prev)}>
        {area.matrix.map((row, indexRow) => {
          return (
            <div className="row" key={indexRow}>
              {row.map((cell, indexCell) => {
                return <Cell key={indexCell + indexRow}>{cell}</Cell>;
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <p>Goof</p>
      </Modal>
    </div>
  );
}

export default App;
