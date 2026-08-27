import { useEffect } from "react";

/**
 * Plays the reveal animation every time an element enters the viewport.
 * Resets when it leaves so it can animate again on next entry.
 */
export function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".joc-reveal"));

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("joc-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;

          if (entry.isIntersecting) {
            // Reset first
            el.classList.remove("joc-visible");

            // Force browser reflow so the animation can restart
            void el.offsetWidth;

            // Play animation
            el.classList.add("joc-visible");
          } else {
            // Reset when leaving viewport
            el.classList.remove("joc-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}