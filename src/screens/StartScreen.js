import { GameButton } from '../components/GameButton';
import { GameLevel } from '../components/GameLevel';
import { Title } from '../components/Title';
import { GameBoard } from '../components/GameBoard';

function StartScreen({ onGameLevelChange, onStartGame }) {
  return (
    <GameBoard>
      <div className="start-screen">
        <Title />
        <img src="/img/start.png" alt="game-start-logo" className="start-logo" />
        <GameLevel onChange={onGameLevelChange} />
        <GameButton mode="Start" onClick={onStartGame} />
      </div>
    </GameBoard>
  );
}

export default StartScreen;
