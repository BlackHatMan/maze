import './App.css';
import { Cell } from './cell/Cell';
import { Area } from './Area';
import { useState } from 'react';
import { Modal } from './modal/Modal';

function App() {
  const area = new Area(3);
  const [isOpen, setOpen] = useState(false);
  console.log('App.tsx:26', area);
  const onClose = () => {
    setOpen((prev) => !prev);
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
          return <span key={el + i}>{el}</span>;
        })}
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <p>lox</p>
      </Modal>
    </div>
  );
}

export default App;
