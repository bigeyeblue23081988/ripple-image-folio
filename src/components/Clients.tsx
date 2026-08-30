import { clients } from "@/data/clients";

/**
 * The client list as a slowly drifting constellation of names.
 * Each mark fades up in sequence when the section comes into view,
 * then keeps breathing on its own timing. Hovering one name dims
 * the rest, so the whole field reads as a single moving object.
 */
export function Clients() {
  return (
    <>
      {/* Desktop — drifting constellation */}
      <div
        className="hidden md:block relative group/field"
        style={{ height: 400 }}
      >
        {clients.map((client, i) => (
          <span
            key={client.name}
            className="client-mark absolute -translate-x-1/2 whitespace-nowrap text-sm tracking-[0.18em] text-foreground/85 cursor-default transition-[opacity,color] duration-500 group-hover/field:opacity-25 hover:!opacity-100 hover:text-foreground"
            style={{
              left: `${client.x}%`,
              top: client.y,
              animationDelay: `${i * 0.09}s, ${i * 0.7}s`,
              animationDuration: `1s, ${9 + (i % 4) * 2.5}s`,
            }}
          >
            {client.name}
          </span>
        ))}
      </div>

      {/* Mobile — endless ticker */}
      <div className="md:hidden relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
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
