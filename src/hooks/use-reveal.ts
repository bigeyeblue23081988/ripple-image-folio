import { useEffect } from "react";

/**
 * Adds `is-visible` to every `.reveal` element once it scrolls into view.
 * Keeps the scattered editorial sections calm on load and lets them
 * settle in one at a time as you move down the page.
 *
 * Re-runs when `dep` changes (e.g. language switch), so freshly rendered
 * sections are observed again instead of staying invisible.
 */
export function useReveal(dep?: unknown) {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let raf = 0;

    const setup = () => {
      const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
      if (nodes.length === 0) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion || !("IntersectionObserver" in window)) {
        nodes.forEach((n) => n.classList.add("is-visible"));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
      );

      nodes.forEach((n) => observer!.observe(n));
    };

    // Wait one frame so freshly mounted nodes (e.g. after a language
    // switch remount) are in the DOM before we query them.
    raf = requestAnimationFrame(setup);

    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, [dep]);
}
