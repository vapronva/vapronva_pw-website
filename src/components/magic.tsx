import { ViewTransition, type ReactNode } from "react";

export default function Magic({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  return (
    <ViewTransition name={name} share="magic" default="none">
      {children}
    </ViewTransition>
  );
}
