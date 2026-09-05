import { useLang } from "@/i18n/LanguageProvider";

const INTERIOR_IMAGE_URL =
  "https://ripple-image-folio.lovable.app/__l5e/assets-v1/316e24a5-ec67-439c-b8a2-7c22ffc6cf9c/bigeye-blue-interior.webp";

export function HeroSection() {
  const { t } = useLang();

  return (
    <section className="pt-2">
      <div className="relative h-[72svh] min-h-[520px] max-h-[760px] w-full overflow-hidden animate-hero-zoom sm:min-h-[580px] md:h-[min(70vh,720px)] md:min-h-[560px]">
        <img
          src={INTERIOR_IMAGE_URL}
          alt={t.figures.hallAlt}
          width={1920}
          height={1288}
          fetchPriority="high"
          decoding="async"
          className="block h-full w-full object-cover object-[62%_50%] sm:object-[58%_50%] lg:object-center"
        />

        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent"
        />

        <div className="absolute inset-x-0 bottom-0">
          <div className="container-wide pb-7 sm:pb-10 md:pb-14">
            <h1 className="max-w-[19rem] sm:max-w-md md:max-w-xl lg:max-w-3xl text-ink-foreground animate-fade-in-up">
              <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                {t.hero.overlayLine1}
              </span>
              <span className="mt-2 md:mt-3 block max-w-3xl text-lg sm:text-2xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight text-ink-foreground/90">
                {t.hero.overlayLine2}
              </span>
            </h1>

            <div className="mt-5 sm:mt-7 md:mt-10 flex flex-wrap items-center gap-3 md:gap-4 animate-fade-in">
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
