import { useLang } from "@/i18n/LanguageProvider";

import exterior from "@/assets/house/exterior-frontal.jpg";

export function HeroSection() {
  const { t } = useLang();

  return (
    <section className="pt-2">
      {/* One full-bleed visual that states, in one sentence, what this is. */}
      <div className="relative w-full overflow-hidden animate-hero-zoom">
        {/* Full photo, natural ratio on every screen — no crop. */}
        <img
          src={exterior}
          alt={t.figures.houseAlt}
          width={1334}
          height={1194}
          fetchPriority="high"
          decoding="async"
          className="block h-auto w-full"
        />

        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10"
        />

        <div className="absolute inset-x-0 bottom-0">
          <div className="container-wide pb-8 md:pb-14">
            <h1 className="max-w-4xl text-ink-foreground animate-fade-in-up">
              <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                {t.hero.overlayLine1}
              </span>
              <span className="mt-2 md:mt-3 block text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight text-ink-foreground/90">
                {t.hero.overlayLine2}
              </span>
            </h1>

            <div className="mt-7 md:mt-10 flex flex-wrap items-center gap-3 md:gap-4 animate-fade-in">
              <a
                href="#work"
                className="inline-block bg-ink-foreground px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                {t.hero.ctaWork}
              </a>
              <a
                href="#filming-location"
                className="inline-block border border-ink-foreground/60 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-ink-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                {t.hero.ctaLocation}
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
