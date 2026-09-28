"use client";

import { useEffect, useRef } from "react";

import useReducedMotion from "~/components/use-reduced-motion";

type Star = {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  alpha: number;
  flicker: 1 | -1;
  isBlue: boolean;
  spawnY: number;
};

const FRAME_INTERVAL_MS = 1000 / 120;
const STARS_PER_PX = 0.00008;
const MAX_RADIUS = 2.1;

function spawnStar(width: number, y: number): Star {
  return {
    x: Math.random() * width,
    y,
    radius: 0.5 + Math.random() * (MAX_RADIUS - 0.5),
    speedY: 10 + Math.random() * 28,
    alpha: 0.2 + Math.random() * 0.6,
    flicker: Math.random() < 0.5 ? -1 : 1,
    isBlue: Math.random() < 0.35,
    spawnY: y,
  };
}

function moveStar(star: Star, dt: number) {
  star.alpha += star.flicker * dt * 0.4;
  if (star.alpha < 0.25) {
    star.alpha = 0.25;
    star.flicker = 1;
  } else if (star.alpha > 1) {
    star.alpha = 1;
    star.flicker = -1;
  }
  star.y += star.speedY * dt;
}

function starOpacity(star: Star, height: number) {
  const travel =
    (star.y - star.spawnY) / (height + 50 + star.radius - star.spawnY);
  const burn = Math.max(0, travel - 0.5) * 2;
  const alpha = star.alpha * (1 - burn * burn * (3 - 2 * burn));
  return alpha / (0.35 + 0.65 * alpha);
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isReducedMotion = useReducedMotion();
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let rafId = 0;
    let lastFrameAt = performance.now();
    let carryMs = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        ctx.globalAlpha = starOpacity(star, height);
        ctx.fillStyle = star.isBlue ? "#6574a5" : "#fff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    const frame = (now: number) => {
      rafId = requestAnimationFrame(frame);
      const elapsedMs = now - lastFrameAt;
      if (elapsedMs + carryMs < FRAME_INTERVAL_MS - 1) return;
      carryMs = Math.min(
        elapsedMs + carryMs - FRAME_INTERVAL_MS,
        FRAME_INTERVAL_MS,
      );
      lastFrameAt = now;
      const dt = Math.min(0.05, elapsedMs / 1000);
      for (const star of stars) {
        moveStar(star, dt);
        if (star.y - star.radius > height)
          Object.assign(
            star,
            spawnStar(width, -MAX_RADIUS - Math.random() * 50),
          );
      }
      draw();
    };
    const observer = new ResizeObserver(() => {
      const dpr = Math.min(2, devicePixelRatio);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = Array.from(
        { length: Math.max(80, Math.floor(width * height * STARS_PER_PX)) },
        () => spawnStar(width, Math.random() * height),
      );
      draw();
      canvas.style.opacity = "1";
    });
    observer.observe(canvas);
    if (!isReducedMotion) rafId = requestAnimationFrame(frame);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [isReducedMotion]);
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 size-full opacity-0 transition-opacity duration-1000 ease-out"
    />
  );
}
