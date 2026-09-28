"use client";

import { useEffect, useEffectEvent, useRef } from "react";

import useReducedMotion from "~/components/use-reduced-motion";

type Sprite = [number, number];

const spriteSets = {
  idle: [[-3, -3]],
  alert: [[-7, -3]],
  scratchSelf: [
    [-5, 0],
    [-6, 0],
    [-7, 0],
  ],
  scratchWallN: [
    [0, 0],
    [0, -1],
  ],
  scratchWallS: [
    [-7, -1],
    [-6, -2],
  ],
  scratchWallE: [
    [-2, -2],
    [-2, -3],
  ],
  scratchWallW: [
    [-4, 0],
    [-4, -1],
  ],
  tired: [[-3, -2]],
  sleeping: [
    [-2, 0],
    [-2, -1],
  ],
  N: [
    [-1, -2],
    [-1, -3],
  ],
  NE: [
    [0, -2],
    [0, -3],
  ],
  E: [
    [-3, 0],
    [-3, -1],
  ],
  SE: [
    [-5, -1],
    [-5, -2],
  ],
  S: [
    [-6, -3],
    [-7, -2],
  ],
  SW: [
    [-5, -3],
    [-6, -1],
  ],
  W: [
    [-4, -2],
    [-4, -3],
  ],
  NW: [
    [-1, 0],
    [-1, -1],
  ],
} satisfies Record<string, Sprite[]>;

type SpriteName = keyof typeof spriteSets;

export default function Neko({ speed }: { speed: number }) {
  const catRef = useRef<HTMLDivElement>(null);
  const readSpeed = useEffectEvent(() => speed);
  const isReducedMotion = useReducedMotion();
  useEffect(() => {
    const cat = catRef.current;
    if (!cat || isReducedMotion) return;
    let nekoPosX = 32;
    let nekoPosY = 32;
    let mousePosX = 0;
    let mousePosY = 0;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation: SpriteName | null = null;
    let idleAnimationFrame = 0;
    const setSprite = (name: SpriteName, frameIndex: number) => {
      const sprites = spriteSets[name];
      const sprite = sprites[frameIndex % sprites.length];
      if (!sprite) return;
      cat.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
    };
    const resetIdleAnimation = () => {
      idleAnimation = null;
      idleAnimationFrame = 0;
    };
    const idle = () => {
      idleTime += 1;
      if (
        idleTime > 10 &&
        Math.floor(Math.random() * 200) === 0 &&
        idleAnimation === null
      ) {
        const choices: SpriteName[] = ["sleeping", "scratchSelf"];
        if (nekoPosX < 32) choices.push("scratchWallW");
        if (nekoPosY < 32) choices.push("scratchWallN");
        if (nekoPosX > innerWidth - 32) choices.push("scratchWallE");
        if (nekoPosY > innerHeight - 32) choices.push("scratchWallS");
        idleAnimation =
          choices[Math.floor(Math.random() * choices.length)] ?? null;
      }
      switch (idleAnimation) {
        case "sleeping":
          if (idleAnimationFrame < 8) {
            setSprite("tired", 0);
            break;
          }
          setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
          if (idleAnimationFrame > 192) resetIdleAnimation();
          break;
        case "scratchWallN":
        case "scratchWallS":
        case "scratchWallE":
        case "scratchWallW":
        case "scratchSelf":
          setSprite(idleAnimation, idleAnimationFrame);
          if (idleAnimationFrame > 9) resetIdleAnimation();
          break;
        default:
          setSprite("idle", 0);
          return;
      }
      idleAnimationFrame += 1;
    };
    const tick = () => {
      frameCount += 1;
      const diffX = nekoPosX - mousePosX;
      const diffY = nekoPosY - mousePosY;
      const distance = Math.hypot(diffX, diffY);
      if (distance < 48) {
        idle();
        return;
      }
      resetIdleAnimation();
      if (idleTime > 1) {
        setSprite("alert", 0);
        idleTime = Math.min(idleTime, 7) - 1;
        return;
      }
      const northSouth =
        diffY / distance > 0.5 ? "N" : diffY / distance < -0.5 ? "S" : "";
      const westEast =
        diffX / distance > 0.5 ? "W" : diffX / distance < -0.5 ? "E" : "";
      const direction: SpriteName | "" = `${northSouth}${westEast}`;
      if (direction) setSprite(direction, frameCount);
      const step = Math.min(10 * readSpeed(), distance);
      nekoPosX -= (diffX / distance) * step;
      nekoPosY -= (diffY / distance) * step;
      nekoPosX = Math.min(Math.max(16, nekoPosX), innerWidth - 16);
      nekoPosY = Math.min(Math.max(16, nekoPosY), innerHeight - 16);
      cat.style.left = `${nekoPosX - 16}px`;
      cat.style.top = `${nekoPosY - 16}px`;
    };
    const handleMouseMove = (event: MouseEvent) => {
      mousePosX = event.clientX;
      mousePosY = event.clientY;
    };
    document.addEventListener("mousemove", handleMouseMove);
    let lastFrameAt = performance.now();
    let rafId = 0;
    const onAnimationFrame = (now: number) => {
      rafId = requestAnimationFrame(onAnimationFrame);
      if (now - lastFrameAt < Math.max(16, 100 / readSpeed())) return;
      lastFrameAt = now;
      tick();
    };
    rafId = requestAnimationFrame(onAnimationFrame);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [isReducedMotion]);
  return (
    <div
      ref={catRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-4 left-4 z-2147483647 size-8 bg-[url(/neko.gif)] bg-position-[-96px_-96px] [image-rendering:pixelated] motion-reduce:hidden"
    />
  );
}
