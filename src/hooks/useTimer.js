import { useState, useEffect, useRef } from 'react';
import { DEFAULT_PLAY_TIME } from '../constants';

function useTimer() {
  const [time, setTime] = useState(DEFAULT_PLAY_TIME);
  const [isActive, setIsActive] = useState(false);
  const timeRef = useRef();

  const startTimer = () => {
    // Starts countdown
    setIsActive(true);
  };

  const resetTimer = () => {
    setTime(DEFAULT_PLAY_TIME);
  };

  useEffect(() => {
    timeRef.current = setTimeout(() => {
      isActive && time > 0 && setTime((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeRef.current);
  }, [isActive, time]);

  return { time, startTimer, resetTimer };
}

export { useTimer };
