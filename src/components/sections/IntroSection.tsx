import { useLang } from "@/i18n/LanguageProvider";

export function IntroSection() {
  const { t } = useLang();

  return (
    <section className="container-wide pt-10 md:pt-16 pb-12 md:pb-20">
      <p className="max-w-4xl text-2xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight font-semibold reveal">
        {t.intro.lead}
      </p>
    </section>
  );
}
