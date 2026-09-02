interface FigureProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Gallery index number, e.g. "01". Shown as a "01 / 07" chip. */
  index?: string;
  /** Work title shown next to the hairline tick. */
  caption?: string;
  /** Small secondary line under the title (e.g. location). */
  sub?: string;
  className?: string;
  priority?: boolean;
}

/** Total number of plates in the series, for the "01 / 07" chip. */
const PLATE_TOTAL = "07";

/**
 * A framed photograph labelled the way a contemporary gallery labels a
 * work: a hairline tick, the title in small caps, and a dark index chip.
 */
export function Figure({
  src,
  alt,
  width,
  height,
  index,
  caption,
  sub,
  className = "",
  priority = false,
}: FigureProps) {
  return (
    <figure className={`group ${className}`}>
      <div className="overflow-hidden bg-secondary">
        <div className="parallax-inner">
          <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          {...(priority ? { fetchpriority: "high" } : {})}
          className="w-full h-auto transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
          />
        </div>
      </div>

      {(index || caption) && (
        <figcaption className="mt-5 flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <span
              aria-hidden
              className="mt-0.5 block h-9 w-px shrink-0 bg-foreground"
            />
            <div>
              {caption && (
                <p className="text-xs font-semibold uppercase tracking-wider">
                  {caption}
                </p>
              )}
              {sub && (
                <p className="mt-1 text-[10px] font-light uppercase tracking-[0.18em] text-foreground/50">
                  {sub}
                </p>
              )}
            </div>
          </div>
          {index && (
            <span className="gold-shimmer shrink-0 bg-foreground px-1.5 py-0.5 font-mono text-[10px] tracking-tight tabular-nums text-background transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
              {index} / {PLATE_TOTAL}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
