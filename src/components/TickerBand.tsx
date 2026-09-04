import { useLang } from "@/i18n/LanguageProvider";

/**
 * A full-bleed black ticker band: the disciplines scroll endlessly,
 * separated by gold asterisks. Each word links to its section, so the
 * band is navigation as well as energy.
 */
export function TickerBand({ className = "" }: { className?: string }) {
  const { t } = useLang();
  const row = [...t.ticker, ...t.ticker];
  return (
    <div
      className={`relative overflow-hidden bg-foreground py-4 md:py-5 select-none ${className}`}
    >
      <div className="flex w-max animate-marquee items-center gap-8 md:gap-12">
        {[...row, ...row].map((item, i) => (
          <span key={i} className="flex items-center gap-8 md:gap-12">
            <a
              href={item.href}
              tabIndex={i < t.ticker.length ? 0 : -1}
              aria-hidden={i >= t.ticker.length}
              className="whitespace-nowrap text-sm md:text-base font-bold uppercase tracking-[0.2em] text-background transition-colors duration-300 hover:text-accent focus-visible:text-accent"
            >
              {item.label}
            </a>
            <span aria-hidden className="text-accent text-lg leading-none">
              ✳
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
