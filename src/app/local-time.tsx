"use client";

import { useSyncExternalStore } from "react";

const format = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Boise",
  hour: "numeric",
  minute: "2-digit",
});

function subscribe(callback: () => void) {
  const id = setInterval(callback, 15_000);
  return () => clearInterval(id);
}

export function LocalTime() {
  const time = useSyncExternalStore(
    subscribe,
    () => format.format(new Date()),
    () => null,
  );

  if (!time) return null;

  return (
    <span className="tabular-nums">
      <span aria-hidden> · </span>
      {time} local time
    </span>
  );
}
