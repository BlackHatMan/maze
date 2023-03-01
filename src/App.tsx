import { useMemo, useState } from 'react';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { GameField } from './components/GameField';
import { Area, direction } from './Area';
import { Modal } from './components/Modal';
import { statusGame } from './store/slice';

import { FaRegHandPointUp } from 'react-icons/fa';
import { FaRegHandPointDown } from 'react-icons/fa';
import { FaRegHandPointLeft } from 'react-icons/fa';
import { FaRegHandPointRight } from 'react-icons/fa';

function App() {
  const dispatch = useAppDispatch();
  const status = useAppSelector((game) => game.status);

  const [isOpen, setOpen] = useState(false);
  const [isNewGame, setNewGame] = useState(0);

  const area = useMemo(() => {
    return new Area(3);
  }, [isNewGame]);

  const handlerModalClose = () => {
    setOpen((prev) => !prev);
  };

  const renderImage = (direction: direction) => {
    switch (direction) {
      case 'up':
        return <FaRegHandPointUp color="red" />;
      case 'down':
        return <FaRegHandPointDown color="red" />;
      case 'left':
        return <FaRegHandPointLeft color="red" />;
      case 'right':
        return <FaRegHandPointRight color="red" />;
    }
  };
  const handler = (value: number[]): void => {
    const status = value.toString() === area.getFinish.toString();
    setOpen((prev) => !prev);
    dispatch(statusGame(status));
  };
  const onNewGame = () => {
    setNewGame((prev) => prev + 1);
    setOpen((prev) => !prev);
  };
  return (
    <div className="App">
      <GameField area={area} />

      <div className="path">
        {area.path.map((el, i) => {
          return <span key={el + i}>{renderImage(el)}</span>;
        })}
      </div>
      <Modal isOpen={isOpen} onClose={handlerModalClose}>
        {status ? <p>Winner</p> : <p>Goof</p>}
        <button onClick={onNewGame}>start new game</button>
      </Modal>
    </div>
  );
}

export default App;
