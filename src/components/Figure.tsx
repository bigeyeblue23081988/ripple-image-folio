interface FigureProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Gallery-style plate number, e.g. "01". */
  index?: string;
  /** Short caption shown beside the plate number. */
  caption?: string;
  className?: string;
  priority?: boolean;
}

/**
 * A framed photograph. The frame clips a slow zoom on hover and a
 * hairline caption sits underneath, the way a plate is labelled in a
 * gallery guide.
 */
export function Figure({
  src,
  alt,
  width,
  height,
  index,
  caption,
  className = "",
  priority = false,
}: FigureProps) {
  return (
    <figure className={`group ${className}`}>
      <div className="overflow-hidden bg-secondary">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          className="w-full h-auto transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
        />
      </div>

      {(index || caption) && (
        <figcaption className="mt-3 flex items-baseline gap-3 border-t border-separator pt-2">
          {index && (
            <span className="text-[10px] tabular-nums tracking-[0.2em] text-foreground/45">
              {index}
            </span>
          )}
          {caption && (
            <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/55">
              {caption}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
