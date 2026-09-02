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

        <dl className="md:col-start-6 md:col-span-7 mt-8 md:mt-2 reveal reveal-delay-1">
          {t.facts.items.map((item) => (
            <div
              key={item.k}
              className="grid grid-cols-1 sm:grid-cols-[minmax(8rem,10rem)_1fr] gap-1 sm:gap-6 border-t border-separator py-4"
            >
              <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-foreground/50">
                {item.k}
              </dt>
              <dd className="body-copy">{item.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
