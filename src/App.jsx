import './App.css';
import Board from "./Board";
import Info from './Info';

import { useState } from 'react';

function App() {
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState("");

  const resetBoard = () =>{
    setReset(true);
  }

  return (
   <div className="App">
    <div
      className={`winner
      ${
          winner !== "" ? "" : "shrink"
      }`}>
      </div>
        <div className="winner-text">{winner}</div>
        <button onClick={resetBoard()}>
          Reset Board
        </button>
        <Board
          reset={reset}
          setReset={setReset}
          winner={winner}
          setWinner={setWinner}
        />
        <Info/>
   </div>
  );
}

export default App;
