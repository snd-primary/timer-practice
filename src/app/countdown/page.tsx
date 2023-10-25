"use client";
import CountDown from "@/components/CountDown";

import React from "react";

const page = () => {
  return (
    <div>
      <CountDown initialTime={500} />
    </div>
  );
};

export default page;
