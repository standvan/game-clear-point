import React from "react";

const GameBoard = ({ points, currentPoint, totalPoints, onClickPoint }) => {
  return (
    <div className="h-[800px] border border-black relative">
      {points.map((point) => {
        const isCurrentPoint = currentPoint === point.number;
        return (
          <div
            className="w-[50px] h-[50px] top-12 right-8 absolute rounded-full border border-black flex items-center justify-center cursor-pointer"
            style={{
              top: `${point.y}%`,
              left: `${point.x}%`,
              backgroundColor: point.clicked ? "red" : "white",
              transform: "translate(-50%,-50%)",
              zIndex: isCurrentPoint
                ? totalPoints + 1
                : totalPoints - point.number + 1,
            }}
            key={point.number}
            onClick={() => onClickPoint(point.number)}
          >
            {point.number}
          </div>
        );
      })}
    </div>
  );
};

export default GameBoard;
