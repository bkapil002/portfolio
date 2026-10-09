import { useState } from "react";
import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "./WindowControls";

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = (board) => {
  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { player: board[a], line: [a, b, c] };
    }
  }
  return board.every(Boolean) ? { player: "draw", line: [] } : null;
};

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isX, setIsX] = useState(true);

  const result = checkWinner(board);
  const winner = result?.player ?? null;
  const winningLine = result?.line ?? [];

  const handleClick = (i) => {
    if (board[i] || winner) return;
    const next = [...board];
    next[i] = isX ? "X" : "O";
    setBoard(next);
    setIsX(!isX);
  };

  const restart = () => {
    setBoard(Array(9).fill(""));
    setIsX(true);
  };

  let status = `Turn: ${isX ? "X" : "O"}`;
  if (winner === "draw") status = "It's a Draw";
  else if (winner) status = `${winner} Wins`;

  return (
    <WindowWrapper windowKey="tictactoe">
      <div id="window-header">
        <WindowControls windowKey="tictactoe" />
        <h2 className="text-sm font-bold text-gray-800 flex-1 text-center">
          Tic Tac Toe
        </h2>
        <span className="w-12" />
      </div>

      <div className="p-5 flex flex-col items-center gap-4">
        <p
          className={`text-sm font-semibold ${
            winner === "X"
              ? "text-blue-600"
              : winner === "O"
                ? "text-rose-500"
                : "text-gray-700"
          }`}
        >
          {status}
        </p>

        <div className="grid grid-cols-3 gap-2">
          {board.map((cell, i) => {
            const isWinning = winningLine.includes(i);
            return (
              <button
                key={i}
                type="button"
                className="ttt-cell"
                style={
                  isWinning
                    ? { backgroundColor: "#bbf7d0", borderColor: "#22c55e" }
                    : undefined
                }
                onClick={() => handleClick(i)}
              >
                <span
                  className={
                    cell === "X"
                      ? "text-blue-600"
                      : cell === "O"
                        ? "text-rose-500"
                        : ""
                  }
                >
                  {cell}
                </span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={restart}
          className="bg-gray-900 text-white text-sm font-semibold rounded-md px-4 py-1.5 hover:bg-gray-700"
        >
          Restart Game
        </button>
      </div>
    </WindowWrapper>
  );
};

export default TicTacToe;