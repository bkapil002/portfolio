import { useCallback, useEffect, useRef, useState } from "react";
import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "./WindowControls";

const GRID = 20;
const SIZE = 400;
const CELL = SIZE / GRID;

const randomFood = (snake) => {
  let food;
  do {
    food = {
      x: Math.floor(Math.random() * GRID),
      y: Math.floor(Math.random() * GRID),
    };
  } while (snake.some((s) => s.x === food.x && s.y === food.y));
  return food;
};

const Snake = () => {
  const canvasRef = useRef(null);
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const snakeRef = useRef([{ x: 10, y: 10 }]);
  const dirRef = useRef({ x: 1, y: 0 });
  const foodRef = useRef({ x: 15, y: 10 });
  const loopRef = useRef(null);

  const draw = useCallback(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#020617";
    ctx.fillRect(0, 0, SIZE, SIZE);

    ctx.fillStyle = "#ef4444";
    ctx.fillRect(
      foodRef.current.x * CELL,
      foodRef.current.y * CELL,
      CELL - 2,
      CELL - 2,
    );

    ctx.fillStyle = "#22c55e";
    snakeRef.current.forEach((seg) => {
      ctx.fillRect(seg.x * CELL, seg.y * CELL, CELL - 2, CELL - 2);
    });
  }, []);

  const stop = useCallback(() => {
    clearInterval(loopRef.current);
    loopRef.current = null;
  }, []);

  const start = useCallback(() => {
    stop();
    snakeRef.current = [{ x: 10, y: 10 }];
    dirRef.current = { x: 1, y: 0 };
    foodRef.current = randomFood(snakeRef.current);
    setScore(0);
    setGameOver(false);
    setRunning(true);
  }, [stop]);

  useEffect(() => {
    draw();
  }, [draw]);

  useEffect(() => {
    if (!running) return;

    loopRef.current = setInterval(() => {
      const snake = snakeRef.current;
      const dir = dirRef.current;
      const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

      if (
        head.x < 0 ||
        head.y < 0 ||
        head.x >= GRID ||
        head.y >= GRID ||
        snake.some((s) => s.x === head.x && s.y === head.y)
      ) {
        setRunning(false);
        setGameOver(true);
        stop();
        return;
      }

      const next = [head, ...snake];
      if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
        setScore((s) => s + 1);
        foodRef.current = randomFood(next);
      } else {
        next.pop();
      }
      snakeRef.current = next;
      draw();
    }, 120);

    return stop;
  }, [running, draw, stop]);

  useEffect(() => {
    const handleKey = (e) => {
      const dir = dirRef.current;
      const map = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
      };
      const next = map[e.key];
      if (!next) return;
      e.preventDefault();
      if (next.x === -dir.x && next.y === -dir.y) return;
      dirRef.current = next;
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <WindowWrapper windowKey="snake" className="flex flex-col">
      <div id="window-header">
        <WindowControls windowKey="snake" />
        <h2 className="text-sm font-bold text-gray-800 flex-1 text-center">
          Snake
        </h2>
        <span className="w-12" />
      </div>

      <div className="flex flex-col items-center gap-3 p-4">
        <div className="flex justify-between w-full text-sm text-gray-600 px-1">
          <span>Score: {score}</span>
          <span className="text-xs">Use ↑ ↓ ← →</span>
        </div>

        <div className="relative">
          <canvas
            ref={canvasRef}
            width={SIZE}
            height={SIZE}
            className="rounded-lg"
          />
          {!running && (
            <div className="absolute inset-0 bg-black/60 rounded-lg flex flex-col items-center justify-center gap-4 text-white">
              {gameOver && (
                <p className="text-lg font-bold">Game Over — {score}</p>
              )}
              <button
                type="button"
                onClick={start}
                className="bg-white text-black font-semibold rounded px-6 py-3 hover:bg-gray-200"
              >
                {gameOver ? "Play Again" : "Start Game"}
              </button>
            </div>
          )}
        </div>
      </div>
    </WindowWrapper>
  );
};

export default Snake;
