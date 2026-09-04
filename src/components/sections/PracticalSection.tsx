import { useLang } from "@/i18n/LanguageProvider";

/**
 * Trust block: the concrete, practical facts a visitor needs before
 * they get in touch — location, what's available, what happens next.
 */
export function PracticalSection() {
  const { t } = useLang();

  return (
    <section id="practical" className="container-wide pb-28 md:pb-40 scroll-mt-24">
      <p className="plate-label mb-10 reveal">{t.facts.label}</p>

      <div className="md:grid md:grid-cols-12 md:gap-x-12">
        <h2 className="statement md:col-start-1 md:col-span-4 reveal">
          <strong>
            {t.facts.title}
            <span className="text-accent">.</span>
          </strong>
        </h2>

        {/* Desktop — definition list */}
        <dl className="hidden md:grid md:col-start-6 md:col-span-7 mt-8 md:mt-2 reveal reveal-delay-1">
          {t.facts.items.map((item) => (
            <div
              key={item.k}
              className="grid grid-cols-[minmax(8rem,10rem)_1fr] gap-6 border-t border-separator py-4"
            >
              <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-foreground/50">
                {item.k}
              </dt>
              <dd className="body-copy">{item.v}</dd>
            </div>
          ))}
        </dl>

        {/* Mobile — designed info cards */}
        <div className="md:hidden mt-8 reveal reveal-delay-1">
          <div className="grid grid-cols-2 gap-3">
            {t.facts.items.map((item, i) => (
              <div
                key={item.k}
                className="relative border-t-2 border-accent bg-secondary/40 p-4"
              >
                <span className="absolute -top-2.5 left-4 bg-background px-1 text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground/50">
                  {item.k}
                </p>
                <p className="mt-2 text-sm leading-snug text-foreground/90">
                  {item.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
