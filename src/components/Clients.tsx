import { clients } from "@/data/clients";

/**
 * The client list as a slowly drifting constellation of names.
 * Each mark fades up in sequence once the section comes into view,
 * then keeps breathing on its own timing. Hovering one name dims
 * the rest, so the whole field reads as a single moving object.
 *
 * The outer span owns the layout transform (`-translate-x-1/2`) and the
 * inner span owns the animated transform, so the two never collide.
 */
export function Clients() {
  return (
    <>
      {/* Desktop — drifting constellation */}
      <div className="hidden md:block relative group/field" style={{ height: 400 }}>
        {clients.map((client, i) => (
          <span
            key={client.name}
            className="absolute -translate-x-1/2 whitespace-nowrap"
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
