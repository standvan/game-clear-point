"use client";
import React, { useCallback, useState } from "react";

const useLogic = (initPoint) => {
  const [points, setPoints] = useState([]);
  const [currentPoint, setCurrentPoint] = useState(1);
  const [totalPoints, setTotalPoints] = useState(0);
  const [gameState, setGameState] = useState("normal");
  const createPoints = useCallback((pointNumber) => {
    const margin = 3;
    return Array.from({ length: pointNumber }, (_, i) => ({
      number: i + 1,
      x: margin + Math.random() * (100 - margin * 2),
      y: margin + Math.random() * (100 - margin * 2),
      clicked: false,
    })).sort(() => Math.random() - 0.5);
  }, []);
  const startGame = useCallback(() => {
    if (initPoint > 0) {
      const arrayPoints = createPoints(initPoint);
      setPoints(arrayPoints);
      setTotalPoints(initPoint);
      setGameState("playing");
      setCurrentPoint(1);
    }
  }, [initPoint]);
  const restartGame = useCallback(() => {
    startGame();
  }, [startGame]);
  const handlePointClick = useCallback(
    (point) => {
      if (point === currentPoint) {
        setPoints((prev) =>
          prev.map((p) => (p.number === point ? { ...p, clicked: true } : p))
        );
        setTimeout(() => {
          setPoints((prev) => prev.filter((p) => p.number !== point));
        }, 500);
        if (currentPoint === totalPoints) {
          setGameState("cleared");
        } else {
          setCurrentPoint((prev) => prev + 1);
        }
      } else {
        setGameState("gameOver");
      }
    },
    [currentPoint, totalPoints]
  );
  return {
    points,
    currentPoint,
    totalPoints,
    gameState,
    startGame,
    restartGame,
    handlePointClick,
  };
};

export default useLogic;
