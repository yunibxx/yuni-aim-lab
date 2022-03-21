import { useState } from 'react';

import './Target.css';

import { randomizePosition } from '../utils';
import { GAME_LEVELS_VALUE, TARGET_SIZES } from '../constants';

function getRandomPosition() {
  const position = {
    x: randomizePosition(0, 90),
    y: randomizePosition(0, 90)
  };
  return position;
}

function Target({ onClick, level }) {
  const [position, setPosition] = useState(getRandomPosition());

  const handleClick = (e) => {
    e.stopPropagation();
    setPosition(getRandomPosition());
    onClick();
  };

  const getTargetSize = () => {
    if (Number(level) === GAME_LEVELS_VALUE.EASY) {
      return TARGET_SIZES.EASY;
    }
    if (Number(level) === GAME_LEVELS_VALUE.MEDIUM) {
      return TARGET_SIZES.MEDIUM;
    }
    if (Number(level) == GAME_LEVELS_VALUE.HARD) {
      return TARGET_SIZES.HARD;
    }
    return TARGET_SIZES.EASY;
  };

  return (
    <button
      className="target-button"
      type="button"
      onClick={handleClick}
      style={{
        top: `${position.y}%`,
        left: `${position.x}%`,
        position: 'absolute',
        width: `${getTargetSize()}px`,
        height: `${getTargetSize()}px`
      }}
    />
  );
}

export { Target };
