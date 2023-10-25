import React, { useState, useEffect } from "react";

interface CountDwonTimerProps {
  initialTime: number;
}

const CountDown: React.FC<CountDwonTimerProps> = ({ initialTime }) => {
  //入力される時間
  const [time, setTime] = useState(initialTime);
  const [running, setRunning] = useState(false);

  const start = () => {
    setRunning((state) => true);
  };

  const tick = () => {
    if (time > 0) setTime((prevTime) => prevTime - 1);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (running && time > 0) {
      timer = setInterval(() => tick(), 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time, running]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>カウントダウンタイマー</h1>
      <p>残り時間: {formatTime(time)}</p>
      <button onClick={() => start()}>スタート</button>
    </div>
  );
};

export default CountDown;
