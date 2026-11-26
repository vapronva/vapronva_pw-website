"use client";

import {
  addTransitionType,
  createContext,
  startTransition,
  useLayoutEffect,
  useRef,
  useState,
  ViewTransition,
  type MouseEventHandler,
  type ReactNode,
} from "react";
import { flushSync, preconnect } from "react-dom";

const REVEAL_MS = 800;

type Departure = {
  x: number;
  y: number;
  fallbackTimer: number;
  leave: () => void;
};

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
  const isDeparting = useRef(false);
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
            if (isDeparting.current) return;
            isDeparting.current = true;
            const { href } = event.currentTarget;
            const { x, y, width, height } =
              event.currentTarget.getBoundingClientRect();
            preconnect(href);
            const abandon = new AbortController();
            let hasLeft = false;
            const leave = () => {
              if (hasLeft || abandon.signal.aborted) return;
              hasLeft = true;
              if (process.env.NODE_ENV === "development") return;
              location.assign(href);
            };
            const stay = () => {
              abandon.abort();
              isDeparting.current = false;
              flushSync(() => setDeparture(null));
              Array.from(document.links)
                .find((link) => link.href === href)
                ?.focus();
            };
            addEventListener("pagehide", stay, { signal: abandon.signal });
            addEventListener(
              "keydown",
              (keyEvent) => {
                if (keyEvent.key === "Escape") stay();
              },
              { signal: abandon.signal },
            );
            window.navigation?.addEventListener("navigateerror", stay, {
              signal: abandon.signal,
            });
            const fallbackTimer = window.setTimeout(leave, REVEAL_MS);
            startTransition(() => {
              addTransitionType("handoff");
              setDeparture({
                x: x + width / 2,
                y: y + height / 2,
                fallbackTimer,
                leave,
              });
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
        const { x, y, fallbackTimer, leave } = departure;
        clearTimeout(fallbackTimer);
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
        void reveal.finished.then(leave, leave);
        return () => reveal.cancel();
      }}
    >
      <div inert>{to}</div>
    </ViewTransition>
  );
}
