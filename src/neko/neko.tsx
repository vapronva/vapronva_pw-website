import React, { useEffect, useRef } from "react";

// based on github.com/adryd325/oneko.js

type Sprite = [number, number];

const spriteSets = {
  idle: [[-3, -3]] as Sprite[],
  alert: [[-7, -3]] as Sprite[],
  scratchSelf: [
    [-5, 0],
    [-6, 0],
    [-7, 0],
  ] as Sprite[],
  scratchWallN: [
    [0, 0],
    [0, -1],
  ] as Sprite[],
  scratchWallS: [
    [-7, -1],
    [-6, -2],
  ] as Sprite[],
  scratchWallE: [
    [-2, -2],
    [-2, -3],
  ] as Sprite[],
  scratchWallW: [
    [-4, 0],
    [-4, -1],
  ] as Sprite[],
  tired: [[-3, -2]] as Sprite[],
  sleeping: [
    [-2, 0],
    [-2, -1],
  ] as Sprite[],
  N: [
    [-1, -2],
    [-1, -3],
  ] as Sprite[],
  NE: [
    [0, -2],
    [0, -3],
  ] as Sprite[],
  E: [
    [-3, 0],
    [-3, -1],
  ] as Sprite[],
  SE: [
    [-5, -1],
    [-5, -2],
  ] as Sprite[],
  S: [
    [-6, -3],
    [-7, -2],
  ] as Sprite[],
  SW: [
    [-5, -3],
    [-6, -1],
  ] as Sprite[],
  W: [
    [-4, -2],
    [-4, -3],
  ] as Sprite[],
  NW: [
    [-1, 0],
    [-1, -1],
  ] as Sprite[],
} as const;

type SpriteName = keyof typeof spriteSets;

interface OnekoProps {
  catUrl?: string;
  speed?: number;
}

const Neko: React.FC<OnekoProps> = ({ catUrl = "/neko.gif", speed = 1 }) => {
  const catRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const factor = Math.max(0.1, speed); // don’t allow zero/neg
    const isReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isReducedMotion || !catRef.current) {
      return;
    }
    const nekoEl = catRef.current;
    let nekoPosX = 32;
    let nekoPosY = 32;
    let mousePosX = 0;
    let mousePosY = 0;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation: SpriteName | null = null;
    let idleAnimationFrame = 0;
    const nekoSpeed = 10 * factor;
    const frameDelay = Math.max(16, 100 / factor); // ms between frames
    const setSprite = (name: SpriteName, frame: number) => {
      const sprite = spriteSets[name][frame % spriteSets[name].length];
      if (!sprite) {
        console.warn(`Sprite "${name}" frame ${frame} not found`);
        return;
      }
      nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
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
        if (nekoPosX < 32) {
          choices.push("scratchWallW");
        }
        if (nekoPosY < 32) {
          choices.push("scratchWallN");
        }
        if (nekoPosX > window.innerWidth - 32) {
          choices.push("scratchWallE");
        }
        if (nekoPosY > window.innerHeight - 32) {
          choices.push("scratchWallS");
        }
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
          if (idleAnimationFrame > 192) {
            resetIdleAnimation();
          }
          break;
        case "scratchWallN":
        case "scratchWallS":
        case "scratchWallE":
        case "scratchWallW":
        case "scratchSelf":
          setSprite(idleAnimation, idleAnimationFrame);
          if (idleAnimationFrame > 9) {
            resetIdleAnimation();
          }
          break;
        default:
          setSprite("idle", 0);
          return;
      }
      idleAnimationFrame += 1;
    };
    const frame = () => {
      frameCount += 1;
      const diffX = nekoPosX - mousePosX;
      const diffY = nekoPosY - mousePosY;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);
      if (distance < nekoSpeed || distance < 48) {
        idle();
        return;
      }
      idleAnimation = null;
      idleAnimationFrame = 0;
      if (idleTime > 1) {
        setSprite("alert", 0);
        idleTime = Math.min(idleTime, 7);
        idleTime -= 1;
        return;
      }
      let direction = "";
      direction += diffY / distance > 0.5 ? "N" : "";
      direction += diffY / distance < -0.5 ? "S" : "";
      direction += diffX / distance > 0.5 ? "W" : "";
      direction += diffX / distance < -0.5 ? "E" : "";
      setSprite(direction as SpriteName, frameCount);
      nekoPosX -= (diffX / distance) * nekoSpeed;
      nekoPosY -= (diffY / distance) * nekoSpeed;
      nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
      nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);
      nekoEl.style.left = `${nekoPosX - 16}px`;
      nekoEl.style.top = `${nekoPosY - 16}px`;
    };
    Object.assign(nekoEl.style, {
      width: "32px",
      height: "32px",
      position: "fixed",
      pointerEvents: "none",
      imageRendering: "pixelated",
      left: `${nekoPosX - 16}px`,
      top: `${nekoPosY - 16}px`,
      zIndex: "2147483647",
      backgroundImage: `url(${catUrl})`,
    } as CSSStyleDeclaration);
    const handleMouseMove = (e: MouseEvent) => {
      mousePosX = e.clientX;
      mousePosY = e.clientY;
    };
    document.addEventListener("mousemove", handleMouseMove);
    let lastTs: number | undefined;
    let rafId = 0;
    const onAnimationFrame = (ts: number) => {
      if (!nekoEl.isConnected) {
        return;
      }
      /* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */
      if (lastTs === undefined) {
        lastTs = ts;
      }
      if (ts - lastTs > frameDelay) {
        lastTs = ts;
        frame();
      }
      rafId = window.requestAnimationFrame(onAnimationFrame);
    };
    rafId = window.requestAnimationFrame(onAnimationFrame);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.cancelAnimationFrame(rafId);
    };
  }, [catUrl, speed]);
  return <div ref={catRef} aria-hidden="true" />;
};

export default Neko;
