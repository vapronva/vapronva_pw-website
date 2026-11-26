"use client";

import { createContext, use, useState, type ReactNode } from "react";

import Neko from "~/components/neko";
import Starfield from "~/components/starfield";

type SceneControls = {
  isStarry: boolean;
  nekoSpeed: number;
  toggleStarfield: () => void;
  speedUpNeko: () => void;
};

const SceneContext = createContext<SceneControls | null>(null);

export function useSceneControls() {
  const controls = use(SceneContext);
  if (!controls)
    throw new Error("useSceneControls must be used inside <SceneProvider>");
  return controls;
}

export function SceneProvider({ children }: { children: ReactNode }) {
  const [isStarry, setIsStarry] = useState(false);
  const [nekoSpeed, setNekoSpeed] = useState(1);
  return (
    <SceneContext
      value={{
        isStarry,
        nekoSpeed,
        toggleStarfield: () => setIsStarry((wasStarry) => !wasStarry),
        speedUpNeko: () => setNekoSpeed((speed) => speed + 7.5),
      }}
    >
      {children}
    </SceneContext>
  );
}

export default function Scene({ children }: { children: ReactNode }) {
  const { isStarry, nekoSpeed } = useSceneControls();
  return (
    <>
      <Neko speed={nekoSpeed} />
      <div
        id="about"
        data-look={isStarry ? "glass" : "photo"}
        className="relative flex flex-1 flex-col justify-center overflow-hidden bg-linear-to-r from-deep-slate via-deep-regal-blue to-deep-gray p-3 sm:px-0 sm:py-6"
      >
        {isStarry ? <Starfield /> : null}
        <div className="relative z-10">{children}</div>
      </div>
    </>
  );
}
