import { useLang } from "@/i18n/LanguageProvider";

/**
 * The human side: who leads Bigeye Blue, in her own words.
 */
export function AboutSection() {
  const { t } = useLang();

  return (
    <section id="about" className="container-wide pb-28 md:pb-40 scroll-mt-24">
      <p className="plate-label mb-10 reveal">{t.about.label}</p>

      <div className="md:grid md:grid-cols-12 md:gap-x-12">
        <div className="md:col-start-1 md:col-span-7 reveal">
          <blockquote className="text-2xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight font-semibold">
            <span className="text-accent">“</span>
            {t.about.quote}
            <span className="text-accent">”</span>
          </blockquote>
        </div>

        <div className="md:col-start-9 md:col-span-4 mt-10 md:mt-3 reveal reveal-delay-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-foreground/50">
            {t.about.title}
          </p>
          <p className="mt-4 body-copy">{t.about.body}</p>
          <a href="#contact" className="btn-quiet mt-8 inline-block">
            {t.about.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
