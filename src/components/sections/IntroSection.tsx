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
          <p className="max-w-3xl text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight reveal">
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
        </div>
      </div>
    </section>
  );
}
