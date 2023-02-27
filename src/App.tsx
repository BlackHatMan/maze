import './App.css';
import { Cell } from './cell/Cell';
import { Area } from './Area';

function App() {
  const area = new Area(3);
  console.log('file: App.tsx:26 ~ myPath:', area);
  return (
    <div className="App">
      <div className="container">
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
    </div>
  );
}

export default App;
