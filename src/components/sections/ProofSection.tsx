import { useLang } from "@/i18n/LanguageProvider";

/**
 * Proof: awards and nominations as a full-bleed royal-blue band with
 * cream type — the graphic pause in the middle of the page.
 */
export function ProofSection() {
  const { t } = useLang();

  return (
    <section className="bg-ink text-ink-foreground mb-28 md:mb-44">
      <div className="container-wide py-20 md:py-32">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-foreground/50 reveal">
          {t.proof.label}
        </p>

        <div className="mt-10 md:mt-14 md:grid md:grid-cols-12 md:gap-x-12">
          <h2 className="statement md:col-start-1 md:col-span-4 reveal">
            <strong>
              {t.proof.title}
              <span className="text-accent">.</span>
            </strong>
          </h2>

          <ul className="md:col-start-6 md:col-span-7 mt-8 md:mt-2 reveal reveal-delay-1">
            {t.proof.items.map((item) => (
              <li
                key={item.k}
                className="border-t border-ink-foreground/20 py-5 md:py-6"
              >
                <p className="text-lg md:text-2xl font-bold tracking-tight">
                  {item.k}
                </p>
                <p className="mt-1.5 text-sm md:text-base leading-relaxed text-ink-foreground/70">
                  {item.v}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
