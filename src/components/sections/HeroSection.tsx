import { Figure } from "@/components/Figure";
import { useLang } from "@/i18n/LanguageProvider";

import exterior from "@/assets/house/exterior.jpg";
import hallway from "@/assets/house/hallway.jpg";

export function HeroSection() {
  const { t } = useLang();

  return (
    <section className="container-wide pt-2 pb-28 md:pb-44">
      <div className="md:grid md:grid-cols-12 md:gap-x-8">
        <div className="relative md:col-start-1 md:col-span-8 md:row-start-1">
          <Figure
            src={exterior}
            alt={t.figures.houseAlt}
            width={900}
            height={491}
            index="01"
            caption={t.figures.houseCaption}
            sub={t.figures.houseSub}
            priority
          />
        </div>

        <div className="md:col-start-10 md:col-span-3 md:row-start-1 self-center mt-10 md:mt-0">
          <h1 className="statement">
            <strong>
              <span className="hero-mask">
                <span className="hero-line">{t.hero.line1}</span>
              </span>
              <span className="hero-mask">
                <span className="hero-line hero-line--2">
                  {t.hero.line2}
                  <span className="text-accent">.</span>
                </span>
              </span>
            </strong>
            <span className="font-normal hero-mask">
              <span className="hero-line hero-line--2">{t.hero.sub}</span>
            </span>
          </h1>

          <p className="mt-5 text-sm md:text-base leading-relaxed text-foreground/70">
            {t.hero.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#work" className="btn-solid">
              {t.hero.ctaWork}
            </a>
            <a href="#contact" className="btn-quiet">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <Figure
          src={hallway}
          alt={t.figures.hallAlt}
          width={1920}
          height={1279}
          index="02"
          caption={t.figures.hallCaption}
          className="md:col-start-8 md:col-span-5 md:row-start-2 mt-12 md:mt-20 reveal"
        />
      </div>
    </section>
  );
}
