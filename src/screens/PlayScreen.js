import { Target } from '../components/Target';
import { Timer } from '../components/Timer';
import { GameScore } from '../components/GameScore';
import { GameBoard } from '../components/GameBoard';

function PlayScreen({ score, time, gameLevel, onTargetClick, onMissedTargetClick }) {
  return (
    <>
      <div className="play-screen-info">
        <Timer time={time} />
        <GameScore score={score} />
      </div>
      <GameBoard onClick={onMissedTargetClick}>
        <div className="play-screen">
          <Target onClick={onTargetClick} level={gameLevel} />
        </div>
      </GameBoard>
    </>
  );
}

export default PlayScreen;
