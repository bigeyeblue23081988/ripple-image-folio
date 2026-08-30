import { useEffect } from "react";

/**
 * Subtle scroll parallax: every element marked `data-parallax` drifts
 * vertically as it travels through the viewport. Used on figure image
 * wrappers (which are pre-scaled so no gaps appear). Calm, not showy.
 */
export function useParallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    if (nodes.length === 0) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const node of nodes) {
        const rect = node.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > vh + 100) continue;
        // -1 (below viewport) → 0 (centre) → 1 (above viewport)
        const progress = (vh / 2 - (rect.top + rect.height / 2)) / vh;
        const drift = progress * 28;
        node.style.transform = `translateY(${drift.toFixed(1)}px)`;
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}
