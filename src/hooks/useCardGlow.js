import { useMemo } from "react";

/**
 * Returns props that track the pointer inside a card so CSS can render a
 * glow that follows the cursor (`--jochome-mx` / `--jochome-my`).
 */
export function useCardGlow() {
  return useMemo(
    () => ({
      onMouseMove: (e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--jochome-mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--jochome-my", `${e.clientY - rect.top}px`);
      },
    }),
    []
  );
}