import React, { useState } from 'react';
import Board from './Board';
import './App.css';

function App() {
  const [gameKey, setGameKey] = useState(0);

  const resetGame = () => {
    setGameKey(prevKey => prevKey + 1);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board key={gameKey} resetGame={resetGame} />
      </div>
    </div>
  );
}

export default App;
