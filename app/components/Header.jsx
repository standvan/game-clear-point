import React from "react";

const Header = ({ gameState }) => {
  const getHeaderText = () => {
    switch (gameState) {
      case "gameOver":
        return <h1 className="text-xl font-bold text-red-600">Game Over</h1>;
      case "cleared":
        return (
          <h1 className="text-xl font-bold text-green-500">All Cleared</h1>
        );
      default:
        return <h1 className="text-xl font-bold">Let's Play</h1>;
    }
  };
  return <div>{getHeaderText()}</div>;
};

export default Header;
