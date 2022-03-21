const DEFAULT_PLAY_TIME = 20;

const GAME_LEVELS_VALUE = {
  EASY: 1,
  MEDIUM: 2,
  HARD: 3
};

const TARGET_SIZES = {
  EASY: 45,
  MEDIUM: 35,
  HARD: 25
};

const GAME_LEVELS = [
  {
    name: 'Easy',
    value: GAME_LEVELS_VALUE.EASY
  },
  {
    name: 'Medium',
    value: GAME_LEVELS_VALUE.MEDIUM
  },
  {
    name: 'Hard',
    value: GAME_LEVELS_VALUE.HARD
  }
];

// start, playing, game over, game end
const GAME_MODES = {
  START: 1,
  PLAYING: 2,
  GAME_OVER: 3,
  GAME_END: 4
};

export { GAME_LEVELS_VALUE, TARGET_SIZES, GAME_LEVELS, DEFAULT_PLAY_TIME, GAME_MODES };
