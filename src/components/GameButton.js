import './GameButton.css';

function GameButton({ mode, onClick }) {
  const handleClick = (event) => {
    event.stopPropagation();
    onClick();
  };
  return (
    <button type="button" className="game-button" onClick={handleClick}>
      {mode}
    </button>
  );
}

export { GameButton };
