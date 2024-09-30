"use client";
import React, { useEffect, useState } from "react";

const useTime = (isRunning) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 0.1);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning]);
  const resetTime = () => setTime(0);
  return {
    time,
    resetTime,
  };
};

export default useTime;
