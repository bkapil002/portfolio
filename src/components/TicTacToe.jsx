import { useEffect, useState } from "react";
import { IoRefresh } from "react-icons/io5";
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

const ScorePill = ({ label, value, className }) => (
  <div
    className={`flex flex-col items-center justify-center rounded-xl px-3 py-1.5 min-w-[64px] ${className}`}
  >
    <span className="text-lg font-extrabold leading-none">{value}</span>
    <span className="text-[10px] font-semibold uppercase tracking-wide opacity-70">
      {label}
    </span>
  </div>
);

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isX, setIsX] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, D: 0 });

  const result = checkWinner(board);
  const winner = result?.player ?? null;
  const winningLine = result?.line ?? [];

  useEffect(() => {
    if (!winner) return;
    setScores((s) => {
      const key = winner === "draw" ? "D" : winner;
      return { ...s, [key]: s[key] + 1 };
    });
  }, [winner]);

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

  let status = `Player ${isX ? "X" : "O"}'s turn`;
  let statusClass = "text-gray-700";
  if (winner === "draw") {
    status = "It's a draw";
    statusClass = "text-amber-600";
  } else if (winner) {
    status = `Player ${winner} wins!`;
    statusClass = winner === "X" ? "text-blue-600" : "text-rose-500";
  }

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
        <div className="flex items-center justify-center gap-2 w-full">
          <ScorePill
            label="X"
            value={scores.X}
            className="bg-blue-50 text-blue-600"
          />
          <ScorePill
            label="Draws"
            value={scores.D}
            className="bg-gray-100 text-gray-600"
          />
          <ScorePill
            label="O"
            value={scores.O}
            className="bg-rose-50 text-rose-500"
          />
        </div>

        <p className={`text-sm font-semibold ${statusClass}`}>{status}</p>

        <div className="grid grid-cols-3 gap-2 w-full">
          {board.map((cell, i) => {
            const isWinning = winningLine.includes(i);
            const disabled = Boolean(cell) || Boolean(winner);
            return (
              <button
                key={i}
                type="button"
                disabled={disabled}
                className={`ttt-cell ${isWinning ? "ttt-cell-win" : ""}`}
                onClick={() => handleClick(i)}
              >
                {cell && (
                  <span
                    className={`ttt-mark ${
                      cell === "X" ? "text-blue-600" : "text-rose-500"
                    }`}
                  >
                    {cell}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={restart}
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm font-semibold rounded-lg px-4 py-2 hover:from-gray-800 hover:to-gray-600 active:scale-[0.98] transition"
        >
          <IoRefresh size={16} />
          New Game
        </button>
      </div>
    </WindowWrapper>
  );
};

export default TicTacToe;
