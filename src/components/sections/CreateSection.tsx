import { useLang } from "@/i18n/LanguageProvider";

export function CreateSection() {
  const { t } = useLang();

  return (
    <section
      id="what-we-create"
      className="container-wide pb-28 md:pb-44 scroll-mt-24"
    >
      <div className="md:grid md:grid-cols-12">
        <div className="md:col-start-3 md:col-span-8">
          <p className="plate-label mb-8 reveal">{t.create.label}</p>
          <h2 className="statement reveal">
            <strong>
              {t.create.titleStrong}
              <span className="text-accent">.</span>
            </strong>
            <span className="font-normal">{t.create.titleLight}</span>
          </h2>
          <p className="body-copy mt-8 max-w-xl reveal reveal-delay-1">
            {t.create.body}
          </p>
        </div>
      </div>
    </section>
  );
}
