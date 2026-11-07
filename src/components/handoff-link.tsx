"use client";

import { use, type ComponentProps } from "react";

import { HandoffContext } from "~/components/handoff";

export default function HandoffLink(props: ComponentProps<"a">) {
  return <a {...props} onClick={use(HandoffContext)} />;
}
