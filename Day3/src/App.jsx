import React, { useState, useEffect } from 'react';
// import './index.css';

const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTimeElapsed(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(prev => !prev);
  };

  const handleReset = () => {
    setTimeElapsed(0);
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds) =>
    {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="stopwatch-container">
      <div className="stopwatch">
        <h1>Stopwatch</h1>
        <p className="timer">{formatTime(timeElapsed)}</p>
        <button className="control-button" onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
        <button className="control-button" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default App;