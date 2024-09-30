"use client";
import React, { useState } from "react";

const Control = ({
  inputValue,
  setInputValue,
  gameState,
  onClickStart,
  onClickRestart,
  time,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center">
        <h4 className="w-32">Points:</h4>
        <input
          type="text"
          className="border border-black rounded p-1"
          placeholder="Enter number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="flex items-center">
        <h4 className="w-32">Time:</h4>
        <p>{time.toFixed(1)}s</p>
      </div>
      <div>
        <button
          className="border border-black py-2 px-4 bg-slate-500 text-white hover:opacity-40"
          onClick={gameState === "playing" ? onClickRestart : onClickStart}
        >
          {gameState === "playing" ? "Restart" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default Control;
