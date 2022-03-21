import './Timer.css';

function Timer({ time }) {
  // time remaining
  return (
    <div className="time-score">
      <span>⏳ Time Remaining: </span>
      <span>{time}</span>
    </div>
  );
}

export { Timer };
