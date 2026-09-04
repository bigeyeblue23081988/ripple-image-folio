import { useLang } from "@/i18n/LanguageProvider";

export function ContactSection() {
  const { t } = useLang();

  return (
    <section id="contact" className="bg-ink text-ink-foreground scroll-mt-24">
      <div className="container-wide py-24 md:py-40">
        <p className="plate-label plate-label--invert mb-14 md:mb-20 reveal">
          {t.contact.label}
        </p>

        <div className="md:grid md:grid-cols-12 md:gap-x-12">
          <h2 className="md:col-start-1 md:col-span-6 text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight reveal">
            {t.contact.title.replace(/[?.!]$/, "")}
            {t.contact.title.match(/[?.!]$/)?.[0] === "?" ? (
              <span className="relative inline-block" aria-hidden="true">
                <span className="text-ink-foreground [clip-path:inset(0_0_28%_0)]">?</span>
                <span className="absolute inset-0 text-accent [clip-path:inset(68%_0_0_0)]">?</span>
              </span>
            ) : (
              <span className="text-accent">
                {t.contact.title.match(/[?.!]$/)?.[0] ?? "."}
              </span>
            )}
          </h2>

          <p className="md:col-start-8 md:col-span-5 mt-6 md:mt-3 text-base md:text-lg leading-relaxed text-ink-foreground/80 reveal reveal-delay-1">
            {t.contact.body}
          </p>
        </div>

        <div className="mt-14 md:mt-20 reveal">
          <div>
            <a
              href="mailto:office@bigeyeblue.be"
              className="inline-block text-2xl sm:text-4xl md:text-5xl font-light tracking-tight hover:text-accent focus-visible:outline-none focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
            >
              office@bigeyeblue.be
            </a>
          </div>
          <div className="mt-3">
            <a
              href="tel:+32472715544"
              className="inline-block text-2xl sm:text-4xl md:text-5xl font-light tracking-tight hover:text-accent focus-visible:outline-none focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
            >
              +32 472 71 55 44
            </a>
          </div>

          <a
            href="mailto:office@bigeyeblue.be"
            className="mt-10 inline-block bg-ink-foreground px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            {t.contact.cta} →
          </a>
        </div>
      </div>
    </section>
  );
}
