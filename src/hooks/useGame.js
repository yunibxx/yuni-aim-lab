import { useState, useEffect } from 'react';

import { GAME_LEVELS_VALUE, GAME_MODES } from '../constants';

import { useTimer } from './useTimer';

function useGame() {
  const { time, startTimer, resetTimer } = useTimer();
  const [gameMode, setGameMode] = useState(GAME_MODES.START);
  const [gameLevel, setGameLevel] = useState(GAME_LEVELS_VALUE.EASY);
  const [score, setScore] = useState(0);

  const startGame = () => {
    setGameMode(GAME_MODES.PLAYING);
    startTimer();
  };

  const restartGame = () => {
    setGameMode(GAME_MODES.START);
    setScore(0);
    setGameLevel(GAME_LEVELS_VALUE.EASY);
    resetTimer();
  };

  const increaseScore = () => {
    setScore((prev) => prev + 1);
  };

  const handleGameLevelChange = (event) => {
    setGameLevel(event.target.value);
  };

  const handleMissedTarget = () => {
    if (score > 0) {
      setScore((prev) => prev - 1);
    } else {
      setGameMode(GAME_MODES.GAME_OVER);
      resetTimer();
    }
  };

  useEffect(() => {
    if (time === 0 && gameMode === GAME_MODES.PLAYING) {
      setGameMode(GAME_MODES.GAME_END);
      resetTimer();
    }
  }, [time, gameMode]);

  return {
    gameMode,
    gameLevel,
    time,
    score,
    startGame,
    restartGame,
    increaseScore,
    handleGameLevelChange,
    handleMissedTarget
  };
}

export { useGame };
