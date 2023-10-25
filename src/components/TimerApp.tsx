"use client";

import React, { useEffect, useState } from "react";

type Props = {
  initialCount: number;
};

//タイマーの停止と再開とリセットボタンを追加しろ。

const TimerApp: React.FC<Props> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const [running, isRunning] = useState(false);

  const start = () => isRunning((state) => true);
  const stop = () => isRunning((state) => false);
  const reset = () => setCount((prevCount) => initialCount);

  const tick = () => {
    if (count > 0) setCount((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (running && count > 0) {
      timer = setInterval(() => tick(), 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [count, running]);

  return (
    <div className="flex flex-col p-4 gap-8 bg-slate-800  w-fit rounded-lg m-8">
      <h2>samples</h2>
      <span className="text-6xl">{count}</span>
      <div className="flex gap-2">
        <button
          onClick={() => start()}
          className="bg-blue-400 px-6 py-2 rounded"
        >
          スタート
        </button>
        <button onClick={() => stop()} className="bg-red-400 px-6 py-2 rounded">
          停止
        </button>
        <button onClick={() => reset()} className="border px-6 py-2 rounded">
          リセット
        </button>
      </div>
    </div>
  );
};

export default TimerApp;
