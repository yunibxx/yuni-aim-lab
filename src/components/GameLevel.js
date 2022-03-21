import './GameLevel.css';

import { GAME_LEVELS } from '../constants';

function GameLevel({ onChange }) {
  return (
    <div className="game-level-wrapper">
      <label htmlFor="game-level">Choose your difficulty</label>
      <div className="game-level">
        <select id="game-level" name="game-level" onChange={onChange}>
          {GAME_LEVELS.map(({ name, value }) => (
            <option value={value} key={value}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export { GameLevel };
