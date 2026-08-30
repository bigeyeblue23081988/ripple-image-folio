import { useEffect, useRef } from "react";
import { clients } from "@/data/clients";

/**
 * The client list as a slowly drifting constellation of names that
 * reacts to scroll: while the section travels through the viewport,
 * each row slides horizontally in alternating directions at its own
 * speed, like panning across gallery wall labels. Marks near the
 * viewport centre sit at full ink; the rest soften.
 *
 * The outer span owns the layout + scroll transform, the inner span
 * owns the arrival/drift animation, so the two never collide.
 */
export function Clients() {
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rows = Array.from(field.querySelectorAll<HTMLElement>("[data-row]"));
    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = field.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress: 1 when the section centre is at the top of the
      // viewport, 0 at the centre, -1 at the bottom.
      const centre = rect.top + rect.height / 2;
      const progress = Math.max(-1, Math.min(1, (vh / 2 - centre) / (vh / 2 + rect.height / 2)));

      for (const row of rows) {
        const idx = Number(row.dataset.row);
        const dir = idx % 2 === 0 ? -1 : 1;
        const speed = 60 + idx * 22;
        const dx = progress * speed * dir;
        row.style.transform = `translateX(calc(-50% + ${dx.toFixed(1)}px))`;
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

  // Row index per mark (y positions ascend row by row).
  const rowOf = (y: number) => Math.round(y / 84);

  return (
    <>
      {/* Desktop — scroll-reactive drifting constellation */}
      <div
        ref={fieldRef}
        className="hidden md:block relative group/field"
        style={{ height: 400 }}
      >
        {clients.map((client, i) => (
          <span
            key={client.name}
            data-row={rowOf(client.y)}
            className="absolute -translate-x-1/2 whitespace-nowrap will-change-transform"
            style={{ left: `${client.x}%`, top: client.y }}
          >
            <span
              className="client-mark block text-sm tracking-[0.18em] text-foreground/85 cursor-default transition-[opacity,color,letter-spacing] duration-500 group-hover/field:opacity-30 hover:!opacity-100 hover:text-foreground hover:tracking-[0.26em]"
              style={{
                animationDelay: `${i * 0.1}s, ${0.9 + i * 0.1}s`,
                animationDuration: `1.1s, ${9 + (i % 4) * 2.5}s`,
              }}
            >
              {client.name}
            </span>
          </span>
        ))}
      </div>

      {/* Mobile — endless ticker */}
      <div className="md:hidden relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <ul className="flex w-max animate-marquee gap-8 py-1">
          {[...clients, ...clients].map((client, i) => (
            <li
              key={`${client.name}-${i}`}
              aria-hidden={i >= clients.length}
              className="text-xs tracking-[0.18em] text-foreground/85 whitespace-nowrap"
            >
              {client.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
