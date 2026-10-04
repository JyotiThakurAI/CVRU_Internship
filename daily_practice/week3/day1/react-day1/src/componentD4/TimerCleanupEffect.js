import { useEffect, useState } from "react";

function TimerCleanupEffect() {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) {
      return undefined;
    }

    const timer = setInterval(() => {
      setSeconds((previousSeconds) => previousSeconds + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div>
      <p>Timer: {seconds} seconds</p>
      <p>{isRunning ? "Timer is running." : "Timer is stopped."}</p>
      <button onClick={() => setIsRunning((previousValue) => !previousValue)}>
        {isRunning ? "Stop timer" : "Start timer"}
      </button>
    </div>
  );
}

export default TimerCleanupEffect;