import { useCallback, useEffect, useRef, useState } from "react";
import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "./WindowControls";

const GRID = 20;
const SIZE = 380;
const CELL = SIZE / GRID;

const BEST_KEY = "snake_best_score";

const roundRect = (ctx, x, y, w, h, r) => {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
};

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

const Stat = ({ label, value, className }) => (
  <div
    className={`flex items-center gap-2 rounded-lg px-3 py-1.5 ${className}`}
  >
    <span className="text-[10px] font-semibold uppercase tracking-wide opacity-70">
      {label}
    </span>
    <span className="text-base font-extrabold leading-none">{value}</span>
  </div>
);

const Snake = () => {
  const canvasRef = useRef(null);
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(() => {
    const saved = Number(localStorage.getItem(BEST_KEY));
    return Number.isFinite(saved) ? saved : 0;
  });

  const snakeRef = useRef([{ x: 10, y: 10 }]);
  const dirRef = useRef({ x: 1, y: 0 });
  const foodRef = useRef({ x: 15, y: 10 });
  const loopRef = useRef(null);

  const draw = useCallback(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    const bg = ctx.createLinearGradient(0, 0, SIZE, SIZE);
    bg.addColorStop(0, "#0b1220");
    bg.addColorStop(1, "#020617");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, SIZE, SIZE);

    ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
    ctx.lineWidth = 1;
    for (let i = 1; i < GRID; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL, 0);
      ctx.lineTo(i * CELL, SIZE);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * CELL);
      ctx.lineTo(SIZE, i * CELL);
      ctx.stroke();
    }

    const fx = foodRef.current.x * CELL + CELL / 2;
    const fy = foodRef.current.y * CELL + CELL / 2;
    ctx.save();
    ctx.shadowColor = "#ef4444";
    ctx.shadowBlur = 14;
    ctx.fillStyle = "#ef4444";
    ctx.beginPath();
    ctx.arc(fx, fy, CELL / 2 - 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.beginPath();
    ctx.arc(fx - CELL * 0.12, fy - CELL * 0.12, CELL * 0.08, 0, Math.PI * 2);
    ctx.fill();

    const snake = snakeRef.current;
    const len = Math.max(snake.length - 1, 1);
    snake.forEach((seg, idx) => {
      const t = idx / len;
      const x = seg.x * CELL;
      const y = seg.y * CELL;
      const pad = 2;
      if (idx === 0) {
        ctx.save();
        ctx.shadowColor = "#22c55e";
        ctx.shadowBlur = 10;
        ctx.fillStyle = "#4ade80";
      } else {
        const g = Math.round(197 - 110 * t);
        const b = Math.round(94 - 55 * t);
        ctx.fillStyle = `rgb(34, ${g}, ${b})`;
      }
      roundRect(ctx, x + pad, y + pad, CELL - pad * 2, CELL - pad * 2, 5);
      ctx.fill();
      if (idx === 0) ctx.restore();
    });

    const head = snake[0];
    if (head) {
      const dir = dirRef.current;
      const hx = head.x * CELL + CELL / 2;
      const hy = head.y * CELL + CELL / 2;
      const forward = CELL * 0.16;
      const off = CELL * 0.18;
      const perpX = -dir.y;
      const perpY = dir.x;
      [
        { x: hx + dir.x * forward + perpX * off, y: hy + dir.y * forward + perpY * off },
        { x: hx + dir.x * forward - perpX * off, y: hy + dir.y * forward - perpY * off },
      ].forEach((e) => {
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(e.x, e.y, CELL * 0.13, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#0f172a";
        ctx.beginPath();
        ctx.arc(e.x + dir.x * 1.5, e.y + dir.y * 1.5, CELL * 0.06, 0, Math.PI * 2);
        ctx.fill();
      });
    }
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

    const speed = Math.max(120, 200 - score * 5);

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
        setBest((b) => {
          const next = Math.max(b, score);
          localStorage.setItem(BEST_KEY, String(next));
          return next;
        });
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
    }, speed);

    return stop;
  }, [running, draw, stop, score]);

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
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2">
            <Stat
              label="Score"
              value={score}
              className="bg-emerald-50 text-emerald-700"
            />
            <Stat
              label="Best"
              value={best}
              className="bg-amber-50 text-amber-700"
            />
          </div>
          <span className="text-[11px] text-gray-400 font-medium">
            ↑ ↓ ← →
          </span>
        </div>

        <div className="relative">
          <canvas
            ref={canvasRef}
            width={SIZE}
            height={SIZE}
            className="rounded-xl block shadow-inner ring-1 ring-black/10"
          />
          {!running && (
            <div className="absolute inset-0 bg-black/60 rounded-xl flex flex-col items-center justify-center gap-3 text-white backdrop-blur-sm">
              <p className="text-2xl font-extrabold">
                {gameOver ? "Game Over" : "Snake"}
              </p>
              {gameOver ? (
                <p className="text-sm text-white/80">
                  Score {score} · Best {best}
                </p>
              ) : (
                <p className="text-xs text-white/70">
                  Eat the food · avoid the walls
                </p>
              )}
              <button
                type="button"
                onClick={start}
                className="bg-gradient-to-r from-emerald-400 to-green-600 text-white font-semibold rounded-lg px-6 py-2.5 hover:brightness-110 active:scale-[0.98] transition"
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
