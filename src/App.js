import './App.css';
import './screens/screens.css';

import PlayScreen from './screens/PlayScreen';
import OverScreen from './screens/OverScreen';
import EndScreen from './screens/EndScreen';
import StartScreen from './screens/StartScreen';

import { useGame } from './hooks/useGame';
import { GAME_MODES } from './constants';

function App() {
  const {
    gameMode,
    gameLevel,
    time,
    score,
    startGame,
    restartGame,
    increaseScore,
    handleGameLevelChange,
    handleMissedTarget
  } = useGame();

  return (
    <div className="App">
      {gameMode === GAME_MODES.START && (
        <StartScreen onGameLevelChange={handleGameLevelChange} onStartGame={startGame} />
      )}
      {gameMode === GAME_MODES.PLAYING && (
        <PlayScreen
          score={score}
          time={time}
          onTargetClick={increaseScore}
          onMissedTargetClick={handleMissedTarget}
          gameLevel={gameLevel}
        />
      )}
      {gameMode === GAME_MODES.GAME_OVER && <OverScreen onRestart={restartGame} />}
      {gameMode === GAME_MODES.GAME_END && <EndScreen onRestart={restartGame} score={score} />}
    </div>
  );
}

export default App;
