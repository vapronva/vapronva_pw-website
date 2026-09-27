"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  alpha: number;
  flickerDirection: number;
  color: "white" | "blue";
  spawnY: number;
  travelDistance: number;
};

type StarfieldProps = {
  className?: string;
  density?: number;
  fade?: number;
  fadeInMs?: number;
};

export default function Starfield({
  className,
  density = 0.00008,
  fade = 0.16,
  fadeInMs = 900,
}: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const clearGradientRef = useRef<CanvasGradient | null>(null);
  const sizeRef = useRef<{ width: number; height: number; dpr: number }>({
    width: 0,
    height: 0,
    dpr: 1,
  });
  const lastTimeRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  useEffect(() => {
    const createStars = (width: number, height: number) => {
      const numStars = Math.max(80, Math.floor(width * height * density));
      const stars: Star[] = new Array(numStars).fill(0).map(() => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = Math.random() * 1.6 + 0.5;
        const spawnY = y;
        const travelDistance = height + 50 + radius - spawnY;
        return {
          x,
          y,
          radius,
          speedY: 10 + Math.random() * 28,
          alpha: 0.2 + Math.random() * 0.6,
          flickerDirection: Math.random() < 0.5 ? -1 : 1,
          color: Math.random() < 0.35 ? "blue" : "white",
          spawnY,
          travelDistance,
        };
      });
      starsRef.current = stars;
    };
    const rebuildFadeGradient = () => {
      const ctx = ctxRef.current;
      if (!ctx) {
        return;
      }
      const { height } = sizeRef.current;
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      const minA = 0.12;
      const aTop = Math.max(minA, Math.min(0.85, fade * 1.0));
      const aMid = Math.max(minA + 0.06, Math.min(0.9, fade * 1.4));
      const aBottom = Math.max(minA + 0.12, Math.min(0.95, fade * 1.8));
      gradient.addColorStop(0, `rgba(0, 0, 0, ${aTop})`);
      gradient.addColorStop(0.6, `rgba(0, 0, 0, ${aMid})`);
      gradient.addColorStop(1, `rgba(0, 0, 0, ${aBottom})`);
      clearGradientRef.current = gradient;
    };
    const resizeToContainer = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        return;
      }
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      sizeRef.current = { width: canvas.width, height: canvas.height, dpr };
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      createStars(canvas.width, canvas.height);
    };
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }
    ctxRef.current = ctx;
    resizeToContainer();
    rebuildFadeGradient();
    lastTimeRef.current = performance.now();
    startTimeRef.current = performance.now();
    canvas.style.opacity = "0";
    const render = (now: number) => {
      const { width, height } = sizeRef.current;
      const dt = Math.min(0.05, (now - lastTimeRef.current) / 1000);
      lastTimeRef.current = now;
      const elapsed = now - startTimeRef.current;
      const opacity = Math.max(
        0,
        Math.min(1, fadeInMs > 0 ? elapsed / fadeInMs : 1),
      );
      canvas.style.opacity = `${opacity}`;
      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      ctx.globalAlpha = Math.max(0.28, Math.min(0.75, fade * 2.2));
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
      const stars = starsRef.current;
      for (const star of stars) {
        star.alpha += star.flickerDirection * dt * 0.4;
        if (star.alpha < 0.25) {
          star.alpha = 0.25;
          star.flickerDirection = 1;
        } else if (star.alpha > 1) {
          star.alpha = 1;
          star.flickerDirection = -1;
        }
        star.y += star.speedY * dt;
        if (star.y - star.radius > height) {
          star.y = -star.radius - Math.random() * 50;
          star.x = Math.random() * width;
          star.speedY = 10 + Math.random() * 28;
          star.spawnY = star.y;
          star.travelDistance = height + star.radius + 50 - star.spawnY;
        }
        const tRaw = (star.y - star.spawnY) / (star.travelDistance || 1);
        const t = Math.max(0, Math.min(1, tRaw));
        let burnFactor = 1;
        if (t > 0.5) {
          const nt = (t - 0.5) / 0.5;
          const smooth = nt * nt * (3 - 2 * nt);
          burnFactor = 1 - smooth;
        }
        const drawAlpha = Math.max(0, Math.min(1, star.alpha * burnFactor));
        ctx.beginPath();
        const color =
          star.color === "blue"
            ? `rgba(101, 116, 165, ${drawAlpha})`
            : `rgba(255, 255, 255, ${drawAlpha})`;
        ctx.fillStyle = color;
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      animationFrameRef.current = requestAnimationFrame(render);
    };
    animationFrameRef.current = requestAnimationFrame(render);
    const onResize = () => {
      resizeToContainer();
      rebuildFadeGradient();
    };
    const onVisibilityChange = () => {
      if (document.hidden) {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        animationFrameRef.current = null;
      } else {
        lastTimeRef.current = performance.now();
        startTimeRef.current = performance.now();
        canvas.style.opacity = "0";
        animationFrameRef.current = requestAnimationFrame(render);
      }
    };
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [density, fade, fadeInMs]);
  return (
    <canvas
      ref={canvasRef}
      className={
        className ??
        "pointer-events-none absolute inset-0 z-0 h-full w-full transition-opacity duration-700 ease-out"
      }
      aria-hidden="true"
    />
  );
}
