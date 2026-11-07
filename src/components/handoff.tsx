"use client";

import {
  addTransitionType,
  createContext,
  startTransition,
  useLayoutEffect,
  useState,
  ViewTransition,
  type MouseEventHandler,
  type ReactNode,
} from "react";
import { flushSync } from "react-dom";

const REVEAL_MS = 800;

type Departure = { x: number; y: number };

export const HandoffContext = createContext<
  MouseEventHandler<HTMLAnchorElement> | undefined
>(undefined);

function canAnimate() {
  return (
    CSS.supports("selector(:active-view-transition-type(handoff))") &&
    !matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function Handoff({
  to,
  children,
}: {
  to: ReactNode;
  children: ReactNode;
}) {
  const [departure, setDeparture] = useState<Departure | null>(null);
  useLayoutEffect(() => {
    if (departure) scrollTo(0, 0);
  }, [departure]);
  if (!departure)
    return (
      <ViewTransition key="from" exit="handoff" default="none">
        <HandoffContext
          value={(event) => {
            const isPlainClick =
              event.button === 0 &&
              !event.metaKey &&
              !event.ctrlKey &&
              !event.shiftKey &&
              !event.altKey;
            if (!isPlainClick || !canAnimate()) return;
            event.preventDefault();
            const { href } = event.currentTarget;
            const { x, y, width, height } =
              event.currentTarget.getBoundingClientRect();
            const abandon = new AbortController();
            const stay = () => {
              abandon.abort();
              flushSync(() => setDeparture(null));
            };
            addEventListener("pagehide", stay, { signal: abandon.signal });
            window.navigation?.addEventListener("navigateerror", stay, {
              signal: abandon.signal,
            });
            setTimeout(() => {
              if (abandon.signal.aborted) return;
              if (process.env.NODE_ENV === "development") return;
              location.assign(href);
            }, REVEAL_MS);
            startTransition(() => {
              addTransitionType("handoff");
              setDeparture({ x: x + width / 2, y: y + height / 2 });
            });
          }}
        >
          {children}
        </HandoffContext>
      </ViewTransition>
    );
  return (
    <ViewTransition
      key="to"
      enter="handoff"
      default="none"
      onEnter={(instance) => {
        const { x, y } = departure;
        const radius = Math.hypot(
          Math.max(x, innerWidth - x),
          Math.max(y, innerHeight - y),
        );
        const reveal = instance.new.animate(
          {
            clipPath: [
              `circle(0 at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          { duration: REVEAL_MS, easing: "cubic-bezier(0.4, 0, 0.2, 1)" },
        );
        return () => reveal.cancel();
      }}
    >
      {to}
    </ViewTransition>
  );
}
