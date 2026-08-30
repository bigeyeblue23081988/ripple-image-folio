/**
 * A slowly rotating circular text badge — "Bigeye Blue • Studio • Ghent •" —
 * in gallery gold, with a gold asterisk at the centre. Sits on the hero
 * image corner like a foil stamp on a gallery catalogue.
 */
export function SpinningBadge({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none relative h-28 w-28 md:h-36 md:w-36 ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full animate-spin-slow"
      >
        <defs>
          <path
            id="badge-circle"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text
          className="fill-accent font-bold uppercase"
          style={{ fontSize: 10.5, letterSpacing: "0.22em" }}
        >
          <textPath href="#badge-circle">
            Bigeye Blue • Studio • Ghent •
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center text-accent text-2xl md:text-3xl">
        ✳
      </span>
    </div>
  );
}
