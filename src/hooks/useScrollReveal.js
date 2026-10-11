import { useEffect } from "react";

/**
 * Plays the reveal animation every time an element enters the viewport.
 * Resets when it leaves so it can animate again on next entry.
 * Elements added after mount (tab filters, route content) are picked up too.
 */
export function useScrollReveal() {
  useEffect(() => {
    const collect = (root) =>
      root.querySelectorAll ? Array.from(root.querySelectorAll(".joc-reveal")) : [];

    if (!("IntersectionObserver" in window)) {
      const showAll = () => collect(document).forEach((el) => el.classList.add("joc-visible"));
      showAll();
      const mo = new MutationObserver(showAll);
      mo.observe(document.body, { childList: true, subtree: true });
      return () => mo.disconnect();
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

    collect(document).forEach((el) => observer.observe(el));

    // Observe reveal elements rendered later, e.g. after switching a filter tab.
    const mutations = new MutationObserver((records) => {
      records.forEach((record) =>
        record.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.classList.contains("joc-reveal")) observer.observe(node);
          collect(node).forEach((el) => observer.observe(el));
        })
      );
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);
}
