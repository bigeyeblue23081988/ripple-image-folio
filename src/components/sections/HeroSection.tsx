import { Figure } from "@/components/Figure";
import { useLang } from "@/i18n/LanguageProvider";

import exterior from "@/assets/house/exterior.jpg";
import hallway from "@/assets/house/hallway.jpg";

export function HeroSection() {
  const { t } = useLang();

  return (
    <section className="pt-2 pb-24 md:pb-36">
      {/* One full-bleed visual that states, in one sentence, what this is. */}
      <div className="relative w-full overflow-hidden animate-hero-zoom">
        <img
          src={exterior}
          alt={t.figures.houseAlt}
          width={1920}
          height={1048}
          fetchPriority="high"
          decoding="async"
          className="h-[68vh] min-h-[420px] md:h-[78vh] w-full object-cover"
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

      <div className="container-wide mt-12 md:mt-20 md:grid md:grid-cols-12 md:gap-x-8">
        <p className="md:col-start-1 md:col-span-5 text-base md:text-lg leading-relaxed text-foreground/80 reveal">
          {t.hero.tagline}
        </p>

        <Figure
          src={hallway}
          alt={t.figures.hallAlt}
          width={1920}
          height={1279}
          index="01"
          caption={t.figures.hallCaption}
          className="md:col-start-7 md:col-span-6 mt-10 md:mt-0 reveal reveal-delay-1"
        />
      </div>
    </section>
  );
}
