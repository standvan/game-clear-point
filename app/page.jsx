"use client";
import { useState } from "react";
import Control from "./components/Control";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import useLogic from "./hooks/useLogic";
import useTime from "./hooks/useTime";

const Home = () => {
  const [inputValue, setInputValue] = useState(0);
  const {
    points,
    currentPoint,
    totalPoints,
    gameState,
    startGame,
    restartGame,
    handlePointClick,
  } = useLogic(parseInt(inputValue));
  const { time, resetTime } = useTime(gameState === "playing");
  const handleStart = () => {
    startGame();
    resetTime();
  };
  const handleRestart = () => {
    restartGame();
    resetTime();
  };

  return (
    <div className="w-[800px] mx-auto flex flex-col gap-5 py-4">
      <Header gameState={gameState}></Header>
      <Control
        inputValue={inputValue}
        setInputValue={setInputValue}
        gameState={gameState}
        onClickStart={handleStart}
        onClickRestart={handleRestart}
        time={time}
      ></Control>
      <GameBoard
        currentPoint={currentPoint}
        points={points}
        totalPoints={totalPoints}
        onClickPoint={handlePointClick}
      ></GameBoard>
    </div>
  );
};

export default Home;
