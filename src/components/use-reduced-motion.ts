import { useSyncExternalStore } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mediaQuery = matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

export default function useReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}
