const items = [
  "Documentary",
  "Podcast",
  "Reportage",
  "Interviews",
  "Branded stories",
  "Studio",
  "Guesthouse",
];

/**
 * A full-bleed black ticker band: the disciplines scroll endlessly,
 * separated by gold asterisks. A shot of modern energy between the
 * calm gallery sections.
 */
export function TickerBand({ className = "" }: { className?: string }) {
  const row = [...items, ...items];
  return (
    <div
      aria-hidden
      className={`relative overflow-hidden bg-foreground py-4 md:py-5 select-none ${className}`}
    >
      <div className="flex w-max animate-marquee items-center gap-8 md:gap-12">
        {[...row, ...row].map((item, i) => (
          <span key={i} className="flex items-center gap-8 md:gap-12">
            <span className="whitespace-nowrap text-sm md:text-base font-bold uppercase tracking-[0.2em] text-background">
              {item}
            </span>
            <span className="text-accent text-lg leading-none">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
