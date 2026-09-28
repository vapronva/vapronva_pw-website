"use client";

import { createContext, use, useMemo, useState, type ReactNode } from "react";

import Neko from "~/components/neko";
import Starfield from "~/components/starfield";

type SceneControls = {
  isStarry: boolean;
  toggleStarfield: () => void;
  speedUpNeko: () => void;
};

const SceneContext = createContext<SceneControls | null>(null);

export function useSceneControls() {
  const controls = use(SceneContext);
  if (!controls)
    throw new Error("useSceneControls must be used inside <Scene>");
  return controls;
}

export default function Scene({ children }: { children: ReactNode }) {
  const [isStarry, setIsStarry] = useState(true);
  const [nekoSpeed, setNekoSpeed] = useState(1);
  const controls = useMemo(
    () => ({
      isStarry,
      toggleStarfield: () => setIsStarry((wasStarry) => !wasStarry),
      speedUpNeko: () => setNekoSpeed((speed) => speed + 7.5),
    }),
    [isStarry],
  );
  return (
    <SceneContext value={controls}>
      <Neko speed={nekoSpeed} />
      <div
        id="about"
        data-look={isStarry ? "glass" : "photo"}
        className="relative flex flex-col justify-center overflow-hidden bg-linear-to-r from-deep-slate via-deep-regal-blue to-deep-gray px-3 py-3 sm:px-0 sm:py-6"
      >
        {isStarry ? <Starfield /> : null}
        <div className="relative z-10">{children}</div>
      </div>
    </SceneContext>
  );
}
