import { useLang } from "@/i18n/LanguageProvider";

export function CreateSection() {
  const { t } = useLang();

  return (
    <section
      id="what-we-create"
      className="container-wide pb-28 md:pb-44 scroll-mt-24"
    >
      <div className="md:grid md:grid-cols-12 gap-y-14">
        <div className="md:col-start-2 md:col-span-10">
          <p className="plate-label mb-8 reveal">{t.create.label}</p>
          <h2 className="statement text-4xl md:text-6xl lg:text-7xl reveal">
            <strong>
              {t.create.titleStrong}
              <span className="text-accent">.</span>
            </strong>
          </h2>
        </div>

        <div className="md:col-start-2 md:col-span-10 mt-10 md:mt-16">
          <p className="text-2xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight font-semibold text-foreground reveal">
            {t.create.lead}
          </p>
        </div>

        <div className="md:col-start-2 md:col-span-10 mt-10 md:mt-20">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-14">
            {t.create.blocks.map((block, i) => (
              <div
                key={block.label}
                className={`reveal ${i === 1 ? "reveal-delay-1" : i === 2 ? "reveal-delay-2" : ""}`}
              >
                <p className="text-xs uppercase tracking-[0.12em] text-accent font-semibold mb-4">
                  {block.label}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {block.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
