import { useCallback, useMemo, useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { GameField } from './components/GameField';
import { Area, direction } from './Area';
import { Modal } from './components/Modal';
import { statusGame } from './store/slice';

import { FaRegHandPointUp } from 'react-icons/fa';
import { FaRegHandPointDown } from 'react-icons/fa';
import { FaRegHandPointLeft } from 'react-icons/fa';
import { FaRegHandPointRight } from 'react-icons/fa';

import './App.css';

function App() {
  const dispatch = useAppDispatch();
  const { status, gameScore } = useAppSelector((game) => game);

  const [isCheck, setIsCheck] = useState(false);
  const [isNewGame, setNewGame] = useState(0);

  const area = useMemo(() => {
    return new Area(3);
  }, [isNewGame]);

  const onCheck = (value: number[]): void => {
    const status = value.toString() === area.getFinish.toString();
    setIsCheck((prev) => !prev);
    dispatch(statusGame(status));
  };

  const onNewGame = () => {
    setNewGame((prev) => prev + 1);
    setIsCheck((prev) => !prev);
  };

  const transitions = useCallback(
    useTransition(area.path, {
      keys: Math.random() * 1000,
      from: { opacity: 0, scale: 0 },
      enter: { opacity: 1, scale: 1 },
      delay: 200,
      trail: 50,
    }),
    [isNewGame]
  );

  const handlerModalClose = () => {
    setIsCheck((prev) => !prev);
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
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">ЛАБИРИНТ</h1>
        <GameField area={area} onCheck={onCheck} checked={isCheck} />

        <div className="path">
          {transitions((style, el) => {
            return (
              <animated.span className="path-item" style={style}>
                {renderImage(el)}
              </animated.span>
            );
          })}
        </div>
        <Modal isOpen={isCheck} onClose={handlerModalClose}>
          <div className="modal-content" style={{ backgroundColor: status ? '#32ed1c33' : '#fd040433' }}>
            {status ? <p className="modal-title">ПОЗДРАВЛЯЕМ</p> : <p className="modal-title">Вы проиграли</p>}
            <button className="btn-newgame" onClick={onNewGame}>
              Начать новую
            </button>
          </div>
        </Modal>
        <div className="score">
          <ul>
            <li>Человек:</li>
            <li>{gameScore.win}</li>
          </ul>
          <ul>
            <li>Гениальная машина:</li>
            <li>{gameScore.lose}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
