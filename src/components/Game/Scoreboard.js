import React from 'react';

const Scoreboard = ({ score, gameOver }) => {
  return (
    <div className="scoreboard">
      <h2>Score: {score}</h2>
      {gameOver && <h3>Game Over!</h3>}
    </div>
  );
};

export default Scoreboard;
