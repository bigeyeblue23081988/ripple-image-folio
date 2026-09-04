import { useLang } from "@/i18n/LanguageProvider";

export function CreateSection() {
  const { t } = useLang();

  return (
    <section
      id="what-we-create"
      className="container-wide pb-28 md:pb-44 scroll-mt-24"
    >
      <div className="md:grid md:grid-cols-12">
        <div className="md:col-start-2 md:col-span-10">
          <p className="plate-label mb-8 reveal">{t.create.label}</p>
          <h2 className="statement text-3xl md:text-5xl lg:text-6xl reveal">
            <strong>
              {t.create.titleStrong}
              <span className="text-accent">.</span>
            </strong>
            <span className="font-normal">{t.create.titleLight}</span>
          </h2>
          <p className="mt-10 max-w-3xl text-lg md:text-2xl leading-[1.45] tracking-tight text-foreground reveal reveal-delay-1">
            {t.create.body}
          </p>
        </div>
      </div>
    </section>
  );
}
