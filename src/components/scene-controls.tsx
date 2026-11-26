"use client";

import { useSceneControls } from "~/components/scene";

export default function SceneControls() {
  const { isStarry, toggleStarfield, speedUpNeko } = useSceneControls();
  return (
    <>
      <button
        className="drop-shadow-glow_sm transition hover:drop-shadow-glow_lg_2 motion-reduce:hidden"
        onClick={speedUpNeko}
      >
        Meow :)
      </button>{" "}
      <button
        className="drop-shadow-glow_sm transition hover:drop-shadow-glow_lg_2"
        onClick={toggleStarfield}
      >
        {isStarry ? "Sparks!" : "Stars!"}
      </button>
    </>
  );
}
