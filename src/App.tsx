import { useCallback, useMemo, useState } from 'react';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { GameField } from './components/GameField';
import { Area, direction } from './Area';
import { Modal } from './components/Modal';
import { statusGame } from './store/slice';

import { useTransition, animated, useSprings } from '@react-spring/web';

import { FaRegHandPointUp } from 'react-icons/fa';
import { FaRegHandPointDown } from 'react-icons/fa';
import { FaRegHandPointLeft } from 'react-icons/fa';
import { FaRegHandPointRight } from 'react-icons/fa';

import './App.css';

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
  const onCheck = (value: number[]): void => {
    const status = value.toString() === area.getFinish.toString();
    setOpen((prev) => !prev);
    dispatch(statusGame(status));
  };

  const onNewGame = () => {
    setNewGame((prev) => prev + 1);
    setOpen((prev) => !prev);
  };

  const transitions = useCallback(
    useTransition(area.path, {
      keys: Math.random() * 1000,
      from: { opacity: 0, scale: 0 },
      enter: { opacity: 1, scale: 1 },
      delay: 400,
      trail: 100,
    }),
    [isNewGame]
  );

  return (
    <div className="App">
      <h1>ЛАБИРИНТ</h1>
      <GameField area={area} onCheck={onCheck} checked={isOpen} />

      <div className="path">
        {transitions((style, el) => {
          return (
            <animated.span style={style} className="path-item">
              {renderImage(el)}
            </animated.span>
          );
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
