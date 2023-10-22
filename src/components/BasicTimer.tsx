"use client";

import React, { useEffect, useState } from "react";

type Props = {
  initialCount: number;
};

const BasicTimer: React.FC<Props> = ({ initialCount }) => {
  const [count, setCount] = useState<number>(initialCount);

  //1づつカウントを減らしていく
  const tick = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      tick();
    }, 1000);

    return () => clearInterval(timerId);
  }, [count]);

  return <div>{count}</div>;
};

export default BasicTimer;
