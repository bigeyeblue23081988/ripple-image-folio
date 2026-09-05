import { useLang } from "@/i18n/LanguageProvider";

export function IntroSection() {
  const { t } = useLang();

  return (
    <section className="container-wide pt-16 md:pt-24 pb-20 md:pb-32">
      <div className="border-t border-separator pt-8 md:pt-12 grid gap-8 md:gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="plate-label reveal">{t.intro.label}</p>
        </div>

        <div className="md:col-span-8">
          <p className="max-w-3xl text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.12] tracking-tight reveal">
            {t.intro.lead}
            <span className="text-accent">.</span>
          </p>

          <div className="mt-10 md:mt-14 grid gap-8 md:gap-12 md:grid-cols-2">
            <p className="text-base md:text-lg leading-relaxed text-foreground/80 reveal reveal-delay-1">
              {t.intro.body1}
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground/60 reveal reveal-delay-2">
              {t.intro.body2}
            </p>
          </div>

          <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-3 md:gap-4 reveal reveal-delay-2">
            <a
              href="#work"
              className="inline-block bg-ink px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-ink-foreground transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              {t.hero.ctaWork}
            </a>
            <a
              href="#filming-location"
              className="inline-block border border-ink/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              {t.hero.ctaLocation}
            </a>
            <a
              href="#guesthouse"
              className="inline-block border border-ink/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              {t.hero.ctaGuesthouse}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
