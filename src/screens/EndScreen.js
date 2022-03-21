import { GameButton } from '../components/GameButton';
import { GameScore } from '../components/GameScore';
import { GameBoard } from '../components/GameBoard';

function EndScreen({ score, onRestart }) {
  return (
    <GameBoard>
      <div className="over-screen">
        <h2>Final Score 🎉</h2>
        <GameScore score={score} />
        <GameButton mode="Restart" onClick={onRestart} />
      </div>
    </GameBoard>
  );
}

export default EndScreen;
