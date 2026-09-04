import { useLang } from "@/i18n/LanguageProvider";

/**
 * A full-bleed royal-blue band that breaks the page rhythm with the
 * brand promise. Placed between the service description and the director
 * story so the eye gets a moment of contrast before the human section.
 */
export function StatementBand() {
  const { t } = useLang();

  return (
    <section className="bg-ink text-ink-foreground">
      <div className="container-wide py-20 md:py-32">
        <div className="flex items-start gap-5 md:gap-8 reveal">
          <span
            aria-hidden
            className="mt-2 md:mt-4 h-2 w-2 md:h-3 md:w-3 rounded-full bg-accent shrink-0"
          />
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-foreground/50">
              {t.statement.label}
            </p>
            <p className="mt-4 md:mt-5 text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight">
              <span className="block font-bold">{t.statement.line1}</span>
              <span className="block">{t.statement.line2}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
