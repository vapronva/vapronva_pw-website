"use client";

import { useSceneControls } from "~/components/scene";

export default function SceneControls() {
  const { isStarry, toggleStarfield, speedUpNeko } = useSceneControls();
  return (
    <>
      <button
        className="drop-shadow-glow_sm transition duration-200 ease-in-out hover:drop-shadow-glow_lg_2 focus:outline-hidden"
        onClick={speedUpNeko}
      >
        Meow :)
      </button>{" "}
      <button
        className="drop-shadow-glow_sm transition duration-200 ease-in-out hover:drop-shadow-glow_lg_2 focus:outline-hidden"
        onClick={toggleStarfield}
      >
        {isStarry ? "Sparks!" : "Stars!"}
      </button>
    </>
  );
}
