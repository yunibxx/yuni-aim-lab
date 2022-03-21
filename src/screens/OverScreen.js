import { GameButton } from '../components/GameButton';
import { GameBoard } from '../components/GameBoard';

function OverScreen({ onRestart }) {
  return (
    <GameBoard>
      <div className="over-screen">
        <h2>Game Over☠️</h2>
        <GameButton mode="Restart" onClick={onRestart} />
      </div>
    </GameBoard>
  );
}

export default OverScreen;
