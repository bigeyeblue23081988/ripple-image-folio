import { useLang } from "@/i18n/LanguageProvider";

import mariekePortrait from "@/assets/marieke-dermul.jpg";

/**
 * The human side: who leads Bigeye Blue, in her own words — with her portrait.
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

          <div className="mt-12 md:mt-16 max-w-md">
            <figure className="group">
              <div className="overflow-hidden bg-secondary">
                <img
                  src={mariekePortrait}
                  alt={t.about.photoAlt}
                  width={828}
                  height={1080}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                />
              </div>
            </figure>
          </div>
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
