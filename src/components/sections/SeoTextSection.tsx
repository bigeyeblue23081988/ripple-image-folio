import { useLang } from "@/i18n/LanguageProvider";

/**
 * SEO-rich services block.
 * Gives Google plain-text context about documentary filmmaking,
 * video production, branded content and storytelling — without
 * changing the visual rhythm of the page.
 */
export function SeoTextSection() {
  const { t } = useLang();

  return (
    <section
      id="services"
      className="container-wide py-28 md:py-40 scroll-mt-24"
      aria-label={t.seo.ariaLabel}
    >
      <div className="md:grid md:grid-cols-12 gap-y-10">
        <div className="md:col-start-2 md:col-span-10">
          <p className="plate-label mb-8 reveal">{t.seo.label}</p>
          <h2 className="statement text-3xl md:text-5xl lg:text-6xl reveal">
            <strong>
              {t.seo.title}
              <span className="text-accent">.</span>
            </strong>
          </h2>
        </div>

        <div className="md:col-start-2 md:col-span-10 mt-8 md:mt-14 grid md:grid-cols-3 gap-10 md:gap-12 reveal reveal-delay-1">
          {t.seo.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-base md:text-lg leading-relaxed text-foreground/90"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="md:col-start-2 md:col-span-10 mt-10 md:mt-16 reveal reveal-delay-2">
          <dl className="flex flex-wrap gap-x-6 gap-y-3 border-t border-separator pt-6">
            {t.seo.keywords.map((keyword) => (
              <div key={keyword}>
                <dt className="sr-only">{keyword}</dt>
                <dd className="text-xs uppercase tracking-[0.14em] text-foreground/50">
                  {keyword}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
