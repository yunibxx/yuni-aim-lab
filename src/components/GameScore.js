import './GameScore.css';

function GameScore({ score }) {
  return (
    <div className="game-score">
      <span>🏆 Score: </span>
      <span>{score}</span>
    </div>
  );
}

export { GameScore };
